import clsx from 'clsx';

import styles from './index.module.scss';
import { Icon } from '../icon';

interface AvatarProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}

export const Avatar = ({ size }: AvatarProps) => {
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
    <div className={clsx(styles.container, getSize(size))}>
      <Icon
        name="IcPersonFill"
        fill="#ffffff"
        width={getSizeIcon(size)}
        height={getSizeIcon(size)}
      />
    </div>
  );
};
