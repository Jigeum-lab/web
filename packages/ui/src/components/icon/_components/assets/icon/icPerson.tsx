import type { SVGProps } from 'react';

const IcPerson = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.122 7.278a2.878 2.878 0 1 1 5.756 0 2.878 2.878 0 0 1-5.756 0ZM12 2.6a4.678 4.678 0 1 0 0 9.356A4.678 4.678 0 0 0 12 2.6Zm0 10.501c2.932 0 5.805.822 8.31 2.341.193.117.427.26.623.485.166.19.302.432.378.673.09.286.09.576.09.819v1.511c0 .255 0 .497-.017.7-.019.223-.061.478-.191.733a1.9 1.9 0 0 1-.83.83c-.255.13-.51.173-.733.191-.204.017-.446.017-.7.017H5.07c-.254 0-.496 0-.7-.017a1.923 1.923 0 0 1-.732-.19 1.9 1.9 0 0 1-.83-.83 1.923 1.923 0 0 1-.191-.733c-.017-.204-.017-.446-.017-.7v-1.512c0-.243-.002-.534.089-.82.076-.24.212-.482.378-.673.197-.225.43-.367.624-.484A16.031 16.031 0 0 1 12 13.102Zm-7.578 4.007A14.03 14.03 0 0 1 12 14.9c2.79 0 5.39.81 7.578 2.207.004.002.022.018.022.057V19.5a.1.1 0 0 1-.1.1h-15a.1.1 0 0 1-.1-.1v-2.335c0-.04.018-.055.022-.057Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcPerson;
