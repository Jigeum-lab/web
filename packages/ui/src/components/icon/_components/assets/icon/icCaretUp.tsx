import type { SVGProps } from 'react';

const IcCaretUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M13.215 9.417c-.418-.488-.628-.732-.877-.822a1 1 0 0 0-.676 0c-.249.09-.458.334-.877.822l-2.52 2.942c-.721.84-1.081 1.26-1.09 1.616a1 1 0 0 0 .368.8c.276.225.83.225 1.936.225h5.043c1.107 0 1.66 0 1.936-.225a1 1 0 0 0 .368-.8c-.009-.355-.37-.776-1.09-1.616l-2.52-2.942Z"
    />
  </svg>
);
export default IcCaretUp;
