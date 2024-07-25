export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const value of reportWithIterator) {
    if (reportWithIterator.indexOf(value) === reportWithIterator.length - 1) {
      result += value;
    } else {
      result += `${value} | `;
    }
  }
  return result;
}
