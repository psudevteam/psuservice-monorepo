'use client';
import { PropsWithChildren } from 'react';
import { Sidebar } from '@/components';
import { MdDashboard, MdSettings } from 'react-icons/md';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const _sidebar_menu = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: <MdDashboard size={20} />,
  },
  {
    name: 'Service Laptop',
    link: '/dashboard/service-laptop',
    icon: <MdSettings size={20} />,
  },
];

export default async function DasboardLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <body>
        <Sidebar
          userName={session?.user?.name as string}
          menus={_sidebar_menu}
        />
        <main className="flex px-24 py-6 ml-[200px]">{children}</main>
      </body>
    </html>
  );
}
