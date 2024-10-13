import clsx from 'clsx';
import type React from 'react';

import styles from './index.module.scss';
//
import { IcCheck } from '../icon/_components/assets';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
}

export const Checkbox = ({
  checked = false,
  className = '',
  ...rest
}: CheckboxProps) => {
  return (
    <div className={clsx(styles.checkbox, className)}>
      <input
        type="checkbox"
        checked={checked}
        className={styles.input}
        {...rest}
      />
      <label
        className={clsx(styles.symbol, {
          [styles['--checked']]: checked,
        })}
        htmlFor={rest.id}
      >
        {checked && <IcCheck className={styles.icon} IcCheckFill="white" />}
      </label>
    </div>
  );
};

export default Checkbox;
