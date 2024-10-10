import type { SVGProps } from 'react';

const IcCompassFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22.185c5.625 0 10.184-4.56 10.184-10.185 0-5.625-4.56-10.185-10.185-10.185C6.374 1.815 1.814 6.375 1.814 12c0 5.626 4.56 10.185 10.185 10.185ZM17.102 7.45c.08-.184.056-.374-.061-.49-.117-.118-.307-.142-.49-.063L10.044 9.7a.675.675 0 0 0-.347.347L6.897 16.55a.536.536 0 0 0-.046.238.38.38 0 0 0 .107.253c.117.117.307.14.49.062l6.506-2.802a.675.675 0 0 0 .347-.347l2.801-6.505Zm-6.543 3.11a2.037 2.037 0 1 0 2.88 2.88 2.037 2.037 0 0 0-2.88-2.88Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCompassFill;
