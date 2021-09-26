"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pay = pay;

function pay(_ref) {
  var amount = _ref.amount,
      description = _ref.description,
      accountId = _ref.accountId,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data;
  var widget = new cp.CloudPayments();
  return new Promise(function (resolve, reject) {
    widget.pay('charge', {
      publicId: 'test_api_00000000000000000000001',
      currency: 'EUR',
      skin: 'mini',
      description: description,
      amount: amount,
      accountId: accountId,
      data: data
    }, {
      onSuccess: function onSuccess(options) {
        resolve(options);
      },
      onFail: function onFail(reason, options) {
        reject(reason);
      }
    });
  });
}