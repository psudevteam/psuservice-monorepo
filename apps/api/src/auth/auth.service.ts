import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
   constructor(
     private usersService: UsersService,
     private jwtService: JwtService
   ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email.toLowerCase());
    if(!user){
      throw new UnauthorizedException();
    }

    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = {sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
