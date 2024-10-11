import type { SVGProps } from 'react';

const IcCircleInfoFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.1c-5.467 0-9.9 4.432-9.9 9.9 0 5.467 4.433 9.9 9.9 9.9 5.468 0 9.9-4.433 9.9-9.9 0-5.468-4.432-9.9-9.9-9.9ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-.9 10v-6.5h1.8V17h-1.8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCircleInfoFill;
