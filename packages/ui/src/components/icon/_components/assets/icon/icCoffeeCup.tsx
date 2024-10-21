import type { SVGProps } from 'react';

const IcCoffeeCup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.714}
      d="M16.714 9h.858a3.429 3.429 0 0 1 0 6.857h-.858"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.714}
      d="M3 9h13.714v7.714a3.429 3.429 0 0 1-3.428 3.429H6.429A3.429 3.429 0 0 1 3 16.714V9ZM6.429 3v2.571M9.857 3v2.571M13.286 3v2.571"
    />
  </svg>
);
export default IcCoffeeCup;
