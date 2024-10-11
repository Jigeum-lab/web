import type { SVGProps } from 'react';

const IcArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.364 21.137a.9.9 0 0 0 1.272 0l7-7a.9.9 0 1 0-1.272-1.273L12.9 18.327V3.5a.9.9 0 1 0-1.8 0v14.827l-5.464-5.463a.9.9 0 1 0-1.272 1.272l7 7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcArrowDown;
