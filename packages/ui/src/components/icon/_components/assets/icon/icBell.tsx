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
      fill={props.fill || '#000'}
      fillRule="evenodd"
      d="M12.001 2c-2.186 0-3.983.756-5.218 2.182C5.565 5.59 4.978 7.55 4.978 9.821v.72c0 2.365-.671 3.766-1.627 4.67a1.12 1.12 0 0 0-.28 1.208c.137.368.51.743 1.072.743h15.716c.562 0 .935-.375 1.072-.743a1.12 1.12 0 0 0-.28-1.207c-.956-.905-1.627-2.306-1.627-4.672v-.72c0-2.27-.587-4.23-1.805-5.638C15.984 2.756 14.187 2 12 2ZM6.746 9.82c0-2 .518-3.518 1.387-4.522.852-.984 2.125-1.57 3.868-1.57 1.743 0 3.016.586 3.868 1.57.87 1.004 1.387 2.522 1.387 4.523v.72c0 2.075.46 3.672 1.295 4.893h-13.1c.835-1.221 1.295-2.818 1.295-4.894v-.72Z"
      clipRule="evenodd"
    />
    <path
      fill={props.fill || '#000'}
      d="M9.153 19.273V21h5.697v-1.727H9.153Z"
    />
  </svg>
);
export default IcBell;
