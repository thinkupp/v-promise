require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([4],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(51);


var createAppoint = function createAppoint(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/appoint/create',
    data: data,
    method: 'POST'
  });
};

var fetchCreateAppoint = function fetchCreateAppoint() {
  var startIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/appoint/create?startIndex=' + startIndex + '&count=' + count
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  createAppoint: createAppoint,
  fetchCreateAppoint: fetchCreateAppoint
});

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TimePicker_vue__ = __webpack_require__(59);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('time-picker', __WEBPACK_IMPORTED_MODULE_1__TimePicker_vue__["a" /* default */]);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);



// const base_ip = 'http://192.168.0.100:3000/api';
var base_ip = 'http://192.168.8.101:3000/api';

var request = function request(option) {
  return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    option.url = base_ip + option.url;
    var userId = getApp().globalData.userId;
    if (!option.header) option.header = {};
    if (userId) option.header.uid = userId;

    wx.request(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, option, {
      success: function success(res) {
        var data = res.data;
        if ((typeof data === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(data)) === 'object') {
          resolve(data);
        } else {
          reject(data);
        }
      },
      fail: function fail(err) {
        reject(err);
      }
    }));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_index__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_index__ = __webpack_require__(114);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */].mpType = 'app';




Array.prototype.deepCopy = function () {
  return JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(this));
};

// 定义插件
var somePlugin = {
  install: function install() {
    __WEBPACK_IMPORTED_MODULE_2_vue___default.a.mixin({
      onUnload: function onUnload() {
        if (this.$options.data) {
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
        }
      }
    });
  }
  // 使用插件
};__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(somePlugin);

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */]);

app.$mount();

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(71);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(70)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4982749a", Component.options)
  } else {
    hotAPI.reload("data-v-4982749a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {},
  onLaunch: function onLaunch(options) {
    this.globalData = this.$mp.app.globalData;
    this.globalData.scene = options.scene;
  }
});

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RouteServer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ApiServer__ = __webpack_require__(74);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$route = __WEBPACK_IMPORTED_MODULE_1__RouteServer__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$api = __WEBPACK_IMPORTED_MODULE_2__ApiServer__["a" /* default */];

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var to = function to(url) {
  wx.navigateTo({ url: url });
};

var toCreate = function toCreate() {
  to('/pages/create/main');
};

/* harmony default export */ __webpack_exports__["a"] = ({
  toCreate: toCreate
});

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_appoint__ = __webpack_require__(113);




var login = function login(data) {
  return __WEBPACK_IMPORTED_MODULE_1__api_user__["a" /* default */].login(data);
};

var register = function register(data) {
  return __WEBPACK_IMPORTED_MODULE_1__api_user__["a" /* default */].register(data);
};

var createAppoint = function createAppoint(data) {
  return __WEBPACK_IMPORTED_MODULE_2__api_appoint__["a" /* default */].createAppoint(data);
};

var fetchCreateAppoint = function fetchCreateAppoint(params) {
  return __WEBPACK_IMPORTED_MODULE_2__api_appoint__["a" /* default */].fetchCreateAppoint.apply(__WEBPACK_IMPORTED_MODULE_2__api_appoint__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(params));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  login: login,
  register: register,
  createAppoint: createAppoint,
  fetchCreateAppoint: fetchCreateAppoint
});

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(51);


var login = function login(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/users/login',
    data: data,
    method: 'post'
  });
};

var register = function register(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/users/register',
    data: data,
    method: 'post'
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  login: login,
  register: register
});

/***/ })

},[60]);
//# sourceMappingURL=app.js.map