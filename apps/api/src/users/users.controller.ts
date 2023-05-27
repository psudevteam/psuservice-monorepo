import { Body, Controller, Post, HttpCode, HttpStatus,HttpException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from './users.service';

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

}
