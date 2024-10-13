'use client';
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

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[-50, 0.3, 100, 0]}
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};

export default ModalView;
