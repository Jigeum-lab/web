import type { SVGProps } from 'react';

const IcPause = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 5H6.5v14H10V5Zm7.5 0H14v14h3.5V5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcPause;
