import type { SVGProps } from 'react';

const IcCircleCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.146 9.626-6.47 6.666-3.821-3.938L8.146 11.1l2.53 2.607 5.178-5.334 1.292 1.253Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M12 3.9a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2ZM2.1 12c0-5.468 4.433-9.9 9.9-9.9 5.468 0 9.9 4.432 9.9 9.9 0 5.467-4.432 9.9-9.9 9.9-5.467 0-9.9-4.433-9.9-9.9Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCircleCheck;
