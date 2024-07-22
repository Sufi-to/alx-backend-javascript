export default function appendToEachArrayValue(array, appendString) {
    for (let idx of array) {
      let index = array.indexOf(idx);
      array[index] = appendString + idx;
    }
    return array;
  }