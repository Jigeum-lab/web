import type React from 'react';

export interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Typography = ({ children, ...rest }: TypographyProps) => {
  return <span {...rest}>{children}</span>;
};
