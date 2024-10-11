import type { SVGProps } from 'react';

const IcLocationFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.68 5.05a8.224 8.224 0 0 1 6.318-2.95c2.334 0 4.66.978 6.319 2.95 2.865 3.407 2.42 8.433-.661 11.525l-.001.002a260.923 260.923 0 0 0-4.605 4.765l-.156.165a1.227 1.227 0 0 1-1.791 0l-.156-.165a261.12 261.12 0 0 0-4.605-4.765l-.001-.002C3.26 13.484 2.814 8.448 5.68 5.05Zm3.538 5.29a2.778 2.778 0 0 1 2.78-2.78 2.778 2.778 0 0 1 2.78 2.78 2.778 2.778 0 0 1-2.78 2.78 2.778 2.778 0 0 1-2.78-2.78Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcLocationFill;
