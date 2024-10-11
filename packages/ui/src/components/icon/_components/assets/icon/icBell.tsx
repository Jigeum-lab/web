import type { SVGProps } from 'react';

const IcBell = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.001 2c-2.186 0-3.983.756-5.218 2.182C5.565 5.59 4.978 7.55 4.978 9.821v.72c0 2.365-.671 3.766-1.627 4.67a1.12 1.12 0 0 0-.28 1.208c.137.368.51.743 1.072.743h15.716c.562 0 .935-.375 1.072-.743a1.12 1.12 0 0 0-.28-1.207c-.956-.905-1.627-2.306-1.627-4.672v-.72c0-2.27-.587-4.23-1.805-5.638C15.984 2.756 14.187 2 12 2Z"
      clipRule="evenodd"
    />
    <path fill="#000" d="M9.153 19.273V21h5.697v-1.727H9.153Z" />
  </svg>
);
export default IcBell;
