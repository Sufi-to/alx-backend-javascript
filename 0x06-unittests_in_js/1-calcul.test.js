const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('Addition', () => {
    it('should return 6 when SUM, 5, 1 is given', () => {
        assert.strictEqual(calculateNumber('SUM', 5, 1), 6);
    });
    it('should return 9 when SUM, 4.3, 5.1 are given', () => {
        assert.strictEqual(calculateNumber('SUM', 4.3, 5.1), 9);
    });
  });
  describe('Subtraction', () => {
    it('should return 4 when SUBTRACT, 5, 1 are given', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5, 1), 4);
    })
    it('should return 1 when SUBTRACT, 4.3, 5.3 are given', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 4.3, 5.3), -1);
    });
  })
  describe('Division', () => {
    it('should return Error when DIVIDE, 4, 0 are given', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
    });

    it('should return 5 when DIVIDE, 10, 2 are given', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    });
  });
});