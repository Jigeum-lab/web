'use client';

import { Button, Icon, Typography } from '@repo/ui';

import styles from './index.module.scss';

const HeaderView = () => {
  const MenuItem = () => {
    return (
      <div className={styles.header__menu__list}>
        <Icon name={'IcThumbnail'} />
        <Typography level={'body1Normal'}>프로젝트</Typography>
      </div>
    );
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__menu}>
        <Icon name={'IcLogo'} />
        <MenuItem />
        <MenuItem />
      </div>
      <div className={styles.header__right}>
        <Icon name={'IcSearch'} fill={'#8E8E93'} />
        <Icon name={'IcBell'} fill={'#8E8E93'} />
        avatar
        <Button variant={'outlined'} size={'small'}>
          등록하기
        </Button>
      </div>
    </div>
  );
};

export default HeaderView;
