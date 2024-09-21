const request = require('request');
const { expect } = require('chai');

describe('API integration test for endpoints', () => {
  const URL = 'http://localhost:7865';

  it('GET / returns the appropriate response', (done) => {
    request.get(`${URL}/`, (_error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${URL}/cart/47`, (_error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 for negative numbers of :id', (done) => {
    request.get(`${URL}/cart/-47`, (_error, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 for non-numeric values of :id', (done) => {
    request.get(`${URL}/cart/t400sf`, (_error, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});