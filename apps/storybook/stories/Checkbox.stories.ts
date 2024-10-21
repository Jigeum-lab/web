import { Checkbox } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof Checkbox> = {
  title: 'example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    check: false,
    onChange: fn(),
  },
  argTypes: {
    check: {
      description: '체크박스의 체크 여부를 설정합니다.',
      control: { type: 'boolean' },
    },
    onChange: {
      description: '체크박스 상태 변경 핸들러',
      action: 'changed',
    },
  },
};

export default meta;

export const Normal: StoryObj<typeof Checkbox> = {
  args: {
    check: false,
  },
};

export const Checked: StoryObj<typeof Checkbox> = {
  args: {
    check: true,
  },
};
