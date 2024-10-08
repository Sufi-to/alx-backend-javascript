const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const URL = 'http://localhost:7865';

  it('GET / returns the appropriate response', (done) => {
    request.get(`${URL}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});