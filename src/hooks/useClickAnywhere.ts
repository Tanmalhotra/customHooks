import { useEffect } from 'react';

export default function useClickAnywhere(handler: (event: MouseEvent) => void) {
  useEffect(() => {
    const listener = (event: MouseEvent) => handler(event);

    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [handler]);
}
