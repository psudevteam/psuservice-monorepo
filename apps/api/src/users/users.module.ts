import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../services/prisma/prisma.services';

@Module({
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
