import clsx from 'clsx';
import type React from 'react';

import styles from './index.module.scss';

import {
  Typography,
  type TypographyColor,
  type TypographyTextLevel,
} from '@/components';

export interface BadgeProps {
  children: React.ReactNode;
  size?: 'xsmall' | 'medium' | 'small';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  color?: TypographyColor;
}

export const Badge = ({
  children,
  size,
  leftIcon,
  rightIcon,
  color,
  ...rest
}: BadgeProps) => {
  const getSize = (_size: BadgeProps['size']) => {
    switch (_size) {
      case 'medium':
        return styles.sizeMedium;
      case 'small':
        return styles.sizeSmall;
      case 'xsmall':
        return styles.sizeXSmall;
      default:
        return styles.sizeMedium;
    }
  };

  const getTypographyLevel = (
    _size: BadgeProps['size']
  ): TypographyTextLevel => {
    switch (_size) {
      case 'medium':
        return 'body1Normal';
      case 'small':
        return 'caption1';
      case 'xsmall':
        return 'caption2';
      default:
        return 'body1Normal';
    }
  };

  return (
    <div className={clsx(styles.filled, styles.inner, getSize(size))} {...rest}>
      {leftIcon && <div className={styles.icon}>{leftIcon}</div>}
      <Typography level={getTypographyLevel(size)} strong={true} color={color}>
        {children}
      </Typography>
      {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
    </div>
  );
};
