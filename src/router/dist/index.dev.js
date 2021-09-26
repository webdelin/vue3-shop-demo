"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var routes = [{
  path: '/',
  name: 'Shop',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Shop.vue'));
    });
  },
  meta: {
    layout: 'main',
    auth: false
  }
}, {
  path: '/product/:id',
  name: 'Product',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Product.vue'));
    });
  },
  meta: {
    layout: 'main',
    auth: false
  }
}, {
  path: '/cart',
  name: 'Cart',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Cart.vue'));
    });
  },
  meta: {
    layout: 'main',
    auth: false
  }
}, {
  path: '/auth',
  name: 'Auth',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Auth.vue'));
    });
  },
  meta: {
    layout: 'auth',
    auth: false
  }
}, {
  path: '/thanks',
  name: 'Thanks',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Thanks.vue'));
    });
  },
  meta: {
    layout: 'main',
    auth: false
  }
}, {
  path: '/admin',
  name: 'Admin',
  redirect: {
    name: 'AdminProducts'
  },
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/admin/Admin.vue'));
    });
  },
  meta: {
    admin: true,
    layout: 'admin'
  },
  children: [{
    path: 'products',
    name: 'AdminProducts',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/admin/Products.vue'));
      });
    }
  }, {
    path: 'playground',
    name: 'Playground',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/admin/Playground.vue'));
      });
    }
  }, {
    path: 'categories',
    name: 'AdminCategories',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/admin/Categories.vue'));
      });
    }
  }, {
    path: 'orders',
    name: 'AdminOrders',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/admin/Orders.vue'));
      });
    }
  }, {
    path: 'product/:id',
    name: 'AdminProduct',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/admin/Product.vue'));
      });
    }
  }]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});
router.beforeEach(function (to, from, next) {
  var requireAuth = to.meta.auth;
  var requireAdmin = to.meta.admin;

  if (requireAdmin) {
    if (_store["default"].getters['auth/isAdmin']) {
      return next();
    } else {
      return next('/auth?message=admin');
    }
  }

  if (requireAuth) {
    if (_store["default"].getters['auth/isAuthenticated']) {
      return next();
    } else {
      return next('/auth?message=auth');
    }
  }

  next();
});
var _default = router;
exports["default"] = _default;