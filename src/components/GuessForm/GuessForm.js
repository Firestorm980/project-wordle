import React from 'react';
import { NUM_OF_LETTERS } from '../../constants';

function GuessForm({ onSubmit = () => {}, disabled = false }) {
  const [ value, setValue ] = React.useState('');


  function handleOnChange(e) {
    const { value } = e.target;

    // Limit the input to n characters
    if (value.length > NUM_OF_LETTERS) return;

    // Set the value
    setValue(value.toUpperCase());
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    
    // Pass the value up to the parent component
    onSubmit(value);

    // Clear the input
    setValue('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={handleOnChange}
        pattern={`[A-Z]{${NUM_OF_LETTERS}}`}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessForm;
