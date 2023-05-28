import { Body, Controller, Post, HttpCode, HttpStatus, Get, Request, UseGuards } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService:UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() registerDto: RegisterDto){
    const result = this.userService.create(
      {
        email: registerDto.email,
        password: registerDto.password,
        name: registerDto.name
      }
    )

    return result
  }

  @UseGuards(JwtAuthGuard)
  @Get('detail')
  getDetail(@Request() req){
    const user = req.user
    return this.userService.profile(user.email)
  }

}
