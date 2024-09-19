const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('Addition', () => {
    it('should return 6 when SUM, 5, 1 is given', () => {
      expect(calculateNumber('SUM', 5, 1)).to.equal(6);
    });
    it('should return 9 when SUM, 4.3, 5.1 are given', () => {
      expect(calculateNumber('SUM', 4.3, 5.1)).to.equal(9);
    });
  });

  describe('Subtraction', () => {
    it('should return 4 when SUBTRACT, 5, 1 are given', () => {
      expect(calculateNumber('SUBTRACT', 5, 1)).to.equal(4);
    });
    it('should return 1 when SUBTRACT, 4.3, 5.3 are given', () => {
      expect(calculateNumber('SUBTRACT', 4.3, 5.3)).to.equal(-1);
    });
  });

  describe('Division', () => {
    it('should return "Error" when DIVIDE, 4, 0 are given', () => {
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });
    it('should return 5 when DIVIDE, 10, 2 are given', () => {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });
  });
});
