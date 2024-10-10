import type { SVGProps } from 'react';

const IcCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3.9a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2ZM2.1 12c0-5.468 4.432-9.9 9.9-9.9s9.9 4.432 9.9 9.9c0 5.467-4.432 9.9-9.9 9.9S2.1 17.467 2.1 12Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCircle;
