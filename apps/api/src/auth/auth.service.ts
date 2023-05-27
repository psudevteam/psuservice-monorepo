import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
   constructor(private usersService: UsersService) {}

  async signIn(email: string, pass: string): Promise<any> {
    // Todo Implement Encryption
    const user = await this.usersService.findOne(email);
    // Replace this with bcrypt or argon
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    return result;
  }
}
