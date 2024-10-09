import type React from 'react';

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
  color,
  ...rest
}: TypographyProps<T>) => {
  const Component = as || 'span';
  return <Component {...rest}>{children}</Component>;
};
