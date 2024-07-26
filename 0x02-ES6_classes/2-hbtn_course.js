export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(setName) {
    if (typeof setName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = setName;
  }

  get length() {
    return this._length;
  }

  set length(setLength) {
    if (typeof setLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = setLength;
  }

  get students() {
    return this._students;
  }

  set students(setStudents) {
    if (Array.isArray(setStudents) && setStudents.every((element) => typeof element === 'string')) {
      this._students = setStudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
