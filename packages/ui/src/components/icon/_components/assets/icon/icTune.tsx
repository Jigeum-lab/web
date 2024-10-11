import type { SVGProps } from 'react';

const IcTune = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 6.3a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM3 9h8.145a3.502 3.502 0 0 0 6.71 0H21V7.2h-3.092a3.501 3.501 0 0 0-6.816 0H3V9Zm9.855 8H21v-1.8h-8.092a3.501 3.501 0 0 0-6.816 0H3V17h3.145a3.502 3.502 0 0 0 6.71 0ZM7.8 16a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcTune;
