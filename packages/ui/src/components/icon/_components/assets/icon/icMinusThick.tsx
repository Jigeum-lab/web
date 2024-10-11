import type { SVGProps } from 'react';

const IcMinusThick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M1.952 12a1.3 1.3 0 0 1 1.3-1.3h17.5a1.3 1.3 0 1 1 0 2.6h-17.5a1.3 1.3 0 0 1-1.3-1.3Z"
    />
  </svg>
);
export default IcMinusThick;
