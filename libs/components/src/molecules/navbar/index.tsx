import { FC, ReactElement } from 'react';
import Avatar from 'react-avatar';
import { MdSearch } from 'react-icons/md';
import { useSession } from 'next-auth/react';

export const Navbar: FC = (): ReactElement => {
  const session = useSession();
  return (
    <header className="bg-white py-4 pl-[300px] pr-[30px] items-center flex w-full top-0 absolute overflow-hidden justify-between">
      <div className="flex relative">
        <MdSearch size={20} className="absolute left-3 top-3 text-gray-400" />
        <input
          className="bg-gray-100 py-2 pl-[40px] appearance-none text-gray-500 focus:outline-none rounded-lg w-[400px]"
          type="text"
        />
      </div>
      <Avatar
        className="rounded-full text-md"
        size="40px"
        name={session?.data?.user?.name as string}
        color="#58db7b"
      />
    </header>
  );
};
