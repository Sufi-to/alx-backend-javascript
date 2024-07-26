export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
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

  get name() {
    return this._name;
  }

  set name(setCode) {
    if (typeof setCode !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = setCode;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
