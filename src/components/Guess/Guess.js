import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guess({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
        return (
          <p key={rowIndex} className="guess">
            {range(WORD_LENGTH_ALLOWED).map((columnIndex) => {
              const word = guesses[rowIndex] ? guesses[rowIndex] : '';
              const character = word ? [...word] : '';
              return (
                <span key={columnIndex} className="cell">
                  {character[columnIndex]}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
