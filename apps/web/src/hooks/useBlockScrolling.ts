import { useEffect } from 'react';

export const useBlockScrolling = (deps: boolean) => {
  useEffect(() => {
    if (deps) {
      document.body.classList.add('block-scrolling');
    } else {
      document.body.classList.remove('block-scrolling');
    }

    return () => document.body.classList.remove('block-scrolling');
  }, [deps]);
};
