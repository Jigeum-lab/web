import type { SVGProps } from 'react';

const IcCompany = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.284 2.144c.333-.045.74-.044 1.167-.044h7.101c.428 0 .833 0 1.167.044.372.05.784.17 1.126.512.341.342.462.754.512 1.126.044.333.044.74.044 1.167v5.15h3.151c.428 0 .833 0 1.166.045.373.05.785.17 1.127.512.341.342.462.754.512 1.126.044.334.044.74.044 1.167v8.95h-18.8V4.95c0-.428 0-.834.045-1.167.05-.372.17-.784.512-1.126.341-.341.754-.462 1.126-.512ZM4.401 4a.1.1 0 0 1 .1-.1h9a.1.1 0 0 1 .1.1v16.1h-3.7V16h-1.8v4.1h-3.7V4Zm11 16.1h4.2V12a.1.1 0 0 0-.1-.1h-4.1v8.2Zm-3.9-8.2h-5v-1.8h5v1.8Zm0-4h-5V6.1h5v1.8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCompany;
