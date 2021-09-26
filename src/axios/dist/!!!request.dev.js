"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _router = _interopRequireDefault(require("../router"));

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var requestAxios = _axios["default"].create({
  baseURL: process.env.VUE_APP_FB_URL
});

requestAxios.defaults.params = {};
requestAxios.interceptors.request.use(function _callee(config) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          config.params['auth'] = _store["default"].getters['auth/token'];

          if (!_store["default"].getters['auth/isExpired']) {
            _context.next = 4;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(_store["default"].dispatch('auth/refresh'));

        case 4:
          return _context.abrupt("return", config);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
requestAxios.interceptors.response.use(null, function (error) {
  if (error.response.status === 401) {
    _store["default"].commit('auth/logout');

    _router["default"].push('/auth?message=auth');
  }

  return Promise.reject(error);
});
var _default = requestAxios;
exports["default"] = _default;