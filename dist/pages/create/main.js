require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_AnMore_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_202347ea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_AnMore_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-202347ea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_AnMore_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_202347ea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_AnMore_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/create/components/AnMore.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AnMore.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-202347ea", Component.options)
  } else {
    hotAPI.reload("data-v-202347ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      on: false
    };
  },


  computed: {
    title: function title() {
      return this.on ? '收起更多选项' : '展开更多选项';
    }
  },

  methods: {
    handleClick: function handleClick() {
      this.on = !this.on;
      this.$emit('change', this.on);
    }
  }
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "more common-cell",
    class: _vm.on ? 'on' : 'off',
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('span', {
    staticClass: "more-text"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-arrow more-icon",
    class: {
      select: _vm.on
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-202347ea", esExports)
  }
}

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_CheckOption_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1a0ff0c4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_CheckOption_vue__ = __webpack_require__(173);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(172)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a0ff0c4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_CheckOption_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1a0ff0c4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_CheckOption_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/component/CheckOption.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CheckOption.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a0ff0c4", Component.options)
  } else {
    hotAPI.reload("data-v-1a0ff0c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCheckBox_vue__ = __webpack_require__(107);
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
  components: {
    VCheckBox: __WEBPACK_IMPORTED_MODULE_0__VCheckBox_vue__["a" /* default */]
  },

  props: {
    title: {
      type: String,
      default: ''
    },

    select: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleChange: function handleChange(value) {
      this.$emit('change', value);
    },
    handleQuestion: function handleQuestion() {
      this.$emit('question');
    }
  }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_VCheckBox_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9e360dc0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_VCheckBox_vue__ = __webpack_require__(110);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(108)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9e360dc0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_VCheckBox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9e360dc0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_VCheckBox_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/component/VCheckBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VCheckBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9e360dc0", Component.options)
  } else {
    hotAPI.reload("data-v-9e360dc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      select: false
    };
  },


  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  mounted: function mounted() {
    this.select = this.value;
  },


  methods: {
    handleClick: function handleClick() {
      this.select = !this.select;
      this.$emit('change', this.select);
    }
  }
});

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-check-box",
    class: {
      select: _vm.select
    },
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.select),
      expression: "select"
    }],
    staticClass: "iconfont icon-duihao icon"
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9e360dc0", esExports)
  }
}

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_UploadImage_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2878c37c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_UploadImage_vue__ = __webpack_require__(115);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(113)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2878c37c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_UploadImage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2878c37c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_UploadImage_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/create/components/UploadImage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UploadImage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2878c37c", Component.options)
  } else {
    hotAPI.reload("data-v-2878c37c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 114:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      listData: []
    };
  },


  //    props: {
  //      listData: {
  //        type: Array,
  //        default: function () {
  //          return []
  //        }
  //      }
  //    },

  methods: {
    handleClick: function handleClick() {
      var that = this;

      wx.chooseImage({
        count: 1,
        success: function success(e) {
          console.log(e.tempFilePaths);
          wx.uploadFile({
            url: 'http://192.168.8.249:3000/api/upload/image',
            filePath: e.tempFilePaths[0],
            name: 'image',
            formData: {
              "user": 'create-image'
            },
            success: function success(res) {
              console.log(res);
              if (res.statusCode === 200 && res.data) {
                var data = JSON.parse(res.data);
                if (data.image) {
                  that.listData = that.listData.concat(e.tempFilePaths);
                  that.$emit('success', data.image);
                }
              }
            },
            fail: function fail(err) {
              console.log(err);
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "upload-image-wrapper"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("上传图片")]), _vm._v(" "), _c('div', {
    staticClass: "upload-image"
  }, [_vm._l((_vm.listData), function(img, index) {
    return _c('image', {
      key: index,
      staticClass: "image",
      attrs: {
        "src": img
      }
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "add",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('span', {
    staticClass: "iconfont icon-jiahao icon"
  })])], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2878c37c", esExports)
  }
}

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "create"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('picker', {
    attrs: {
      "value": _vm.createType,
      "range": _vm.typeRange,
      "eventid": '0'
    },
    on: {
      "change": _vm.createTypeChange
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "选择类型",
      "label": "想要别人监督你什么呢",
      "value": _vm.typeRange[_vm.createType],
      "value-class": "create-type",
      "mpcomid": '0'
    }
  })], 1)], 1), _vm._v(" "), (_vm.formData.startTime) ? _c('time-picker', {
    attrs: {
      "value": _vm.formData.startTime,
      "title": "生效时间",
      "border": false,
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "date-change": _vm.startTimeChange
    }
  }) : _vm._e(), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('picker', {
    attrs: {
      "value": _vm.effectiveIndex,
      "mode": "multiSelector",
      "range": _vm.timeRange,
      "eventid": '2'
    },
    on: {
      "change": _vm.timeValueChange,
      "cancel": _vm.timeValueCancel,
      "columnchange": _vm.timeTypeChange
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "有效时间",
      "value": _vm.effectiveValue,
      "value-class": "create-type",
      "mpcomid": '3'
    }
  })], 1)], 1), _vm._v(" "), _c('an-more', {
    attrs: {
      "eventid": '3',
      "mpcomid": '5'
    },
    on: {
      "change": _vm.anMoreChange
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showAnMore),
      expression: "showAnMore"
    }],
    staticClass: "more-option"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '7'
    }
  }, [_c('picker', {
    attrs: {
      "value": _vm.formData.autoCreate,
      "range": _vm.createRange,
      "eventid": '4'
    },
    on: {
      "change": _vm.autoCreateChange
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "自动创建",
      "label": "00:00 系统自动创建",
      "value": _vm.createRange[_vm.autoCreateIndex],
      "value-class": "create-type",
      "mpcomid": '6'
    }
  })], 1)], 1), _vm._v(" "), _c('check-option', {
    attrs: {
      "select": _vm.formData.onlookers,
      "title": "所有人可见",
      "eventid": '5',
      "mpcomid": '8'
    },
    on: {
      "change": _vm.onlookersChange,
      "question": _vm.onlookersQuestion
    }
  }), _vm._v(" "), _c('check-option', {
    attrs: {
      "select": _vm.private,
      "title": "私密",
      "eventid": '6',
      "mpcomid": '9'
    },
    on: {
      "change": _vm.privateChange,
      "question": _vm.privateQuestion
    }
  }), _vm._v(" "), _c('upload-image', {
    attrs: {
      "eventid": '7',
      "mpcomid": '10'
    },
    on: {
      "success": _vm.uploadSuccess
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "submit-button",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.handleSubmit
    }
  }, [_vm._v("提交")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0949817d", esExports)
  }
}

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "check-option common-cell"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-wenhao icon",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.handleQuestion
    }
  })]), _vm._v(" "), _c('v-check-box', {
    attrs: {
      "value": _vm.select,
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.handleChange
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a0ff0c4", esExports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create__ = __webpack_require__(97);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__create__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_create_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0949817d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_create_vue__ = __webpack_require__(116);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(98)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0949817d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_create_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0949817d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_create_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/create/create.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] create.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0949817d", Component.options)
  } else {
    hotAPI.reload("data-v-0949817d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_TimePicker_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AnMore_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_CheckOption_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_UploadImage_vue__ = __webpack_require__(112);
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
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      typeRange: ['起床', '跑步'],
      createRange: ['从不', '每天', '工作日', '节假日'],
      timeRange: [[1, 2, 3], ['分钟', '小时']],
      showAction: false,
      showAnMore: false,
      desc: '有你们在一旁，我可能动力会大些！',
      effectiveIndex: [1, 1],
      tmpEffectiveIndex: [1, 1],
      tmpTimeRange: [[1, 2, 3], ['分钟', '小时']],

      createType: 1, // 约定类型
      autoCreateIndex: 0, // 自动创建选项

      formData: {
        startTime: '',
        onlookers: true,
        private: false,
        effectiveTime: 120,
        autoCreate: '',
        type: '跑步',
        images: []
      }
    };
  },
  mounted: function mounted() {
    this.initData();
  },


  computed: {
    effectiveValue: function effectiveValue() {
      var tIndex = this.effectiveIndex[0];
      var tType = this.effectiveIndex[1];
      return this.timeRange[0][tIndex] + ' ' + this.timeRange[1][tType];
    }
  },

  methods: {
    initData: function initData(part1, start, end) {
      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      month = month < 10 ? '0' + month : month;
      var day = time.getDate();
      day = day < 10 ? '0' + day : day;
      part1 = part1 || year + '-' + month + '-' + day;
      start = start || '07:30';
      end = end || '08:00';
      this.formData.startTime = part1 + ' ' + start;
      this.formData.endTime = part1 + ' ' + end;

      // 初始化有效时间序列
      // this.formData.effectiveTime
    },
    startTimeChange: function startTimeChange(v) {
      this.formData.startTime = v;
    },
    endTimeChange: function endTimeChange(v) {
      this.formData.endTime = v;
    },
    anMoreChange: function anMoreChange() {
      this.showAnMore = !this.showAnMore;
    },
    onlookersChange: function onlookersChange(v) {
      this.formData.onlookers = v;
    },
    privateChange: function privateChange(v) {
      this.formData.private = v;
    },
    onlookersQuestion: function onlookersQuestion() {
      wx.showModal({
        title: '说明',
        content: '勾选此项别人便有机会在大厅中看到您的约定',
        showCancel: false
      });
    },
    privateQuestion: function privateQuestion() {
      wx.showModal({
        title: '说明',
        content: '勾选此项则只有监督者才能看到此条约定的相关信息',
        showCancel: false
      });
    },
    handleSubmit: function handleSubmit() {
      var mIndex = this.effectiveIndex[0];
      var mType = this.effectiveIndex[1];
      var time = this.timeRange[0][mIndex];
      if (mType === 1) {
        // 小时
        time *= 60;
      }

      this.formData.effectiveTime = time;
      this.formData.autoCreate = this.createRange[this.autoCreateIndex];
      this.formData.type = this.typeRange[this.createType];

      console.log(this.formData);
    },
    timeTypeChange: function timeTypeChange(e) {
      var _e$mp$detail = e.mp.detail,
          column = _e$mp$detail.column,
          value = _e$mp$detail.value;


      var newValue = [5, 10, 20, 30, 40, 50];

      if (column) {
        if (value === 1) {
          newValue = [1, 2, 3];
        }

        this.$set(this.timeRange, 0, newValue);
      }

      this.$set(this.effectiveIndex, column, value);
    },
    timeValueChange: function timeValueChange(e) {
      var valueIndexAry = e.mp.detail.value;

      this.effectiveIndex = valueIndexAry;
      this.tmpEffectiveIndex = valueIndexAry.deepCopy();
      this.tmpTimeRange = this.timeRange.deepCopy();
    },
    timeValueCancel: function timeValueCancel() {
      this.effectiveIndex = this.tmpEffectiveIndex.deepCopy();
      this.timeRange = this.tmpTimeRange.deepCopy();
    },
    autoCreateChange: function autoCreateChange(e) {
      this.autoCreateIndex = Number(e.mp.detail.value);
    },
    createTypeChange: function createTypeChange(e) {
      this.createType = Number(e.mp.detail.value);
    },
    uploadSuccess: function uploadSuccess(image) {
      this.formData.images.push(image);
    }
  },

  components: {
    TimePicker: __WEBPACK_IMPORTED_MODULE_0__component_TimePicker_vue__["a" /* default */],
    AnMore: __WEBPACK_IMPORTED_MODULE_1__components_AnMore_vue__["a" /* default */],
    CheckOption: __WEBPACK_IMPORTED_MODULE_2__component_CheckOption_vue__["a" /* default */],
    UploadImage: __WEBPACK_IMPORTED_MODULE_3__components_UploadImage_vue__["a" /* default */]
  }
});

/***/ })

},[96]);
//# sourceMappingURL=main.js.map