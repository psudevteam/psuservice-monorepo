import { TToken } from './token';

export type TLoginResponse = {
  token: TToken;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export type TLoginRequest = {
  email: string;
  password: string;
};
