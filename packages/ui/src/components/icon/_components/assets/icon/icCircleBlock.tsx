import type { SVGProps } from 'react';

const IcCircleBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.1c-5.467 0-9.9 4.432-9.9 9.9s4.433 9.9 9.9 9.9c5.468 0 9.9-4.432 9.9-9.9S17.469 2.1 12 2.1ZM3.9 12a8.1 8.1 0 0 1 13.156-6.329L5.672 17.056A8.066 8.066 0 0 1 3.9 12Zm3.045 6.329A8.1 8.1 0 0 0 18.33 6.944L6.944 18.33Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCircleBlock;
