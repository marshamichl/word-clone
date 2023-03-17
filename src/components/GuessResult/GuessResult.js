import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessResult({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guessNumber) => (
        <Guess key={guessNumber} guess={guesses[guessNumber]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResult;
