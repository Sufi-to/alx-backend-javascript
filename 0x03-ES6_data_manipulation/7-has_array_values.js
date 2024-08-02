export default function hasValuesFromArray(set, array) {
  let res = true;
  array.map((element) => {
    if (!set.has(element)) {
      res = false;
    }
    return '';
  });
  return res;
}
