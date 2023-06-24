'use client';
import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const DashboardPage: NextPage = (): ReactElement => {
  const session = useSession();
  return <span>Ini Halaman Dashboard hallo {session?.data?.user?.name} </span>;
};

export default DashboardPage;
