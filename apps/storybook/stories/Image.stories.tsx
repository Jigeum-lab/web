import type { ImageProps } from '@repo/ui';
import { Image } from '@repo/ui';
import type { Meta } from '@storybook/react';

const meta: Meta<ImageProps> = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {
    src: {
      description: 'Image 링크를 설정합니다.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export default meta;

export const Default = (props: ImageProps) => {
  return (
    <Image
      {...props}
      src="https://avatars.githubusercontent.com/u/12554583?v=4"
      alt="Example image"
      fallbackSrc="https://example.com/fallback.jpg"
      loadingPlaceholder={<div>Loading...</div>}
      errorPlaceholder={<div>Failed to load image</div>}
      width={300}
      height={200}
      aspectRatio={'16/9'}
      loading="lazy"
    />
  );
};
