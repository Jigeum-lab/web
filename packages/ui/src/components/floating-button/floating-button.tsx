import clsx from 'clsx';
import type React from 'react';
import { forwardRef } from 'react';

import { Icon } from '../icon';
import styles from './index.module.scss';

import { Typography } from '@/components';
import type { IconTypes } from '@/components/icon/icon.type';

export interface FloatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  iconName: IconTypes;
  color?: 'blue' | 'white';
  size?: 'large' | 'medium';
  interact?: 'normal' | 'hovered' | 'pressed';
}

const getColor = (_color: FloatingButtonProps['color']) => {
  switch (_color) {
    case 'blue':
      return styles.blue;
    case 'white':
      return styles.white;
    default:
      return styles.blue;
  }
};

const getSize = (_size: FloatingButtonProps['size']) => {
  switch (_size) {
    case 'large':
      return styles.sizeLarge;
    case 'medium':
      return styles.sizeMedium;
    default:
      return styles.sizeLarge;
  }
};

const getInteract = (_interact: FloatingButtonProps['interact']) => {
  switch (_interact) {
    case 'normal':
      return styles.interactNomal;
    case 'hovered':
      return styles.interactHovered;
    case 'pressed':
      return styles.interactPressed;
    default:
      return styles.interactNomal;
  }
};

const getTypographyLevel = (_size: FloatingButtonProps['size']) => {
  switch (_size) {
    case 'large':
      return 'body1Normal';
    case 'medium':
      return 'label1Normal';
    default:
      return 'body1Normal';
  }
};

export const FloatingButton = forwardRef<
  HTMLButtonElement,
  FloatingButtonProps
>(
  (
    {
      text = '',
      iconName,
      color,
      size,
      interact,
      className,
      ...rest
    }: FloatingButtonProps,
    ref
  ) => {
    return (
      <>
        <button
          ref={ref} // ref 연결
          className={clsx(
            styles.floatingButton,
            getColor(color),
            getSize(size),
            getInteract(interact),
            className
          )}
          {...rest}
        >
          <div className={styles.iconWrapper}>
            <Icon className={clsx(styles.icon)} name={iconName} />
          </div>
        </button>
        <div className={styles.textWrapper}>
          <Typography level={getTypographyLevel(size)}>{text}</Typography>
        </div>
      </>
    );
  }
);

FloatingButton.displayName = 'FloatingButton'; // forwardRef 사용 시 컴포넌트 이름 설정 필요
