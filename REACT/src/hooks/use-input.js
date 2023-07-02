import { useState } from 'react';

export const useInputValue = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const resetValue = () => {
    setValue('');
  };

  return [value, handleChange, resetValue];
};