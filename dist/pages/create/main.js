require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create__ = __webpack_require__(181);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__create__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_create_vue__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0949817d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_create_vue__ = __webpack_require__(200);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(182)
}
var normalizeComponent = __webpack_require__(0)
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

/***/ 182:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_TimePicker_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AnMore_vue__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_CheckOption_vue__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_UploadImage_vue__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index_js__ = __webpack_require__(17);

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






var MINUTES_OPTION = [5, 10, 20, 30, 40, 50];
var HOURS_OPTION = [1, 2, 3];

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      typeRange: ['起床', '跑步'],
      createRange: ['从不', '每天', '工作日', '节假日'],
      timeRange: [[1, 2, 3], ['分钟', '小时']],
      showAction: false,
      showAnMore: false,
      effectiveIndex: [1, 1],
      tmpEffectiveIndex: [1, 1],
      tmpTimeRange: [[1, 2, 3], ['分钟', '小时']],
      createType: 1, // 约定类型

      formData: {
        startTime: '',
        onlookers: true,
        private: false,
        effectiveTime: 120,
        type: '跑步',
        images: [],
        title: '有人监督，动力十足！',
        des: ''
      },

      editing: false
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

      // 计算十分钟以后的时间
      var minutes = time.getMinutes();
      time.setMinutes(minutes + 10);
      var hours = time.getHours();
      hours = hours < 10 ? '0' + hours : hours;
      minutes = time.getMinutes();
      minutes = minutes < 10 ? '0' + minutes : minutes;
      start = start || hours + ':' + minutes;
      end = end || '08:00';
      this.formData.startTime = part1 + ' ' + start;
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
      this.$modal.onlookersQuestionTip();
    },
    privateQuestion: function privateQuestion() {
      this.$modal.privateQuestion();
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
      this.formData.type = this.typeRange[this.createType];
      this.editing ? this.updateAppoint() : this.createAppoint();
    },
    createAppoint: function createAppoint() {
      this.$api.createAppoint(this.formData).then(function (res) {
        wx.redirectTo({
          url: '/pages/appoint/main?id=' + res.id
        });
      });
    },
    updateAppoint: function updateAppoint() {
      this.$api.updateAppoint(this.formData).then(function (res) {
        wx.redirectTo({
          url: '/pages/appoint/main?id=' + res.id
        });
      });
    },
    timeTypeChange: function timeTypeChange(e) {
      var _e$mp$detail = e.mp.detail,
          column = _e$mp$detail.column,
          value = _e$mp$detail.value;


      var newValue = MINUTES_OPTION;

      if (column) {
        if (value === 1) {
          newValue = HOURS_OPTION;
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
    },
    goHome: function goHome() {
      this.$route.toIndex();
    },
    titleChange: function titleChange(e) {
      this.formData.title = e.mp.detail;
    },
    desChange: function desChange(e) {
      this.formData.des = e.mp.detail;
    }
  },

  onLoad: function onLoad(e) {
    if (e.edit) {
      var editData = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(wx.getStorageSync('APPONT_EDIT_DATA')));
      wx.removeStorageSync('APPONT_EDIT_DATA');

      this.formData = {
        onlookers: editData.onlookers,
        effectiveTime: editData.effectiveTime,
        type: editData.type,
        title: editData.title,
        des: editData.des,
        private: editData.private,
        images: editData.images,
        id: editData.id,
        startTime: Object(__WEBPACK_IMPORTED_MODULE_5__utils_index_js__["b" /* formatTime */])(editData.startTime)

        // 计算有效时间
      };var numberIndex = 0;
      var typeIndex = 0;

      if (editData.effectiveTime >= 60) {
        // 小时
        typeIndex = 1;
        var hours = Math.floor(editData.effectiveTime / 60);
        numberIndex = HOURS_OPTION.indexOf(hours);
        this.$set(this.timeRange, 0, HOURS_OPTION);
      } else {
        // 分钟
        this.$set(this.timeRange, 0, MINUTES_OPTION);
        numberIndex = MINUTES_OPTION.indexOf(editData.effectiveTime);
      }

      // 类型
      this.createType = this.typeRange.indexOf(editData.type);
      this.effectiveIndex = [numberIndex, typeIndex];
      this.editing = true;
    }
  },


  components: {
    TimePicker: __WEBPACK_IMPORTED_MODULE_1__component_TimePicker_vue__["a" /* default */],
    AnMore: __WEBPACK_IMPORTED_MODULE_2__components_AnMore_vue__["a" /* default */],
    CheckOption: __WEBPACK_IMPORTED_MODULE_3__component_CheckOption_vue__["a" /* default */],
    UploadImage: __WEBPACK_IMPORTED_MODULE_4__components_UploadImage_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_AnMore_vue__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_202347ea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_AnMore_vue__ = __webpack_require__(187);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(185)
}
var normalizeComponent = __webpack_require__(0)
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

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 186:
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

/***/ 187:
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

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_CheckOption_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1a0ff0c4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_CheckOption_vue__ = __webpack_require__(195);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(189)
}
var normalizeComponent = __webpack_require__(0)
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

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VCheckBox_vue__ = __webpack_require__(191);
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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_VCheckBox_vue__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9e360dc0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_VCheckBox_vue__ = __webpack_require__(194);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(192)
}
var normalizeComponent = __webpack_require__(0)
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

/***/ 192:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 193:
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

  onLoad: function onLoad() {
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

/***/ 194:
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

/***/ 195:
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_UploadImage_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2878c37c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_UploadImage_vue__ = __webpack_require__(199);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(0)
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

/***/ 197:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 198:
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

/***/ 199:
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

/***/ 200:
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
  }, [_c('check-option', {
    attrs: {
      "select": _vm.formData.onlookers,
      "title": "允许围观",
      "eventid": '4',
      "mpcomid": '6'
    },
    on: {
      "change": _vm.onlookersChange,
      "question": _vm.onlookersQuestion
    }
  }), _vm._v(" "), _c('check-option', {
    attrs: {
      "select": _vm.formData.private,
      "title": "私密",
      "eventid": '5',
      "mpcomid": '7'
    },
    on: {
      "change": _vm.privateChange,
      "question": _vm.privateQuestion
    }
  }), _vm._v(" "), _c('upload-image', {
    attrs: {
      "eventid": '6',
      "mpcomid": '8'
    },
    on: {
      "success": _vm.uploadSuccess
    }
  }), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "mpcomid": '11'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.formData.title,
      "label": "标题",
      "placeholder": "请输入标题",
      "eventid": '7',
      "mpcomid": '9'
    },
    on: {
      "input": _vm.titleChange
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.formData.des,
      "label": "描述",
      "type": "textarea",
      "placeholder": "描述",
      "eventid": '8',
      "mpcomid": '10'
    },
    on: {
      "input": _vm.desChange
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('button', {
    staticClass: "go-home",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.goHome
    }
  }, [_vm._v("首页")]), _vm._v(" "), _c('button', {
    staticClass: "submit-button",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.handleSubmit
    }
  }, [_vm._v(_vm._s(_vm.editing ? "编辑" : "提交"))])], 1)], 1)
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

/***/ })

},[180]);
//# sourceMappingURL=main.js.map