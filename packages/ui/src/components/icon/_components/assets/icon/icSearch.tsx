import type { SVGProps } from 'react';

const IcSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || '#000'}
      fillRule="evenodd"
      d="M10 2.1a7.9 7.9 0 1 0 4.915 14.086l4.95 4.95a.9.9 0 0 0 1.272-1.272l-4.95-4.95A7.9 7.9 0 0 0 10 2.1ZM3.9 10a6.1 6.1 0 1 1 12.2 0 6.1 6.1 0 0 1-12.2 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcSearch;
