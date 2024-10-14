'use client';
import { Image } from '@repo/ui';
import { useOverlay } from '@toss/use-overlay';
import { useState } from 'react';
import { Sheet } from 'react-modal-sheet';

import { Modal } from '@/components/basic/Modal';

export const ModalView = () => {
  const overlay = useOverlay();
  const [isOpen, setOpen] = useState(false);

  const openAlert = () => {
    return overlay.open(({ isOpen, close }) => (
      <Modal open={isOpen} onClose={close}>
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

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[-50, 0.3, 100, 0]}
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            간다!
            {/* Your sheet content goes here */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
              }}
            >
              bottom
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};

export default ModalView;
