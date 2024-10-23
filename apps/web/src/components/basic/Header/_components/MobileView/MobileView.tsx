'use client';
import { Avatar, Button, Icon, Input } from '@repo/ui';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

import styles from './index.module.scss';

import { MenuItem } from '@/components/basic/Header/_components';
import { menuList } from '@/components/basic/Header/data';
import { useBlockScrolling } from '@/hooks/useBlockScrolling';
import { useClientSession } from '@/utils/session/useClientSession';

const MobileView = () => {
  const { session } = useClientSession();
  const isLogin = session !== null;
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  useBlockScrolling(isOpen);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const Mobile = () => {
    return (
      <>
        <div className={styles.header__menu}>
          <Icon
            name={'IcMenu'}
            className={styles.header__menu__hamburger}
            onClick={toggleSidebar}
          />
          <Link href={'/'} title={'Phase On'}>
            <Icon
              name={'IcLogo'}
              className={styles.icon__logo}
              width={77}
              height={22}
              viewBox={'0 0 112 32'}
            />
            <h1 className={'sr-only'}>Phase On</h1>
          </Link>
        </div>
        <div className={styles.header__right}>
          <Button
            variant={'outlined'}
            size={'xsmall'}
            leftIcon={
              <Icon
                name={'IcWrite'}
                width={12}
                height={12}
                viewBox={'0 0 24 24'}
                className={styles.icon__button}
              />
            }
          >
            등록하기
          </Button>
          {isLogin ? (
            <>
              <Icon name={'IcBell'} className={styles.icon} />
              <Avatar
                size={'s'}
                onClick={() => {
                  router.push('/mypage');
                }}
              />
            </>
          ) : (
            <Icon
              name={'IcSignIn'}
              width={20}
              height={20}
              viewBox={'0 0 24 24'}
              className={styles.icon}
              onClick={() => {
                signIn('email-password-credentials', {
                  email: '123',
                  password: '123',
                });
              }}
            />
          )}
        </div>
      </>
    );
  };

  return (
    <header className={styles.header}>
      <Mobile />
      <div className={clsx(styles.sidebar, isOpen && styles.sidebar__open)}>
        <div className={styles.sidebar__header}>
          <Icon
            name={'IcClose'}
            width={20}
            height={20}
            viewBox={'0 0 24 24'}
            style={{
              marginRight: '12px',
            }}
            onClick={toggleSidebar}
          />
          <Link href={'/'} title={'Phase On'} onClick={toggleSidebar}>
            <Icon
              name={'IcLogo'}
              className={styles.icon__logo}
              width={77}
              height={22}
              viewBox={'0 0 112 32'}
            />
            <h1 className={'sr-only'}>Phase On</h1>
          </Link>
        </div>
        <div className={clsx(styles.sidebar__content, styles.sidebar__gap)}>
          <Input
            showLeftIcon={true}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name={'search'}
            className={styles.sidebar__content__searchBar}
          />

          <ul className={styles.sidebar__content__menuItems}>
            {menuList.map(({ icon, name, href }) => (
              <li key={name} onClick={toggleSidebar}>
                <MenuItem name={name} icon={icon} href={href} />
              </li>
            ))}
          </ul>
          <div className={styles.divider} />
          {isLogin ? (
            <div
              className={styles.sidebar__content__logout}
              onClick={() => {
                signOut();
              }}
            >
              로그아웃
            </div>
          ) : (
            <div
              className={styles.sidebar__content__logout}
              onClick={() => {
                signIn('email-password-credentials', {
                  email: '123',
                  password: '123',
                });
              }}
            >
              로그인
            </div>
          )}
        </div>
      </div>
      {/* 오버레이: 사이드바 열렸을 때 배경을 덮는 부분 */}
      <div
        className={clsx(styles.overlay, isOpen && styles.overlay__visible)}
        onClick={toggleSidebar}
      />
    </header>
  );
};

export default MobileView;
