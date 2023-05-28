import { Body, Request, Controller, Post, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { RtGuard } from './guards';
import {Tokens} from './types'

@Controller('auth')
export class AuthController {
  constructor(private authService:AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto){
    return this.authService.signIn(signInDto.email, signInDto.password)
  }

  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(@Request() req): Promise<Tokens> {
    const user = req.user
    return this.authService.refreshTokens(user.sub, user.refreshToken);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @UseGuards(RtGuard)
  logout(@Request() req): Promise<boolean> {
    const user = req.user.sub
    return this.authService.logout(user);
  }
}
