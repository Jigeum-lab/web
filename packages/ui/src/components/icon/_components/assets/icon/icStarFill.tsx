import type { SVGProps } from 'react';

const IcStarFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.903 2.379c.19-.237.54-.586 1.099-.586.558 0 .909.35 1.098.586.175.218.348.516.517.806l.026.046 2.309 3.963.022.038.043.01 4.483.97.052.012c.328.07.665.143.926.242.284.107.724.333.896.864.173.53-.05.972-.217 1.225-.153.234-.384.491-.607.74l-.035.04-3.056 3.42-.03.034.005.043.462 4.564.005.052c.034.334.069.677.056.956-.014.303-.093.792-.545 1.12-.451.328-.94.252-1.232.172-.27-.074-.586-.213-.892-.349l-.049-.021-4.197-1.85a10.227 10.227 0 0 1-.04-.017 6.093 6.093 0 0 1-.04.017l-4.198 1.85-.048.021c-.307.136-.623.275-.892.349-.293.08-.782.156-1.233-.172-.451-.328-.53-.817-.545-1.12-.013-.279.022-.622.056-.956l.005-.052.462-4.564.005-.043-.03-.033-3.056-3.42-.035-.04c-.223-.25-.453-.507-.607-.74-.166-.254-.39-.696-.217-1.226.172-.531.612-.757.896-.864.261-.099.599-.172.926-.242l.052-.012 4.483-.97.043-.01.022-.038 2.309-3.963.026-.046c.169-.29.343-.588.517-.806Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcStarFill;
