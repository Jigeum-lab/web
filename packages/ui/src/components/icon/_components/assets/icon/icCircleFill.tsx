import type { SVGProps } from 'react';

const IcCircleFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.1 12c0-5.468 4.432-9.9 9.9-9.9s9.9 4.432 9.9 9.9c0 5.467-4.432 9.9-9.9 9.9S2.1 17.467 2.1 12Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCircleFill;
