import React from 'react';

function Banner({ answer, gameEndStatus, amountOfGuesses }) {
  const won = gameEndStatus === 'win';
  const className = won ? 'happy' : 'sad';

  return (
    <div className={`banner ${className}`}>
      {won ? (
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{amountOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      )}
    </div>
  );
}

export default Banner;
