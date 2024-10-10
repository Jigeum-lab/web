import type { SVGProps } from 'react';

const IcTrophyFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.6 2.6h12.8v3.5h4.5V7c0 5.61-4.44 10.183-10 10.393v2.208h4.6a.9.9 0 1 1 0 1.8h-11a.9.9 0 0 1 0-1.8h4.6v-2.208c-5.557-.21-9.999-4.783-9.999-10.392v-.9h4.5V2.6ZM18.4 11V7.9h2.654a8.59 8.59 0 0 1-3.302 5.912A6.375 6.375 0 0 0 18.401 11ZM5.6 11c0 1.009.234 1.963.65 2.812A8.59 8.59 0 0 1 2.948 7.9H5.6V11Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcTrophyFill;
