'use client';
import { Button } from '@repo/ui';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import type { SwiperProps } from 'swiper/react';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './index.module.scss';

interface Props extends SwiperProps {
  hasNavigation?: boolean;
  navigationSpacing?: number;
}

const SwiperContainer = ({
  hasNavigation = false,
  navigationSpacing = 0,
  modules = [],
  children,
  ...props
}: PropsWithChildren<Props>) => {
  const defaultOption: Pick<SwiperProps, 'slidesPerView' | 'grabCursor'> = {
    slidesPerView: 'auto',
    grabCursor: true,
  };

  const option = { ...defaultOption, ...props };

  if (!hasNavigation) {
    return (
      <Swiper className={styles.swiper} modules={modules} {...option}>
        {children}
      </Swiper>
    );
  }

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <Swiper
      className={styles.swiper}
      navigation={{ prevEl, nextEl }}
      modules={[Navigation, ...modules]}
      {...option}
    >
      <Button
        ref={setPrevEl}
        size={'small'}
        className={clsx(
          styles.swiper__actionButton,
          styles.swiper__actionButtonPrev
        )}
      >
        prev
      </Button>
      <Button
        ref={setNextEl}
        size={'small'}
        className={clsx(
          styles.swiper__actionButton,
          styles.swiper__actionButtonNext
        )}
      >
        next
      </Button>
      {children}
    </Swiper>
  );
};

export default SwiperContainer;
