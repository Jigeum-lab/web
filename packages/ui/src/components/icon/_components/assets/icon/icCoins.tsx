import type { SVGProps } from 'react';

const IcCoins = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.126 7c0-.754.41-1.368.923-1.822.514-.456 1.207-.826 1.988-1.119 1.569-.588 3.678-.934 5.964-.934 2.286 0 4.395.346 5.964.934.782.293 1.474.663 1.988 1.119.512.454.923 1.068.923 1.822V16.796c0 1.052-.58 2.076-1.604 2.53-5.944 2.642-11.645 1.36-14.633-.008-.997-.457-1.513-1.46-1.513-2.45V7Zm1.75 0c0-.074.037-.25.334-.513.297-.263.775-.54 1.442-.789 1.326-.497 3.217-.823 5.35-.823 2.131 0 4.022.326 5.349.823.666.25 1.145.526 1.441.789.297.264.334.439.334.513 0 .074-.037.25-.334.513-.296.263-.775.54-1.441.789-1.327.497-3.218.823-5.35.823-2.132 0-4.023-.326-5.35-.823-.666-.25-1.144-.526-1.44-.789-.298-.264-.335-.439-.335-.513Zm14.25 2.405v1.63c-5.922 2.565-11.689 1.198-14.25.022V9.405c.353.201.744.38 1.161.536 1.569.588 3.678.934 5.964.934 2.286 0 4.395-.346 5.964-.934a8.049 8.049 0 0 0 1.161-.536Zm-14.25 7.463v-.613c3.032 1.18 8.522 2.193 14.25-.029v.57c0 .43-.234.785-.564.932-5.36 2.38-10.52 1.223-13.195-.002-.281-.128-.49-.444-.49-.858Zm0-2.511c2.561 1.176 8.328 2.543 14.25-.022v-1.408c-5.728 2.221-11.218 1.209-14.25.028v1.402Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcCoins;
