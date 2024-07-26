export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
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

  get code() {
    return this._code;
  }

  set code(setCode) {
    if (typeof setCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = setCode;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
