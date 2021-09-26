"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dbase = _interopRequireDefault(require("../../axios/dbase"));

var _index = _interopRequireDefault(require("../index"));

var _transform = require("../../utils/transform");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  namespaced: true,
  state: function state() {
    return {
      categories: []
    };
  },
  mutations: {
    setCategories: function setCategories(state, categories) {
      state.categories = categories;
    },
    addCategory: function addCategory(state, category) {
      state.categories.push(category);
    },
    removeCategory: function removeCategory(state, id) {
      state.categories = state.categories.filter(function (c) {
        return c.id !== id;
      });
    }
  },
  actions: {
    load: function load(_ref) {
      var commit, _ref2, data;

      return regeneratorRuntime.async(function load$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap(_dbase["default"].get("/categories.json"));

            case 3:
              _ref2 = _context.sent;
              data = _ref2.data;
              commit('setCategories', (0, _transform.transform)(data));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    create: function create(_ref3, body) {
      var commit, _ref4, data;

      return regeneratorRuntime.async(function create$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref3.commit;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_dbase["default"].post("/categories.json", body));

            case 3:
              _ref4 = _context2.sent;
              data = _ref4.data;
              commit('addCategory', _objectSpread({}, body, {
                id: data.name
              }));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    remove: function remove(_ref5, id) {
      var commit;
      return regeneratorRuntime.async(function remove$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref5.commit;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_dbase["default"]["delete"]("/categories/".concat(id, ".json")));

            case 3:
              commit('removeCategory', id);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  },
  getters: {
    categories: function categories(state) {
      return state.categories;
    }
  }
};
exports["default"] = _default;