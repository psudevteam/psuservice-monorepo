
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  // Gets only validated if it's part of the request's body
  @IsString()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public password: string;


}
