import type { SVGProps } from 'react';

const IcSignIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill ?? '#000'}
      d="M18.667 2.667H8A1.333 1.333 0 0 0 6.667 4h12v16H8v-6.534H6.667V20A1.333 1.333 0 0 0 8 21.333h10.667A1.333 1.333 0 0 0 20 20V4a1.334 1.334 0 0 0-1.333-1.333Z"
    />
    <path
      fill="#000"
      d="M10.08 12.306a.668.668 0 0 0 .19 1.128.666.666 0 0 0 .75-.188l3.86-3.86-3.853-3.86a.667.667 0 0 0-.94.94l2.247 2.2H2.667a.667.667 0 1 0 0 1.334h9.667l-2.254 2.306Z"
    />
  </svg>
);
export default IcSignIn;
