export const makeFirstLetterCapital = (str) => {
  const term = str.toLowerCase();
  return term.charAt(0).toUpperCase() + term.slice(1);
};
