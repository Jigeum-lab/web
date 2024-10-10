import type { SVGProps } from 'react';

const IcDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M20.901 15v3.43c0 .255 0 .497-.017.7-.018.223-.06.478-.19.733a1.9 1.9 0 0 1-.83.83c-.255.13-.51.173-.733.191-.204.017-.446.017-.7.017H5.57c-.254 0-.496 0-.7-.017a1.923 1.923 0 0 1-.733-.19 1.9 1.9 0 0 1-.83-.83 1.923 1.923 0 0 1-.19-.733 9.128 9.128 0 0 1-.017-.7V15h1.8v4a.1.1 0 0 0 .1.1h14a.1.1 0 0 0 .1-.1v-4h1.8Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      d="M11.101 4v9.419l-2.733-2.573a.9.9 0 1 0-1.234 1.31l4.25 4a.9.9 0 0 0 1.234 0l4.25-4a.9.9 0 0 0-1.234-1.31l-2.733 2.573V4a.9.9 0 0 0-1.8 0Z"
    />
  </svg>
);
export default IcDownload;
