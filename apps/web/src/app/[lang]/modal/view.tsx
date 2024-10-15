'use client';
import { Image, TabComponent } from '@repo/ui';
import { useOverlay } from '@toss/use-overlay';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import { Modal } from '@/components/basic/Modal';
import { ModalSheet } from '@/components/basic/ModalSheet';
import { SwiperContainer } from '@/components/basic/SwiperContainer';

export const ModalView = () => {
  const overlay = useOverlay();
  const [isOpen, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAlert = () => {
    return overlay.open(({ isOpen, close }) => (
      <Modal isOpen={isOpen} onClose={close}>
        <div>
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </div>
      </Modal>
    ));
  };

  return (
    <div>
      <button onClick={openAlert}>modal</button>
      <button onClick={() => setOpen(true)}>Open sheet</button>
      <Image
        src={
          'https://m.cnbnews.com/data/photos/20230730/art_328587_1690435362.jpg'
        }
        alt={'11'}
        width={300}
        height={200}
      />

      <SwiperContainer hasNavigation={true}>
        <SwiperSlide style={{ height: 300 }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ height: 300 }}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ height: 300 }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ height: 300 }}>Slide 4</SwiperSlide>
        <SwiperSlide style={{ height: 300 }}>Slide 5</SwiperSlide>
      </SwiperContainer>
      <ModalSheet
        content={'간다!'}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
      <TabComponent
        tabs={[
          { name: 'Tab1', content: 'Tab menu ONE' },
          { name: 'Tab2', content: 'Tab menu TWO' },
          { name: 'Tab3', content: 'Tab menu THREE' },
        ]}
        index={index}
        onChange={setIndex}
      />
    </div>
  );
};

export default ModalView;
