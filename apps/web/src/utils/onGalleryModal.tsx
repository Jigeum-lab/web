'use client';
import { Button } from '@repo/ui';
import type React from 'react';
import { createPortal } from 'react-dom';
import Gallery, { type ReactImageGalleryItem } from 'react-image-gallery';

import { useBlockScrolling } from '@/hooks/useBlockScrolling';
import type { Overlay } from '@/types/overlay';

export const onGalleryModal = (
  idx: number,
  overlay: Overlay,
  dialogRef: React.RefObject<HTMLDialogElement>,
  images: ReactImageGalleryItem[]
) => {
  const handleBackdropClick = (e: React.MouseEvent, exit: () => void) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      exit();
    }
  };

  overlay.open(({ isOpen, exit }) => {
    useBlockScrolling(isOpen);
    return createPortal(
      <div
        className="modal-backdrop"
        onClick={(e) => handleBackdropClick(e, exit)}
      >
        <dialog
          className="modal"
          style={{ backgroundColor: 'transparent' }}
          open={isOpen}
          ref={dialogRef}
          onClick={(e) => (e.target === dialogRef.current ? exit() : null)}
        >
          <form method="dialog">
            <Gallery
              items={images}
              slideDuration={200}
              showFullscreenButton={false}
              showPlayButton={false}
              infinite={false}
              showIndex={true}
              startIndex={idx}
              renderLeftNav={(onClick, disabled) => (
                <Button onClick={onClick} disabled={disabled}>
                  left
                </Button>
              )}
              renderRightNav={(onClick, disabled) => (
                <Button onClick={onClick} disabled={disabled}>
                  right
                </Button>
              )}
            />
          </form>
        </dialog>
      </div>,
      document.getElementById('modal-root')!
    );
  });
};
