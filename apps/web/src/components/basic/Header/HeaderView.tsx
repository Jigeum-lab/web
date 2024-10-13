'use client';

import { Button, Icon } from '@repo/ui';

import { MenuItem } from './_components/MenuItem';
import { menuList } from './data';
import styles from './index.module.scss';

const HeaderView = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <Icon name={'IcLogo'} className={styles.icon__logo} />
        {menuList.map(({ icon, name }) => (
          <MenuItem key={name} name={name} icon={icon} />
        ))}
      </div>
      <div className={styles.header__right}>
        <Icon name={'IcSearch'} className={styles.icon} />
        <Icon name={'IcBell'} className={styles.icon} />
        <Icon name={'IcPerson'} className={styles.icon} />
        <Button
          variant={'outlined'}
          size={'small'}
          leftIcon={
            <Icon
              name={'IcWrite'}
              width={16}
              height={16}
              viewBox={'0 0 24 24'}
              className={styles.icon__button}
            />
          }
        >
          등록하기
        </Button>
      </div>
    </header>
  );
};

export default HeaderView;
