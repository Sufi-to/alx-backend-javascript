import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(setAmount) {
    if (typeof setAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = setAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(setCurrency) {
    if (setCurrency instanceof Currency) {
      this._currency = setCurrency;
    } else {
      throw new TypeError('Currency must be a Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount or conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
