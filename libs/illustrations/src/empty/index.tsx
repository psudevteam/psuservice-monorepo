import Image from 'next/dist/client/image';
import { FC, ReactElement } from 'react';
import Ill from './index.svg';

export const EmptyIll: FC = (): ReactElement => {
  return (
    <Image
      width={400}
      height={400}
      src={Ill}
      className="w-full fixed"
      alt="Illustration Empty State"
    />
  );
};
