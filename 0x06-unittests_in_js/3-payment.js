const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = Utils.calculateNumber('SUM', totalShipping, totalAmount);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
