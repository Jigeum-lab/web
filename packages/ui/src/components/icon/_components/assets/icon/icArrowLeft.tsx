import type { SVGProps } from 'react';

const IcArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.865 11.364a.9.9 0 0 0 0 1.272l7 7a.9.9 0 1 0 1.273-1.273L5.674 12.9h14.828a.9.9 0 0 0 0-1.8H5.674l5.464-5.464a.9.9 0 0 0-1.273-1.272l-7 7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcArrowLeft;
