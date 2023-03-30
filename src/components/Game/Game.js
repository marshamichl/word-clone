import React, { useEffect, useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult/GuessResult';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);

  const isCorrectWord = guesses.includes(answer);
  const allGuessesUsed = guesses.length >= NUM_OF_GUESSES_ALLOWED;

  useEffect(() => {
    const gameStatus = isCorrectWord || allGuessesUsed;
    setGameFinished(gameStatus);
  }, [isCorrectWord, allGuessesUsed, setGameFinished]);

  return (
    <>
      <div>
        <GuessResult guesses={guesses} answer={answer} />
        <GuessInput guesses={guesses} setGuesses={setGuesses} gameFinished={gameFinished} />
        {gameFinished && isCorrectWord && (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
            </p>
          </div>
        )}
        {gameFinished && !isCorrectWord && (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Game;
