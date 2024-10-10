import React from 'react';

import * as AssetComponent from './_components/assets';

import type { IconTypes } from '@/components/icon/icon.type';

type ElementType = React.ElementType;

type PropsOf<T extends ElementType> = React.ComponentPropsWithoutRef<T>;

export interface IconOwnProps<T extends ElementType> {
  as?: T;
  name: IconTypes; // 아이콘 이름
}

export type IconProps<T extends ElementType> = IconOwnProps<T> &
  Omit<PropsOf<T>, keyof IconOwnProps<T>>;

export const Icon = <T extends ElementType = 'svg'>({
  as,
  name,
  ...rest
}: IconProps<T>) => {
  // eslint-disable-next-line import/namespace
  return <>{React.createElement(AssetComponent[name], rest)}</>;
};
