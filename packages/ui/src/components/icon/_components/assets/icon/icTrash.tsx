import type { SVGProps } from 'react';

const IcTrash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.002 3.4h6V1.6h-6v1.8Zm12 3.5h-1.35v12.53c0 .254 0 .496-.016.7-.018.222-.06.477-.19.732a1.9 1.9 0 0 1-.831.83c-.255.13-.51.173-.733.19-.204.018-.446.017-.7.017H6.822c-.254 0-.496 0-.7-.016a1.923 1.923 0 0 1-.732-.19 1.9 1.9 0 0 1-.83-.83 1.923 1.923 0 0 1-.191-.733 9.126 9.126 0 0 1-.017-.7V6.9h-1.35V5.1h18v1.8Zm-14.85 0h11.7v13.099a.1.1 0 0 1-.1.1h-11.5a.1.1 0 0 1-.1-.1v-13.1Zm6.95 9.6v-6h1.8v6h-1.8Zm-4-6v6h1.8v-6h-1.8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcTrash;
