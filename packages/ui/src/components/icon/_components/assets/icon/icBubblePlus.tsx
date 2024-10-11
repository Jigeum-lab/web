import type { SVGProps } from 'react';

const IcBubblePlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.9 8v-.9h-1.8v4H7.102v1.8h4v4h1.8v-4h4v-1.8h-4V8Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M12 4.15a7.85 7.85 0 1 0 3.754 14.746.9.9 0 0 1 .668-.078l2.114.576c.46.126.745.203.954.24.075.013.122.017.148.019a.098.098 0 0 0 .016-.016 1.289 1.289 0 0 0-.019-.148 12.43 12.43 0 0 0-.24-.954l-.576-2.114a.9.9 0 0 1 .079-.668A7.85 7.85 0 0 0 12 4.15ZM2.35 12a9.65 9.65 0 1 1 18.298 4.287l.495 1.812c.112.41.212.776.265 1.077.053.304.09.69-.057 1.076a1.9 1.9 0 0 1-1.098 1.097c-.385.148-.771.11-1.076.057-.3-.053-.666-.153-1.076-.265l-1.813-.494A9.65 9.65 0 0 1 2.351 12Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcBubblePlus;
