export default function hasValuesFromArray(set, array) {
  const setV = new Set(array);
  return setV.isSubsetOf(set);
}
