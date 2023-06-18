'use client';
import { RecoilRoot } from 'recoil';
import { FC, PropsWithChildren, ReactElement } from 'react';

export const RecoilProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => <RecoilRoot>{children}</RecoilRoot>;
