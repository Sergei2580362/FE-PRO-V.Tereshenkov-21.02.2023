import React, { useState, useRef } from 'react';
import {useInputValue} from '../hooks/use-input';
import {useToggle} from '../hooks/use-focus';


export const App = () => {
  const [inputValue, handleInputChange, resetInputValue] = useInputValue('');
  const [displayText, setDisplayText] = useState('');
  const inputRef = useRef(null);
  const [isFocusEnabled, toggleFocusEnabled] = useToggle(false);

  const handleAddClick = () => {
    if (displayText === '') {
      setDisplayText(inputValue);
    } else {
      setDisplayText(`${displayText}-${inputValue}`);
    }
    resetInputValue();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClearClick = () => {
    setDisplayText('');
    resetInputValue();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCheckboxChange = () => {
    toggleFocusEnabled();
    if (inputRef.current) {
      if (isFocusEnabled) {
        inputRef.current.blur();
      } else {
        inputRef.current.focus();
      }
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} ref={inputRef} />
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleClearClick}>Clear</button>
      <div>{displayText}</div>
      <label>
        <input type="checkbox" checked={isFocusEnabled} onChange={handleCheckboxChange} />
        Toggle Focus
      </label>
    </div>
  );
};