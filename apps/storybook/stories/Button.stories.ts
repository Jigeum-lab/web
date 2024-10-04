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
  args: {
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    size: {
      description: 'Button 컴포넌트의 크기를 정합니다.',
      options: ['small', 'medium', 'large'],
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    variant: {
      description: 'Button 컴포넌트의 색상을 정합니다.',
      options: ['filled', 'outlined', 'text'],
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
  },
};

export default meta;

export const Primary = {
  args: {
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

export const Medium = {
  args: {
    size: 'medium',
    children: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Button',
  },
};
