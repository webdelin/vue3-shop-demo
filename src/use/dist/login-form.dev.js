"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLoginForm = useLoginForm;

var _veeValidate = require("vee-validate");

var yup = _interopRequireWildcard(require("yup"));

var _vue = require("vue");

var _vuex = require("vuex");

var _vueRouter = require("vue-router");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useLoginForm() {
  var store = (0, _vuex.useStore)();
  var router = (0, _vueRouter.useRouter)();

  var _useForm = (0, _veeValidate.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      isSubmitting = _useForm.isSubmitting,
      submitCount = _useForm.submitCount;

  var _useField = (0, _veeValidate.useField)('email', yup.string().trim().required('Bitte geben Sie email ein').email('Sie müssen eine gültige E-Mail eingeben')),
      email = _useField.value,
      eError = _useField.errorMessage,
      eBlur = _useField.handleBlur;

  var MIN_LENGTH = 6;

  var _useField2 = (0, _veeValidate.useField)('password', yup.string().trim().required('Bitte geben Sie das Passwort ein').min(MIN_LENGTH, "Das Passwort darf nicht kleiner als ".concat(MIN_LENGTH, " zeichen sein"))),
      password = _useField2.value,
      pError = _useField2.errorMessage,
      pBlur = _useField2.handleBlur;

  var isTooManyAttempts = (0, _vue.computed)(function () {
    return submitCount.value >= 3;
  });
  (0, _vue.watch)(isTooManyAttempts, function (val) {
    if (val) {
      setTimeout(function () {
        return submitCount.value = 0;
      }, 1500);
    }
  });
  var onSubmit = handleSubmit(function _callee(values) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(store.dispatch('auth/login', values));

          case 3:
            router.push({
              name: 'Admin'
            });
            _context.next = 8;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 6]]);
  });
  return {
    email: email,
    password: password,
    eError: eError,
    pError: pError,
    eBlur: eBlur,
    pBlur: pBlur,
    onSubmit: onSubmit,
    isSubmitting: isSubmitting,
    isTooManyAttempts: isTooManyAttempts
  };
}