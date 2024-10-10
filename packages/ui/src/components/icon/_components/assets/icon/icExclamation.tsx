import type { SVGProps } from 'react';

const IcExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M13.201 18.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M11.101 15.4V4h1.8v11.4h-1.8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcExclamation;
