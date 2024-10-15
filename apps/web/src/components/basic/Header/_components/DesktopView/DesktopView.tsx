import { Button, Icon } from '@repo/ui';
import Link from 'next/link';

import styles from './index.module.scss';

import { MenuItem } from '@/components/basic/Header/_components';
import { menuList } from '@/components/basic/Header/data';

const DesktopView = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <Link href={'/'} title={'Phase On'}>
          <Icon name={'IcLogo'} className={styles.icon__logo} />
          <h1 className={'sr-only'}>Phase On</h1>
        </Link>
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

export default DesktopView;
