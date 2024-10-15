'use client';

import { DesktopView, MobileView } from '@/components/basic/Header/_components';
import { useScreenSize } from '@/hooks/useScreenSize';

const HeaderView = () => {
  const screenSize = useScreenSize();

  return screenSize === 'desktop' ? <DesktopView /> : <MobileView />;
};

export default HeaderView;
