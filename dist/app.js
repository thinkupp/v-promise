require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([4],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);


// const base_ip = 'http://192.168.0.100:3000/api';
var base_ip = 'http://192.168.8.101:3000/api';

var request = function request(option) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    option.url = base_ip + option.url;
    var userId = getApp().globalData.userId;
    if (!option.header) option.header = {};
    if (userId) option.header.uid = userId;

    wx.request(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, option, {
      success: function success(res) {
        var data = res.data;
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve(data);
        } else {
          if (res.statusCode === 400) {
            wx.showModal({
              title: '提示',
              content: data,
              showCancel: false
            });
          }

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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_index__ = __webpack_require__(97);





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

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(62);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(61)
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

/***/ 61:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
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

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RouteServer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ApiServer__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ModalServer__ = __webpack_require__(96);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$route = __WEBPACK_IMPORTED_MODULE_1__RouteServer__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$api = __WEBPACK_IMPORTED_MODULE_2__ApiServer__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$modal = __WEBPACK_IMPORTED_MODULE_3__ModalServer__["a" /* default */];

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_user__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_appoint__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_comments__ = __webpack_require__(95);




var login = function login(data) {
  return __WEBPACK_IMPORTED_MODULE_0__api_user__["a" /* default */].login(data);
};

var register = function register(data) {
  return __WEBPACK_IMPORTED_MODULE_0__api_user__["a" /* default */].register(data);
};

var createAppoint = function createAppoint(data) {
  return __WEBPACK_IMPORTED_MODULE_1__api_appoint__["a" /* default */].createAppoint(data);
};

var fetchCreateAppoint = function fetchCreateAppoint(params) {
  return __WEBPACK_IMPORTED_MODULE_1__api_appoint__["a" /* default */].fetchCreateAppoint(params);
};

var fetchAppointDetail = function fetchAppointDetail(id) {
  return __WEBPACK_IMPORTED_MODULE_1__api_appoint__["a" /* default */].fetchAppointDetail(id);
};

var publishComment = function publishComment(data) {
  return __WEBPACK_IMPORTED_MODULE_2__api_comments__["a" /* default */].publishComment(data);
};

var fetchAppointComments = function fetchAppointComments(params) {
  return __WEBPACK_IMPORTED_MODULE_2__api_comments__["a" /* default */].fetchAppointComments(params);
};

var fetchJoinAppoint = function fetchJoinAppoint(params) {
  return __WEBPACK_IMPORTED_MODULE_1__api_appoint__["a" /* default */].fetchJoinAppoint(params);
};

var watchAppoint = function watchAppoint(appointId) {
  return __WEBPACK_IMPORTED_MODULE_1__api_appoint__["a" /* default */].watchAppoint(appointId);
};

var supportAppoint = function supportAppoint(params) {
  return __WEBPACK_IMPORTED_MODULE_1__api_appoint__["a" /* default */].supportAppoint(params);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  login: login,
  register: register,
  createAppoint: createAppoint,
  fetchCreateAppoint: fetchCreateAppoint,
  fetchAppointDetail: fetchAppointDetail,
  publishComment: publishComment,
  fetchAppointComments: fetchAppointComments,
  fetchJoinAppoint: fetchJoinAppoint,
  watchAppoint: watchAppoint,
  supportAppoint: supportAppoint
});

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(23);


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

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(23);


var createAppoint = function createAppoint(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/appoint/create',
    data: data,
    method: 'POST'
  });
};

var fetchCreateAppoint = function fetchCreateAppoint(_ref) {
  var id = _ref.id,
      size = _ref.size;

  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/appoint/create?id=' + id + '&size=' + size
  });
};

var fetchAppointDetail = function fetchAppointDetail(id) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/appoint/' + id
  });
};

var fetchJoinAppoint = function fetchJoinAppoint(_ref2) {
  var startId = _ref2.startId,
      size = _ref2.size;

  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/appoint/join?startId=' + startId + '&size=' + size
  });
};

var watchAppoint = function watchAppoint(appointId) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/appoint/watch',
    method: 'POST',
    data: {
      appointId: appointId
    }
  });
};

var supportAppoint = function supportAppoint(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/appoint/support',
    method: 'POST',
    data: data
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  createAppoint: createAppoint,
  fetchCreateAppoint: fetchCreateAppoint,
  fetchAppointDetail: fetchAppointDetail,
  fetchJoinAppoint: fetchJoinAppoint,
  watchAppoint: watchAppoint,
  supportAppoint: supportAppoint
});

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(23);


var publishComment = function publishComment(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/comment',
    data: data,
    method: 'POST'
  });
};

var fetchAppointComments = function fetchAppointComments(_ref) {
  var appointId = _ref.appointId,
      startId = _ref.startId,
      size = _ref.size;

  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/comment/' + appointId + '?startId=' + startId + '&size=' + size
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  publishComment: publishComment,
  fetchAppointComments: fetchAppointComments
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
* 评论内容为空
* */
var emptyCommentTip = function emptyCommentTip() {
  wx.showModal({
    title: '提示',
    content: '请输入评论的内容',
    showCancel: false
  });
};

/*
* 创建时点击允许围观的问号
* */
var onlookersQuestionTip = function onlookersQuestionTip() {
  wx.showModal({
    title: '说明',
    content: '如不勾选此项，只有监督者才能看到此条约定的相关信息',
    showCancel: false
  });
};

/*
* 创建时点击私密的问号
* */
var privateQuestion = function privateQuestion() {
  wx.showModal({
    title: '说明',
    content: '设置为私密后别人将无法在大厅中看到此条约定',
    showCancel: false
  });
};

/*
* 没有权限评论
* */
var noCommentAuthority = function noCommentAuthority() {
  wx.showModal({
    title: '提示',
    content: '只有监督者才能参加评论',
    showCancel: false
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  emptyCommentTip: emptyCommentTip,
  onlookersQuestionTip: onlookersQuestionTip,
  privateQuestion: privateQuestion,
  noCommentAuthority: noCommentAuthority
});

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TimePicker_vue__ = __webpack_require__(45);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('time-picker', __WEBPACK_IMPORTED_MODULE_1__TimePicker_vue__["a" /* default */]);

/***/ })

},[47]);
//# sourceMappingURL=app.js.map