import clsx from 'clsx';
import type React from 'react';
import {
  type ChangeEvent,
  type InputHTMLAttributes,
  useRef,
  useState,
} from 'react';

import styles from './index.module.scss';

import { Button, type ButtonProps } from '@/components/button';
import { Icon } from '@/components/icon';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  isInvalid?: boolean;
  buttonProps?: ButtonProps;
  containerStyles?: React.CSSProperties;
  containerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
}

export const Input = ({
  value,
  onChange,
  showLeftIcon,
  showRightIcon,
  isInvalid,
  disabled,
  placeholder,
  buttonProps,
  containerStyles,
  containerClassName,
  className,
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
        disabled && styles.disabled,
        containerClassName
      )}
      style={containerStyles}
      onClick={handleClick}
      onBlur={() => setIsFocus(false)}
    >
      {showLeftIcon && (
        <Icon
          name="IcSearch"
          width={20}
          height={20}
          viewBox={'0 0  24 24'}
          className={styles.icon}
        />
      )}
      <input
        className={clsx(styles.input, disabled && styles.disabled, className)}
        value={value}
        onChange={onChange}
        ref={inputRef}
        placeholder={placeholder ? placeholder : 'Text Field'}
        {...args}
        disabled={disabled}
      />
      {showRightIcon && (
        <Button size="small" variant="filled" {...buttonProps}>
          {buttonProps?.children ?? '입력'}
        </Button>
      )}
    </div>
  );
};
