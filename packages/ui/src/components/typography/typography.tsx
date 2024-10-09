import clsx from 'clsx';
import type React from 'react';

import styles from './index.module.scss';

import type {
  TypographyColor,
  TypographyTextAlign,
  TypographyTextLevel,
} from '@/components/typography';

type ElementType = React.ElementType;

type PropsOf<T extends ElementType> = React.ComponentPropsWithoutRef<T>;

export interface TypographyOwnProps<T extends ElementType> {
  as?: T;
  level: TypographyTextLevel;
  textAlign?: TypographyTextAlign;
  color?: TypographyColor;
  strong?: boolean;
  /** true일 경우 Text가 italic 됩니다. */
  italic?: boolean;
  /** true일 경우 Text가 underline 됩니다. */
  underline?: boolean;
  children: React.ReactNode;
}

export type TypographyProps<T extends ElementType> = TypographyOwnProps<T> &
  Omit<PropsOf<T>, keyof TypographyOwnProps<T>>;

export const Typography = <T extends ElementType = 'span'>({
  as,
  children,
  level,
  textAlign,
  strong = false,
  italic = false,
  underline = false,
  color,
  ...rest
}: TypographyProps<T>) => {
  const Component = as || 'span';

  return (
    <Component
      className={clsx(
        styles[level],
        textAlign && styles[`textAlign${textAlign}`],
        strong && styles.strong,
        italic && styles.italic,
        underline && styles.underline,
        color && styles[`text${color}`]
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
