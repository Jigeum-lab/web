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
    onClick: fn(),
  },
  argTypes: {},
};

export default meta;

export const Default = (props: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      checked={isChecked}
      onChange={setIsChecked}
      size="medium"
      color="#3b82f6"
      name="example-switch"
      value="on"
      aria-label="Toggle switch"
      required={true}
    />
  );
};
