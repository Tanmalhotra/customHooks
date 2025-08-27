import { useState } from 'react';

export default function useCycle<T>(...values: T[]): [T, () => void] {
  const [index, setIndex] = useState(0);

  const cycle = () => {
    setIndex(prev => (prev + 1) % values.length);
  };

  return [values[index], cycle];
}
