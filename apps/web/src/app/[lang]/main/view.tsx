'use client';
import { useTranslations } from 'next-intl';

const MainView = () => {
  const t = useTranslations('home');
  return (
    <div>
      <h1>{t('IndexPage.title')}</h1>
      <div>Image Banner</div>
    </div>
  );
};

export default MainView;
