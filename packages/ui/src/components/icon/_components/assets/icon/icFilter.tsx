import type { SVGProps } from 'react';

const IcFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.642 2.598h10.72c.545 0 1.014 0 1.38.033.35.031.811.104 1.177.41.46.384.71.962.678 1.56-.026.477-.287.863-.503 1.14-.226.29-.546.634-.919 1.032l-4.274 4.58v8.805c0 .12 0 .263-.01.386a1.226 1.226 0 0 1-.226.63 1.2 1.2 0 0 1-.867.481 1.227 1.227 0 0 1-.654-.143c-.11-.055-.232-.132-.334-.195l-3.072-1.92c-.053-.032-.22-.132-.348-.282a1.2 1.2 0 0 1-.234-.422c-.059-.189-.056-.383-.055-.445v-6.895l-4.274-4.58c-.372-.398-.693-.742-.918-1.032-.216-.277-.478-.663-.504-1.14a1.9 1.9 0 0 1 .679-1.56c.366-.306.826-.379 1.176-.41.366-.033.836-.033 1.382-.033Zm-1.44 1.92c0 .008.005.025.028.05l5.43 5.817a.9.9 0 0 1 .241.614v7.003l2.2 1.375v-8.378a.9.9 0 0 1 .242-.614l5.43-5.818c.023-.024.027-.04.028-.05a.11.11 0 0 0-.01-.058.11.11 0 0 0-.035-.046c-.008-.006-.022-.014-.056-.014H5.303c-.034 0-.048.008-.056.014a.11.11 0 0 0-.036.046.11.11 0 0 0-.01.058Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IcFilter;
