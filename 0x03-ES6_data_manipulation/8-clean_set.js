export default function cleanSet(givenSet, startString) {
  if (startString.length === 0) {
    return '';
  }
  const wordStartWith = [...givenSet]
    .filter((word) => word.startsWith(startString))
    .map((word) => word.slice(startString.length));
  return wordStartWith.join('-');
}
