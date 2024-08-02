export default function hasValuesFromArray(set, array) {
  const setV = new Set(array);
  return set.isSupersetOf(setV);
}
