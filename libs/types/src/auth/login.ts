import { User } from 'next-auth';
import { TToken } from './token';

export type TLoginResponse = {
  id: string;
  token: TToken;
  user: User;
};

export type TLoginRequest = {
  email?: string;
  password?: string;
};
