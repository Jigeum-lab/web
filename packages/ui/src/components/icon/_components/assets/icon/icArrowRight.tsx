import type { SVGProps } from 'react';

const IcArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.137 12.636a.9.9 0 0 0 0-1.273l-7-7a.9.9 0 0 0-1.273 1.273l5.463 5.464H3.5a.9.9 0 0 0 0 1.8h14.827l-5.463 5.463a.9.9 0 1 0 1.272 1.273l7-7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcArrowRight;
