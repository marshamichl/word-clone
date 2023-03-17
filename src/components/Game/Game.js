import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult/GuessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  return (
    <div>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput guesses={guesses} setGuesses={setGuesses} />
    </div>
  );
}

export default Game;
