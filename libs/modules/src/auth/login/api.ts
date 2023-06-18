import { api } from '@/services';
import { TLoginResponse, TLoginRequest } from '@/types';

export const loginRequest = async (
  payload: TLoginRequest
): Promise<TLoginResponse> => {
  const { data } = await api.post('/auth/login', payload);
  return data;
};
