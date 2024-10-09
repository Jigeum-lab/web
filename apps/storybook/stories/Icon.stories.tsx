import type { IconProps } from '@repo/ui';
import { Icon } from '@repo/ui';
import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<IconProps<'svg'>> = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    name: {
      control: {
        type: 'radio',
        options: ['IcGithub'],
      },
      description: 'Icon타입에 따른 컴포넌트 이름을 정합니다.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export default meta;

export const Default = (props: IconProps<'svg'>) => {
  return <Icon {...props} width={32} height={32} name={'IcGithub'} />;
};
