'use client';
import { Image } from '@repo/ui';
import { useOverlay } from '@toss/use-overlay';
import { useState } from 'react';

import { Modal } from '@/components/basic/Modal';
import { ModalSheet } from '@/components/basic/ModalSheet';

export const ModalView = () => {
  const overlay = useOverlay();
  const [isOpen, setOpen] = useState(false);

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

      <ModalSheet
        content={'간다!'}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default ModalView;
