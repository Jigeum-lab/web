import type { SVGProps } from 'react';

const IcShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2a3 3 0 0 0-2.955 3.518L7.931 9.703a3 3 0 1 0 .195 4.415l6.977 4.104A3.004 3.004 0 0 0 18 22a3 3 0 1 0-1.93-5.297l-7.115-4.185a3.02 3.02 0 0 0-.057-1.296l6.977-4.104A3 3 0 1 0 18 2Zm-1.2 3a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0ZM6 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM16.8 19a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcShare;
