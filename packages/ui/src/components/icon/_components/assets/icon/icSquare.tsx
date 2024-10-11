import type { SVGProps } from 'react';

const IcSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.273 7.127a.9.9 0 0 1-1.272.022l-2.1-2.027V14.5a.9.9 0 0 1-1.8 0V5.12l-2.1 2.028a.9.9 0 1 1-1.25-1.295l3.625-3.5a.9.9 0 0 1 1.25 0l3.625 3.5a.9.9 0 0 1 .022 1.273Zm4.628 2.872v9.43c0 .255 0 .497-.017.701-.018.223-.06.478-.19.733a1.9 1.9 0 0 1-.83.83c-.255.13-.51.172-.733.19-.204.017-.446.017-.7.017H5.57c-.254 0-.496 0-.7-.017a1.923 1.923 0 0 1-.733-.19 1.9 1.9 0 0 1-.83-.83 1.923 1.923 0 0 1-.19-.733 9.126 9.126 0 0 1-.017-.7V10h1.8v10a.1.1 0 0 0 .1.1h14a.1.1 0 0 0 .1-.1V10h1.8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcSquare;
