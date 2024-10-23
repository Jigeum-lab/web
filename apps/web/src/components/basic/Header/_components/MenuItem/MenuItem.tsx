'use client';
import { Icon, type IconTypes, Typography } from '@repo/ui'; // assuming you have some styles defined
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './index.module.scss';

export interface MenuItemProps {
  icon?: IconTypes;
  name: string;
  href: string;
}
export const MenuItem = ({ icon, name, href }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref={true}>
      <div className={styles.menu__list}>
        {icon && <Icon name={icon} className={isActive ? styles.active : ''} />}
        <Typography
          level={'body1Normal'}
          className={isActive ? styles.active : ''}
        >
          {name}
        </Typography>
      </div>
    </Link>
  );
};
