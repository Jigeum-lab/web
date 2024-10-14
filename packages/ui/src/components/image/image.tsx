import clsx from 'clsx';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: '3/2' | '4/3' | '16/9' | 'auto';
  fallbackSrc?: string;
  loadingPlaceholder?: React.ReactNode;
  errorPlaceholder?: React.ReactNode;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  aspectRatio,
  fallbackSrc,
  loadingPlaceholder = <div>Loading...</div>,
  errorPlaceholder = <div>Failed to load image</div>,
  className,
  ...restProps
}) => {
  const isLazyLoading = restProps.loading !== 'eager';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setImgSrc(src);
  }, [src]);

  useEffect(() => {
    // ref로 이미지를 직접 확인하여 캐시된 상태 처리
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (imgRef.current && imgRef.current.complete) {
      handleLoad(); // 캐시된 경우 바로 로드 처리
    }
  }, [imgSrc]);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <>
      {isLazyLoading && loading && loadingPlaceholder && (
        <div
          className={clsx(styles.image, styles.imageLoading)}
          style={{
            width: restProps.width,
            height: restProps.height,
          }}
        >
          {loadingPlaceholder}
        </div>
      )}
      {error && errorPlaceholder && (
        <div
          className={clsx(styles.image, styles.imageError)}
          style={{
            width: restProps.width,
            height: restProps.height,
          }}
        >
          {errorPlaceholder}
        </div>
      )}
      <img
        ref={imgRef}
        src={imgSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={clsx(
          styles.image,
          loading && styles.imageHidden,
          error && errorPlaceholder && styles.imageHidden,
          error && styles.imageError,
          className
        )}
        style={{
          aspectRatio: aspectRatio,
          objectFit: 'scale-down',
          ...restProps.style,
        }}
        {...restProps}
      />
    </>
  );
};
