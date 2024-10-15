import type React from 'react';

import styles from './index.module.scss';

interface Props {
  lengths: number;
  index: number;
  onClick?: (index: number) => void;
}
export const Indicator: React.FC<Props> = ({ lengths, index, onClick }) => {
  return (
    <div className={styles.pageIndicator}>
      {[...Array(lengths)].map((_, i) => (
        <div
          key={i}
          className={`${styles.indicator} ${i === index ? styles.active : ''}`}
          onClick={() => {
            onClick?.(i);
          }}
        />
      ))}
    </div>
  );
};
