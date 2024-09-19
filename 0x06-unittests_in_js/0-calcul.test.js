const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 5 when 2 and 3 are added', () => {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });

  it('should return 0 when 0 and 0 are added', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it('should return 11 when 4.6 and 5.6 are added', () => {
    assert.strictEqual(calculateNumber(4.6, 5.6), 11);
  })
  it('should return 8 when 2.3 and 6.4 are added', () => {
    assert.strictEqual(calculateNumber(2.3, 6.4), 8);
  })
});