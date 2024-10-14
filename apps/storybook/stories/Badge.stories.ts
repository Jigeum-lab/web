import type { BadgeProps } from '@repo/ui';
import { Badge } from '@repo/ui';
import type { Meta } from '@storybook/react';

const meta: Meta<BadgeProps> = {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {
    size: {
      description: 'Badge 컴포넌트의 크기를 정합니다.',
      options: ['small', 'medium', 'xsmall'],
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    leftIcon: {
      description: 'Badge의 왼쪽부분에 icon 등을 삽입합니다.',
      control: { type: 'text' },
    },
    rightIcon: {
      description: 'Badge의 오른쪽부분에 icon 등을 삽입합니다.',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Primary = {
  args: {
    children: 'Badge',
  },
};

export const Secondary = {
  args: {
    children: 'Badge',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Badge',
  },
};

export const Xsamll = {
  args: {
    size: 'xsmall',
    children: 'Badge',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Badge',
  },
};
