import React, { useState } from 'react';

function GuessInput({ guesses, setGuesses, gameFinished }) {
  const [word, setWord] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!word || word.length !== 5) {
      return;
    }

    const nextGuess = [...guesses, word];
    setGuesses(nextGuess);
    setWord('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        className={gameFinished ? 'disabled' : ''}
        disabled={gameFinished}
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={word}
        onChange={(event) => {
          const input = event.target.value;
          setWord(input.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
