require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(32);


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
    url: '/appoint/detail/' + id
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

var clockIn = function clockIn(appointId) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/appoint/clock-in',
    data: { appointId: appointId },
    method: 'POST'
  });
};

var supporters = function supporters(appointId) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/appoint/supporters?appoint_id=' + appointId
  });
};

var unSupporters = function unSupporters(appointId) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/appoint/un-supporters?appoint_id=' + appointId
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  createAppoint: createAppoint,
  fetchCreateAppoint: fetchCreateAppoint,
  fetchAppointDetail: fetchAppointDetail,
  fetchJoinAppoint: fetchJoinAppoint,
  watchAppoint: watchAppoint,
  supportAppoint: supportAppoint,
  clockIn: clockIn,
  supporters: supporters,
  unSupporters: unSupporters
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(32);


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

var commentLike = function commentLike(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */])({
    url: '/comment/like',
    data: data,
    method: 'POST'
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  publishComment: publishComment,
  fetchAppointComments: fetchAppointComments,
  commentLike: commentLike
});

/***/ }),

/***/ 112:
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TimePicker_vue__ = __webpack_require__(58);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('time-picker', __WEBPACK_IMPORTED_MODULE_1__TimePicker_vue__["a" /* default */]);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);



var base_ip = 'http://192.168.0.100:3000/api';
// const base_ip = 'http://192.168.8.101:3000/api';

var request = function request(option) {
  return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    option.url = base_ip + option.url;
    var userId = getApp().globalData.userId;
    if (!option.header) option.header = {};
    if (userId) option.header.uid = userId;

    wx.request(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, option, {
      success: function success(res) {
        var data = res.data;
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve(data);
        } else {
          var message = data;
          if (typeof data === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(data)) {
            message = data.message || data.toString();
          }
          if (res.statusCode === 400) {
            wx.showModal({
              title: '提示',
              content: message,
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

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_index__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_index__ = __webpack_require__(113);





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

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(70);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(69)
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

/***/ 69:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 70:
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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RouteServer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ApiServer__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ModalServer__ = __webpack_require__(112);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$route = __WEBPACK_IMPORTED_MODULE_1__RouteServer__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$api = __WEBPACK_IMPORTED_MODULE_2__ApiServer__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$modal = __WEBPACK_IMPORTED_MODULE_3__ModalServer__["a" /* default */];

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_user__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_appoint__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_comments__ = __webpack_require__(111);




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

var clockIn = function clockIn(appointId) {
  return __WEBPACK_IMPORTED_MODULE_1__api_appoint__["a" /* default */].clockIn(appointId);
};

var supporters = function supporters(appointId) {
  return __WEBPACK_IMPORTED_MODULE_1__api_appoint__["a" /* default */].supporters(appointId);
};

var unSupporters = function unSupporters(appointId) {
  return __WEBPACK_IMPORTED_MODULE_1__api_appoint__["a" /* default */].unSupporters(appointId);
};

var commentLike = function commentLike(data) {
  return __WEBPACK_IMPORTED_MODULE_2__api_comments__["a" /* default */].commentLike(data);
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
  supportAppoint: supportAppoint,
  clockIn: clockIn,
  supporters: supporters,
  unSupporters: unSupporters,
  commentLike: commentLike
});

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(32);


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