"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.different = different;

function different(ref, initial) {
  var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return fields.reduce(function (acc, k) {
    return acc && ref.value[k] !== initial[k];
  }, true);
}