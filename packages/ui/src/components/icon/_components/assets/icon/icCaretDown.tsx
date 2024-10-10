import type { SVGProps } from 'react';

const IcCaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M13.215 14.583c-.418.488-.627.732-.876.822a1 1 0 0 1-.677 0c-.248-.09-.458-.334-.876-.822L8.265 11.64c-.72-.84-1.081-1.26-1.09-1.616a1 1 0 0 1 .368-.8C7.819 9 8.373 9 9.479 9h5.043c1.107 0 1.66 0 1.936.225a1 1 0 0 1 .368.8c-.009.356-.369.776-1.09 1.616l-2.52 2.942Z"
    />
  </svg>
);
export default IcCaretDown;
