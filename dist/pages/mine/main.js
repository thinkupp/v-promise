require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([9],{

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mine__ = __webpack_require__(219);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__mine__["a" /* default */]);

app.$mount();

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_mine_vue__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_46d448c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_mine_vue__ = __webpack_require__(222);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(220)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-46d448c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_mine_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_46d448c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_mine_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mine/mine.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mine.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46d448c6", Component.options)
  } else {
    hotAPI.reload("data-v-46d448c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userInfo: { nickName: '' }
    };
  },
  mounted: function mounted() {
    this.userInfo = getApp().globalData.u;
  },


  methods: {
    fetchVisitRecord: function fetchVisitRecord() {
      wx.navigateTo({
        url: '/pages/visit/main'
      });
    },
    toFeedback: function toFeedback() {
      wx.navigateTo({
        url: '/pages/feedback/main'
      });
    }
  }
});

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mine"
  }, [_c('div', {
    staticClass: "user-info"
  }, [_c('div', {
    staticClass: "about"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.userInfo.avatar
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "nickname"
  }, [_vm._v(_vm._s(_vm.userInfo.nickName))])]), _vm._v(" "), _c('button', {
    staticClass: "update-button"
  }, [_vm._v("更新资料")])], 1), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "我的足迹",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.fetchVisitRecord
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "意见反馈",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.toFeedback
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "举报",
      "mpcomid": '2'
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46d448c6", esExports)
  }
}

/***/ })

},[218]);
//# sourceMappingURL=main.js.map