import type { SwitchProps } from '@repo/ui';
import { Switch } from '@repo/ui';
import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

const meta: Meta<SwitchProps> = {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    disabled: false,
    onClick: fn(),
  },
  argTypes: {},
};

export default meta;

export const Default = (props: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      {...props}
      checked={isChecked}
      onChange={setIsChecked}
      size="medium"
      name="example-switch"
      aria-label="Toggle switch"
      required={true}
    />
  );
};

export const Small = (props: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      {...props}
      checked={isChecked}
      onChange={setIsChecked}
      size="small"
      name="example-switch"
      aria-label="Toggle switch"
      required={true}
    />
  );
};

export const XSmall = (props: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Switch
      {...props}
      checked={isChecked}
      onChange={setIsChecked}
      size="xsmall"
      name="example-switch"
      aria-label="Toggle switch"
      required={true}
    />
  );
};
