import type { TypographyProps } from '@repo/ui';
import { Typography } from '@repo/ui';
import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<TypographyProps<'span'>> = {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    level: {
      description: 'Typography 컴포넌트의 크기를 정합니다.',
      options: [
        'display1',
        'display2',
        'title1',
        'title2',
        'title3',
        'heading1',
        'heading2',
        'headline1',
        'headline2',
        'body1Normal',
        'body1Reading',
        'body2Normal',
        'body2Reading',
        'label1Normal',
        'label1Reading',
        'label2',
        'caption1',
        'caption2',
      ],
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'select' },
    },

    textAlign: {
      description: 'Typography 컴포넌트의 text-align을 정합니다.',
      options: ['left', 'center', 'right'],
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    disabled: {
      defaultValue: false,
      description: 'true일 경우 Text가 disabled 됩니다.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    strong: {
      description: 'true일 경우 Text가 strong 됩니다.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    italic: {
      description: 'true일 경우 Text가 italic 됩니다.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    underline: {
      description: 'true일 경우 Text가 underline 됩니다.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Default = (props: TypographyProps<'span'>) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography {...props} level={'display1'}>
        display1. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'display2'}>
        display2. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'title1'}>
        title1. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'title2'}>
        title2. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'title3'}>
        title3. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'heading1'}>
        heading1. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'heading2'}>
        heading2. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'headline1'}>
        headline1. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'headline2'}>
        headline2. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'body1Normal'}>
        body1Normal. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'body1Reading'}>
        body1Reading. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'body2Normal'}>
        body2Normal. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'body2Reading'}>
        body2Reading. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'label1Normal'}>
        label1Normal. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'label1Reading'}>
        label1Reading. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'label2'}>
        label2. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'caption1'}>
        caption1. Jigeum-lab Design
      </Typography>
      <Typography {...props} level={'caption2'}>
        caption2. Jigeum-lab Design
      </Typography>
    </div>
  );
};
