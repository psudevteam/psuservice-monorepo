import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.services';
import {  User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email:string): Promise<User|undefined>{
     return this.prisma.user.findUnique({
       where: {
         email
       }
     })
   }
}
