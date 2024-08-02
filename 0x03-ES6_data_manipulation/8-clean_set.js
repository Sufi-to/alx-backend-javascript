export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const wordStartWith = [...set]
    .filter((word) => word.startsWith(startString))
    .map((word) => word.slice(startString.length));
  return wordStartWith.join('-');
}
