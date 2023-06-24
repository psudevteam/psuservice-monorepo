'use client';
import { PropsWithChildren } from 'react';
import { Navbar, Sidebar } from '@/components';
import { MdDashboard, MdLogout, MdSettings } from 'react-icons/md';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

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
  {
    name: 'Logout',
    icon: <MdLogout size={20} />,
    onClick: () =>
      signOut({
        redirect: true,
        callbackUrl: '/auth/login',
      }),
  },
];

export default function DasboardLayout({ children }: PropsWithChildren) {
  const session = useSession();
  return (
    <html>
      <body className="bg-gray-100 overflow-x-hidden">
        <main>
          <Navbar />
          <Sidebar
            userName={session?.data?.user?.name as string}
            menus={_sidebar_menu}
          />
          <section className="flex items-start h-auto justify-start px-24 py-6 ml-[200px]">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
