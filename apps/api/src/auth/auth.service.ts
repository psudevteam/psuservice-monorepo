import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { TJwtPayload, TLoginResponse, TToken } from '@/types';
import { PrismaService } from '../services/prisma/prisma.services';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  async signIn(email: string, pass: string): Promise<TLoginResponse> {
    const user = await this.usersService.findOne(email.toLowerCase());
    if (!user) {
      throw new UnauthorizedException();
    }

    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const token = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, token.refresh_token);

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }

  async logout(userId: number): Promise<boolean> {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        refresh: {
          not: null,
        },
      },
      data: {
        refresh: null,
      },
    });

    return true;
  }

  async refreshTokens(userId: number, rt: string): Promise<TToken> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user || !user.refresh) throw new ForbiddenException('Access Denied');

    const rtMatches = await bcrypt.compare(rt, user.refresh);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async updateRtHash(userId: number, rt: string): Promise<void> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(rt, salt);
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refresh: hash,
      },
    });
  }

  async getTokens(userId: number, email: string): Promise<TToken> {
    const jwtPayload: TJwtPayload = {
      sub: userId,
      email: email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_SECRET,
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_SECRET,
        expiresIn: '7d',
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
