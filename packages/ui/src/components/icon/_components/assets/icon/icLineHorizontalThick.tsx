import type { SVGProps } from 'react';

const IcLineHorizontalThick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.7 12A1.3 1.3 0 0 1 6 10.7h12a1.3 1.3 0 0 1 0 2.6H6A1.3 1.3 0 0 1 4.7 12Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcLineHorizontalThick;
