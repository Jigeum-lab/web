import type { SVGProps } from 'react';

const IcChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M4.264 16.536a.9.9 0 0 0 1.273 0l6.363-6.363 6.364 6.363a.9.9 0 1 0 1.273-1.272l-7-7a.9.9 0 0 0-1.273 0l-7 7a.9.9 0 0 0 0 1.272Z"
    />
  </svg>
);
export default IcChevronUp;
