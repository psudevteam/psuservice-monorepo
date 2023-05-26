import { PropsWithChildren } from 'react';
import { Sidebar } from '../../components';
import { MdDashboard, MdSettings } from 'react-icons/md';

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

export default function DasboardLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <Sidebar menus={_sidebar_menu} />
        <main className="flex px-24 py-6 ml-[200px]">{children}</main>
      </body>
    </html>
  );
}
