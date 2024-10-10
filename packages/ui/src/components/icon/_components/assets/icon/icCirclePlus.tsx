import type { SVGProps } from 'react';

const IcCirclePlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.1 12.9V17h1.8v-4.1H17v-1.8h-4.1V7h-1.8v4.1H7v1.8h4.1Z"
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
export default IcCirclePlus;
