export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof set !== 'object' || typeof startstring !== 'string') {
    return '';
  }
  const wordStartWith = [...set]
    .filter((word) => word.startsWith(startString))
    .map((word) => word.slice(startString.length));
  return wordStartWith.join('-');
}
