import clsx from 'clsx';
import type React from 'react';

import styles from './index.module.scss';
import type { IconProps } from '../icon';
import { Icon } from '../icon';

interface AvatarProps extends Omit<IconProps<'svg'>, 'name'> {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  containerStyles?: React.CSSProperties;
  containerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
}

export const Avatar = ({
  size,
  containerStyles,
  containerClassName,
  ...rest
}: AvatarProps) => {
  const getSize = (size: AvatarProps['size']) => {
    switch (size) {
      case 'xs':
        return styles.xs;
      case 's':
        return styles.s;
      case 'l':
        return styles.l;
      case 'xl':
        return styles.xl;
      case 'xxl':
        return styles.xxl;
      default:
        return styles.m;
    }
  };

  const getSizeIcon = (size: AvatarProps['size']) => {
    switch (size) {
      case 'xs':
        return 12;
      case 's':
        return 16;
      case 'm':
        return 20;
      case 'l':
        return 24;
      case 'xl':
        return 28;
      case 'xxl':
        return 32;
      default:
        return 20;
    }
  };

  return (
    <div
      className={clsx(styles.container, getSize(size), containerClassName)}
      style={containerStyles}
    >
      <Icon
        {...rest}
        name="IcPersonFill"
        fill="#ffffff"
        width={getSizeIcon(size)}
        height={getSizeIcon(size)}
      />
    </div>
  );
};
