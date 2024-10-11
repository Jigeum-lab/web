import type { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M10.001 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16.001 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M8.549 13.022a.9.9 0 0 1 1.23.326 2.63 2.63 0 0 0 2.272 1.312 2.63 2.63 0 0 0 2.272-1.312.9.9 0 0 1 1.556.904 4.43 4.43 0 0 1-3.828 2.208 4.43 4.43 0 0 1-3.828-2.208.9.9 0 0 1 .326-1.23Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M12.001 3.9a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2Zm-9.9 8.1c0-5.468 4.432-9.9 9.9-9.9s9.9 4.432 9.9 9.9-4.432 9.9-9.9 9.9-9.9-4.432-9.9-9.9Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
