'use client';
import { FC, Fragment, ReactElement } from 'react';
import { TextField } from '@/components';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export const LoginModule: FC = (): ReactElement => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    await signIn('login', {
      callbackUrl: '/dashboard',
      redirect: true,
      email: data.email,
      password: data.password,
    });
  });

  return (
    <Fragment>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Silahkan Masuk
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-2" action="#">
        <TextField
          type={'email'}
          label="Email"
          control={control}
          placeholder="Masukkan Email"
          name={'email'}
          variant="md"
        />
        <TextField
          type={'password'}
          label="Kata Sandi"
          control={control}
          placeholder="***********"
          name={'password'}
          variant="md"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Ingat saya
              </label>
            </div>
          </div>
          <Link
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Lupa kata sandi?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Masuk
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Belum punya akun?{' '}
          <Link
            href="/auth/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Daftar Disini
          </Link>
        </p>
      </form>
    </Fragment>
  );
};
