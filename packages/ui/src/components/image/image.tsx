import clsx from 'clsx';
import type React from 'react';
import { useEffect, useState } from 'react';

import styles from './index.module.scss';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  loadingPlaceholder?: React.ReactNode;
  errorPlaceholder?: React.ReactNode;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallbackSrc,
  loadingPlaceholder,
  errorPlaceholder,
  className,
  ...restProps
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setImgSrc(src);
  }, [src]);

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
        {...restProps}
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
      />
    </>
  );
};
