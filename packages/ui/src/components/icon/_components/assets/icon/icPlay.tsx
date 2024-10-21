import type { SVGProps } from 'react';

const IcPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#000" d="M7.5 19V5l11 7-11 7Z" />
  </svg>
);
export default IcPlay;
