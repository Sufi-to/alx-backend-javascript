const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi Function', () => {
  it('sendPaymentRequestToApi calls console.log with the given args', () => {
    const irs = sinon.spy(console);
    const stubbedFun = sinon.stub(Utils, 'calculateNumber');

    stubbedFun.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stubbedFun.calledWith('SUM', 100, 20)).to.be.true;
    expect(stubbedFun.callCount).to.be.equal(1);
    expect(irs.log.calledWith('The total is: 10')).to.be.true;
    expect(irs.log.callCount).to.be.equal(1);
    stubbedFun.restore();
    irs.log.restore();
  });
});
