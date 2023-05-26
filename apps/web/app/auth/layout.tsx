import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AuthLayout: FC<Props> = (props) => {
  return (
    <html>
      <body>
        <section className="bg-gray-50 w-full dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {props.children}
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
};

export default AuthLayout;
