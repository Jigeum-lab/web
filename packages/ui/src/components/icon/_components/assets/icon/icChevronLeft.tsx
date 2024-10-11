import type { SVGProps } from 'react';

const icChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M16.731 3.267a.904.904 0 0 1 0 1.287L9.217 12l7.514 7.446a.904.904 0 0 1 0 1.287.924.924 0 0 1-1.299 0l-8.163-8.09a.904.904 0 0 1 0-1.287l8.163-8.09a.924.924 0 0 1 1.299 0Z"
    />
  </svg>
);
export default icChevronLeft;
