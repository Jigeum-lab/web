import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import type React from 'react';

import styles from './index.module.scss';

import { capitalizeFirstLetter } from '@/uitls';

type CheckboxInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size' | 'onChange'
>;

export interface SwitchProps extends CheckboxInputProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  color?: string;
  name: string;
  value: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  size = 'medium',
  disabled = false,
  color = '#3b82f6',
  name,
  value,
  ...rest
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    onChange(event.target.checked);
  };
  const capitalizedSize = capitalizeFirstLetter(size);

  return (
    <label
      className={clsx(
        styles.switch,
        styles[`switch${capitalizedSize}`],
        disabled && styles.switchDisabled
      )}
    >
      <input
        type="checkbox"
        className={styles.switchInput}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
        {...rest}
      />
      <span
        className={clsx(styles.switchToggle)}
        style={{ backgroundColor: checked ? color : undefined }}
      />
      <span className={styles.switchThumb} />
    </label>
  );
};
