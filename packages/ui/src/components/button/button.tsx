import clsx from 'clsx';
import type React from 'react';

import styles from './index.module.scss';

import {
  Typography,
  type TypographyColor,
  type TypographyTextLevel,
} from '@/components';
import type { ButtonVariant } from '@/components/button';
import { capitalizeFirstLetter } from '@/uitls';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small' | 'xsmall';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: ButtonVariant;
  color?: TypographyColor;
  /** true 인 경우 좌우 공간을 모두 차지합니다. */
  fullWidth?: boolean;
  /** Button 요소의 type을 지정합니다. */
  type?: 'submit' | 'button' | 'reset';
}

export const Button = ({
  children,
  className,
  size = 'small',
  leftIcon,
  rightIcon,
  variant,
  fullWidth = false,
  color,
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
      case 'xsmall':
        return styles.sizeXSmall;
      default:
        return styles.sizeLarge;
    }
  };

  const getTypographyLevel = (
    _size: ButtonProps['size']
  ): TypographyTextLevel => {
    switch (_size) {
      case 'large':
        return 'heading1';
      case 'medium':
        return 'body1Normal';
      case 'small':
        return 'label1Normal';
      case 'xsmall':
        return 'caption2';
      default:
        return 'heading1';
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
      <div
        className={clsx(
          styles.inner,
          styles[`inner${capitalizeFirstLetter(size as string)}`]
        )}
      >
        {leftIcon && <div className={styles.icon}>{leftIcon}</div>}
        <Typography
          level={getTypographyLevel(size)}
          strong={true}
          color={color}
        >
          {children}
        </Typography>
        {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
      </div>
    </button>
  );
};
