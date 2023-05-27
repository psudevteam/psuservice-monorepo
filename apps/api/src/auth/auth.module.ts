import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.ACCESS_SECRET,
      signOptions: {expiresIn: '60s'}
    })
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
