'use client';

import { OverlayProvider } from '@toss/use-overlay';
import type { Session } from 'next-auth';
import type { PropsWithChildren } from 'react';

import AuthContext from '@/context/AuthContext';
import ReactQueryContext from '@/context/ReactQueryContext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props extends PropsWithChildren {
  session: Session | null;
}

const ClientContext: React.FC<Props> = async ({ session, children }) => {
  return (
    <OverlayProvider>
      <AuthContext session={session}>
        <ReactQueryContext>{children}</ReactQueryContext>
      </AuthContext>
    </OverlayProvider>
  );
};

export default ClientContext;
