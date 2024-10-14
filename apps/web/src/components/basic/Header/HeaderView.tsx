'use client';

import { Button, Icon } from '@repo/ui';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import { MenuItem } from './_components/MenuItem';
import { menuList } from './data';
import styles from './index.module.scss';

import { useScreenSize } from '@/hooks/useScreenSize';

const HeaderView = () => {
  const screenSize = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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

  const MobileView = () => {
    return (
      <header className={styles.header}>
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
          <Icon
            name={'IcShareIos'}
            width={20}
            height={20}
            viewBox={'0 0 24 24'}
            className={styles.icon}
            onClick={() => {
              console.log('Sign In');
            }}
          />
        </div>
      </header>
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

  return screenSize === 'desktop' ? (
    <DesktopView />
  ) : (
    <>
      <MobileView />
      <Sidebar />
    </>
  );
};

export default HeaderView;
