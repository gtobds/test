import { useState } from 'react';

export function useInput(val, { max = Infinity } = {}, inpRef) {
  const [value, setValue] = useState(val);

  const onChange = (e) => {
    const newValue = e.target.value;

    if (newValue.length <= max) {
      setValue(newValue);
    }
  };

  const clear = () => {
    setValue('');
    inpRef.current.focus();
  };

  return {
    value,
    onChange,
    clear,
    currentLength: value.length,
    isFull: value.length >= max,
  };
}
