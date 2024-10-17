import { useEffect, useState } from 'react';

type ScreenSize = 'desktop' | 'mobile';
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('mobile');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setScreenSize('desktop');
      } else {
        setScreenSize('mobile');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 크기 설정

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};
