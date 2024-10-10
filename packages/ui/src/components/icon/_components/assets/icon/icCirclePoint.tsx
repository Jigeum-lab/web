import type { SVGProps } from 'react';

const IcCirclePoint = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3.9a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2ZM2.1 12c0-5.468 4.433-9.9 9.9-9.9 5.468 0 9.9 4.432 9.9 9.9s-4.432 9.9-9.9 9.9c-5.467 0-9.9-4.432-9.9-9.9Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      d="M9.4 16.4V8h3.442c1.896 0 3.064 1.178 3.058 2.889.006 1.735-1.186 2.877-3.116 2.877h-1.407V16.4H9.4Zm1.977-4.2h1.047c.936.006 1.43-.516 1.43-1.311 0-.783-.494-1.288-1.43-1.288h-1.047v2.6Z"
    />
  </svg>
);
export default IcCirclePoint;
