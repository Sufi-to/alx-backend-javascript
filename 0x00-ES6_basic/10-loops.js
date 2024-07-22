export default function appendToEachArrayValue(array, appendString) {
  const newarr = [...array];
  for (const idx of newarr) {
    const index = newarr.indexOf(idx);
    newarr[index] = appendString + idx;
  }
  return newarr;
}
