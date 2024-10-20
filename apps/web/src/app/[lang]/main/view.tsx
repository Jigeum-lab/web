'use client';
import { useTranslations } from 'next-intl';

import { ImageGallery } from '@/components/basic/ImageGallery';

const MainView = () => {
  const t = useTranslations('home');
  return (
    <div>
      <h1>{t('IndexPage.title')}</h1>
      <div>
        Image Banner
        <ImageGallery
          isModal={true}
          images={[
            {
              original: 'https://picsum.photos/id/1018/1000/600/',
              thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
              original: 'https://picsum.photos/id/1015/1000/600/',
              thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
              original: 'https://picsum.photos/id/1019/1000/600/',
              thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MainView;
