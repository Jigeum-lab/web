import clsx from 'clsx';

import styles from './index.module.scss';

export interface SwappingProps {
  left: React.ReactNode;
  right: React.ReactNode;
  value: 'left' | 'right';
  onChange: (value: SwappingProps['value']) => void;
  size?: 'm' | 'l';
}

export const Swapping = ({
  left,
  right,
  value,
  onChange,
  size = 'm',
}: SwappingProps) => {
  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.getAttribute('data-value') as
      | 'left'
      | 'right';

    onChange(value);
  };

  const getSize = (size: SwappingProps['size']) => {
    switch (size) {
      case 'm':
        return 'medium';
      default:
        return 'large';
    }
  };

  return (
    <div className={clsx(styles.container, styles[getSize(size)])}>
      <button
        className={clsx(
          styles.button,
          value === 'left' && styles.active,
          styles[getSize(size)]
        )}
        data-value="left"
        onClick={handleToggle}
      >
        {left}
      </button>
      <button
        className={clsx(
          styles.button,
          value === 'right' && styles.active,
          styles[getSize(size)]
        )}
        data-value="right"
        onClick={handleToggle}
      >
        {right}
      </button>
    </div>
  );
};
