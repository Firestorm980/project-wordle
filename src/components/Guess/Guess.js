import React from 'react';
import { range } from '../../utils';
import { NUM_OF_LETTERS } from '../../constants';

function Guess({ guess }) {
  const letters = !!guess ? guess : range(NUM_OF_LETTERS).map(() => ({ letter: '', status: ''}));

  return (
    <p className="guess">
      {letters.map(({ letter, status }, i) => (
        <span className={`cell ${status}`} key={i}>{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
