import type { ButtonProps } from '@repo/ui';
import { Button } from '@repo/ui';
import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<ButtonProps> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;

export const Primary = {
  args: {
    primary: true,
    children: 'Button',
  },
};

export const Secondary = {
  args: {
    children: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Button',
  },
};
