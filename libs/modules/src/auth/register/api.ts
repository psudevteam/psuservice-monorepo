import { api } from '@/services';
import { TRegisterResponse, TRegisterRequest } from '@/types';

export const registerRequest = async (
  payload: TRegisterRequest
): Promise<TRegisterResponse> => {
  const { data } = await api.post('/users/register', payload);
  return data;
};
