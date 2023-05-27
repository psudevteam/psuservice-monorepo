import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
   constructor(
     private usersService: UsersService,
     private jwtService: JwtService
   ) {}

  async signIn(email: string, pass: string): Promise<any> {
    // Todo Implement Encryption
    const user = await this.usersService.findOne(email);
    // Replace this with bcrypt or argon
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = {sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
