import { ReactElement } from 'react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';

const Home = async (): Promise<ReactElement> => {
  const session = await getServerSession(authOptions);
  return (
    <span className="text-red-500 font-bold text-6xl">
      Anjay Mabar {session?.user?.name}
    </span>
  );
};

export default Home;
