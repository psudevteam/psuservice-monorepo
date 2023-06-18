import { TLoginResponse, TLoginRequest, TMetaErrorResponse } from '@/types';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { loginRequest } from './api';

export const useLogin = (): UseMutationResult<
  TLoginResponse,
  TMetaErrorResponse,
  TLoginRequest,
  unknown
> =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: async (payload) => await loginRequest(payload),
  });
