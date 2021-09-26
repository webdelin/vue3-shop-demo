"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currency = currency;
var formatter = new Intl.NumberFormat('de-DE', {
  currency: 'EUR',
  style: 'currency'
});

function currency(value) {
  return formatter.format(value);
}