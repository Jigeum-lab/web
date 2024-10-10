import type { SVGProps } from 'react';

const IcHandle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.1 10a.9.9 0 0 1 .9-.9h16a.9.9 0 1 1 0 1.8H4a.9.9 0 0 1-.9-.9Zm0 4a.9.9 0 0 1 .9-.9h16a.9.9 0 1 1 0 1.8H4a.9.9 0 0 1-.9-.9Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcHandle;
