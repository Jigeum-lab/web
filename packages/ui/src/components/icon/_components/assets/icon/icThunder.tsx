import type { SVGProps } from 'react';

const IcThunder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.713 2.033a.9.9 0 0 1 .568.884l-.347 6.553h3.816a.9.9 0 0 1 .662 1.51L9.485 21.745a.9.9 0 0 1-1.55-.753l1.024-6.37H5.25a.9.9 0 0 1-.689-1.479L13.694 2.29a.9.9 0 0 1 1.02-.257Zm-7.53 10.79h2.832a.9.9 0 0 1 .888 1.043l-.717 4.463 6.51-7.06h-2.71a.9.9 0 0 1-.9-.947l.256-4.818-6.158 7.319Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcThunder;
