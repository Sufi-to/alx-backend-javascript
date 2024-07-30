export default function getStudentsByLocation(students, city) {
  const studFilter = students.filter((student) => student.location === city);
  return studFilter;
}
