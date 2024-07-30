export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const ids = arr.map((x) => x.id);
  return ids;
}
