'use client';
import { FC, ReactElement } from 'react';
import { TDashboardProps } from './types';
import Link from 'next/link';
import { MdChevronRight } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export const DashboardHead: FC<TDashboardProps> = (props): ReactElement => {
  const pathname = usePathname();
  const className = (path: string) =>
    clsx({
      'text-gray-500': pathname === path,
      'text-blue-500': pathname !== path,
    });
  return (
    <div className="flex flex-col gap-y-2 mt-[60px]">
      <h1 className="text-3xl text-gray-500 font-semibold">{props.title}</h1>
      <ul className="flex">
        {props.breadcrumbs.map((item, key) => (
          <li className="flex items-center" key={key}>
            {key > 0 && (
              <MdChevronRight size={20} className="mx-2 text-gray-500" />
            )}
            <Link className={className(item.link)} href={item.link} key={key}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
