import type { SVGProps } from 'react';

const icDocumentFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.37 2.117c.204-.017.447-.017.7-.017h7.63v6.8h6.7v10.53c0 .254 0 .496-.016.7-.018.223-.06.478-.19.733a1.9 1.9 0 0 1-.83.83c-.256.13-.51.172-.733.19-.204.017-.446.017-.7.017H6.07c-.255 0-.497 0-.7-.016a1.923 1.923 0 0 1-.733-.191 1.9 1.9 0 0 1-.83-.83 1.923 1.923 0 0 1-.19-.733 9.126 9.126 0 0 1-.017-.7V4.57c0-.254 0-.496.016-.7.018-.222.06-.478.19-.732a1.9 1.9 0 0 1 .831-.83c.255-.13.51-.173.732-.191Z"
      clipRule="evenodd"
    />
    <path fill="#000" d="m19.565 6.826-3.79-3.98v3.98h3.79Z" />
  </svg>
);
export default icDocumentFill;
