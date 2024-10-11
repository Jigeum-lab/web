'use client';

import { useRef } from 'react';
import { createPortal } from 'react-dom';

import { useBlockScrolling } from '@/hooks/useBlockScrolling';

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ children, open, onClose }: Props) => {
  if (!open) return null;
  useBlockScrolling(open);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <dialog ref={dialogRef} className="modal" onClose={onClose} open={open}>
        {children}
        <button onClick={onClose} className="close-button" />
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
};
