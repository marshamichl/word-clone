import React from 'react';
import { WORD_LENGTH_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function LetterCell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(WORD_LENGTH_ALLOWED).map((number) => {
        return (
          <LetterCell
            key={number}
            letter={result ? result[number].letter : undefined}
            status={result ? result[number].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default Guess;
