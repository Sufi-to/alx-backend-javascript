export default class Building {
  constructor(sqft) {
    if (!('evacuationWarningMessage' in new.target.prototype) && new.target !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
