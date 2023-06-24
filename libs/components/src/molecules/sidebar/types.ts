import { ReactNode } from 'react';

export type TSidebarProps = {
  userName?: string;
  menus?: Array<{
    name: string;
    link: string;
    icon: ReactNode | string;
  }>;
};
