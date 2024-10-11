import type { SVGProps } from 'react';

const IcPlusThick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M12 1.95a1.3 1.3 0 0 1 1.3 1.3v7.45h7.45a1.3 1.3 0 1 1 0 2.6H13.3v7.45a1.3 1.3 0 1 1-2.6 0V13.3H3.25a1.3 1.3 0 1 1 0-2.6h7.45V3.25a1.3 1.3 0 0 1 1.3-1.3Z"
    />
  </svg>
);
export default IcPlusThick;
