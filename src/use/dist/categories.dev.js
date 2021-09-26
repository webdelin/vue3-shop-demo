"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCategories = useCategories;

var _vuex = require("vuex");

function useCategories() {
  var store;
  return regeneratorRuntime.async(function useCategories$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = (0, _vuex.useStore)();

          if (!(store.getters['category/categories'].length === 0)) {
            _context.next = 4;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(store.dispatch('category/load'));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}