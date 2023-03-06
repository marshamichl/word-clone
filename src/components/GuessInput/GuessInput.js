import React, { useState } from 'react';

function GuessInput() {
  const [guessedWord, setGuessedWord] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log('You guessed:', guessedWord);
    setGuessedWord('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={guessedWord}
        onChange={(event) => {
          const input = event.target.value;
          setGuessedWord(input.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
