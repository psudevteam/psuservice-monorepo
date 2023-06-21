import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.services';
import { User, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';
import { TRegisterResponse } from '@/types';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async profile(
    email: string
  ): Promise<Omit<User, 'password' | 'refresh'> | undefined> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async create(data: Prisma.UserCreateInput): Promise<TRegisterResponse> {
    const exist = await this.prisma.user.findFirst({
      where: {
        email: data.email.toLowerCase(),
      },
    });
    if (exist) {
      throw new HttpException('User Already Exist', HttpStatus.CONFLICT);
    }
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(data.password, salt);
    return this.prisma.user.create({
      data: {
        ...data,
        email: data.email.toLowerCase(),
        password: hashed,
      },
    });
  }
}
