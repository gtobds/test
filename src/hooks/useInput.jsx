import { useState } from 'react';

export function useInput(val, { max = Infinity } = {}) {
  const [value, setValue] = useState(val);

  const onChange = (e) => {
    const newValue = e.target.value;

    if (newValue.length <= max) {
      setValue(newValue);
    }
  };

  const clear = () => setValue('');

  return {
    value,
    onChange,
    clear,
    currentLength: value.length,
    isFull: value.length >= max,
  };
}
