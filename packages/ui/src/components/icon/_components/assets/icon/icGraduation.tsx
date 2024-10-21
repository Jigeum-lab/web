import type { SVGProps } from 'react';

const IcGraduation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.002 4.946 3.624 9.5l8.377 4.555L20.377 9.5l-8.377-4.555Zm-.705-1.666a1.476 1.476 0 0 1 1.409 0L21.59 8.11c.257.14.462.349.601.593a1.613 1.613 0 0 1 .21.796v6h-1.8v-4.072l-1.712.93a.9.9 0 0 1 .012.143V18a.9.9 0 0 1-.498.804l-6 3a.9.9 0 0 1-.805 0l-6-3A.9.9 0 0 1 5.102 18v-5.5c0-.048.004-.096.01-.142l-2.7-1.47a1.54 1.54 0 0 1-.601-.592 1.613 1.613 0 0 1 0-1.593c.139-.244.344-.453.6-.593l8.886-4.83Zm1.41 12.44 4.395-2.39v4.114l-5.1 2.55-5.1-2.55V13.33l4.394 2.39a1.479 1.479 0 0 0 1.41 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcGraduation;
