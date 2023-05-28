import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy, RtStrategy } from './strategies';
import { PrismaService } from '../services/prisma/prisma.services';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({})
  ],
  providers: [AuthService, JwtStrategy,PrismaService, RtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
