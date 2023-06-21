import {
  TRegisterResponse,
  TRegisterRequest,
  TMetaErrorResponse,
} from '@/types';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { registerRequest } from './api';

export const useRegister = (): UseMutationResult<
  TRegisterResponse,
  TMetaErrorResponse,
  TRegisterRequest,
  unknown
> =>
  useMutation({
    mutationKey: ['register'],
    mutationFn: async (payload) => await registerRequest(payload),
  });
