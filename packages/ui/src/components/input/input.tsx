import clsx from 'clsx';
import {
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
} from 'react';

import styles from './index.module.scss';
import { Button } from '../button';
import { Icon } from '../icon';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  showLeftIcon: boolean;
  showRightIcon: boolean;
  isInvalid?: boolean;
  text?: string;
}

export const Input = ({
  value,
  onChange,
  showLeftIcon,
  showRightIcon,
  isInvalid,
  disabled,
  text,
  ...args
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleClick = () => {
    if (disabled) {
      return;
    }

    setIsFocus(true);
    inputRef.current?.focus();
  };

  return (
    <div
      className={clsx(
        styles.inputContainer,
        isInvalid && styles.invalid,
        isFocus && styles.focus,
        disabled && styles.disabled
      )}
      onClick={handleClick}
      onBlur={() => setIsFocus(false)}
    >
      {showLeftIcon && <Icon name="IcSearch" width={20} height={20} />}
      <input
        className={clsx(styles.input, disabled && styles.disabled)}
        value={value}
        onChange={onChange}
        ref={inputRef}
        placeholder="Text Field"
        {...args}
        disabled={disabled}
      />
      {showRightIcon && (
        <Button size="small" variant="filled">
          {text ? text : '입력'}
        </Button>
      )}
    </div>
  );
};
