export default function hasValuesFromArray(checkSet, valeuArray) {
  const setV = new Set(valeuArray);
  return setV.isSubsetOf(checkSet);
}
