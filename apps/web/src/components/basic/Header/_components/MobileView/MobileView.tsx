import { Button, Icon } from '@repo/ui';
import clsx from 'clsx';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

import styles from './index.module.scss';

import { useClientSession } from '@/utils/session/useClientSession';

const MobileView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useClientSession();

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
          {status === 'authenticated' ? (
            <Icon
              name={'IcShareIos'}
              width={20}
              height={20}
              viewBox={'0 0 24 24'}
              className={styles.icon}
              onClick={() => {
                signOut();
              }}
            />
          ) : (
            <Icon
              name={'IcShareIos'}
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

  const Sidebar = () => {
    return (
      <>
        <div className={clsx(styles.sidebar, isOpen && styles.sidebar__open)}>
          <div className={styles.sidebar__content}>
            <input
              type="text"
              placeholder="Search"
              className={styles.sidebar__content__searchBar}
            />
            <ul className={styles.sidebar__content__menuItems}>
              <li>프로젝트</li>
              <li>아티클</li>
            </ul>
            <div className={styles.sidebar__content__logout}>로그아웃</div>
          </div>
        </div>
        {/* 오버레이: 사이드바 열렸을 때 배경을 덮는 부분 */}
        <div
          className={clsx(styles.overlay, isOpen && styles.overlay__visible)}
          onClick={toggleSidebar}
        />
      </>
    );
  };

  return (
    <header className={styles.header}>
      <Mobile />
      <Sidebar />
    </header>
  );
};

export default MobileView;
