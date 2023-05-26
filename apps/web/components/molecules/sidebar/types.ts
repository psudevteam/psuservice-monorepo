import { ReactNode } from 'react';

export type TSidebarProps = {
  menus?: Array<{
    name: string;
    link: string;
    icon: ReactNode | string;
  }>;
};
