import clsx from 'clsx';

import styles from './index.module.scss';

export interface SwappingProps {
  value: string;
  options: Array<string>;
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
    const value = event.currentTarget.value;
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
      {options.map((option, index) => {
        return (
          <button
            key={option}
            className={clsx(
              styles.button,
              value === option && styles.active,
              styles[getSize(size)]
            )}
            onClick={handleToggle}
            value={option}
          >
            {options[index]}
          </button>
        );
      })}
    </div>
  );
};
