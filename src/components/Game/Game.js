import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ guesses, setGuesses ] = React.useState([]);
  const [ gameOver, setGameOver ] = React.useState(false);
  const [ gameEndStatus, setGameEndStatus ] = React.useState('');

  function handleOnSubmit(value) {

    // Check value against answer
    const checkedValue = checkGuess(value, answer);

    // Add checked value to guesses
    const updatedGuesses = [ ...guesses, checkedValue ];

    // Set guesses
    setGuesses(updatedGuesses);

    // Check if game is over
    if (value === answer || updatedGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);

      // Check if win or lose
      if (value === answer) {
        setGameEndStatus('win');
      } else if (updatedGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameEndStatus('lose');
      }
    }

  };

  return (
    <div className='game-wrapper'>
      <GuessResults guesses={guesses} />
      <GuessForm onSubmit={handleOnSubmit} disabled={gameOver} />
      {gameOver && <Banner answer={answer} gameEndStatus={gameEndStatus} amountOfGuesses={guesses.length} />}
    </div>
  );
}

export default Game;
