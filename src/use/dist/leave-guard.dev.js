"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLeaveGuard = useLeaveGuard;

var _vueRouter = require("vue-router");

var _vue = require("vue");

function useLeaveGuard(hasChanges) {
  var router = (0, _vueRouter.useRouter)();
  var leave = (0, _vue.ref)(false);
  var canLeave = (0, _vue.ref)(false);
  var leaveTo = (0, _vue.ref)(null);

  var navigate = function navigate() {
    return regeneratorRuntime.async(function navigate$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            leave.value = false;
            canLeave.value = true;
            _context.next = 4;
            return regeneratorRuntime.awrap(router.push(leaveTo.value));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  (0, _vueRouter.onBeforeRouteLeave)(function (to) {
    if (canLeave.value) {
      return true;
    }

    if (hasChanges.value) {
      leave.value = true;
      leaveTo.value = to.path;
      return false;
    }

    return true;
  });
  return {
    leave: leave,
    navigate: navigate
  };
}