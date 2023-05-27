import { TextField } from '../../../components/molecules/inputs/text';
import Link from 'next/link';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
  const { control } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <Fragment>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Silahkan Masuk
      </h1>

      <form className="space-y-4 md:space-y-6" action="#">
        <TextField type={'email'} control={control} name={'email'} />
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
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
}
