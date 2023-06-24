'use client';
import { FC, ReactElement } from 'react';
import { TSidebarProps } from './types';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Avatar from 'react-avatar';

export const Sidebar: FC<TSidebarProps> = ({
  menus,
  userName,
}): ReactElement => {
  const router = usePathname();

  const activeLink = (val: string) =>
    clsx('h-auto hover:bg-blue-50 rounded-lg', {
      'font-[900] text-blue-400': router === val,
      'font-medium text-gray-600': router !== val,
    });

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 bg-white left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <figure className="flex flex-col gap-y-3 p-4">
        <span className="font-semibold text-blue-400 text-2xl">
          PSU Service
        </span>
        <span className="bg-blue-400 items-center flex gap-x-3 p-2 rounded-md text-white">
          <Avatar
            className="w-[20px] h-[20px] rounded-full"
            size="30px"
            color="#97def7"
            name={userName}
          />
          {userName}
        </span>
      </figure>
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="gap-y-3 flex flex-col justify-center">
          {menus?.map((menu, key) => (
            <li
              onClick={menu.onClick}
              className={activeLink(menu?.link as string)}
              key={key}
            >
              {menu?.link ? (
                <Link
                  href={`${menu?.link}`}
                  className="flex gap-x-2 items-center p-2 h-auto rounded-lg"
                >
                  <div className={activeLink(menu?.link as string)}>
                    {menu.icon}
                  </div>
                  <span className="font-[500]">{menu.name}</span>
                </Link>
              ) : (
                <div className="flex cursor-pointer gap-x-2 items-center p-2 h-auto rounded-lg">
                  <div className={activeLink(menu?.link as string)}>
                    {menu.icon}
                  </div>
                  <span className="font-[500]">{menu.name}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
