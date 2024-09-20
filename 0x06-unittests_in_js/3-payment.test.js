const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi function', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method from Utils', () => {
    const irs = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(irs.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(irs.calculateNumber.callCount).to.be.equal(1);
    irs.calculateNumber.restore();
  });
});

