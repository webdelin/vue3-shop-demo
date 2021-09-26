"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dbase = _interopRequireDefault(require("../../axios/dbase"));

var _transform = require("../../utils/transform");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  namespaced: true,
  state: function state() {
    return {
      products: []
    };
  },
  mutations: {
    setProducts: function setProducts(state, product) {
      state.products = product;
    },
    addProduct: function addProduct(state, product) {
      state.products.push(product);
    },
    updateProductCount: function updateProductCount(state, _ref) {
      var id = _ref.id,
          count = _ref.count;
      var product = state.products.find(function (p) {
        return p.id === id;
      });
      product.count = count;
    }
  },
  actions: {
    create: function create(_ref2, payload) {
      var commit, dispatch, _ref3, data;

      return regeneratorRuntime.async(function create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref2.commit, dispatch = _ref2.dispatch;
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(_dbase["default"].post("/products.json", payload));

            case 4:
              _ref3 = _context.sent;
              data = _ref3.data;
              commit('addProduct', _objectSpread({}, payload, {
                id: data.name
              }));
              dispatch('setMessage', {
                value: 'Artikel erfolgreich erstellt',
                type: 'primary'
              }, {
                root: true
              });
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              dispatch('setMessage', {
                value: _context.t0.message,
                type: 'danger'
              }, {
                root: true
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 10]]);
    },
    load: function load(_ref4) {
      var commit, _ref5, data;

      return regeneratorRuntime.async(function load$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref4.commit;
              _context2.prev = 1;
              _context2.next = 4;
              return regeneratorRuntime.awrap(_dbase["default"].get("/products.json"));

            case 4:
              _ref5 = _context2.sent;
              data = _ref5.data;
              commit('setProducts', (0, _transform.transform)(data));
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              commit('setMessage', {
                value: _context2.t0.message,
                type: 'danger'
              }, {
                root: true
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 9]]);
    },
    loadOne: function loadOne(_ref6, id) {
      var commit, dispatch, _ref7, data;

      return regeneratorRuntime.async(function loadOne$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref6.commit, dispatch = _ref6.dispatch;
              _context3.prev = 1;
              _context3.next = 4;
              return regeneratorRuntime.awrap(_dbase["default"].get("/products/".concat(id, ".json")));

            case 4:
              _ref7 = _context3.sent;
              data = _ref7.data;
              return _context3.abrupt("return", _objectSpread({}, data, {
                id: id
              }));

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              dispatch('setMessage', {
                value: _context3.t0.message,
                type: 'danger'
              }, {
                root: true
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[1, 9]]);
    },
    remove: function remove(_ref8, id) {
      var dispatch;
      return regeneratorRuntime.async(function remove$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch = _ref8.dispatch;
              _context4.prev = 1;
              _context4.next = 4;
              return regeneratorRuntime.awrap(_dbase["default"]["delete"]("/products/".concat(id, ".json")));

            case 4:
              dispatch('setMessage', {
                value: 'Artikel gelöscht',
                type: 'primary'
              }, {
                root: true
              });
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](1);
              dispatch('setMessage', {
                value: _context4.t0.message,
                type: 'danger'
              }, {
                root: true
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[1, 7]]);
    },
    update: function update(_ref9, product) {
      var dispatch, _ref10, data;

      return regeneratorRuntime.async(function update$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch = _ref9.dispatch;
              _context5.prev = 1;
              _context5.next = 4;
              return regeneratorRuntime.awrap(_dbase["default"].put("/products/".concat(product.id, ".json"), product));

            case 4:
              _ref10 = _context5.sent;
              data = _ref10.data;
              dispatch('setMessage', {
                value: 'Товар обновлен',
                type: 'primary'
              }, {
                root: true
              });
              return _context5.abrupt("return", data);

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](1);
              dispatch('setMessage', {
                value: _context5.t0.message,
                type: 'danger'
              }, {
                root: true
              });

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[1, 10]]);
    }
  },
  getters: {
    products: function products(state) {
      return [].concat(_toConsumableArray(state.products.filter(function (p) {
        return p.count !== 0;
      })), _toConsumableArray(state.products.filter(function (p) {
        return p.count === 0;
      })));
    }
  }
};
exports["default"] = _default;