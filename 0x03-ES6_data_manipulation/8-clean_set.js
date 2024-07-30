export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof set !== 'object' || typeof startstring !== 'string') {
    return '';
  }
  return [...set]
    .filter((word) => (word !== 'undefined' ? word.startsWith(startString) : ''))
    .map((word) => (word !== 'undefined' ? word.slice(startString.length) : ''))
    .join('-');
}
