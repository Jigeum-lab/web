import type { FloatingButtonProps } from '@repo/ui';
import { FloatingButton } from '@repo/ui';
import type { Meta } from '@storybook/react';

const meta: Meta<FloatingButtonProps> = {
  title: 'Example/FloatingButton',
  component: FloatingButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    iconName: 'IcListCategory',
  },
  argTypes: {
    interact: {
      description: '버튼의 상태를 설정합니다.',
      options: ['normal', 'hovered', 'pressed'],
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    color: {
      description: '버튼의 색상을 설정합니다.',
      options: ['blue', 'white'],
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    size: {
      description: '버튼의 크기를 설정합니다.',
      options: ['large', 'medium'],
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'inline-radio' },
    },
    text: {
      description: '버튼의 글자를 설정합니다.',
      options: ['large', 'medium'],
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default = {
  args: {
    iconName: 'IcListCategory', // 실제 아이콘 이름으로 변경
  },
};

export const NomalBlueLargeTextTrue = {
  args: {
    interact: 'nomal',
    color: 'blue',
    size: 'large',
    text: '24',
  },
};

export const NomalBlueLargeTextFalse = {
  args: {
    interact: 'nomal',
    color: 'blue',
    size: 'large',
  },
};

export const NomalBlueMediumTextTrue = {
  args: {
    interact: 'nomal',
    color: 'blue',
    size: 'medium',
    text: '24',
  },
};

export const NomalBlueMediumText = {
  args: {
    interact: 'nomal',
    color: 'blue',
    size: 'medium',
  },
};

export const HoveredBlueLargeTextTrue = {
  args: {
    interact: 'hovered',
    color: 'blue',
    size: 'large',
    text: '24',
  },
};

export const HoveredBlueLargeTextFalse = {
  args: {
    interact: 'hovered',
    color: 'blue',
    size: 'large',
  },
};

export const HoveredBlueMediumTextTrue = {
  args: {
    interact: 'hovered',
    color: 'blue',
    size: 'medium',
    text: '24',
  },
};

export const HoveredBlueMediumText = {
  args: {
    interact: 'hovered',
    color: 'blue',
    size: 'medium',
  },
};

export const PressedBlueLargeTextTrue = {
  args: {
    interact: 'pressed',
    color: 'blue',
    size: 'large',
    text: '24',
  },
};

export const PressedBlueLargeTextFalse = {
  args: {
    interact: 'pressed',
    color: 'blue',
    size: 'large',
  },
};

export const PressedBlueMediumTextTrue = {
  args: {
    interact: 'pressed',
    color: 'blue',
    size: 'medium',
    text: '24',
  },
};

export const PressedBlueMediumText = {
  args: {
    interact: 'pressed',
    color: 'blue',
    size: 'medium',
  },
};

export const NomalWhiteLargeTextTrue = {
  args: {
    interact: 'nomal',
    color: 'white',
    size: 'large',
    text: '24',
  },
};

export const NomalWhiteLargeTextFalse = {
  args: {
    interact: 'nomal',
    color: 'white',
    size: 'large',
  },
};

export const NomalWhiteMediumTextTrue = {
  args: {
    interact: 'nomal',
    color: 'white',
    size: 'medium',
    text: '24',
  },
};

export const NomalWhiteMediumText = {
  args: {
    interact: 'nomal',
    color: 'white',
    size: 'medium',
  },
};

export const HoveredWhiteLargeTextTrue = {
  args: {
    interact: 'hovered',
    color: 'white',
    size: 'large',
    text: '24',
  },
};

export const HoveredWhiteLargeTextFalse = {
  args: {
    interact: 'hovered',
    color: 'white',
    size: 'large',
  },
};

export const HoveredWhiteMediumTextTrue = {
  args: {
    interact: 'hovered',
    color: 'white',
    size: 'medium',
    text: '24',
  },
};

export const HoveredWhiteMediumText = {
  args: {
    interact: 'hovered',
    color: 'white',
    size: 'medium',
  },
};

export const PressedWhiteLargeTextTrue = {
  args: {
    interact: 'pressed',
    color: 'white',
    size: 'large',
    text: '24',
  },
};

export const PressedWhiteLargeTextFalse = {
  args: {
    interact: 'pressed',
    color: 'white',
    size: 'large',
  },
};

export const PressedWhiteMediumTextTrue = {
  args: {
    interact: 'pressed',
    color: 'white',
    size: 'medium',
    text: '24',
  },
};

export const PressedWhiteMediumText = {
  args: {
    interact: 'pressed',
    color: 'white',
    size: 'medium',
  },
};
