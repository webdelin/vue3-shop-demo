"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dbase = _interopRequireDefault(require("../../axios/dbase"));

var _transform = require("../../utils/transform");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  namespaced: true,
  actions: {
    load: function load() {
      var _ref, data;

      return regeneratorRuntime.async(function load$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_dbase["default"].get('/orders.json'));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              return _context.abrupt("return", (0, _transform.transform)(data));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    create: function create(_ref2) {
      var commit, rootGetters, cart, products, order, _loop, _i, _Object$entries;

      return regeneratorRuntime.async(function create$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit, rootGetters = _ref2.rootGetters;
              cart = rootGetters['cart/cart'];
              products = rootGetters['product/products'];
              order = {
                userId: rootGetters['auth/user'].id,
                date: Date.now(),
                items: []
              };

              _loop = function _loop() {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                    key = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];

                var product = products.find(function (p) {
                  return p.id === key;
                });
                var toOrder = {
                  name: product.title,
                  price: product.price,
                  count: value
                };
                var count = product.count - value;
                order.items.push(toOrder); // not important

                commit('product/updateProductCount', {
                  id: key,
                  count: count
                }, {
                  root: true
                });

                _dbase["default"].patch("/products/".concat(key, ".json"), {
                  count: count
                }); // PUT - change full object
                // PATCH - change specific fields

              };

              for (_i = 0, _Object$entries = Object.entries(cart); _i < _Object$entries.length; _i++) {
                _loop();
              }

              commit('cart/clear', null, {
                root: true
              });
              _context2.next = 9;
              return regeneratorRuntime.awrap(_dbase["default"].post('/orders.json', order));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;