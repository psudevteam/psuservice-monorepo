import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

export class SignInDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0,
  })
  @IsNotEmpty()
  public password: string;
}
