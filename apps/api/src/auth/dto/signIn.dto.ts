
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  // Sign in payload format
  @IsString()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public password: string;


}
