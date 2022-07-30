const getSecondWord = (phrase: string): string => {
  const WORD_POSITION = 1;
  const word = phrase.split(" ")[WORD_POSITION];
  return word;
};
export { getSecondWord };
