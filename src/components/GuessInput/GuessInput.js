import React, { useState } from 'react';

function GuessInput({ guesses, setGuesses }) {
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
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        required
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
