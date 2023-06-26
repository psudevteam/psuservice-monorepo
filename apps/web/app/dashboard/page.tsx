'use client';
import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import { Fragment } from 'react';
import { useSession } from 'next-auth/react';
import { DashboardHead } from '@/modules';
import { EmptyIll } from '@/illustrations';

const DashboardPage: NextPage = (): ReactElement => {
  const session = useSession();
  return (
    <Fragment>
      <DashboardHead
        navItems={[
          {
            link: '/',
            name: 'Home',
            icon: '/',
          },
        ]}
        title={'Dashboard - Hi ' + session?.data?.user?.name}
        breadcrumbs={[
          {
            link: '/',
            name: 'Home',
          },
          {
            link: '/dashboard',
            name: 'Dashboard',
          },
        ]}
      />
      <EmptyIll />
    </Fragment>
  );
};

export default DashboardPage;
