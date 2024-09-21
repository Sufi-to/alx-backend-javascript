const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI Function', () => {
  it('getPaymentTokenFromAPI(success) return promise when success is True', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});
