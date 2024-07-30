export default function createInt8TypedArray(length, pos, value) {
  if (pos >= length) {
    throw Error('Position outside range');
  }
  const int8 = new DataView(new ArrayBuffer(length), 0, length);
  int8.setInt8(pos, value);
  return int8;
}
