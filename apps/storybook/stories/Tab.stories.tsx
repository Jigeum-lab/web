import { TabComponent } from '@repo/ui';
import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta = {
  title: 'Example/TabComponent',
  component: TabComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
};

export default meta;

export const Default = () => {
  return (
    <TabComponent
      tabs={[
        { name: 'Tab1', content: 'Tab menu ONE' },
        { name: 'Tab2', content: 'Tab menu TWO' },
        { name: 'Tab3', content: 'Tab menu THREE' },
      ]}
    />
  );
};
