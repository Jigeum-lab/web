'use client';
import { FloatingButton } from '@repo/ui';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import type { SwiperProps } from 'swiper/react';
import { Swiper } from 'swiper/react';

import styles from './index.module.scss';

interface Props extends SwiperProps {
  hasNavigation?: boolean;
}

const SwiperContainer = ({
  hasNavigation = false,
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
      modules={[Navigation, Pagination, Scrollbar, A11y, ...modules]}
      {...option}
    >
      <FloatingButton
        ref={setPrevEl}
        size={'medium'}
        color={'white'}
        iconName={'IcChevronLeft'}
        className={clsx(
          styles.swiper__actionButton,
          styles['swiper__actionButton--prev']
        )}
      />
      <FloatingButton
        ref={setNextEl}
        size={'medium'}
        color={'white'}
        iconName={'IcChevronRight'}
        className={clsx(
          styles.swiper__actionButton,
          styles['swiper__actionButton--next']
        )}
      />
      {children}
    </Swiper>
  );
};

export default SwiperContainer;
