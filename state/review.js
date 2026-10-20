export function rateMissedWord(missedWords, wordId, rating) {
  if (!Number.isInteger(rating) || rating < 1 || rating > 4) {
    throw new Error("A review rating must be a whole number from 1 to 4.");
  }

  const word = missedWords.find((item) => item.id === wordId);
  if (!word) {
    throw new Error("That word is no longer in the missed-word tray.");
  }

  return {
    word,
    missedWords: rating >= 3
      ? missedWords.filter((item) => item.id !== wordId)
      : [...missedWords],
    cleared: rating >= 3,
  };
}
