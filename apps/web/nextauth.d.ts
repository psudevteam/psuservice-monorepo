// nextauth.d.ts
import { DefaultUser } from 'next-auth';
import { TToken } from '@/types';

interface IUser extends DefaultUser {
  token?: TToken;
}

declare module 'next-auth' {
  interface Session {
    user?: IUser;
  }
}
