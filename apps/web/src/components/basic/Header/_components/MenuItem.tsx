import { Icon, type IconTypes, Typography } from '@repo/ui';

import styles from './index.module.scss';

export interface MenuItemProps {
  icon?: IconTypes;
  name: string;
}
export const MenuItem = ({ icon, name }: MenuItemProps) => {
  return (
    <div className={styles.menu__list}>
      {icon && <Icon name={icon} />}
      <Typography level={'body1Normal'}>{name}</Typography>
    </div>
  );
};
