import type { SVGProps } from 'react';

const IcLineHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.1 12a.9.9 0 0 1 .9-.9h12a.9.9 0 1 1 0 1.8H6a.9.9 0 0 1-.9-.9Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcLineHorizontal;
