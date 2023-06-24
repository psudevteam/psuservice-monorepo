export type TDashboardProps = {
  title: string;
  navItems: Array<{
    name: string;
    link: string;
    icon: string;
  }>;
  breadcrumbs: Array<{
    name: string;
    link: string;
  }>;
};
