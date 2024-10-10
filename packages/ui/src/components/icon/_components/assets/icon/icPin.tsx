import type { SVGProps } from 'react';

const IcPin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.996 2.6H18.001v1.8h-2.1v5.728l3.32 4.432a.9.9 0 0 1-.72 1.44h-5.6v6l-.9 1-.9-1v-6h-5.6a.9.9 0 0 1-.72-1.44l3.32-4.432V4.4H6V2.6h2.995Zm.905 1.8v6.027a.9.9 0 0 1-.18.54L7.3 14.2h9.403l-2.421-3.233a.9.9 0 0 1-.18-.54V4.4H9.9Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcPin;
