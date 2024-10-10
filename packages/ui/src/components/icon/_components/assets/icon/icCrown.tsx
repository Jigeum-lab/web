import type { SVGProps } from 'react';

const IcCrown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.6a.9.9 0 0 1 .806.5l2.396 4.813 5.366-2.941a.9.9 0 0 1 1.313.974l-2.25 10.739a.9.9 0 0 1-.88.715H5.25a.9.9 0 0 1-.881-.715L2.12 5.945a.9.9 0 0 1 1.313-.973L8.8 7.913l2.395-4.814A.9.9 0 0 1 12 2.6Zm0 2.92L9.995 9.553a.9.9 0 0 1-1.238.388L4.282 7.49l1.7 8.11H18.02l1.699-8.11-4.473 2.451a.9.9 0 0 1-1.239-.388L12.001 5.52ZM4.6 20a.9.9 0 0 1 .9-.9h13a.9.9 0 1 1 0 1.8h-13a.9.9 0 0 1-.9-.9Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCrown;
