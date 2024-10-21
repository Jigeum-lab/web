'use client';
import { useOverlay } from '@toss/use-overlay';
import type React from 'react';
import { useRef } from 'react';
import type { ReactImageGalleryItem } from 'react-image-gallery';
import ReactImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';
import { onGalleryModal } from '@/utils/onGalleryModal';

interface Props {
  images: ReactImageGalleryItem[];
  isModal?: boolean;
}
const ImageGallery: React.FC<Props> = ({ images, isModal = false }) => {
  const overlay = useOverlay();
  const galleryRef = useRef<ReactImageGallery>(null);
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <ReactImageGallery
        ref={galleryRef}
        slideDuration={200}
        showFullscreenButton={false}
        showPlayButton={false}
        infinite={false}
        showIndex={true}
        items={images}
        onClick={() => {
          if (!isModal) return;
          const currentIndex = galleryRef.current?.getCurrentIndex();
          currentIndex !== undefined &&
            onGalleryModal(currentIndex, overlay, ref, images);
        }}
      />
    </div>
  );
};

export default ImageGallery;
