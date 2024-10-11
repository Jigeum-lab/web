import type { SVGProps } from 'react';

const IcCircleClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.1 12c0-5.468 4.433-9.9 9.9-9.9 5.468 0 9.9 4.432 9.9 9.9s-4.432 9.9-9.9 9.9c-5.467 0-9.9-4.432-9.9-9.9Zm6.4-4.773L7.229 8.5l3.5 3.5-3.5 3.5 1.273 1.273 3.5-3.5 3.5 3.5 1.273-1.273-3.5-3.5 3.5-3.5L15.5 7.227l-3.5 3.5-3.5-3.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCircleClose;
