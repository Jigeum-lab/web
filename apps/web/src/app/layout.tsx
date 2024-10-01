import '@/styles/global.scss';
import '@repo/ui/style.css';
import type { Metadata } from 'next';

import ClientContext from '@/context/ClientContext';
import { getUserServerSession } from '@/utils/session/getUserServerSession';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const { session } = await getUserServerSession();
  return (
    <html lang="ko">
      <body>
        <ClientContext session={session}>{children}</ClientContext>
      </body>
    </html>
  );
};

export default RootLayout;
