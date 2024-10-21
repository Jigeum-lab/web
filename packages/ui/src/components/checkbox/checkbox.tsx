import clsx from 'clsx';
import type React from 'react';

import styles from './index.module.scss';
import { IcCheck } from '../icon/_components/assets';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  check?: true | false;
}

const getChecked = (_check: CheckboxProps['check']) => {
  switch (_check) {
    case true:
      return styles.checkTrue;
    case false:
      return styles.checkFalse;
    default:
      return styles.checkTrue;
  }
};

export const Checkbox: React.FC<CheckboxProps> = ({
  check,
  id,
  className,
  ...rest
}) => {
  const checkboxId =
    id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
  return (
    <div className={clsx(className, styles.wrapper)}>
      <input
        type="checkbox"
        id={checkboxId}
        checked={check}
        {...rest}
        className={clsx(styles.input, getChecked(check))}
      />
      <label
        htmlFor={checkboxId}
        className={clsx(styles.checkbox, getChecked(check))}
      >
        {check && <IcCheck className={styles.icon} fill="white" />}
      </label>
    </div>
  );
};

export default Checkbox;
