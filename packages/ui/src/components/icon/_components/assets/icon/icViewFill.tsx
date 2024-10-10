import type { SVGProps } from 'react';

const IcViewFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.3 12.392a.912.912 0 0 0 0-.784A11.401 11.401 0 0 0 12 5.1c-4.544 0-8.468 2.66-10.3 6.508a.912.912 0 0 0 0 .784A11.401 11.401 0 0 0 12 18.9c4.546 0 8.47-2.66 10.3-6.508ZM9.9 12a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0ZM12 8.1a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcViewFill;
