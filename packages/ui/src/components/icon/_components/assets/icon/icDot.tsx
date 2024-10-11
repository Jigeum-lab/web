import type { SVGProps } from 'react';

const IcDot = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.001 12c0 3.312-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcDot;
