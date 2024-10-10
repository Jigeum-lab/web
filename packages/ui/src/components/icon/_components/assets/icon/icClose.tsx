import type { SVGProps } from 'react';

const IcClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.614 4.613a.9.9 0 0 1 1.273 0l6.114 6.114 6.113-6.114a.9.9 0 0 1 1.273 1.273L13.274 12l6.113 6.113a.9.9 0 1 1-1.273 1.273l-6.113-6.114-6.114 6.114a.9.9 0 1 1-1.273-1.273L10.728 12 4.614 5.886a.9.9 0 0 1 0-1.273Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcClose;
