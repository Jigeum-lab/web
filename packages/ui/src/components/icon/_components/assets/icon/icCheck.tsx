import type { SVGProps } from 'react';

interface IcCheckProps extends SVGProps<SVGSVGElement> {
  IcCheckFill?: string;
}

const IcCheck = ({ IcCheckFill = '#000', ...props }: IcCheckProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={IcCheckFill}
      d="M19.387 6.863a.9.9 0 0 1 0 1.273l-9 9a.9.9 0 0 1-1.273 0l-4.5-4.5a.9.9 0 0 1 1.272-1.273l3.864 3.864 8.364-8.364a.9.9 0 0 1 1.273 0Z"
    />
  </svg>
);

export default IcCheck;
