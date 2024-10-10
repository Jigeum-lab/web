import type { SVGProps } from 'react';

const IcCompass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.816 8.38a.9.9 0 0 0-1.196-1.195L10.165 9.73a.9.9 0 0 0-.435.435L7.185 15.62a.9.9 0 0 0 1.196 1.196l5.454-2.546a.9.9 0 0 0 .435-.435l2.546-5.454ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9ZM3.9 12a8.1 8.1 0 1 1 16.2 0 8.1 8.1 0 0 1-16.2 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCompass;
