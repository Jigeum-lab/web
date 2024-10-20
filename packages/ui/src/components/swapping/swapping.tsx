import clsx from 'clsx';

import styles from './index.module.scss';

export interface SwappingProps {
  value: string;
  options: [string, string];
  onChange: (value: string) => void;
  size?: 'm' | 'l';
}

export const Swapping = ({
  value,
  onChange,
  options,
  size = 'm',
}: SwappingProps) => {
  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.getAttribute('data-value') as
      | 'left'
      | 'right';

    const currentValue = value === 'left' ? options[0] : options[1];

    onChange(currentValue);
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
          value === options[0] && styles.active,
          styles[getSize(size)]
        )}
        data-value="left"
        onClick={handleToggle}
      >
        {options[0]}
      </button>
      <button
        className={clsx(
          styles.button,
          value === options[1] && styles.active,
          styles[getSize(size)]
        )}
        data-value="right"
        onClick={handleToggle}
      >
        {options[1]}
      </button>
    </div>
  );
};
