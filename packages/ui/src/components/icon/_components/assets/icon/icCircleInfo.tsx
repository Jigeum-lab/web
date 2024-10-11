import type { SVGProps } from 'react';

const IcCircleInfo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.1c-5.467 0-9.9 4.432-9.9 9.9 0 5.467 4.433 9.9 9.9 9.9 5.468 0 9.9-4.433 9.9-9.9 0-5.468-4.432-9.9-9.9-9.9Zm0 1.8a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2ZM11 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm.1 2.5V17h1.8v-6.5h-1.8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCircleInfo;
