import type { SVGProps } from 'react';

const IcBubbleFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.351 12a9.65 9.65 0 1 1 18.298 4.288l.494 1.812c.112.41.212.776.265 1.077.054.304.09.69-.057 1.076a1.9 1.9 0 0 1-1.097 1.097c-.386.148-.772.111-1.077.057-.3-.053-.666-.153-1.076-.265l-1.813-.494a9.613 9.613 0 0 1-4.287 1.003c-5.33 0-9.65-4.32-9.65-9.65Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcBubbleFill;
