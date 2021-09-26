"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _auth = _interopRequireDefault(require("./modules/auth.module"));

var _product = _interopRequireDefault(require("./modules/product.module"));

var _category = _interopRequireDefault(require("./modules/category.module"));

var _cart = _interopRequireDefault(require("./modules/cart.module"));

var _order = _interopRequireDefault(require("./modules/order.module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push((0, _vuex.createLogger)());
}

var _default = (0, _vuex.createStore)({
  plugins: plugins,
  state: function state() {
    return {
      message: null
    };
  },
  mutations: {
    setMessage: function setMessage(state, message) {
      state.message = message;
    },
    clearMessage: function clearMessage(state) {
      state.message = null;
    }
  },
  actions: {
    setMessage: function setMessage(_ref, message) {
      var commit = _ref.commit;
      commit('setMessage', message);
      setTimeout(function () {
        return commit('clearMessage');
      }, 3000);
    }
  },
  modules: {
    auth: _auth["default"],
    product: _product["default"],
    category: _category["default"],
    cart: _cart["default"],
    order: _order["default"]
  }
});

exports["default"] = _default;