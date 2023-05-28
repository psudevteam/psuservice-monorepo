import { JwtPayload } from '.';

export type rtPayload = JwtPayload & { refreshToken: string };
