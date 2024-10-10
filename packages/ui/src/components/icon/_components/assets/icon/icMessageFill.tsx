import type { SVGProps } from 'react';

const IcMessageFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.002 2.72c-5.341 0-9.9 3.796-9.9 8.731 0 2.201.93 4.197 2.422 5.715l-.546 3.054a.9.9 0 0 0 1.34.936l2.85-1.663c1.182.438 2.476.69 3.834.69 5.34 0 9.9-3.797 9.9-8.732 0-4.935-4.56-8.73-9.9-8.73Zm-4 9.9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcMessageFill;
