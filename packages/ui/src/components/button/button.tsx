import clsx from 'clsx';
import type React from 'react';

import type { ButtonVariant } from './button.type';
import styles from './index.module.scss';

import { Typography } from '@/components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  className,
  size,
  leftIcon,
  rightIcon,
  variant,
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

  return (
    <button
      className={clsx(
        styles.button,
        getVariant(variant),
        getSize(size),
        className
      )}
      {...rest}
    >
      <Typography>{children}</Typography>
    </button>
  );
};
