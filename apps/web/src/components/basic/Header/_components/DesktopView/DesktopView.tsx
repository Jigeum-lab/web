'use client';
import { Avatar, Button, Icon } from '@repo/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import styles from './index.module.scss';

import { MenuItem } from '@/components/basic/Header/_components';
import { menuList } from '@/components/basic/Header/data';
import { useClientSession } from '@/utils/session/useClientSession';

const DesktopView = () => {
  const { session } = useClientSession();
  const router = useRouter();
  const isLogin = session !== null;

  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <Link href={'/'} title={'Phase On'}>
          <Icon name={'IcLogo'} className={styles.icon__logo} />
          <h1 className={'sr-only'}>Phase On</h1>
        </Link>
        {menuList.map(({ icon, name, href }) => (
          <MenuItem key={name} name={name} icon={icon} href={href} />
        ))}
      </div>
      <div className={styles.header__right}>
        {isLogin ? (
          <>
            <Icon name={'IcSearch'} className={styles.icon} />
            <Icon name={'IcBell'} className={styles.icon} />
            <Avatar
              size={'s'}
              onClick={() => {
                router.push('/mypage');
              }}
            />
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
          </>
        ) : (
          <>
            <Icon name={'IcSearch'} className={styles.icon} />
            <Icon
              name={'IcSignIn'}
              className={styles.icon}
              onClick={() => {
                signIn('email-password-credentials', {
                  email: '123',
                  password: '123',
                });
              }}
            />
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
          </>
        )}
      </div>
    </header>
  );
};

export default DesktopView;
