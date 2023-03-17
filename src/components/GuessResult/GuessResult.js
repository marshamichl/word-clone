import React from 'react';

function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <div key={index} className="guess">
          {guess}
        </div>
      ))}
    </div>
  );
}

export default GuessResult;
