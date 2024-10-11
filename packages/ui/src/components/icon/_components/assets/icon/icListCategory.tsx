import type { SVGProps } from 'react';

const IcListCategory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M3.125 6c0-.483.392-.875.875-.875h16a.875.875 0 0 1 0 1.75H4A.875.875 0 0 1 3.125 6ZM3.125 18c0-.483.392-.875.875-.875h10a.875.875 0 0 1 0 1.75H4A.875.875 0 0 1 3.125 18ZM4 11.125a.875.875 0 0 0 0 1.75h16a.875.875 0 0 0 0-1.75H4Z"
    />
  </svg>
);
export default IcListCategory;
