import type { SVGProps } from 'react';

const IcLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.12 5.88a3.347 3.347 0 0 0-4.733 0L10.5 8.77 9.226 7.496l2.888-2.889a5.147 5.147 0 0 1 7.279 7.279l-2.889 2.888-1.273-1.272 2.889-2.889a3.347 3.347 0 0 0 0-4.733ZM15.773 9.5 9.5 15.773 8.227 14.5 14.5 8.227 15.773 9.5Zm-8 2.003L5.88 13.387a3.347 3.347 0 0 0 4.732 4.734l1.885-1.894 1.276 1.27-1.886 1.894-.001.002a5.146 5.146 0 1 1-7.279-7.279l1.896-1.887 1.27 1.276Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcLink;
