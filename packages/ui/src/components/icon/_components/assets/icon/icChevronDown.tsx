import type { SVGProps } from 'react';

const IcChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M3.264 7.264a.9.9 0 0 1 1.273 0l7.363 7.363 7.364-7.363a.9.9 0 0 1 1.273 1.272l-8 8a.9.9 0 0 1-1.273 0l-8-8a.9.9 0 0 1 0-1.272Z"
    />
  </svg>
);
export default IcChevronDown;
