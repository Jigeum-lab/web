import type { SVGProps } from 'react';

const IcArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.638 2.864a.9.9 0 0 0-1.273 0l-7 7a.9.9 0 1 0 1.273 1.272l5.464-5.463V20.5a.9.9 0 1 0 1.8 0V5.673l5.463 5.463a.9.9 0 1 0 1.273-1.272l-7-7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcArrowUp;
