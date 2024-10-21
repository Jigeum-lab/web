'use client'; // 클라이언트 컴포넌트로 선언

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setError(false);
    setImgSrc(src);
  }, [src]);

  useEffect(() => {
    // 캐시된 이미지를 감지하여 로딩 상태를 처리
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (imgRef.current && imgRef.current.complete) {
      setLoading(false); // 이미지가 이미 로드된 경우 로딩 상태 건너뜀
    } else {
      setLoading(true);
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
      {loading && loadingPlaceholder && (
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
