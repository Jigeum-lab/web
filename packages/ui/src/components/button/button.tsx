import clsx from 'clsx';
import type React from 'react';

import styles from './index.module.scss';

import { Typography, type TypographyTextLevel } from '@/components';
import type { ButtonVariant } from '@/components/button';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: ButtonVariant;
  /** true 인 경우 좌우 공간을 모두 차지합니다. */
  fullWidth?: boolean;
  /** Button 요소의 type을 지정합니다. */
  type?: 'submit' | 'button' | 'reset';
}

export const Button = ({
  children,
  className,
  size,
  leftIcon,
  rightIcon,
  variant,
  fullWidth = false,
  type = 'button',
  ...rest
}: ButtonProps) => {
  const getVariant = (_variant: ButtonProps['variant']) => {
    switch (_variant) {
      case 'filled':
        return styles.filled;
      case 'text':
        return styles.text;
      case 'outlined':
        return styles.outlined;
      default:
        return styles.filled;
    }
  };

  const getSize = (_size: ButtonProps['size']) => {
    switch (_size) {
      case 'large':
        return styles.sizeLarge;
      case 'medium':
        return styles.sizeMedium;
      case 'small':
        return styles.sizeSmall;
      default:
        return styles.sizeLarge;
    }
  };

  const getTypographyLevel = (
    _size: ButtonProps['size']
  ): TypographyTextLevel => {
    switch (_size) {
      case 'large':
        return 'heading-1';
      case 'medium':
        return 'body-1-normal';
      case 'small':
        return 'label-1-normal';
      default:
        return 'heading-1';
    }
  };

  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        getVariant(variant),
        getSize(size),
        fullWidth && styles.fullWidth,
        className
      )}
      {...rest}
    >
      <div className={styles.inner}>
        {leftIcon && <div className={styles.icon}>{leftIcon}</div>}
        <Typography level={getTypographyLevel(size)} strong={true}>
          {children}
        </Typography>
        {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
      </div>
    </button>
  );
};
