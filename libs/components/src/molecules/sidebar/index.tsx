'use client';
import { FC, ReactElement } from 'react';
import { TSidebarProps } from './types';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export const Sidebar: FC<TSidebarProps> = ({
  menus,
  userName,
}): ReactElement => {
  const router = usePathname();

  const activeLink = (val: string) =>
    clsx('h-auto rounded-lg font-medium', {
      'bg-green-400 hover:bg-green-300 text-white': router === val,
      'bg-gray-400 hover:bg-gray-300 text-gray-50': router !== val,
    });

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 border-2 shadow-sm left-0 z-40 w-64 h-screen bg-white transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <figure className="flex flex-col p-4">
        <span className="font-semibold text-blue-400 text-3xl">
          PSU Service
        </span>
        <span>{userName}</span>
      </figure>
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="gap-y-4 flex flex-col justify-center font-semibold">
          {menus?.map((menu, key) => (
            <li className={activeLink(menu.link)} key={key}>
              <Link
                href={menu.link}
                className="flex gap-x-2 items-center p-3 h-auto rounded-lg"
              >
                <div className={activeLink(menu.link)}>{menu.icon}</div>
                <span className="font-[500]">{menu.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
