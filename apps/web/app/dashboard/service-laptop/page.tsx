import type { NextPage } from 'next';
import { Fragment, ReactElement } from 'react';
import { DashboardHead } from '@/modules';

const ServiceLaptopPage: NextPage = (): ReactElement => {
  return (
    <Fragment>
      <DashboardHead
        title="Service"
        navItems={[
          {
            link: '/',
            name: 'Home',
            icon: '/',
          },
        ]}
        breadcrumbs={[
          {
            link: '/',
            name: 'Home',
          },
          {
            link: '/dashboard',
            name: 'Dashboard',
          },
          {
            link: '/dashboard/service-laptop',
            name: 'Service Laptop',
          },
        ]}
      />
    </Fragment>
  );
};

export default ServiceLaptopPage;
