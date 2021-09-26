"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _store = _interopRequireDefault(require("../store"));

var _router = _interopRequireDefault(require("../router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseAxios = _axios["default"].create({
  baseURL: process.env.VUE_APP_DBASE
});

baseAxios.defaults.params = {};
baseAxios.interceptors.request.use(function _callee(config) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (_store["default"].getters['auth/isAuthenticated']) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", config);

        case 2:
          if (!_store["default"].getters['auth/isExpired']) {
            _context.next = 5;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(_store["default"].dispatch('auth/refresh'));

        case 5:
          config.params['auth'] = _store["default"].getters['auth/token'];
          return _context.abrupt("return", config);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
baseAxios.interceptors.response.use(null, function (error) {
  if (error.response.status === 401) {
    _store["default"].commit('auth/logout');

    _router["default"].push('/auth?message=auth');
  }

  return Promise.reject(error);
});
var _default = baseAxios;
exports["default"] = _default;