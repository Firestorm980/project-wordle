import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {

  const totalGuesses = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className='guess-results'>
      {totalGuesses.map((_, i) => (
        <Guess guess={guesses[i]} key={i} />
      ))}
    </div>
  );
}

export default GuessResults;
