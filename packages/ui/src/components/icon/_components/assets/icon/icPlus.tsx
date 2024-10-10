import type { SVGProps } from 'react';

const IcPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M12 2.35a.9.9 0 0 1 .9.9v7.85h7.85a.9.9 0 1 1 0 1.8H12.9v7.85a.9.9 0 1 1-1.8 0V12.9H3.25a.9.9 0 1 1 0-1.8h7.85V3.25a.9.9 0 0 1 .9-.9Z"
    />
  </svg>
);
export default IcPlus;
