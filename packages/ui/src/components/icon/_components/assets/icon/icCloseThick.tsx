import type { SVGProps } from 'react';

const IcCloseThick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.332 4.331a1.3 1.3 0 0 1 1.838 0l5.83 5.83 5.832-5.83a1.3 1.3 0 0 1 1.838 1.838L13.84 12l5.83 5.831a1.3 1.3 0 0 1-1.838 1.838L12 13.84l-5.83 5.83a1.3 1.3 0 1 1-1.84-1.838l5.831-5.83-5.83-5.832a1.3 1.3 0 0 1 0-1.838Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCloseThick;
