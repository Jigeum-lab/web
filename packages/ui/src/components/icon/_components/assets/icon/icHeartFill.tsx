import type { SVGProps } from 'react';

const IcHeartFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4.968c2.168-2.401 5.84-2.666 8.314-.457 2.644 2.36 2.795 6.542.338 9.1l-.01.011-7.472 7.533a1.624 1.624 0 0 1-2.34 0l-7.472-7.533-.01-.01C.891 11.053 1.043 6.87 3.686 4.51 6.161 2.3 9.833 2.567 12 4.968Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcHeartFill;
