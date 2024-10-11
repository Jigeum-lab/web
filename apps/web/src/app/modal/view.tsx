'use client';
import { useOverlay } from '@toss/use-overlay';

import { Modal } from '@/components/basic/Modal';

export const ModalView = () => {
  const overlay = useOverlay();

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

  return <button onClick={openAlert}>modal</button>;
};

export default ModalView;
