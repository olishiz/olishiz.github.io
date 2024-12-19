webpackJsonp(["app"],{

/***/ "./app/assets/images/circuits-full.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/circuits-full.svg";

/***/ }),

/***/ "./app/assets/images/marco-full.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/marco-full.jpg";

/***/ }),

/***/ "./app/assets/images/marco.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/marco.jpg";

/***/ }),

/***/ "./app/assets/images/oliver.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/oliver.jpg";

/***/ }),

/***/ "./app/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_promise__ = __webpack_require__("./node_modules/core-js/es6/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_fn_promise__ = __webpack_require__("./node_modules/core-js/fn/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_fn_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_fn_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_intersection_observer__ = __webpack_require__("./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_intersection_observer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_intersection_observer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_what_input__ = __webpack_require__("./node_modules/what-input/dist/what-input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_what_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_what_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_Root__ = __webpack_require__("./app/assets/js/containers/Root/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__("./app/assets/js/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_mq__ = __webpack_require__("./app/assets/js/shared/mq.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_swipe__ = __webpack_require__("./app/assets/js/directives/swipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_resize__ = __webpack_require__("./app/assets/js/directives/resize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_styles_breakpoints_scss__ = __webpack_require__("./app/assets/styles/_breakpoints.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_styles_breakpoints_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_styles_breakpoints_scss__);

/**
 * Main Application File
 */

//import 'babel-polyfill';














__WEBPACK_IMPORTED_MODULE_5_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8__shared_mq__["a" /* default */], { breakpoints: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ none: 0 }, __WEBPACK_IMPORTED_MODULE_11_styles_breakpoints_scss___default.a), ssr: 'desktop' });

__WEBPACK_IMPORTED_MODULE_5_vue__["a" /* default */].directive('swipe', __WEBPACK_IMPORTED_MODULE_9__directives_swipe__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_5_vue__["a" /* default */].directive('resize', __WEBPACK_IMPORTED_MODULE_10__directives_resize__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_5_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_5_vue__["a" /* default */]({
    store: __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */],
    el: '#app-root',
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_6__containers_Root__["a" /* default */]);
    }
});

/***/ }),

/***/ "./app/assets/js/components/Loader/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/components/Loader/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2590b1f3_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2590b1f3\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/components/Loader/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-2590b1f3\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./loader.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2590b1f3\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Loader/loader.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-2590b1f3")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2590b1f3\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Loader/loader.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2590b1f3_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/components/Loader/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2590b1f3", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-2590b1f3", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/components/Page/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/components/Page/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f3c452a2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f3c452a2\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/components/Page/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-f3c452a2\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./page.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3c452a2\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Page/page.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-f3c452a2")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3c452a2\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Page/page.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f3c452a2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/components/Page/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3c452a2", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-f3c452a2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/components/Section/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/components/Section/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ec87744a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ec87744a\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/components/Section/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-ec87744a\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./section.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec87744a\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Section/section.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-ec87744a")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec87744a\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Section/section.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ec87744a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/components/Section/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec87744a", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-ec87744a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/components/SmoothScrollbar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_smooth_scrollbar__ = __webpack_require__("./node_modules/smooth-scrollbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");



/* harmony default export */ __webpack_exports__["a"] = ({

    props: {
        options: __WEBPACK_IMPORTED_MODULE_1_vue_types__["a" /* default */].object,
        tagName: String,
        active: __WEBPACK_IMPORTED_MODULE_1_vue_types__["a" /* default */].bool
    },

    render: function render(h) {
        if (this.tagName) return h(this.tagName, this.$slots.default);
        return this.$slots.default[0];
    },


    watch: {
        active: function active(_active) {
            this.$nextTick(_active ? this.attach : this.destroy);
        }
    },

    mounted: function mounted() {
        if (this.active) {
            this.$nextTick(this.attach);
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.destroy();
    },


    methods: {
        attach: function attach() {
            var _this = this;

            if (!this.scrollbar) {
                var el = this.$el || this.$slots.default[0].elm;
                this.scrollbar = __WEBPACK_IMPORTED_MODULE_0_smooth_scrollbar__["a" /* default */].init(el, this.options);
                this.scrollbar.addListener(function (status) {
                    return _this.$emit('scroll', status);
                });
            } else {
                this.scrollbar.update();
            }
        },
        destroy: function destroy() {
            if (this.scrollbar) {
                var el = this.$el || this.$slots.default[0].elm;
                el.removeAttribute('data-scrollbar');
                this.scrollbar.destroy();
                this.scrollbar = null;
            }
        }
    }
});

/***/ }),

/***/ "./app/assets/js/components/Wrapper/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc54ebee_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_stripWithFunctional_true_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-dc54ebee\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{\"stripWithFunctional\":true}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/components/Wrapper/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-dc54ebee\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./wrapper.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc54ebee\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Wrapper/wrapper.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-dc54ebee")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc54ebee\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Wrapper/wrapper.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
  var __vue_template_functional__ = true
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc54ebee_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_stripWithFunctional_true_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/components/Wrapper/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dc54ebee", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.rerender("data-v-dc54ebee", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/containers/Contacts/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Contacts/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bc14a77_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1bc14a77\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Contacts/index.vue");
var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bc14a77_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/containers/Contacts/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bc14a77", Component.options)
  } else {
    hotAPI.reload("data-v-1bc14a77", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./app/assets/js/containers/Cover/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Cover/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_639dcfe9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-639dcfe9\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Cover/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-639dcfe9\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./cover.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-639dcfe9\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/Cover/cover.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-639dcfe9")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-639dcfe9\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/Cover/cover.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_639dcfe9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/containers/Cover/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-639dcfe9", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-639dcfe9", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/containers/Education/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Education/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f70cb1cc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f70cb1cc\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Education/index.vue");
var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f70cb1cc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/containers/Education/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f70cb1cc", Component.options)
  } else {
    hotAPI.reload("data-v-f70cb1cc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./app/assets/js/containers/Jobs/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Jobs/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2269ab3a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2269ab3a\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Jobs/index.vue");
var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2269ab3a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/containers/Jobs/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2269ab3a", Component.options)
  } else {
    hotAPI.reload("data-v-2269ab3a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./app/assets/js/containers/Navigation/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Navigation/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55fce8b8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-55fce8b8\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Navigation/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-55fce8b8\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./nav.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55fce8b8\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/Navigation/nav.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-55fce8b8")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55fce8b8\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/Navigation/nav.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55fce8b8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/containers/Navigation/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55fce8b8", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-55fce8b8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/containers/PageList/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/PageList/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47c9fd1e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47c9fd1e\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/PageList/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-47c9fd1e\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./page-list.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47c9fd1e\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/PageList/page-list.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-47c9fd1e")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47c9fd1e\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/PageList/page-list.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47c9fd1e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/containers/PageList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47c9fd1e", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-47c9fd1e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/containers/Portfolio/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Portfolio/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ffabcba_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5ffabcba\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Portfolio/index.vue");
var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ffabcba_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/containers/Portfolio/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ffabcba", Component.options)
  } else {
    hotAPI.reload("data-v-5ffabcba", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./app/assets/js/containers/Root/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Root/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a4210c6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2a4210c6\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Root/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-2a4210c6\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!../../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a4210c6\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/assets/js/containers/Root/index.vue")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-2a4210c6")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a4210c6\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/assets/js/containers/Root/index.vue")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a4210c6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/containers/Root/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a4210c6", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-2a4210c6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/containers/Skills/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Skills/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a5b4ac34_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a5b4ac34\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Skills/index.vue");
var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a5b4ac34_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/containers/Skills/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5b4ac34", Component.options)
  } else {
    hotAPI.reload("data-v-a5b4ac34", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./app/assets/js/database/education.json":
/***/ (function(module, exports) {

module.exports = [{"id":0,"institute":"Taylor's University","date-graduated":"December 2018","title":"Bachelor's Degree in Computer Science","grade":"<abbr title=\"Cumulative Grade Point Average\">CGPA</abbr> 3.88/4.00"}]

/***/ }),

/***/ "./app/assets/js/database/jobs.json":
/***/ (function(module, exports) {

module.exports = [{"id":3,"company":"EDAG Mobility IT","from":"2022-07-18","to":"2024-10-31","duration":"2 years 4 months","title":"Senior Full Stack Developer","description":"Collaborating with a leading German automotive company, engaged in the development of comprehensive automotive projects from initial concept to implementation and validation, ensuring top-notch quality and performance.","_link":"https://my.edag.com/en/"},{"id":2,"company":"Etiqa Insurance and Takaful","from":"2020-09-17","to":"2022-07-17","duration":"2 years","title":"Full Stack Developer","description":"Working as Full Stack Developer for Insurance Company","_link":"https://etiqa.com.my/"},{"id":1,"company":"iFAST Corporation Ltd","from":"2019-02-01","to":"2019-11-01","duration":"10 months","title":"Full Stack Developer","description":"Working as Full Stack Engineer for multiple <abbr title=\"Business-To-Business\">B2B</abbr> Projects and maintaining/enhancing existing web apps","_link":"http://www.ifastcorp.com/"},{"id":0,"company":"Synergize Global","from":"2017-11-01","to":"2018-07-01","duration":"9 months","title":"Business Analyst Internship","description":"Analyse and strategies plans to approach a more effective collaborative events","_link":"https://www.facebook.com/synergize.global/"}]

/***/ }),

/***/ "./app/assets/js/database/portfolio.works.json":
/***/ (function(module, exports) {

module.exports = [{"id":"bora","project":"BORA Website","date":"2022-07-07","stack":"WebFlow","tasks-description":"Developing and designing NGO website using WebFlow","_link":"https://www.bringingbackourrareanimals.org/"},{"id":"rs-prop","project":"RS Property Services","date":"2022-01-01","stack":"HTML, JavaScript, CSS","tasks-description":"Developing and designing interior design website for client.","_link":"https://rspropservices.com/"},{"id":"mqbc-my","project":"Malaysia-Qatar Business Council Website","date":"2021-09-01","stack":"HTML, JavaScript, CSS","tasks-description":"Developing and designing business council website and configuring email domains for client.","_link":"https://mqbc.com.my/"},{"id":"frankitas-website","project":"Frankitas Website 2.0","date":"2020-01-01","stack":"HTML, Liquid, Shopify","tasks-description":"Modifying premium theme's code and server configuration for domains. Optimizing site structure to improve SEO rankings.","_link":"https://www.frankitas.co/"},{"id":"aquachain-website","project":"Aquachain Website","date":"2018-06-01","stack":"HTML, CSS, Javascript, Frontend Design System","tasks-description":"Contributed to design for Aquachain landing page and logo.","_link":"https://aquachain.github.io/"}]

/***/ }),

/***/ "./app/assets/js/database/skills.team.json":
/***/ (function(module, exports) {

module.exports = [{"label":"Workflow","ico":"split","data":[{"id":"scrum","label":"Scrum","level":90},{"id":"lean","label":"Lean Frontend","level":100},{"id":"code-review","label":"Code Review","level":100},{"id":"beer","label":"After Work Beers","level":100}]},{"label":"Tools","ico":"organization","data":[{"id":"vcs","label":"Git","level":100},{"id":"svn","label":"SVN","level":100},{"id":"github","label":"Github / Bitbucket","level":100},{"id":"jenkins","label":"Jenkins","level":80},{"id":"trello","label":"Trello","level":100},{"id":"docker","label":"Docker","level":80}]}]

/***/ }),

/***/ "./app/assets/js/database/skills.tech.json":
/***/ (function(module, exports) {

module.exports = [{"label":"Languages","ico":"code","data":[{"id":"html5","label":"HTML5","level":100},{"id":"css3","label":"CSS3","level":100},{"id":"es2015","label":"JavaScript (ES2015+)","level":100},{"id":"java","label":"Java","level":90},{"id":"kotlin","label":"Kotlin","level":90}]},{"label":"Front-End JavaScript Libraries","ico":"extension","data":[{"id":"bootstrap","label":"Bootstrap v4.0","level":100},{"id":"angularJs","label":"AngularJS 1.x","level":80},{"id":"angular","label":"Angular 9+","level":90},{"id":"dom-libraries","label":"jQuery 3+","level":100},{"id":"react-js","label":"React JS","level":80}]},{"label":"Back-End Framework","ico":"checklist","data":[{"id":"laravel","label":"Laravel","level":90},{"id":"nestJS","label":"NestJS","level":90},{"id":"spring-framework","label":"Spring Framework","level":80},{"id":"hibernate","label":"Hibernate","level":80},{"id":"nodejs","label":"NodeJS","level":90}]},{"label":"Database","ico":"terminal","data":[{"id":"sql","label":"SQL","level":100},{"id":"dml","label":"DML","level":100},{"id":"ddl","label":"DDL","level":100}]},{"label":"Best Practices","ico":"heart","data":[{"id":"progressive","label":"Progressive Enhancement","level":100},{"id":"bem","label":"Atomic Design / BEM","level":100},{"id":"a11y","label":"Accessibility","level":80},{"id":"responsive","label":"Responsive Design","level":100},{"id":"ds","label":"Design Systems","level":80}]},{"label":"Tools","ico":"pencil","data":[{"id":"ide","label":"Intellij IDEA Ultimate","level":100},{"id":"database","label":"Intellij Database Tool","level":100},{"id":"vagrant","label":"Vagrant","level":90},{"id":"vcs","label":"Sourcetree","level":90}]}]

/***/ }),

/***/ "./app/assets/js/database/social.json":
/***/ (function(module, exports) {

module.exports = [{"type":"twitter","url":"https://twitter.com/olishiz","label":"@olishiz"},{"type":"pencil","url":"mailto:zhuen1101@hotmail.com","label":"zhuen1101@hotmail.com"},{"type":"github","url":"https://github.com/olishiz","label":"olishiz"},{"type":"linkedin","url":"https://www.linkedin.com/in/olishiz/","label":"in/olishiz"},{"type":"pdf","url":"https://drive.google.com/file/d/18vt0gNUfqKFAfTePCdUjvpRx6zw8BJv4/view","label":"pdf/resume"}]

/***/ }),

/***/ "./app/assets/js/directives/resize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isServer(vnode) {
    return typeof vnode.componentInstance !== 'undefined' && vnode.componentInstance.$isServer;
}

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'v-resize',

    bind: function bind(el, _ref, vnode) {
        var value = _ref.value;


        if (el.__resize || isServer(vnode)) {
            return;
        }

        var print = false;

        var printMQ = window.matchMedia('print');

        printMQ.addListener(function (_ref2) {
            var matches = _ref2.matches;

            print = matches;
        });

        var resizeHandler = function resizeHandler() {
            if (print === false) {
                value.apply(undefined, arguments);
            }
        };

        el.__resize = resizeHandler; //eslint-disable-line no-param-reassign

        window.addEventListener('resize', resizeHandler, false);
        window.addEventListener('orientationchange', resizeHandler, false);
    },
    unbind: function unbind(el, binding, vnode) {
        if (isServer(vnode)) {
            return;
        }

        var resize = el.__resize;
        if (typeof resize === 'function') {
            window.removeEventListener('resize', resize, false);
            window.removeEventListener('orientationchange', resize, false);
            delete el.__resize; //eslint-disable-line no-param-reassign
        }
    }
});

/***/ }),

/***/ "./app/assets/js/directives/swipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);


var SwipeEvent = function () {
    function SwipeEvent(el) {
        var _this = this;

        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            onSwipe = _ref.onSwipe,
            _ref$modifiers = _ref.modifiers,
            modifiers = _ref$modifiers === undefined ? {} : _ref$modifiers;

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SwipeEvent);

        this.touchstartY = 0;
        this.touchendY = 0;
        this.threshold = 20;

        this.onTouchStart = function (event) {
            _this.touchstartY = event.changedTouches[0].screenY;
        };

        this.onTouchEnd = function (event) {
            _this.touchendY = event.changedTouches[0].screenY;
            _this.handleGesture(event);
        };

        this.el = el;
        this.callback = onSwipe;
        this.modifiers = modifiers;
    }

    SwipeEvent.prototype.handleGesture = function handleGesture(event) {
        var touchendY = this.touchendY,
            touchstartY = this.touchstartY,
            threshold = this.threshold;


        if (Math.abs(touchendY - touchstartY) < threshold) {
            return;
        }

        var dir = touchendY < touchstartY ? 'down' : 'up';
        event.swipeDirection = dir; //eslint-disable-line no-param-reassign

        if (!this.modifiers.up && !this.modifiers.down) {
            this.callback(event);
            return;
        }

        if (this.modifiers.up && dir === 'up') {
            this.callback(event);
            return;
        }

        if (this.modifiers.down && dir === 'down') {
            this.callback(event);
        }
    };

    return SwipeEvent;
}();

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'v-swipe',

    bind: function bind(el, _ref2) {
        var value = _ref2.value,
            modifiers = _ref2.modifiers;


        if (el.__swipe) {
            return;
        }

        var swipe = new SwipeEvent(el, { onSwipe: value, modifiers: modifiers });

        el.__swipe = swipe; //eslint-disable-line no-param-reassign

        el.addEventListener('touchstart', swipe.onTouchStart, false);
        el.addEventListener('touchend', swipe.onTouchEnd, false);
    },
    unbind: function unbind(el) {
        var swipe = el.__swipe;
        if (swipe) {
            el.removeEventListener('touchstart', swipe.onTouchStart, false);
            el.removeEventListener('touchend', swipe.onTouchEnd, false);
            delete el.__swipe; //eslint-disable-line no-param-reassign
        }
    }
});

/***/ }),

/***/ "./app/assets/js/objects/Anchor/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Anchor/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b9b3e3f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0b9b3e3f\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Anchor/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-0b9b3e3f\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./anchor.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b9b3e3f\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Anchor/anchor.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-0b9b3e3f")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b9b3e3f\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Anchor/anchor.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b9b3e3f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/Anchor/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b9b3e3f", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-0b9b3e3f", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/objects/Burger/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Burger/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62b857ff_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-62b857ff\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Burger/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-62b857ff\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./burger.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62b857ff\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Burger/burger.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-62b857ff")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62b857ff\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Burger/burger.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62b857ff_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/Burger/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62b857ff", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-62b857ff", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/objects/DataSet/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/DataSet/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52c18eb8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-52c18eb8\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/DataSet/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-52c18eb8\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./data-set.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-52c18eb8\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/DataSet/data-set.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-52c18eb8")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-52c18eb8\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/DataSet/data-set.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52c18eb8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/DataSet/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52c18eb8", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-52c18eb8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/objects/Ico/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Ico/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a4629be_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9a4629be\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Ico/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-9a4629be\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./ico.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a4629be\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Ico/ico.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-9a4629be")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a4629be\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Ico/ico.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a4629be_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/Ico/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9a4629be", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-9a4629be", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/objects/List/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/List/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-b56f06b0\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./list.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b56f06b0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/List/list.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-b56f06b0")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b56f06b0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/List/list.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */
var __vue_template__ = null
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/List/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b56f06b0", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-b56f06b0", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/objects/MeterBar/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/MeterBar/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_338cb554_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-338cb554\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/MeterBar/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-338cb554\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./meter-bar.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338cb554\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/MeterBar/meter-bar.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-338cb554")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338cb554\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/MeterBar/meter-bar.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_338cb554_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/MeterBar/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-338cb554", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-338cb554", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/objects/SkillList/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/SkillList/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_338939db_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-338939db\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/SkillList/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-338939db\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./skill-list.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338939db\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/SkillList/skill-list.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-338939db")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338939db\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/SkillList/skill-list.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_338939db_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/SkillList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-338939db", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-338939db", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/objects/SocialList/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/SocialList/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_232d8e35_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-232d8e35\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/SocialList/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-232d8e35\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./social-list.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-232d8e35\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/SocialList/social-list.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-232d8e35")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-232d8e35\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/SocialList/social-list.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_232d8e35_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/SocialList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-232d8e35", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-232d8e35", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/objects/Table/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Table/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d1ba164c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d1ba164c\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Table/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-d1ba164c\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./table.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1ba164c\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Table/table.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-d1ba164c")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1ba164c\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Table/table.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d1ba164c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/Table/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1ba164c", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-d1ba164c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/objects/TableList/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac4866d0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ac4866d0\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/TableList/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-ac4866d0\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./table-list.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ac4866d0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/TableList/table-list.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-ac4866d0")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ac4866d0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/TableList/table-list.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac4866d0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/TableList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ac4866d0", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-ac4866d0", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/objects/Time/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Time/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66b31fd2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-66b31fd2\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Time/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-66b31fd2\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!../../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-66b31fd2\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/assets/js/objects/Time/index.vue")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-66b31fd2")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-66b31fd2\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/assets/js/objects/Time/index.vue")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66b31fd2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/Time/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66b31fd2", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-66b31fd2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/objects/Title/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Title/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b47b6e4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b47b6e4\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Title/index.vue");
var disposed = false
var cssModules = {}
module.hot && module.hot.accept(["!!vue-style-loader!css-loader?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-6b47b6e4\",\"scoped\":false,\"hasInlineConfig\":false}!resolve-url-loader?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!sass-loader?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./title.scss"], function () {
  var oldLocals = cssModules["$style"]
  if (!oldLocals) return
  var newLocals = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b47b6e4\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Title/title.scss")
  if (JSON.stringify(newLocals) === JSON.stringify(oldLocals)) return
  cssModules["$style"] = newLocals
  __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js").rerender("data-v-6b47b6e4")
})
function injectStyle (ssrContext) {
  if (disposed) return
  cssModules["$style"] = __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b47b6e4\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Title/title.scss")
Object.defineProperty(this, "$style", { get: function () { return cssModules["$style"] }})
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b47b6e4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/assets/js/objects/Title/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b47b6e4", Component.options)
  } else {
    if (module.hot.data.cssModules && Object.keys(module.hot.data.cssModules) !== Object.keys(cssModules)) {
      delete Component.options._Ctor
    }
    hotAPI.reload("data-v-6b47b6e4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    data.cssModules = cssModules
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/assets/js/shared/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NAV_PATH_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NAV_PATH_JOBS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NAV_PATH_EDUCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NAV_PATH_SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NAV_PATH_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GROUP_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GROUP_COVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GROUP_PAGELIST; });
// NAV PATHS

var NAV_PATH_HOME = 'home';
var NAV_PATH_JOBS = 'jobs';
var NAV_PATH_EDUCATION = 'education';
var NAV_PATH_SKILLS = 'skills';
var NAV_PATH_PORTFOLIO = 'portfolio';

var GROUP_LOADER = 'loader';
var GROUP_COVER = 'cover';
var GROUP_PAGELIST = 'pagelist';

/***/ }),

/***/ "./app/assets/js/shared/mq.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var noop = function noop() {};

function serverMatchMedia(breakpoints, key, defaultKey) {

    var matches = key === defaultKey;

    return {
        media: '(min-width: ' + breakpoints[key] + 'px)',
        get matches() {
            return matches;
        },
        addListener: noop,
        removeListener: noop
    };
}

var toCamelCase = function toCamelCase(str) {
    return str.replace(/[-]{1,}(.)/g, function (_, l) {
        return l.toUpperCase();
    });
};

var clientMatchMedia = function clientMatchMedia(breakpoints, key) {
    return global.matchMedia('(min-width: ' + breakpoints[key] + 'px)');
};

var matcher = function matcher(ctx, fn) {
    return function (breakpoint) {
        var keys = ctx.keys; //eslint-disable-line no-shadow

        if (ctx.currentIdx === null) {
            return false;
        }
        return fn(keys.indexOf(toCamelCase(breakpoint)), ctx.currentIdx);
    };
};

/* harmony default export */ __webpack_exports__["a"] = ({
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var breakpoints = options.breakpoints,
            _options$ssr = options.ssr,
            ssr = _options$ssr === undefined ? '' : _options$ssr;


        if (!breakpoints) {
            throw new Error('You should provide some breakpoints');
        }

        var keys = Object.keys(options.breakpoints).filter(function (k) {
            return k.indexOf('-') === -1;
        }).sort(function (a, b) {
            return parseInt(breakpoints[a], 10) - parseInt(breakpoints[b], 10);
        });

        var $mq = new Vue({

            computed: {
                currentIdx: function currentIdx() {
                    var idx = this.keys.indexOf(this.current);
                    return idx !== -1 ? idx : null;
                }
            },

            data: {
                keys: keys,
                breakpoints: breakpoints,
                current: ''
            },

            created: function created() {
                var _this = this;

                var matchMedia = this.$isServer ? serverMatchMedia : clientMatchMedia;

                this.queries = this.keys.reduce(function (queries, key) {
                    var mql = matchMedia(breakpoints, key, ssr);

                    mql.addListener(_this.computeCurrent);

                    Object.defineProperty(_this, key, {
                        enumerable: true,
                        get: function get() {
                            return mql.matches;
                        }
                    });

                    queries[key] = mql; //eslint-disable-line no-param-reassign

                    return queries;
                }, {});

                if (this.$isServer) {
                    this.current = ssr;
                } else {
                    this.computeCurrent();
                }

                this.matches = matcher(this, function (a, b) {
                    return a <= b;
                });
                this.matchesExact = matcher(this, function (a, b) {
                    return a === b;
                });
                this.matchesUntil = matcher(this, function (a, b) {
                    return a > b;
                });
            },


            methods: {
                computeCurrent: function computeCurrent() {
                    var keys = this.keys; //eslint-disable-line no-shadow

                    for (var i = keys.length - 1; i >= 0; i -= 1) {

                        if (this[keys[i]] === true) {
                            this.current = keys[i];
                            return;
                        }
                    }
                    this.current = '';
                }
            }
        });

        Object.defineProperty(Vue.prototype, '$mq', {
            enumerable: false,
            writable: false,
            value: $mq
        });
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/assets/js/shared/observer.mixin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");


/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        observe: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].bool.def(true)
    },

    created: function created() {
        this.observers = [];
    },
    mounted: function mounted() {

        if (this.observe) {
            this.observers.push(this.createTopObserver(this.$refs.top), this.createBottomObserver(this.$refs.bottom));
        }
    },
    destroyed: function destroyed() {
        if (this.observers.length > 0) {
            this.observers.forEach(function (observer) {
                return observer.disconnect();
            });
            this.observers.length = 0;
        }
    },


    methods: {
        createTopObserver: function createTopObserver(el) {
            var _this = this;

            var config = {
                threshold: [0]
            };

            var observer = new IntersectionObserver(function (_ref) {
                var entry = _ref[0];

                var targetInfo = entry.boundingClientRect;
                var rootBoundsInfo = entry.rootBounds;

                if (targetInfo.bottom < rootBoundsInfo.top) {
                    //console.log(this.id, 'top', 'leaving');
                } else if (targetInfo.top < rootBoundsInfo.bottom && targetInfo.top > rootBoundsInfo.height * 0.75) {
                    _this.$emit('enter', { id: _this.id, dir: 'top' });
                }
            }, config);

            observer.observe(el);

            return observer;
        },
        createBottomObserver: function createBottomObserver(el) {
            var _this2 = this;

            var config = {
                threshold: [1]
            };

            var observer = new IntersectionObserver(function (_ref2) {
                var entry = _ref2[0];

                var targetInfo = entry.boundingClientRect;
                var rootBoundsInfo = entry.rootBounds;
                var ratio = entry.intersectionRatio;
                if (targetInfo.bottom > rootBoundsInfo.top && ratio >= 1 && targetInfo.top < rootBoundsInfo.height / 4) {
                    _this2.$emit('enter', { id: _this2.id, dir: 'bottom' });
                }
                /* else if (targetInfo.top < rootBoundsInfo.top &&
                    targetInfo.bottom < rootBoundsInfo.bottom) {
                    console.log(this.id, 'bottom', 'leaving');
                }*/
            }, config);

            observer.observe(el);

            return observer;
        }
    }
});

/***/ }),

/***/ "./app/assets/js/shared/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants__ = __webpack_require__("./app/assets/js/shared/constants.js");


/* harmony default export */ __webpack_exports__["a"] = ([{
    path: __WEBPACK_IMPORTED_MODULE_0__shared_constants__["e" /* NAV_PATH_HOME */],
    label: 'Home'
}, {
    path: __WEBPACK_IMPORTED_MODULE_0__shared_constants__["f" /* NAV_PATH_JOBS */],
    label: 'Jobs'
}, {
    path: __WEBPACK_IMPORTED_MODULE_0__shared_constants__["d" /* NAV_PATH_EDUCATION */],
    label: 'Education'
}, {
    path: __WEBPACK_IMPORTED_MODULE_0__shared_constants__["h" /* NAV_PATH_SKILLS */],
    label: 'Skills'
}, {
    path: __WEBPACK_IMPORTED_MODULE_0__shared_constants__["g" /* NAV_PATH_PORTFOLIO */],
    label: 'Portfolio'
}]);

/***/ }),

/***/ "./app/assets/js/shared/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export noop */
/* unused harmony export raf */
/* unused harmony export caf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return toInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return has; });
/**
 * A function that returns `undefined`
 *
 * @return {undefined}
 */
var noop = function noop() {};

/**
 * Fallback for `requestAnimationFrame`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
 */
var lastTime = 0;
var raf = global.requestAnimationFrame || function requestAnimationFrame(callback) {
  var currTime = new Date().getTime();
  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
  var id = setTimeout(function () {
    return callback(currTime + timeToCall);
  }, timeToCall);
  lastTime = currTime + timeToCall;
  return id;
};
var caf = global.cancelAnimationFrame || function cancelAnimationFrame(id) {
  return clearTimeout(id);
};

var createAction = function createAction(mutation) {
  return function (_ref, payload) {
    var commit = _ref.commit;
    return commit(mutation, payload);
  };
};

var toInteger = function toInteger(str) {
  return parseInt(str, 10);
};

var objProto = Object.prototype;
var hasOwn = objProto.hasOwnProperty;
var has = function has(obj, key) {
  return hasOwn.call(obj, key);
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/assets/js/store/data.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database_jobs_json__ = __webpack_require__("./app/assets/js/database/jobs.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database_jobs_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__database_jobs_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_education_json__ = __webpack_require__("./app/assets/js/database/education.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_education_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__database_education_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_skills_tech_json__ = __webpack_require__("./app/assets/js/database/skills.tech.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_skills_tech_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__database_skills_tech_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_skills_team_json__ = __webpack_require__("./app/assets/js/database/skills.team.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_skills_team_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__database_skills_team_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_portfolio_works_json__ = __webpack_require__("./app/assets/js/database/portfolio.works.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_portfolio_works_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__database_portfolio_works_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_social_json__ = __webpack_require__("./app/assets/js/database/social.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_social_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__database_social_json__);







/* harmony default export */ __webpack_exports__["a"] = ({

    namespaced: true,

    state: {
        jobs: __WEBPACK_IMPORTED_MODULE_0__database_jobs_json___default.a,
        education: __WEBPACK_IMPORTED_MODULE_1__database_education_json___default.a,
        works: __WEBPACK_IMPORTED_MODULE_4__database_portfolio_works_json___default.a,
        socials: __WEBPACK_IMPORTED_MODULE_5__database_social_json___default.a,
        skills: {
            _byId: ['tech', 'team'],
            tech: { label: 'Technological stack', list: __WEBPACK_IMPORTED_MODULE_2__database_skills_tech_json___default.a },
            team: { label: 'Teamwork skills and tools', list: __WEBPACK_IMPORTED_MODULE_3__database_skills_team_json___default.a }
        }
    }

});

/***/ }),

/***/ "./app/assets/js/store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_module__ = __webpack_require__("./app/assets/js/store/data.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_module__ = __webpack_require__("./app/assets/js/store/ui.module.js");





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({

    strict: undefined !== 'production',

    modules: {
        ui: __WEBPACK_IMPORTED_MODULE_3__ui_module__["a" /* default */],
        data: __WEBPACK_IMPORTED_MODULE_2__data_module__["a" /* default */]
    }

});

if (true) {
    if (false) {
        // accept actions and mutations as hot modules
        module.hot.accept(['./data.module', './ui.module'], function () {
            var newData = require('./data.module').default; // eslint-disable-line no-shadow, global-require
            var newUi = require('./ui.module').default; // eslint-disable-line no-shadow, global-require
            store.hotUpdate({
                modules: {
                    ui: newUi,
                    data: newData
                }
            });
        });
    }
}

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ "./app/assets/js/store/ui.actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants__ = __webpack_require__("./app/assets/js/shared/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utils__ = __webpack_require__("./app/assets/js/shared/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_mutations__ = __webpack_require__("./app/assets/js/store/ui.mutations.js");
var _actions;





var TYPES = {
    NAVIGATED_TO: 'NAVIGATED_TO_ACTION',
    NAV_TOGGLED: 'NAV_TOGGLED_ACTION',
    PAGELISTSCROLL_UPDATED: 'PAGELISTSCROLL_UPDATED_ACTION',
    APP_LOADED: 'APP_LOADED_ACTION',
    PAGELISTSCROLL_REQUESTED: 'PAGELISTSCROLL_REQUESTED_ACTION',
    PAGELISTSCROLL_COMPLETED: 'PAGELISTSCROLL_COMPLETED_ACTION',
    ROUTE_UPDATED: 'ROUTE_UPDATED_ACTION'
};

var actions = (_actions = {}, _actions[TYPES.NAV_TOGGLED] = function (_ref) {
    var commit = _ref.commit;

    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        toggle = _ref2.toggle,
        _ref2$delay = _ref2.delay,
        delay = _ref2$delay === undefined ? 0 : _ref2$delay;

    return new Promise(function (resolve) {
        commit(__WEBPACK_IMPORTED_MODULE_2__ui_mutations__["a" /* TYPES */].NAV_TOGGLED, toggle);
        setTimeout(function () {
            return resolve(toggle);
        }, delay);
    });
}, _actions[TYPES.PAGELISTSCROLL_UPDATED] = Object(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_2__ui_mutations__["a" /* TYPES */].PAGELISTSCROLL_UPDATED), _actions[TYPES.APP_LOADED] = Object(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_2__ui_mutations__["a" /* TYPES */].APP_LOADED), _actions[TYPES.ROUTE_UPDATED] = function (_ref3, route) {
    var commit = _ref3.commit,
        state = _ref3.state;

    var activeGroup = route === __WEBPACK_IMPORTED_MODULE_0__shared_constants__["e" /* NAV_PATH_HOME */] ? __WEBPACK_IMPORTED_MODULE_0__shared_constants__["a" /* GROUP_COVER */] : __WEBPACK_IMPORTED_MODULE_0__shared_constants__["c" /* GROUP_PAGELIST */];

    if (state.forcedScroll === false) {
        commit(__WEBPACK_IMPORTED_MODULE_2__ui_mutations__["a" /* TYPES */].ACTIVE_GROUP_UPDATED, activeGroup);
        commit(__WEBPACK_IMPORTED_MODULE_2__ui_mutations__["a" /* TYPES */].ROUTE_UPDATED, route);
    }

    return activeGroup;
}, _actions[TYPES.NAVIGATED_TO] = function (_ref4, _ref5) {
    var dispatch = _ref4.dispatch;
    var route = _ref5.route,
        _ref5$force = _ref5.force,
        force = _ref5$force === undefined ? false : _ref5$force,
        _ref5$unblock = _ref5.unblock,
        unblock = _ref5$unblock === undefined ? false : _ref5$unblock;


    dispatch(TYPES.ROUTE_UPDATED, route);

    if (force === true) {
        dispatch(TYPES.PAGELISTSCROLL_REQUESTED, { route: route });
        if (unblock) {
            setTimeout(function () {
                dispatch(TYPES.PAGELISTSCROLL_COMPLETED);
            }, 0);
        }
    }
}, _actions[TYPES.PAGELISTSCROLL_REQUESTED] = Object(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_2__ui_mutations__["a" /* TYPES */].PAGELISTSCROLL_REQUESTED), _actions[TYPES.PAGELISTSCROLL_COMPLETED] = Object(__WEBPACK_IMPORTED_MODULE_1__shared_utils__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_2__ui_mutations__["a" /* TYPES */].PAGELISTSCROLL_COMPLETED), _actions);

/***/ }),

/***/ "./app/assets/js/store/ui.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants__ = __webpack_require__("./app/assets/js/shared/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_mutations__ = __webpack_require__("./app/assets/js/store/ui.mutations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_actions__ = __webpack_require__("./app/assets/js/store/ui.actions.js");




/* harmony default export */ __webpack_exports__["a"] = ({

    namespaced: true,

    mutations: __WEBPACK_IMPORTED_MODULE_1__ui_mutations__["b" /* mutations */],

    actions: __WEBPACK_IMPORTED_MODULE_2__ui_actions__["b" /* actions */],

    state: {
        isLoaded: false,
        activeNav: false,
        activeGroup: __WEBPACK_IMPORTED_MODULE_0__shared_constants__["b" /* GROUP_LOADER */],
        route: '',
        pagelistScroll: 0,
        forcedScroll: false
    }

});

/***/ }),

/***/ "./app/assets/js/store/ui.mutations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mutations; });
var _mutations;

/* eslint-disable no-param-reassign */

var TYPES = {
    NAV_TOGGLED: 'NAV_TOGGLED',
    ACTIVE_GROUP_UPDATED: 'ACTIVE_GROUP_UPDATED',
    ROUTE_UPDATED: 'ROUTE_UPDATED',
    PAGELISTSCROLL_UPDATED: 'PAGELISTSCROLL_UPDATED',
    PAGELISTSCROLL_REQUESTED: 'PAGELISTSCROLL_REQUESTED',
    PAGELISTSCROLL_COMPLETED: 'PAGELISTSCROLL_COMPLETED',
    APP_LOADED: 'APP_LOADED'
};

var mutations = (_mutations = {}, _mutations[TYPES.NAV_TOGGLED] = function (state, toggle) {
    state.activeNav = typeof toggle === 'undefined' ? !state.activeNav : !!toggle;
}, _mutations[TYPES.ACTIVE_GROUP_UPDATED] = function (state, activeGroup) {
    state.activeGroup = activeGroup;
}, _mutations[TYPES.APP_LOADED] = function (state, isLoaded) {
    state.isLoaded = isLoaded;
}, _mutations[TYPES.ROUTE_UPDATED] = function (state, route) {
    state.route = route;
}, _mutations[TYPES.PAGELISTSCROLL_UPDATED] = function (state, pagelistScroll) {
    state.pagelistScroll = pagelistScroll;
}, _mutations[TYPES.PAGELISTSCROLL_REQUESTED] = function (state, _ref) {
    var route = _ref.route;

    state.forcedScroll = !!route;
}, _mutations[TYPES.PAGELISTSCROLL_COMPLETED] = function (state) {
    state.forcedScroll = false;
}, _mutations);

/* eslint-enable no-param-reassign */

/***/ }),

/***/ "./app/assets/styles/_breakpoints.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"modules\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\"}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/styles/_breakpoints.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--4-1!../../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../../node_modules/resolve-url-loader/index.js??ref--4-3!../../../node_modules/sass-loader/lib/loader.js??ref--4-4!./_breakpoints.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--4-1!../../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../../node_modules/resolve-url-loader/index.js??ref--4-3!../../../node_modules/sass-loader/lib/loader.js??ref--4-4!./_breakpoints.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./app/assets/styles/app.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"modules\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\"}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/styles/app.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--4-1!../../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../../node_modules/resolve-url-loader/index.js??ref--4-3!../../../node_modules/sass-loader/lib/loader.js??ref--4-4!./app.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--4-1!../../../node_modules/postcss-loader/lib/index.js??ref--4-2!../../../node_modules/resolve-url-loader/index.js??ref--4-3!../../../node_modules/sass-loader/lib/loader.js??ref--4-4!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./app/assets/styles/index.js":
/***/ (function(module, exports, __webpack_require__) {

//put base styles on top
__webpack_require__("./app/assets/styles/app.scss");

if (true) {
    //eslint-disable-line no-undef

    if (false) {

        module.hot.accept('./app.scss', function () {
            require('./app.scss'); //eslint-disable-line global-require
        });
    }
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/components/Loader/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
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

    props: {
        active: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].bool.def(false),
        assetLoaded: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].bool.def(false)
    },

    data: function data() {
        return {
            entering: false,
            dots: ''
        };
    },


    watch: {
        assetLoaded: function assetLoaded(v) {
            if (v === true) {
                this.maxRounds = Math.max(this.maxRounds, Math.ceil(this.rounds / 3));
            }
        }
    },

    created: function created() {
        this.rounds = 0;
        this.maxRounds = 2;
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.entering = true;

            setTimeout(function () {
                _this.addDot();
                _this.$emit('loader-start');
                _this.interval = setInterval(_this.runLoader, 625);
            }, 1700);
        });
    },


    methods: {
        addDot: function addDot() {
            if (this.dots.length === 3) {
                this.dots = '';
                this.rounds += 1;
                return;
            }

            this.dots += '.';
        },
        runLoader: function runLoader() {
            if (this.rounds >= this.maxRounds) {

                if (this.assetLoaded === false) {
                    this.maxRounds += 1;
                    this.addDot();
                    return;
                }

                this.stopLoader();
                this.$emit('loader-end');
            } else {
                this.addDot();
            }
        },
        stopLoader: function stopLoader() {
            if (this.interval) {
                clearInterval(this.interval);
            }
        }
    }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/components/Page/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_observer_mixin__ = __webpack_require__("./app/assets/js/shared/observer.mixin.js");
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
    mixins: [__WEBPACK_IMPORTED_MODULE_1__shared_observer_mixin__["a" /* default */]],
    props: {
        id: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string.isRequired
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/components/Section/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_Title__ = __webpack_require__("./app/assets/js/objects/Title/index.vue");

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
            rootOffsetTop: 0
        };
    },


    props: {
        title: __WEBPACK_IMPORTED_MODULE_1_vue_types__["a" /* default */].string,
        subtitle: __WEBPACK_IMPORTED_MODULE_1_vue_types__["a" /* default */].string,
        prefix: String
    },

    components: {
        SectionTitle: __WEBPACK_IMPORTED_MODULE_3__objects_Title__["a" /* default */]
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapState */])('ui', ['pagelistScroll']), {
        scrollAmount: function scrollAmount() {
            var amount = this.rootOffsetTop + parseInt(window.innerHeight * 0.2, 10) - (this.pagelistScroll + window.innerHeight / 2);
            return Math.floor(amount * 0.1);
        }
    }),

    mounted: function mounted() {
        var _this = this;

        setTimeout(function () {
            _this.rootOffsetTop = _this.$el.offsetTop;
        }, 100);
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Contacts/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Page__ = __webpack_require__("./app/assets/js/components/Page/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Section__ = __webpack_require__("./app/assets/js/components/Section/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_SocialList__ = __webpack_require__("./app/assets/js/objects/SocialList/index.vue");
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
        Page: __WEBPACK_IMPORTED_MODULE_1__components_Page__["a" /* default */],
        PageSection: __WEBPACK_IMPORTED_MODULE_2__components_Section__["a" /* default */],
        SocialList: __WEBPACK_IMPORTED_MODULE_3__objects_SocialList__["a" /* default */]
    },

    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])('data', ['socials'])

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Cover/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants__ = __webpack_require__("./app/assets/js/shared/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_images_marco_jpg__ = __webpack_require__("./app/assets/images/marco.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_images_marco_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_images_marco_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_images_oliver_jpg__ = __webpack_require__("./app/assets/images/oliver.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_images_oliver_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_images_oliver_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_images_marco_full_jpg__ = __webpack_require__("./app/assets/images/marco-full.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_images_marco_full_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_images_marco_full_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objects_Ico__ = __webpack_require__("./app/assets/js/objects/Ico/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__objects_SocialList__ = __webpack_require__("./app/assets/js/objects/SocialList/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_observer_mixin__ = __webpack_require__("./app/assets/js/shared/observer.mixin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_ui_actions__ = __webpack_require__("./app/assets/js/store/ui.actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_utils__ = __webpack_require__("./app/assets/js/shared/utils.js");

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


//import anime from 'animejs';










var Avatar = function Avatar() {
  return __webpack_require__.e/* import() */("pixi").then(__webpack_require__.bind(null, "./app/assets/js/objects/Avatar/pixi.vue"));
};

/* harmony default export */ __webpack_exports__["a"] = ({

  components: {
    Avatar: Avatar,
    Ico: __WEBPACK_IMPORTED_MODULE_6__objects_Ico__["a" /* default */],
    SocialList: __WEBPACK_IMPORTED_MODULE_7__objects_SocialList__["a" /* default */]
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_8__shared_observer_mixin__["a" /* default */]],

  data: function data() {
    return {
      id: __WEBPACK_IMPORTED_MODULE_2__shared_constants__["e" /* NAV_PATH_HOME */],
      NAV_PATH_JOBS: __WEBPACK_IMPORTED_MODULE_2__shared_constants__["f" /* NAV_PATH_JOBS */],
      oli: __WEBPACK_IMPORTED_MODULE_4_images_oliver_jpg___default.a,
      marco: __WEBPACK_IMPORTED_MODULE_3_images_marco_jpg___default.a,
      animal: __WEBPACK_IMPORTED_MODULE_5_images_marco_full_jpg___default.a,
      firstEnter: true,
      canScroll: false
    };
  },


  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapState */])({
    socials: function socials(state) {
      return state.data.socials;
    },
    activeGroup: function activeGroup(state) {
      return state.ui.activeGroup;
    },
    activeNav: function activeNav(state) {
      return state.ui.activeNav;
    },
    isAppLoaded: function isAppLoaded(state) {
      return state.ui.isLoaded;
    }
  }), {
    transitionDuration: function transitionDuration() {
      var _$style = this.$style,
          appearEnterTiming = _$style.appearEnterTiming,
          slideEnterTiming = _$style.slideEnterTiming,
          slideLeaveTiming = _$style.slideLeaveTiming;


      if (this.transitionName === 'appear') {
        return {
          enter: Object(__WEBPACK_IMPORTED_MODULE_10__shared_utils__["c" /* toInteger */])(appearEnterTiming),
          // BEWARE: dirty hach
          // avatar v-if cannot catch the updated transitionName
          // and removes the avatar asap
          leave: Object(__WEBPACK_IMPORTED_MODULE_10__shared_utils__["c" /* toInteger */])(slideLeaveTiming)
        };
      }

      return {
        enter: Object(__WEBPACK_IMPORTED_MODULE_10__shared_utils__["c" /* toInteger */])(slideEnterTiming),
        leave: Object(__WEBPACK_IMPORTED_MODULE_10__shared_utils__["c" /* toInteger */])(slideLeaveTiming)
      };
    },
    active: function active() {
      if (this.$mq.matches('tablet-landscape')) {
        return this.activeGroup === __WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* GROUP_COVER */];
      }
      return this.activeGroup === __WEBPACK_IMPORTED_MODULE_2__shared_constants__["a" /* GROUP_COVER */] || this.activeGroup === __WEBPACK_IMPORTED_MODULE_2__shared_constants__["c" /* GROUP_PAGELIST */];
    },
    transitionName: function transitionName() {
      return this.firstEnter ? 'appear' : 'slide';
    }
  }),

  watch: {
    activeGroup: function activeGroup(val, oldVal) {
      this.firstEnter = this.active && oldVal === __WEBPACK_IMPORTED_MODULE_2__shared_constants__["b" /* GROUP_LOADER */];
    }
  },

  created: function created() {
    var _this = this;

    this.$on('enter', function (_ref) {
      var id = _ref.id;

      _this.$store.dispatch('ui/' + __WEBPACK_IMPORTED_MODULE_9__store_ui_actions__["a" /* TYPES */].ROUTE_UPDATED, id);
    });
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('ui', {
    navigateToAction: __WEBPACK_IMPORTED_MODULE_9__store_ui_actions__["a" /* TYPES */].NAVIGATED_TO,
    scrollCompleted: __WEBPACK_IMPORTED_MODULE_9__store_ui_actions__["a" /* TYPES */].PAGELISTSCROLL_COMPLETED
  }), {
    gotoPagelist: function gotoPagelist() {
      var _this2 = this;

      this.navigateToAction({ route: __WEBPACK_IMPORTED_MODULE_2__shared_constants__["f" /* NAV_PATH_JOBS */], force: true });
      this.$nextTick(function () {
        _this2.scrollCompleted();
      });
    },
    swipeDownHandler: function swipeDownHandler() {
      if (this.activeNav || this.$mq.matchesUntil('tablet-landscape')) {
        return;
      }

      this.gotoPagelist();
    },
    wheelListener: function wheelListener(e) {

      if (this.canScroll === false || this.activeNav || this.$mq.matchesUntil('tablet-landscape')) {
        return;
      }

      if (e.deltaY > 0) {
        this.gotoPagelist();
      }
    },


    /*onEnter(el, done) {
         //const { pic, body, scrollhint } = this.$refs;
          if (this.firstEnter === true) {
             /*const timeline = anime.timeline({
                autoplay: false,
                easing: 'easeOutSine'
            });
             timeline.add({
                targets: [pic, body],
                opacity: [0, 1],
                translateX: (elm) => [(elm === pic ? '15%' : '7%'), 0],
                duration: 400,
                delay: 350,
                complete: done
            }).add({
                targets: scrollhint,
                opacity: 0.8,
                translateX: ['-50%', '-50%'],
                translateY: ['-10%', 0],
                duration: 500,
                delay: 3250 // 4000 - 350 - 400
            }).play();* /
             / *setTimeout(() => {
                done();
            }, this.timings.appearIn);* /
         } else {
             if (this.timeline) {
                this.timeline.pause();
                this.timeline.seek(0);
            }
             anime({
                targets: el,
                opacity: {
                    value: [0, 1],
                    duration: 0
                },
                translateY: ['-100%', 0],
                duration: 800,
                delay: 50,
                easing: 'easeInOutCirc',
                complete: done
            });
         }
    },*/

    onAfterEnter: function onAfterEnter() {
      this.canScroll = true;
    },
    onBeforeLeave: function onBeforeLeave() {
      this.canScroll = false;
    } //,

    /*onLeave(el, done) {
         const {
            pic, scrollhint, title, table, footer
        } = this.$refs;
         const timeline = anime.timeline({
            complete: done,
            autoplay: false,
            easing: 'easeInOutCubic'
        });
         this.timeline = timeline;
          if (this.firstEnter === false) {
             timeline.add([{
                targets: [pic, scrollhint],
                opacity: [1, 0],
                duration: 300
            }, {
                targets: title,
                translateY: '-300%',
                opacity: 0,
                duration: 500,
                offset: '+=350'
            }, {
                targets: table,
                translateY: '-200%',
                opacity: 0,
                duration: 500,
                offset: '-=300'
            }, {
                targets: footer,
                translateY: '-200%',
                opacity: 0,
                duration: 500,
                offset: '-=300'
            }, {
                targets: el,
                translateY: '-100%',
                duration: 700
            }, {
                targets: el,
                opacity: 0,
                duration: 200
            }]).play();
        }
    }*/

  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Education/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants__ = __webpack_require__("./app/assets/js/shared/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__("./app/assets/js/components/Page/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Section__ = __webpack_require__("./app/assets/js/components/Section/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_TableList__ = __webpack_require__("./app/assets/js/objects/TableList/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_Table__ = __webpack_require__("./app/assets/js/objects/Table/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_ui_actions__ = __webpack_require__("./app/assets/js/store/ui.actions.js");
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
        Page: __WEBPACK_IMPORTED_MODULE_2__components_Page__["a" /* default */],
        PageSection: __WEBPACK_IMPORTED_MODULE_3__components_Section__["a" /* default */],
        TableList: __WEBPACK_IMPORTED_MODULE_4__objects_TableList__["a" /* default */],
        SummaryTable: __WEBPACK_IMPORTED_MODULE_5__objects_Table__["a" /* default */]
    },

    data: function data() {
        return {
            id: __WEBPACK_IMPORTED_MODULE_1__shared_constants__["d" /* NAV_PATH_EDUCATION */]
        };
    },


    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])({
        items: function items(state) {
            return state.data.education;
        }
    }),

    methods: {
        updateRoute: function updateRoute(_ref) {
            var id = _ref.id;

            this.$store.dispatch('ui/' + __WEBPACK_IMPORTED_MODULE_6__store_ui_actions__["a" /* TYPES */].ROUTE_UPDATED, id);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Jobs/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants__ = __webpack_require__("./app/assets/js/shared/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__("./app/assets/js/components/Page/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Section__ = __webpack_require__("./app/assets/js/components/Section/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_TableList__ = __webpack_require__("./app/assets/js/objects/TableList/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_Table__ = __webpack_require__("./app/assets/js/objects/Table/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_ui_actions__ = __webpack_require__("./app/assets/js/store/ui.actions.js");
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
    components: {
        Page: __WEBPACK_IMPORTED_MODULE_2__components_Page__["a" /* default */],
        PageSection: __WEBPACK_IMPORTED_MODULE_3__components_Section__["a" /* default */],
        TableList: __WEBPACK_IMPORTED_MODULE_4__objects_TableList__["a" /* default */],
        SummaryTable: __WEBPACK_IMPORTED_MODULE_5__objects_Table__["a" /* default */]
    },

    data: function data() {
        return {
            id: __WEBPACK_IMPORTED_MODULE_1__shared_constants__["f" /* NAV_PATH_JOBS */]
        };
    },


    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])({
        current: function current(state) {
            return state.data.jobs[0];
        },
        prev: function prev(state) {
            return state.data.jobs.slice(1);
        }
    }),

    methods: {
        updateRoute: function updateRoute(_ref) {
            var id = _ref.id;

            this.$store.dispatch('ui/' + __WEBPACK_IMPORTED_MODULE_6__store_ui_actions__["a" /* TYPES */].ROUTE_UPDATED, id);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Navigation/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils__ = __webpack_require__("./app/assets/js/shared/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_Burger__ = __webpack_require__("./app/assets/js/objects/Burger/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_Anchor__ = __webpack_require__("./app/assets/js/objects/Anchor/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_ui_actions__ = __webpack_require__("./app/assets/js/store/ui.actions.js");

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

    components: {
        Burger: __WEBPACK_IMPORTED_MODULE_4__objects_Burger__["a" /* default */],
        Anchor: __WEBPACK_IMPORTED_MODULE_5__objects_Anchor__["a" /* default */]
    },

    props: {
        paths: __WEBPACK_IMPORTED_MODULE_2_vue_types__["a" /* default */].arrayOf(__WEBPACK_IMPORTED_MODULE_2_vue_types__["a" /* default */].shape({
            path: __WEBPACK_IMPORTED_MODULE_2_vue_types__["a" /* default */].string.isRequired,
            label: __WEBPACK_IMPORTED_MODULE_2_vue_types__["a" /* default */].string.isRequired
        })).def([]),
        socials: __WEBPACK_IMPORTED_MODULE_2_vue_types__["a" /* default */].arrayOf(__WEBPACK_IMPORTED_MODULE_2_vue_types__["a" /* default */].string).def(['linkedin', 'twitter', 'github'])
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapState */])('ui', ['route', 'activeNav', 'isLoaded']), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapState */])({
        rawSocials: function rawSocials(state) {
            return state.data.socials;
        }
    }), {
        tabIndex: function tabIndex() {
            return this.activeNav ? 0 : -1;
        },
        navSocials: function navSocials() {
            var filters = this.socials;
            return this.rawSocials.filter(function (_ref) {
                var type = _ref.type;
                return filters.indexOf(type) !== -1;
            });
        },
        navItemsDelayIn: function navItemsDelayIn() {
            return Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils__["c" /* toInteger */])(this.$style.navItemsDelayIn);
        },
        navPatternDelayIn: function navPatternDelayIn() {
            return Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils__["c" /* toInteger */])(this.$style.navPatternDelayIn);
        },
        navTimingIn: function navTimingIn() {
            return Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils__["c" /* toInteger */])(this.$style.navTimingIn);
        },
        navItemStagger: function navItemStagger() {
            return Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils__["c" /* toInteger */])(this.$style.navItemStagger);
        },
        totalTimingIn: function totalTimingIn() {
            return Math.max(this.navTimingIn + this.navPatternDelayIn, this.navItemsDelayIn + this.paths.length * this.navItemStagger);
        },
        navAnimOut: function navAnimOut() {
            return Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils__["c" /* toInteger */])(this.$style.navAnimOut);
        }
    }),

    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('ui', {
        toggleNavAction: __WEBPACK_IMPORTED_MODULE_6__store_ui_actions__["a" /* TYPES */].NAV_TOGGLED,
        navigateToAction: __WEBPACK_IMPORTED_MODULE_6__store_ui_actions__["a" /* TYPES */].NAVIGATED_TO
    }), {
        closeNav: function closeNav() {
            return this.toggleNavAction({ toggle: false, delay: this.navAnimOut + 300 });
        },
        navItemDelay: function navItemDelay(index) {
            if (!this.activeNav) {
                return null;
            }

            return { transitionDelay: this.navItemsDelayIn + index * this.navItemStagger + 'ms' };
        },
        goTo: function goTo(route) {
            var _this = this;

            this.closeNav().then(function () {
                return _this.navigateToAction({ route: route, force: true });
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/PageList/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_animejs__ = __webpack_require__("./node_modules/animejs/anime.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_SmoothScrollbar__ = __webpack_require__("./app/assets/js/components/SmoothScrollbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_constants__ = __webpack_require__("./app/assets/js/shared/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_ui_actions__ = __webpack_require__("./app/assets/js/store/ui.actions.js");

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








var easing = function easing(t) {
    return Math.pow(t - 1, 3) + 1;
}; //eslint-disable-line

/* harmony default export */ __webpack_exports__["a"] = ({

    components: {
        SmoothScrollbar: __WEBPACK_IMPORTED_MODULE_3__components_SmoothScrollbar__["a" /* default */]
    },

    data: function data() {
        return {
            canScroll: false
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapState */])('ui', ['activeGroup', 'forcedScroll', 'pagelistScroll', 'route']), {
        active: function active() {
            if (this.$mq.matches('tablet-landscape')) {
                return this.activeGroup === __WEBPACK_IMPORTED_MODULE_4__shared_constants__["c" /* GROUP_PAGELIST */];
            }
            return this.activeGroup && this.activeGroup !== __WEBPACK_IMPORTED_MODULE_4__shared_constants__["b" /* GROUP_LOADER */];
        }
    }),

    created: function created() {
        this.fullYear = new Date().getFullYear();
    },


    watch: {
        forcedScroll: function forcedScroll(scroll) {
            var _this = this;

            if (scroll === true && this.route) {
                var scrollbar = this.$refs.smoothScroll.scrollbar;

                if (scrollbar) {
                    scrollbar.update();
                }
                this.$nextTick(function () {
                    _this.scrollTo(_this.route, _this.completeScrollRequest);
                });
            }
        }
    },

    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('ui', {
        updatePagelistscrollAction: __WEBPACK_IMPORTED_MODULE_5__store_ui_actions__["a" /* TYPES */].PAGELISTSCROLL_UPDATED,
        navigateToAction: __WEBPACK_IMPORTED_MODULE_5__store_ui_actions__["a" /* TYPES */].NAVIGATED_TO,
        completeScrollRequest: __WEBPACK_IMPORTED_MODULE_5__store_ui_actions__["a" /* TYPES */].PAGELISTSCROLL_COMPLETED
    }), {
        onAfterEnter: function onAfterEnter() {
            this.canScroll = true;
        },
        onBeforeLeave: function onBeforeLeave() {
            this.canScroll = false;
        },
        scrollTo: function scrollTo(id, callback) {

            if (typeof id === 'string' && id.length > 0) {
                var el = document.getElementById(id);

                if (el === undefined) {
                    throw new TypeError('Unable to find element with id "' + id + '"');
                }

                var scrollbar = this.$refs.smoothScroll.scrollbar;


                if (scrollbar) {
                    var offset = scrollbar.offset;

                    var _el$getBoundingClient = el.getBoundingClientRect(),
                        top = _el$getBoundingClient.top;

                    var rootTop = this.$el.getBoundingClientRect().top;

                    scrollbar.scrollTo(offset.x, offset.y + (top - rootTop), 1000, { easing: easing, callback: callback });
                } else {
                    var tl = __WEBPACK_IMPORTED_MODULE_2_animejs___default.a.timeline({
                        targets: this.$el,
                        autoplay: false,
                        easing: 'easeOutQuad'
                    });

                    tl.add([{
                        opacity: [1, 0],
                        duration: 300,
                        complete: function complete() {
                            return el.scrollIntoView();
                        }
                    }, {
                        opacity: [0, 1],
                        duration: 300,
                        delay: 200
                    }]);

                    tl.complete = callback;

                    tl.play();
                }
            }
        },
        wheelListener: function wheelListener(e) {

            if (this.canScroll === false || this.activeNav || this.$mq.matchesUntil('tablet-landscape')) {
                return;
            }

            if (e.deltaY < 0 && this.activeGroup === __WEBPACK_IMPORTED_MODULE_4__shared_constants__["c" /* GROUP_PAGELIST */] && this.pagelistScroll <= 0) {
                this.navigateToAction({ route: __WEBPACK_IMPORTED_MODULE_4__shared_constants__["e" /* NAV_PATH_HOME */] });
            }
        },
        swipeUpHandler: function swipeUpHandler() {

            if (this.activeNav || this.$mq.matchesUntil('tablet-landscape')) {
                return;
            }

            if (this.activeGroup === __WEBPACK_IMPORTED_MODULE_4__shared_constants__["c" /* GROUP_PAGELIST */] && this.pagelistScroll <= 0) {
                this.navigateToAction({ route: __WEBPACK_IMPORTED_MODULE_4__shared_constants__["e" /* NAV_PATH_HOME */] });
            }
        },
        onScroll: function onScroll(_ref) {
            var offset = _ref.offset;
            var _offset$y = offset.y,
                y = _offset$y === undefined ? 0 : _offset$y;

            this.updatePagelistscrollAction(y);
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Portfolio/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants__ = __webpack_require__("./app/assets/js/shared/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__("./app/assets/js/components/Page/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Section__ = __webpack_require__("./app/assets/js/components/Section/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_TableList__ = __webpack_require__("./app/assets/js/objects/TableList/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_Table__ = __webpack_require__("./app/assets/js/objects/Table/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_ui_actions__ = __webpack_require__("./app/assets/js/store/ui.actions.js");
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

    components: {
        Page: __WEBPACK_IMPORTED_MODULE_2__components_Page__["a" /* default */],
        PageSection: __WEBPACK_IMPORTED_MODULE_3__components_Section__["a" /* default */],
        TableList: __WEBPACK_IMPORTED_MODULE_4__objects_TableList__["a" /* default */],
        SummaryTable: __WEBPACK_IMPORTED_MODULE_5__objects_Table__["a" /* default */]
    },

    data: function data() {
        return {
            id: __WEBPACK_IMPORTED_MODULE_1__shared_constants__["g" /* NAV_PATH_PORTFOLIO */]
        };
    },


    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])('data', ['works', 'talks']),

    methods: {
        updateRoute: function updateRoute(_ref) {
            var id = _ref.id;

            this.$store.dispatch('ui/' + __WEBPACK_IMPORTED_MODULE_6__store_ui_actions__["a" /* TYPES */].ROUTE_UPDATED, id);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Root/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Jobs__ = __webpack_require__("./app/assets/js/containers/Jobs/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Education__ = __webpack_require__("./app/assets/js/containers/Education/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_Skills__ = __webpack_require__("./app/assets/js/containers/Skills/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_Portfolio__ = __webpack_require__("./app/assets/js/containers/Portfolio/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_Contacts__ = __webpack_require__("./app/assets/js/containers/Contacts/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_Cover__ = __webpack_require__("./app/assets/js/containers/Cover/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_Navigation__ = __webpack_require__("./app/assets/js/containers/Navigation/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_PageList__ = __webpack_require__("./app/assets/js/containers/PageList/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Loader__ = __webpack_require__("./app/assets/js/components/Loader/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Wrapper__ = __webpack_require__("./app/assets/js/components/Wrapper/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_routes__ = __webpack_require__("./app/assets/js/shared/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_constants__ = __webpack_require__("./app/assets/js/shared/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_ui_actions__ = __webpack_require__("./app/assets/js/store/ui.actions.js");

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

//import debounce from 'lodash/debounce';









//import Swipe from '@/components/Swipe';







var BgPattern = function BgPattern() {
    return __webpack_require__.e/* import() */("pixi").then(__webpack_require__.bind(null, "./app/assets/js/objects/BgPattern/pixi.vue"));
};

/* harmony default export */ __webpack_exports__["a"] = ({

    components: {
        Loader: __WEBPACK_IMPORTED_MODULE_10__components_Loader__["a" /* default */],
        Cover: __WEBPACK_IMPORTED_MODULE_7__containers_Cover__["a" /* default */],
        Jobs: __WEBPACK_IMPORTED_MODULE_2__containers_Jobs__["a" /* default */],
        Skills: __WEBPACK_IMPORTED_MODULE_4__containers_Skills__["a" /* default */],
        Education: __WEBPACK_IMPORTED_MODULE_3__containers_Education__["a" /* default */],
        Portfolio: __WEBPACK_IMPORTED_MODULE_5__containers_Portfolio__["a" /* default */],
        Contacts: __WEBPACK_IMPORTED_MODULE_6__containers_Contacts__["a" /* default */],
        //Swipe,
        Navigation: __WEBPACK_IMPORTED_MODULE_8__containers_Navigation__["a" /* default */],
        Wrapper: __WEBPACK_IMPORTED_MODULE_11__components_Wrapper__["a" /* default */],
        PageList: __WEBPACK_IMPORTED_MODULE_9__containers_PageList__["a" /* default */],
        BgPattern: BgPattern
    },

    data: function data() {
        return {
            routes: __WEBPACK_IMPORTED_MODULE_12__shared_routes__["a" /* default */],
            location: this.$isServer ? { hash: '' } : global.location
        };
    },


    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapState */])('ui', ['activeGroup', 'isLoaded', 'activeNav', 'pagelistScroll', 'route']), {
        validRoutes: function validRoutes() {
            return this.routes.map(function (_ref) {
                var path = _ref.path;
                return path;
            });
        }
    }),

    watch: {
        route: function route(_route) {
            //side effect!
            if (!this.$isServer) {
                if (this.getCurrentPath() !== _route) {
                    global.history.pushState(null, null, '#!' + _route);
                }
            }
        }
    },

    mounted: function mounted() {
        if (!this.$isServer) {
            global.addEventListener('popstate', this.onPopstate);
        }
    },
    beforeDestroy: function beforeDestroy() {
        global.removeEventListener('popstate', this.onPopstate);
    },


    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('ui', {
        navigateToAction: __WEBPACK_IMPORTED_MODULE_14__store_ui_actions__["a" /* TYPES */].NAVIGATED_TO,
        toggleAppLoadAction: __WEBPACK_IMPORTED_MODULE_14__store_ui_actions__["a" /* TYPES */].APP_LOADED
    }), {
        getCurrentPath: function getCurrentPath() {
            return this.location.hash.replace(/#!([a-z-_]+?)$/, '$1');
        },
        loadFinish: function loadFinish() {
            this.toggleAppLoadAction(true);
            var currentPath = this.getCurrentPath();
            var route = __WEBPACK_IMPORTED_MODULE_13__shared_constants__["e" /* NAV_PATH_HOME */];

            if (!this.$isServer && this.validRoutes.indexOf(currentPath) !== -1) {
                route = currentPath;
            }

            this.navigateToAction({ route: route, force: true });
        },
        onPopstate: function onPopstate() {
            var route = this.getCurrentPath();
            this.navigateToAction({ route: route, force: true });
        }
    })
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/containers/Skills/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants__ = __webpack_require__("./app/assets/js/shared/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__("./app/assets/js/components/Page/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_SkillList__ = __webpack_require__("./app/assets/js/objects/SkillList/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_DataSet__ = __webpack_require__("./app/assets/js/objects/DataSet/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Section__ = __webpack_require__("./app/assets/js/components/Section/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_ui_actions__ = __webpack_require__("./app/assets/js/store/ui.actions.js");
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

    components: {
        Page: __WEBPACK_IMPORTED_MODULE_2__components_Page__["a" /* default */],
        PageSection: __WEBPACK_IMPORTED_MODULE_5__components_Section__["a" /* default */],
        SkillList: __WEBPACK_IMPORTED_MODULE_3__objects_SkillList__["a" /* default */],
        DataSet: __WEBPACK_IMPORTED_MODULE_4__objects_DataSet__["a" /* default */]
    },

    data: function data() {
        return {
            id: __WEBPACK_IMPORTED_MODULE_1__shared_constants__["h" /* NAV_PATH_SKILLS */]
        };
    },


    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapState */])({
        ids: function ids(state) {
            return state.data.skills._byId;
        },
        skills: function skills(state) {
            return state.data.skills;
        }
    }),

    methods: {
        updateRoute: function updateRoute(_ref) {
            var id = _ref.id;

            this.$store.dispatch('ui/' + __WEBPACK_IMPORTED_MODULE_6__store_ui_actions__["a" /* TYPES */].ROUTE_UPDATED, id);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Anchor/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Ico__ = __webpack_require__("./app/assets/js/objects/Ico/index.vue");
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
    props: {
        type: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string,
        link: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string,
        ico: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string,
        label: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string
    },
    components: {
        Ico: __WEBPACK_IMPORTED_MODULE_1__objects_Ico__["a" /* default */]
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Burger/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({

    props: {
        active: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].bool.def(false),
        onClick: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].func
    }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/DataSet/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Ico__ = __webpack_require__("./app/assets/js/objects/Ico/index.vue");
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

    props: {
        items: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].arrayOf(__WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].shape({
            label: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string,
            ico: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string,
            data: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].arrayOf(__WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].object)
        }))
    },

    components: {
        Ico: __WEBPACK_IMPORTED_MODULE_1__objects_Ico__["a" /* default */]
    }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Ico/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        name: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string.isRequired
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/List/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'List',

    render: function render(h) {
        var _$style = this.$style,
            root = _$style.root,
            item = _$style.item;


        var children = this.$slots.default.map(function (child) {
            if (!child.tag) {
                return child;
            }

            if (child.tag === 'li') {
                var classes = child.data.class;
                child.data.class = Array.isArray(classes) ? [].concat(classes, [item]) : [classes, item]; //eslint-disable-line quote-props, no-param-reassign
                return child;
            }

            return h('li', { 'class': item }, [child]); //eslint-disable-line quote-props
        });

        return h('ul', { 'class': root }, children); //eslint-disable-line quote-props
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/MeterBar/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
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

    props: {
        label: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string.isRequired,
        value: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].number.isRequired
    },

    computed: {
        barValueClass: function barValueClass() {
            return this.$style['bar--' + this.value];
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/SkillList/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_MeterBar__ = __webpack_require__("./app/assets/js/objects/MeterBar/index.vue");
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

    props: {
        skills: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].arrayOf(__WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].shape({
            id: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].any,
            label: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].any,
            level: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].number
        }))
    },

    components: {
        MeterBar: __WEBPACK_IMPORTED_MODULE_1__objects_MeterBar__["a" /* default */]
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/SocialList/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_List__ = __webpack_require__("./app/assets/js/objects/List/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Ico__ = __webpack_require__("./app/assets/js/objects/Ico/index.vue");
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
    props: {
        items: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].arrayOf(__WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].shape({
            type: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string,
            url: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string,
            label: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string
        }))
    },
    components: {
        List: __WEBPACK_IMPORTED_MODULE_1__objects_List__["a" /* default */],
        Ico: __WEBPACK_IMPORTED_MODULE_2__objects_Ico__["a" /* default */]
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Table/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Time__ = __webpack_require__("./app/assets/js/objects/Time/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Anchor__ = __webpack_require__("./app/assets/js/objects/Anchor/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils__ = __webpack_require__("./app/assets/js/shared/utils.js");
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






var id = 0;

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        id += 1;
        return {
            id: id
        };
    },


    props: {
        styles: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].arrayOf(__WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string).def(['brackets']),
        caption: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string,
        data: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].object
    },

    components: {
        FormattedTime: __WEBPACK_IMPORTED_MODULE_1__objects_Time__["a" /* default */],
        Anchor: __WEBPACK_IMPORTED_MODULE_2__objects_Anchor__["a" /* default */]
    },

    computed: {
        tableStyles: function tableStyles() {
            var _this = this;

            return this.styles.map(function (s) {
                return _this.$style['root--' + s] || '';
            }).join(' ');
        },
        captionLabel: function captionLabel() {
            return this.caption && Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils__["b" /* has */])(this.data, this.caption) ? this.data[this.caption] : '';
        },
        hasBrackets: function hasBrackets() {
            return this.styles.indexOf('brackets') !== -1;
        },
        rows: function rows() {
            var _this2 = this;

            return Object.keys(this.data).reduce(function (o, key) {
                if (key !== _this2.caption && key !== 'id' && key.indexOf('_') !== 0) {
                    o[key] = _this2.data[key]; //eslint-disable-line no-param-reassign
                }
                return o;
            }, {});
        }
    },

    methods: {
        metaTitle: function metaTitle(type) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


            switch (type) {
                case 'video':
                    return 'Watch video for: ' + title;

                case 'slides':
                    return 'Slides for: ' + title;

                default:
                    return '';
            }
        },
        isDate: function isDate(heading) {
            return heading === 'to' || heading === 'from' || heading === 'date';
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Time/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATE_PARSE_REGEXP */
/* unused harmony export MONTHS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
//
//
//
//
//
//




var DATE_PARSE_REGEXP = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/* harmony default export */ __webpack_exports__["a"] = ({

    props: {
        value: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string
    },

    computed: {
        datetime: function datetime() {
            return new Date(DATE_PARSE_REGEXP.test(this.value) ? this.value : null);
        },
        month: function month() {
            return MONTHS[this.datetime.getMonth()];
        },
        text: function text() {
            return DATE_PARSE_REGEXP.test(this.value) ? this.month + ' ' + this.datetime.getFullYear() : '-';
        }
    }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/assets/js/objects/Title/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_types__ = __webpack_require__("./node_modules/vue-types/es/index.js");
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
    props: {
        prefix: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string.def('me'),
        title: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string.isRequired,
        subtitle: __WEBPACK_IMPORTED_MODULE_0_vue_types__["a" /* default */].string
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\"}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/styles/_breakpoints.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* stylelint-disable property-no-unknown */\n\n/* stylelint-enable property-no-unknown */\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/_breakpoints.scss"],"names":[],"mappings":"AACA,2CAAA;;AAQA,0CAAA","file":"_breakpoints.scss","sourcesContent":["\n/* stylelint-disable property-no-unknown */\n@import \"mq\";\n\n:export {\n    @each $key, $value in $mq-breakpoints {\n        #{$key}: $value / ($value * 0 + 1);\n    }\n}\n/* stylelint-enable property-no-unknown */"],"sourceRoot":""}]);

// exports
exports.locals = {
	"mobile": "480",
	"tablet": "768",
	"tablet-landscape": "1024",
	"tabletLandscape": "1024",
	"desktop": "1280",
	"wide": "1600",
	"fullhd": "1920"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":true,\"camelCase\":true,\"importLoaders\":1,\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\"}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/styles/app.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* ==========================================================================\n\n   Base Styles\n   ====\n\n\n   Some Basic Styles\n   ========================================================================== */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #4d4d4d;\n}\n\nhtml {\n  /*\n    $font-min: $font-size-default;\n    //$font-min: 14px;\n    //$font-max: 18px;\n    $font-max: 20px;\n    $font-diff: ($font-max - $font-min);\n    //$breakpoint-min: 1024px;\n    $breakpoint-min: 1280px;\n    $breakpoint-max: 2560px;\n    //$breakpoint-max: 1920px;\n    $breakpoint-diff: ($breakpoint-max - $breakpoint-min);\n    $font-scale: $font-diff / $breakpoint-diff;\n    */\n  font-size: 100%;\n}\n\n@media (min-width: 64em) {\n  html {\n    font-size: calc(0.875em + (2 * (100vw - 1024px) / 256));\n  }\n}\n\n@media (min-width: 80em) {\n  html {\n    font-size: calc(1em + (4 * (100vw - 1280px) / 1280));\n  }\n}\n\nbody {\n  overflow: hidden;\n  min-width: 320px;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background: #fff;\n  color: #4d4d4d;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Open Sans\", sans-serif;\n  line-height: 1.25;\n}\n\n::-moz-selection {\n  background-color: rgba(160, 44, 44, 0.2);\n  color: #641c1c;\n  text-shadow: none;\n}\n\n::selection {\n  background-color: rgba(160, 44, 44, 0.2);\n  color: #641c1c;\n  text-shadow: none;\n}\n\n/*\n::-webkit-scrollbar {\n    width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: darken($color-link, 10%);\n}\n\n::-webkit-scrollbar-track {\n    background: $color-link;\n}\n*/\n\naudio,\ncanvas,\niframe,\nsvg,\nvideo,\nimg {\n  vertical-align: middle;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  margin: 1rem 0;\n  padding: 0;\n  border: 0;\n  border-top: 1px solid #4d4d4d;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-focus-inner {\n  border: 0;\n}\n\n/* ==========================================================================\n   ##prevent 300ms delay in FF, Chrome and IE on touch devices\n   ========================================================================== */\n\na[href],\nbutton {\n  touch-action: manipulation;\n}\n\n/* ==========================================================================\n   ##Headings and Base\n\n   1 to 6 heading\n\n   ```\n   ```\n   ========================================================================== */\n\nh1,\n.h1 {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 2.5rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nh2,\n.h2 {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nh3,\n.h3 {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nh4,\n.h4 {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nh5,\n.h5 {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nh6,\n.h6 {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\np {\n  margin: 0 0 0.2em;\n  line-height: 1.2;\n}\n\nabbr[title] {\n  border-bottom: 0;\n}\n\n.no-touchevents abbr[title] {\n  border-bottom: 1px dotted currentColor;\n  text-decoration: none;\n}\n\n@media print {\n  .no-touchevents abbr[title] {\n    border-bottom: 0;\n  }\n}\n\na.u-link--mark,\na:not([class]) {\n  background-image: linear-gradient(to top, rgba(77, 77, 77, 0.2) 0, rgba(77, 77, 77, 0.2) 3px, transparent 4px);\n  color: inherit;\n  outline: 0;\n  text-decoration: none;\n}\n\n.no-touchevents a.u-link--mark,\n.no-touchevents a:not([class]) {\n  position: relative;\n  display: inline-block;\n  padding-right: 0.22em;\n  padding-left: 0.22em;\n  background-image: none;\n  color: inherit;\n  outline: 0;\n  text-decoration: none;\n  transition: all 0.27s;\n}\n\n.no-touchevents a.u-link--mark::after,\n.no-touchevents a:not([class])::after {\n  position: absolute;\n  right: 0;\n  bottom: -0.17em;\n  left: 0;\n  z-index: -2;\n  opacity: 0.1;\n  height: 3px;\n  background-color: currentColor;\n  content: \"\";\n  pointer-events: none;\n  transition: all 0.1s linear;\n}\n\n.no-touchevents a.u-link--mark::before,\n.no-touchevents a:not([class])::before {\n  position: absolute;\n  top: 0;\n  bottom: -0.17em;\n  left: 0;\n  z-index: 1;\n  opacity: 0;\n  width: 0;\n  background-color: #a02c2c;\n  content: \"\";\n  pointer-events: none;\n  transform: scaleX(1);\n  transform-origin: 0 0;\n  transition: opacity 0.25s, width 0s ease 0.25s, transform 0s ease 0.25s, transform-origin 0s ease 0.25s;\n}\n\n.no-touchevents a.u-link--mark:hover,\n.no-touchevents a:not([class]):hover {\n  color: #a02c2c;\n  text-decoration: none;\n  transition-delay: 0.25s;\n  transition-duration: 0;\n}\n\n.no-touchevents a.u-link--mark:hover::before,\n.no-touchevents a:not([class]):hover::before {\n  opacity: 1;\n  width: 100%;\n  transform: scaleX(0);\n  transform-origin: right 0;\n  transition: width 0.25s ease, transform-origin 0s ease 0.25s, transform 0.25s ease 0.25s;\n}\n\n.no-touchevents a.u-link--mark:hover::after,\n.no-touchevents a:not([class]):hover::after {\n  opacity: 0.3;\n  transition: opacity 0.15s ease 0.15s;\n}\n\n[data-whatinput=\"keyboard\"] a:not([class]) {\n  outline: 2px solid rgba(160, 44, 44, 0);\n  outline-offset: 4px;\n  transition: outline-offset 0.2s ease, color 0.2s ease;\n}\n\n[data-whatinput=\"keyboard\"] a:not([class]):focus {\n  color: #a02c2c;\n  outline-color: rgba(160, 44, 44, 0.2);\n  outline-offset: 2px;\n}\n\n[data-whatinput=\"keyboard\"] a:not([class]):focus::before,\n[data-whatinput=\"keyboard\"] a:not([class]):focus::after {\n  opacity: 0;\n}\n\n/* ==========================================================================\n   ## Layout settings\n   ========================================================================== */\n\n[data-scrollbar] .scrollbar-track {\n  background: #a02c2c !important;\n}\n\n@media print {\n  [data-scrollbar] .scrollbar-track {\n    display: none !important;\n  }\n}\n\n[data-scrollbar] .scrollbar-track-y {\n  opacity: 1 !important;\n}\n\n[data-scrollbar] .scrollbar-track-x {\n  display: none !important;\n}\n\n[data-scrollbar] .scrollbar-thumb {\n  background: #782121 !important;\n}\n\n/* ==========================================================================\n\n   Utilities\n   ====\n\n   ========================================================================== */\n\n/* ==========================================================================\n   Section Title\n\n   ```\n   <p class=\"u-text--left\">Left aligned text</p>\n   <p class=\"u-text--right\">Right aligned text</p>\n   <p class=\"u-text--center\">Centered text</p>\n   <p class=\"u-text--hide\">Hidden text</p>\n   <p class=\"u-text--ellipsis\">This text is one line with ellipsis</p>\n   ```\n   ========================================================================== */\n\n.u-text--left {\n  text-align: left !important;\n}\n\n.u-text--right {\n  text-align: right !important;\n}\n\n.u-text--center {\n  text-align: center !important;\n}\n\n.u-text--hide {\n  border: 0;\n  background-color: transparent;\n  color: transparent;\n  font: 0 / 0 a;\n  font-size: 0.1px;\n  text-shadow: none;\n}\n\n.u-text--ellipsis {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* ==========================================================================\n   ##Box model helpers\n\n   ```\n\n   <div class=\"u-clearfix\">Clearfixed box</div>\n   <div class=\"u-centered\">Centered</div>\n   <div class=\"u-float--left\">Floated left</div>\n   <div class=\"u-float--right\">Floated right</div>\n   <div class=\"u-clear\">Clearing box</div>\n\n   <div class=\"u-inline\">\n    <div>inlined</div>\n    <div>items</div>\n   </div>\n\n   <div class=\"u-stacked\">\n    <span>stacked</span>\n    <span>items</span>\n   </div>\n   ```\n   ========================================================================== */\n\n.u-clearfix::before,\n.u-clearfix::after {\n  display: table;\n  content: \" \";\n}\n\n.u-clearfix::after {\n  clear: both;\n}\n\n.u-clear {\n  clear: both !important;\n}\n\n.u-centered {\n  float: none !important;\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.u-float,\n.u-float--left {\n  float: left !important;\n}\n\n.u-float--right {\n  float: right !important;\n}\n\n.u-inline > * {\n  display: inline-block !important;\n}\n\n.u-stacked > * {\n  display: block !important;\n}\n\n.u-inline--baseline > * {\n  display: inline-block !important;\n  vertical-align: baseline !important;\n}\n\n/* ==========================================================================\n   ##Typographic Helpers\n\n   ```\n   <p class=\"u-type--xs\">font size extra small</p>\n   <p class=\"u-type--s\">font size small</p>\n   <p class=\"u-type--m\">font size medium (default)</p>\n   <p class=\"u-type--l\">font size large</p>\n   <p class=\"u-type--xl\">font size extra large</p>\n   <p class=\"u-type--xxl\">font size oversized</p>\n\n   <p class=\"u-type--larger\">relative size</p>\n   <p class=\"u-weight--strong\">strong font weight</p>\n   <p class=\"u-weight--medium\">medium font weight</p>\n   <p class=\"u-weight--light\">light font weight</p>\n   ```\n   ========================================================================== */\n\n.u-type--xl {\n  font-size: 2.5rem !important;\n}\n\n.u-type--l {\n  font-size: 2rem !important;\n}\n\n.u-type--m {\n  font-size: 1rem !important;\n}\n\n.u-type--s {\n  font-size: 0.875rem !important;\n}\n\n.u-type--xs {\n  font-size: 0.625rem !important;\n}\n\n.u-type--default {\n  font-size: 1rem !important;\n}\n\n.u-type--larger {\n  font-size: 130% !important;\n}\n\n.u-type--smaller {\n  font-size: 85% !important;\n}\n\n.u-weight--regular {\n  font-weight: 400 !important;\n}\n\n.u-weight--semibold {\n  font-weight: 600 !important;\n}\n\n.u-weight--bold {\n  font-weight: 700 !important;\n}\n\n.u-type--mark {\n  position: relative;\n  display: inline-block;\n  padding: 0 0.2em 0.1em;\n  background-color: transparent;\n  color: #fff;\n  line-height: 1;\n}\n\n.u-type--mark::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  background-color: #a02c2c;\n  content: \"\";\n}\n\n/* ==========================================================================\n\n   ### Visibility Helpers\n\n   ```\n   <p class=\"u-hidden\">this is hidden from mobile screens</p>\n   <p class=\"u-visuallyhidden\">this is hidden from small tablet screens</p>\n   <p class=\"u-invisible\">this is hidden from large tablets screens</p>\n   ```\n   ========================================================================== */\n\n.u-hidden,\n.js .is-jshidden {\n  display: none !important;\n  visibility: hidden !important;\n}\n\n.u-visuallyhidden {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n}\n\n.u-visuallyhidden .focusable:active,\n.u-visuallyhidden .focusable:focus {\n  position: static;\n  overflow: visible;\n  clip: auto;\n  width: auto;\n  height: auto;\n  margin: 0;\n}\n\n.u-invisible {\n  visibility: hidden !important;\n}\n\n@media (min-width: 30em) {\n  .u-hidden--from-mobile {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 29.99em) {\n  .u-hidden--until-mobile {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (min-width: 48em) {\n  .u-hidden--from-tablet {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 47.99em) {\n  .u-hidden--until-tablet {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (min-width: 64em) {\n  .u-hidden--from-tablet-landscape {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 63.99em) {\n  .u-hidden--until-tablet-landscape {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (min-width: 80em) {\n  .u-hidden--from-desktop {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 79.99em) {\n  .u-hidden--until-desktop {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (min-width: 100em) {\n  .u-hidden--from-wide {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 99.99em) {\n  .u-hidden--until-wide {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (min-width: 120em) {\n  .u-hidden--from-fullhd {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 119.99em) {\n  .u-hidden--until-fullhd {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media not print {\n  .u-only-print {\n    display: none;\n  }\n}\n\n@media print {\n  .u-only-screen {\n    display: none;\n  }\n}\n\n/* ==========================================================================\n\n   Print Styles\n   ====\n\n   ```\n   ```\n\n   ========================================================================== */\n\n@media print {\n@page {\n    margin: 0;\n    padding: 0;\n    size: A4 portrait;\n}\n\n@page :first {\n    margin: 0;\n}\n\n  * {\n    box-shadow: none !important;\n    text-shadow: none !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n\n  html {\n    font-size: 8pt !important;\n  }\n\n  body {\n    overflow: auto;\n    height: auto;\n  }\n\n  a,\n  a:visited {\n    color: #4d4d4d !important;\n    text-decoration: none;\n  }\n\n  a[href][target=\"_blank\"] {\n    display: inline;\n    background-image: none;\n    color: #4d4d4d !important;\n    text-decoration: none;\n  }\n\n  a[href][target=\"_blank\"]::after {\n    position: static;\n    opacity: 1;\n    border-bottom: 2px solid rgba(77, 77, 77, 0.2);\n    background-color: transparent;\n    font-size: 0.8em;\n    content: \" (\" attr(href) \")\";\n  }\n\n  .ir a::after,\n  a[href^=\"javascript:\"]::after,\n  a[href^=\"#\"]::after {\n    content: \"\";\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  ul,\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    widows: 3;\n    orphans: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/_base.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/_mixins.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/app.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/_utility.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/_print.scss"],"names":[],"mappings":"AAAA;;;;;;;gFCOgF;;ADMhF;;;EAGI,uBAAA;EACA,yCAAA;CCHH;;ADMD;;;;;EAKI,eAAA;CCHH;;ADMD;EAGI;;;;;;;;;;;;MCME;EDQF,gBAAA;CCNH;;ACyLO;EFpMR;IG6KI,wDAAA;GF7JD;CACF;;ACmLO;EFpMR;IG6KI,qDAAA;GFvJD;CACF;;ADeD;EACI,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;EACA,mCAAA;EACA,oCAAA;EACA,qCAAA;EAEA,kBAAA;CCbH;;ADoBD;EACI,yCAAA;EACA,eAAA;EACA,kBAAA;CCjBH;;ADoBD;EACI,yCAAA;EACA,eAAA;EACA,kBAAA;CCjBH;;ADoBD;;;;;;;;;;;;ECNE;;ADqBF;;;;;;EAMI,uBAAA;CClBH;;ADuBD;EACI,eAAA;EACA,YAAA;EACA,eAAA;EACA,WAAA;EACA,UAAA;EACA,8BAAA;CCpBH;;ADyBD;EACI,UAAA;EACA,WAAA;EACA,UAAA;CCtBH;;AD2BD;EACI,iBAAA;CCxBH;;AD2BD;EACI,UAAA;CCxBH;;AD4BD;;gFCxBgF;;AD4BhF;;EAEI,2BAAA;CCzBH;;AD4BD;;;;;;;gFCnBgF;;AD8B5E;;EAEI,kBAAA;EAEA,iCAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;CC5BP;;ADqBG;;EAEI,kBAAA;EAEA,iCAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;CCnBP;;ADYG;;EAEI,kBAAA;EAEA,iCAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;CCVP;;ADGG;;EAEI,kBAAA;EAEA,iCAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;CCDP;;ADNG;;EAEI,kBAAA;EAEA,iCAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;CCQP;;ADfG;;EAEI,kBAAA;EAEA,iCAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;CCiBP;;ADbD;EACI,kBAAA;EACA,iBAAA;CCgBH;;ADbD;EACI,iBAAA;CCgBH;;ADd4B;EACrB,uCAAA;EACA,sBAAA;CCiBP;;ACeO;EFlCJ;IAKQ,iBAAA;GCmBT;CACF;;ADfD;;EAEI,+GAAA;EAOA,eAAA;EACA,WAAA;EACA,sBAAA;CCYH;;ADTD;;EAEI,mBAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;EACA,uBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,sBAAA;CCYH;;ADTG;;EACI,mBAAA;EACA,SAAA;EACA,gBAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,+BAAA;EACA,YAAA;EACA,qBAAA;EACA,4BAAA;CCaP;;ADrCD;;EA4BQ,mBAAA;EACA,OAAA;EACA,gBAAA;EACA,QAAA;EACA,WAAA;EACA,WAAA;EACA,SAAA;EACA,0BAAA;EACA,YAAA;EACA,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,wGAAA;CCcP;;ADXG;;EACI,eAAA;EACA,sBAAA;EACA,wBAAA;EACA,uBAAA;CCeP;;AD9DD;;EAkDY,WAAA;EACA,YAAA;EACA,qBAAA;EACA,0BAAA;EACA,yFAAA;CCiBX;;ADdO;;EACI,aAAA;EACA,qCAAA;CCkBX;;AGFD;EDlFI,wCAAA;EACA,oBAAA;EACA,sDAAA;CFwFH;;AGFD;EDnFQ,eAAA;EACA,sCAAA;EACA,oBAAA;CFyFP;;AGFD;;EDnFY,WAAA;CF0FX;;AD1BD;;gFC8BgF;;ADzB3D;EACb,+BAAA;CC4BP;;AD1BO;EALR;IAMY,yBAAA;GC8BT;CACF;;AD3BoB;EACb,sBAAA;CC8BP;;ADzCD;EAeQ,yBAAA;CC8BP;;AD7CD;EAmBQ,+BAAA;CC8BP;;AI9UD;;;;;gFJqVgF;;AIzUhF;;;;;;;;;;gFJqVgF;;AIvU5E;EACI,4BAAA;CJ0UP;;AIvUG;EACI,6BAAA;CJ0UP;;AIvUG;EACI,8BAAA;CJ0UP;;AIrVD;EAgBQ,UAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;CJyUP;;AItUG;EF2GA,iBAAA;EACA,oBAAA;EACA,wBAAA;CF+NH;;AIvUD;;;;;;;;;;;;;;;;;;;;;gFJ8VgF;;AItUhF;;EF3BQ,eAAA;EACA,aAAA;CFsWP;;AI1UG;EFxBI,YAAA;CFsWP;;AI1UG;EACI,uBAAA;CJ6UP;;AI1UG;EACI,uBAAA;EACA,8BAAA;EACA,6BAAA;CJ6UP;;AI1VD;;EAkBQ,uBAAA;CJ6UP;;AI/VD;EAsBQ,wBAAA;CJ6UP;;AInWD;EA2BQ,iCAAA;CJ4UP;;AIvWD;EAgCQ,0BAAA;CJ2UP;;AI3WD;EAqCQ,iCAAA;EACA,oCAAA;CJ0UP;;AItUD;;;;;;;;;;;;;;;;gFJwVgF;;AIlUxE;EACI,6BAAA;CJqUX;;AI1UD;EAKY,2BAAA;CJyUX;;AI9UD;EAKY,2BAAA;CJ6UX;;AIlVD;EAKY,+BAAA;CJiVX;;AItVD;EAKY,+BAAA;CJqVX;;AI1VD;EAUQ,2BAAA;CJoVP;;AIjVG;EACI,2BAAA;CJoVP;;AIjVG;EACI,0BAAA;CJoVP;;AI/UO;EACI,4BAAA;CJkVX;;AInVO;EACI,4BAAA;CJsVX;;AIvVO;EACI,4BAAA;CJ0VX;;AIlXD;EA6BQ,mBAAA;EACA,sBAAA;EACA,uBAAA;EACA,8BAAA;EACA,YAAA;EACA,eAAA;CJyVP;;AI3XD;EAqCY,mBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;EACA,0BAAA;EACA,YAAA;CJ0VX;;AIrVD;;;;;;;;;gFJgWgF;;AInV5E;;EAEI,yBAAA;EACA,8BAAA;CJsVP;;AI3VD;EFpCI,mBAAA;EACA,iBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,UAAA;CFmYH;;AItWD;;EAegB,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;CJ4Vf;;AItVG;EACI,8BAAA;CJyVP;;ACzVO;EGOI;IACI,yBAAA;IACA,8BAAA;GJsVb;CACF;;AChWO;EG3BR;IA2CgB,yBAAA;IACA,8BAAA;GJqVb;CACF;;ACvWO;EG3BR;IAmCgB,yBAAA;IACA,8BAAA;GJoWb;CACF;;AC9WO;EG3BR;IA2CgB,yBAAA;IACA,8BAAA;GJmWb;CACF;;ACrXO;EGOI;IACI,yBAAA;IACA,8BAAA;GJkXb;CACF;;AC5XO;EGeI;IACI,yBAAA;IACA,8BAAA;GJiXb;CACF;;ACnYO;EG3BR;IAmCgB,yBAAA;IACA,8BAAA;GJgYb;CACF;;AC1YO;EG3BR;IA2CgB,yBAAA;IACA,8BAAA;GJ+Xb;CACF;;ACjZO;EG3BR;IAmCgB,yBAAA;IACA,8BAAA;GJ8Yb;CACF;;ACxZO;EGeI;IACI,yBAAA;IACA,8BAAA;GJ6Yb;CACF;;AC/ZO;EG3BR;IAmCgB,yBAAA;IACA,8BAAA;GJ4Zb;CACF;;ACtaO;EGeI;IACI,yBAAA;IACA,8BAAA;GJ2Zb;CACF;;AIvZG;EAjDJ;IAoDY,cAAA;GJyZT;CACF;;AItZG;EAEI;IACI,cAAA;GJwZT;CACF;;AKzpBD;;;;;;;;gFLmqBgF;;AKtpBhF;AAEI;IACI,UAAA;IACA,WAAA;IACA,kBAAA;CLwpBP;;AKrpBG;IACI,UAAA;CLwpBP;;EKrpBG;IACI,4BAAA;IACA,6BAAA;IACA,kCAAA;IACA,0BAAA;GLwpBL;;EKrpBC;IACI,0BAAA;GLwpBL;;EKrpBC;IACI,eAAA;IACA,aAAA;GLwpBL;;EKrpBC;;IAEI,0BAAA;IACA,sBAAA;GLwpBL;;EKrpBC;IACI,gBAAA;IACA,uBAAA;IACA,0BAAA;IACA,sBAAA;GLwpBL;;EKrpBC;IACI,iBAAA;IACA,WAAA;IACA,+CAAA;IACA,8BAAA;IACA,iBAAA;IACA,6BAAA;GLwpBL;;EKppBC;;;IAGI,YAAA;GLupBL;;EKppBC;IACI,4BAAA;GLupBL;;EKppBC;;;IAGI,yBAAA;GLupBL;;EKppBC;IACI,2BAAA;GLupBL;;EKppBC;;;IAGI,UAAA;IACA,WAAA;GLupBL;;EKppBC;;IAEI,wBAAA;GLupBL;CACF","file":"app.scss","sourcesContent":["/* ==========================================================================\n\n   Base Styles\n   ====\n\n\n   Some Basic Styles\n   ========================================================================== */\n\n@import \"colors\";\n@import \"fonts\";\n@import \"mixins\";\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: $color-text;\n}\n\nhtml {\n    //https://www.smashingmagazine.com/2016/05/fluid-typography/\n\n    /*\n    $font-min: $font-size-default;\n    //$font-min: 14px;\n    //$font-max: 18px;\n    $font-max: 20px;\n    $font-diff: ($font-max - $font-min);\n    //$breakpoint-min: 1024px;\n    $breakpoint-min: 1280px;\n    $breakpoint-max: 2560px;\n    //$breakpoint-max: 1920px;\n    $breakpoint-diff: ($breakpoint-max - $breakpoint-min);\n    $font-scale: $font-diff / $breakpoint-diff;\n    */\n    $base-font-size: percentage($font-size-default / 16px);\n    font-size: $base-font-size;\n\n    @include mq(tablet-landscape) {\n        @include responsive-typography(\n            $font-min: 14px,\n            $font-max: $font-size-default,\n            $breakpoint-min: 1024px,\n            $breakpoint-max: 1280px\n        );\n    }\n\n    @include mq(desktop) {\n        @include responsive-typography(\n            $font-min: $font-size-default,\n            $font-max: 20px,\n            $breakpoint-min: 1280px,\n            $breakpoint-max: 2560px\n        );\n    }\n}\n\nbody {\n    overflow: hidden;\n    min-width: 320px;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    background: $color-bg;\n    color: $color-text;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-family: $font-family-base;\n    //overflow-x: hidden;\n    line-height: $font-lheight-default / $font-size-default;\n}\n\n//Remove text-shadow in selection highlight: h5bp.com/i\n//These selection declarations have to be separate.\n//Customize the background color to match your design.\n\n::-moz-selection {\n    background-color: rgba($color-link, 0.2);\n    color: darken($color-link, 15%);\n    text-shadow: none;\n}\n\n::selection {\n    background-color: rgba($color-link, 0.2);\n    color: darken($color-link, 15%);\n    text-shadow: none;\n}\n\n/*\n::-webkit-scrollbar {\n    width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: darken($color-link, 10%);\n}\n\n::-webkit-scrollbar-track {\n    background: $color-link;\n}\n*/\n// Remove the gap between images and the bottom of their containers: h5bp.com/i/440\n\naudio,\ncanvas,\niframe,\nsvg,\nvideo,\nimg {\n    vertical-align: middle;\n}\n\n// A better looking default horizontal rule\n\nhr {\n    display: block;\n    height: 1px;\n    margin: 1rem 0;\n    padding: 0;\n    border: 0;\n    border-top: 1px solid $color-border;\n}\n\n// Remove default fieldset styles.\n\nfieldset {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n// Allow only vertical resizing of textareas.\n\ntextarea {\n    resize: vertical;\n}\n\ninput::-moz-focus-inner {\n    border: 0;\n}\n\n\n/* ==========================================================================\n   ##prevent 300ms delay in FF, Chrome and IE on touch devices\n   ========================================================================== */\n\na[href],\nbutton {\n    touch-action: manipulation;\n}\n\n/* ==========================================================================\n   ##Headings and Base\n\n   1 to 6 heading\n\n   ```\n   ```\n   ========================================================================== */\n\n@each $font-head-num, $font-head-size in $font-sizes-headings {\n\n    h#{$font-head-num},\n    :global(.h#{$font-head-num}) {\n        margin: 0 0 0.2em;\n        //color: $color-text\n        font-family: $font-family-h;\n        font-size: font-size($font-head-size);\n        font-weight: font-weight(regular);\n        line-height: 1.2;\n    }\n}\n\np {\n    margin: 0 0 0.2em;\n    line-height: 1.2;\n}\n\nabbr[title] {\n    border-bottom: 0;\n\n    :global(.no-touchevents) & {\n        border-bottom: 1px dotted currentColor;\n        text-decoration: none;\n\n        @include mq($media-type: print) {\n            border-bottom: 0;\n        }\n    }\n}\n\n:global(a.u-link--mark),\n:global(a:not([class])) {\n    background-image:\n        linear-gradient(\n            to top,\n            rgba($color-text, 0.2) 0,\n            rgba($color-text, 0.2) 3px,\n            transparent 4px\n        );\n    color: inherit;\n    outline: 0;\n    text-decoration: none;\n}\n\n:global(.no-touchevents a.u-link--mark),\n:global(.no-touchevents a:not([class])) {\n    position: relative;\n    display: inline-block;\n    padding-right: 0.22em;\n    padding-left: 0.22em;\n    background-image: none;\n    color: inherit;\n    outline: 0;\n    text-decoration: none;\n    transition: all 0.27s;\n\n\n    &::after {\n        position: absolute;\n        right: 0;\n        bottom: -0.17em;\n        left: 0;\n        z-index: z-index(behind) - 1;\n        opacity: 0.1;\n        height: 3px;\n        background-color: currentColor;\n        content: \"\";\n        pointer-events: none;\n        transition: all 0.1s linear;\n    }\n\n    &::before {\n        position: absolute;\n        top: 0;\n        bottom: -0.17em;\n        left: 0;\n        z-index: z-index(above);\n        opacity: 0;\n        width: 0;\n        background-color: $color-link;\n        content: \"\";\n        pointer-events: none;\n        transform: scaleX(1);\n        transform-origin: 0 0;\n        transition: opacity 0.25s, width 0s ease 0.25s, transform 0s ease 0.25s, transform-origin 0s ease 0.25s;\n    }\n\n    &:hover {\n        color: $color-link;\n        text-decoration: none;\n        transition-delay: 0.25s;\n        transition-duration: 0;\n\n        &::before {\n            opacity: 1;\n            width: 100%;\n            transform: scaleX(0);\n            transform-origin: right 0;\n            transition: width 0.25s ease, transform-origin 0s ease 0.25s, transform 0.25s ease 0.25s;\n        }\n\n        &::after {\n            opacity: 0.3;\n            transition: opacity 0.15s ease 0.15s;\n        }\n    }\n}\n\n[data-whatinput=\"keyboard\"] a:not([class]) {\n    @include a11y-anchor-focus;\n}\n\n/* ==========================================================================\n   ## Layout settings\n   ========================================================================== */\n:global {\n\n    [data-scrollbar] .scrollbar-track {\n        background: $color-link !important;\n\n        @media print {\n            display: none !important;\n        }\n    }\n\n    [data-scrollbar] .scrollbar-track-y {\n        opacity: 1 !important;\n    }\n\n    [data-scrollbar] .scrollbar-track-x {\n        display: none !important;\n    }\n\n    [data-scrollbar] .scrollbar-thumb {\n        background: darken($color-link, 10%) !important;\n    }\n}","/* ==========================================================================\n\n   Base Styles\n   ====\n\n\n   Some Basic Styles\n   ========================================================================== */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #4d4d4d;\n}\n\nhtml {\n  /*\n    $font-min: $font-size-default;\n    //$font-min: 14px;\n    //$font-max: 18px;\n    $font-max: 20px;\n    $font-diff: ($font-max - $font-min);\n    //$breakpoint-min: 1024px;\n    $breakpoint-min: 1280px;\n    $breakpoint-max: 2560px;\n    //$breakpoint-max: 1920px;\n    $breakpoint-diff: ($breakpoint-max - $breakpoint-min);\n    $font-scale: $font-diff / $breakpoint-diff;\n    */\n  font-size: 100%;\n}\n\n@media (min-width: 64em) {\n  html {\n    font-size: calc(0.875em + (2 * (100vw - 1024px) / 256));\n  }\n}\n\n@media (min-width: 80em) {\n  html {\n    font-size: calc(1em + (4 * (100vw - 1280px) / 1280));\n  }\n}\n\nbody {\n  overflow: hidden;\n  min-width: 320px;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background: #fff;\n  color: #4d4d4d;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Open Sans\", sans-serif;\n  line-height: 1.25;\n}\n\n::-moz-selection {\n  background-color: rgba(160, 44, 44, 0.2);\n  color: #641c1c;\n  text-shadow: none;\n}\n\n::selection {\n  background-color: rgba(160, 44, 44, 0.2);\n  color: #641c1c;\n  text-shadow: none;\n}\n\n/*\n::-webkit-scrollbar {\n    width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n    background: darken($color-link, 10%);\n}\n\n::-webkit-scrollbar-track {\n    background: $color-link;\n}\n*/\n\naudio,\ncanvas,\niframe,\nsvg,\nvideo,\nimg {\n  vertical-align: middle;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  margin: 1rem 0;\n  padding: 0;\n  border: 0;\n  border-top: 1px solid #4d4d4d;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-focus-inner {\n  border: 0;\n}\n\n/* ==========================================================================\n   ##prevent 300ms delay in FF, Chrome and IE on touch devices\n   ========================================================================== */\n\na[href],\nbutton {\n  touch-action: manipulation;\n}\n\n/* ==========================================================================\n   ##Headings and Base\n\n   1 to 6 heading\n\n   ```\n   ```\n   ========================================================================== */\n\nh1,\n:global(.h1) {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 2.5rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nh2,\n:global(.h2) {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nh3,\n:global(.h3) {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nh4,\n:global(.h4) {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nh5,\n:global(.h5) {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\nh6,\n:global(.h6) {\n  margin: 0 0 0.2em;\n  font-family: \"Bree Serif\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.2;\n}\n\np {\n  margin: 0 0 0.2em;\n  line-height: 1.2;\n}\n\nabbr[title] {\n  border-bottom: 0;\n}\n\n:global(.no-touchevents) abbr[title] {\n  border-bottom: 1px dotted currentColor;\n  text-decoration: none;\n}\n\n@media print {\n  :global(.no-touchevents) abbr[title] {\n    border-bottom: 0;\n  }\n}\n\n:global(a.u-link--mark),\n:global(a:not([class])) {\n  background-image: linear-gradient(to top, rgba(77, 77, 77, 0.2) 0, rgba(77, 77, 77, 0.2) 3px, transparent 4px);\n  color: inherit;\n  outline: 0;\n  text-decoration: none;\n}\n\n:global(.no-touchevents a.u-link--mark),\n:global(.no-touchevents a:not([class])) {\n  position: relative;\n  display: inline-block;\n  padding-right: 0.22em;\n  padding-left: 0.22em;\n  background-image: none;\n  color: inherit;\n  outline: 0;\n  text-decoration: none;\n  transition: all 0.27s;\n}\n\n:global(.no-touchevents a.u-link--mark)::after,\n:global(.no-touchevents a:not([class]))::after {\n  position: absolute;\n  right: 0;\n  bottom: -0.17em;\n  left: 0;\n  z-index: -2;\n  opacity: 0.1;\n  height: 3px;\n  background-color: currentColor;\n  content: \"\";\n  pointer-events: none;\n  transition: all 0.1s linear;\n}\n\n:global(.no-touchevents a.u-link--mark)::before,\n:global(.no-touchevents a:not([class]))::before {\n  position: absolute;\n  top: 0;\n  bottom: -0.17em;\n  left: 0;\n  z-index: 1;\n  opacity: 0;\n  width: 0;\n  background-color: #a02c2c;\n  content: \"\";\n  pointer-events: none;\n  transform: scaleX(1);\n  transform-origin: 0 0;\n  transition: opacity 0.25s, width 0s ease 0.25s, transform 0s ease 0.25s, transform-origin 0s ease 0.25s;\n}\n\n:global(.no-touchevents a.u-link--mark):hover,\n:global(.no-touchevents a:not([class])):hover {\n  color: #a02c2c;\n  text-decoration: none;\n  transition-delay: 0.25s;\n  transition-duration: 0;\n}\n\n:global(.no-touchevents a.u-link--mark):hover::before,\n:global(.no-touchevents a:not([class])):hover::before {\n  opacity: 1;\n  width: 100%;\n  transform: scaleX(0);\n  transform-origin: right 0;\n  transition: width 0.25s ease, transform-origin 0s ease 0.25s, transform 0.25s ease 0.25s;\n}\n\n:global(.no-touchevents a.u-link--mark):hover::after,\n:global(.no-touchevents a:not([class])):hover::after {\n  opacity: 0.3;\n  transition: opacity 0.15s ease 0.15s;\n}\n\n[data-whatinput=\"keyboard\"] a:not([class]) {\n  outline: 2px solid rgba(160, 44, 44, 0);\n  outline-offset: 4px;\n  transition: outline-offset 0.2s ease, color 0.2s ease;\n}\n\n[data-whatinput=\"keyboard\"] a:not([class]):focus {\n  color: #a02c2c;\n  outline-color: rgba(160, 44, 44, 0.2);\n  outline-offset: 2px;\n}\n\n[data-whatinput=\"keyboard\"] a:not([class]):focus::before,\n[data-whatinput=\"keyboard\"] a:not([class]):focus::after {\n  opacity: 0;\n}\n\n/* ==========================================================================\n   ## Layout settings\n   ========================================================================== */\n\n:global [data-scrollbar] .scrollbar-track {\n  background: #a02c2c !important;\n}\n\n@media print {\n  :global [data-scrollbar] .scrollbar-track {\n    display: none !important;\n  }\n}\n\n:global [data-scrollbar] .scrollbar-track-y {\n  opacity: 1 !important;\n}\n\n:global [data-scrollbar] .scrollbar-track-x {\n  display: none !important;\n}\n\n:global [data-scrollbar] .scrollbar-thumb {\n  background: #782121 !important;\n}\n\n/* ==========================================================================\n\n   Utilities\n   ====\n\n   ========================================================================== */\n\n/* ==========================================================================\n   Section Title\n\n   ```\n   <p class=\"u-text--left\">Left aligned text</p>\n   <p class=\"u-text--right\">Right aligned text</p>\n   <p class=\"u-text--center\">Centered text</p>\n   <p class=\"u-text--hide\">Hidden text</p>\n   <p class=\"u-text--ellipsis\">This text is one line with ellipsis</p>\n   ```\n   ========================================================================== */\n\n:global .u-text--left {\n  text-align: left !important;\n}\n\n:global .u-text--right {\n  text-align: right !important;\n}\n\n:global .u-text--center {\n  text-align: center !important;\n}\n\n:global .u-text--hide {\n  border: 0;\n  background-color: transparent;\n  color: transparent;\n  font: 0 / 0 a;\n  font-size: 0.1px;\n  text-shadow: none;\n}\n\n:global .u-text--ellipsis {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* ==========================================================================\n   ##Box model helpers\n\n   ```\n\n   <div class=\"u-clearfix\">Clearfixed box</div>\n   <div class=\"u-centered\">Centered</div>\n   <div class=\"u-float--left\">Floated left</div>\n   <div class=\"u-float--right\">Floated right</div>\n   <div class=\"u-clear\">Clearing box</div>\n\n   <div class=\"u-inline\">\n    <div>inlined</div>\n    <div>items</div>\n   </div>\n\n   <div class=\"u-stacked\">\n    <span>stacked</span>\n    <span>items</span>\n   </div>\n   ```\n   ========================================================================== */\n\n:global .u-clearfix::before,\n:global .u-clearfix::after {\n  display: table;\n  content: \" \";\n}\n\n:global .u-clearfix::after {\n  clear: both;\n}\n\n:global .u-clear {\n  clear: both !important;\n}\n\n:global .u-centered {\n  float: none !important;\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n:global .u-float,\n:global .u-float--left {\n  float: left !important;\n}\n\n:global .u-float--right {\n  float: right !important;\n}\n\n:global .u-inline > * {\n  display: inline-block !important;\n}\n\n:global .u-stacked > * {\n  display: block !important;\n}\n\n:global .u-inline--baseline > * {\n  display: inline-block !important;\n  vertical-align: baseline !important;\n}\n\n/* ==========================================================================\n   ##Typographic Helpers\n\n   ```\n   <p class=\"u-type--xs\">font size extra small</p>\n   <p class=\"u-type--s\">font size small</p>\n   <p class=\"u-type--m\">font size medium (default)</p>\n   <p class=\"u-type--l\">font size large</p>\n   <p class=\"u-type--xl\">font size extra large</p>\n   <p class=\"u-type--xxl\">font size oversized</p>\n\n   <p class=\"u-type--larger\">relative size</p>\n   <p class=\"u-weight--strong\">strong font weight</p>\n   <p class=\"u-weight--medium\">medium font weight</p>\n   <p class=\"u-weight--light\">light font weight</p>\n   ```\n   ========================================================================== */\n\n:global .u-type--xl {\n  font-size: 2.5rem !important;\n}\n\n:global .u-type--l {\n  font-size: 2rem !important;\n}\n\n:global .u-type--m {\n  font-size: 1rem !important;\n}\n\n:global .u-type--s {\n  font-size: 0.875rem !important;\n}\n\n:global .u-type--xs {\n  font-size: 0.625rem !important;\n}\n\n:global .u-type--default {\n  font-size: 1rem !important;\n}\n\n:global .u-type--larger {\n  font-size: 130% !important;\n}\n\n:global .u-type--smaller {\n  font-size: 85% !important;\n}\n\n:global .u-weight--regular {\n  font-weight: 400 !important;\n}\n\n:global .u-weight--semibold {\n  font-weight: 600 !important;\n}\n\n:global .u-weight--bold {\n  font-weight: 700 !important;\n}\n\n:global .u-type--mark {\n  position: relative;\n  display: inline-block;\n  padding: 0 0.2em 0.1em;\n  background-color: transparent;\n  color: #fff;\n  line-height: 1;\n}\n\n:global .u-type--mark::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  background-color: #a02c2c;\n  content: \"\";\n}\n\n/* ==========================================================================\n\n   ### Visibility Helpers\n\n   ```\n   <p class=\"u-hidden\">this is hidden from mobile screens</p>\n   <p class=\"u-visuallyhidden\">this is hidden from small tablet screens</p>\n   <p class=\"u-invisible\">this is hidden from large tablets screens</p>\n   ```\n   ========================================================================== */\n\n:global .u-hidden,\n:global .js .is-jshidden {\n  display: none !important;\n  visibility: hidden !important;\n}\n\n:global .u-visuallyhidden {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n}\n\n:global .u-visuallyhidden .focusable:active,\n:global .u-visuallyhidden .focusable:focus {\n  position: static;\n  overflow: visible;\n  clip: auto;\n  width: auto;\n  height: auto;\n  margin: 0;\n}\n\n:global .u-invisible {\n  visibility: hidden !important;\n}\n\n@media (min-width: 30em) {\n  :global .u-hidden--from-mobile {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 29.99em) {\n  :global .u-hidden--until-mobile {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (min-width: 48em) {\n  :global .u-hidden--from-tablet {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 47.99em) {\n  :global .u-hidden--until-tablet {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (min-width: 64em) {\n  :global .u-hidden--from-tablet-landscape {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 63.99em) {\n  :global .u-hidden--until-tablet-landscape {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (min-width: 80em) {\n  :global .u-hidden--from-desktop {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 79.99em) {\n  :global .u-hidden--until-desktop {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (min-width: 100em) {\n  :global .u-hidden--from-wide {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 99.99em) {\n  :global .u-hidden--until-wide {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (min-width: 120em) {\n  :global .u-hidden--from-fullhd {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media (max-width: 119.99em) {\n  :global .u-hidden--until-fullhd {\n    display: none !important;\n    visibility: hidden !important;\n  }\n}\n\n@media not print {\n  :global .u-only-print {\n    display: none;\n  }\n}\n\n@media print {\n  :global .u-only-screen {\n    display: none;\n  }\n}\n\n/* ==========================================================================\n\n   Print Styles\n   ====\n\n   ```\n   ```\n\n   ========================================================================== */\n\n@media print {\n@page {\n    margin: 0;\n    padding: 0;\n    size: A4 portrait;\n}\n\n@page :first {\n    margin: 0;\n}\n\n  * {\n    box-shadow: none !important;\n    text-shadow: none !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n\n  html {\n    font-size: 8pt !important;\n  }\n\n  body {\n    overflow: auto;\n    height: auto;\n  }\n\n  a,\n  a:visited {\n    color: #4d4d4d !important;\n    text-decoration: none;\n  }\n\n  a[href][target=\"_blank\"] {\n    display: inline;\n    background-image: none;\n    color: #4d4d4d !important;\n    text-decoration: none;\n  }\n\n  a[href][target=\"_blank\"]::after {\n    position: static;\n    opacity: 1;\n    border-bottom: 2px solid rgba(77, 77, 77, 0.2);\n    background-color: transparent;\n    font-size: 0.8em;\n    content: \" (\" attr(href) \")\";\n  }\n\n  :global(.ir) a::after,\n  a[href^=\"javascript:\"]::after,\n  a[href^=\"#\"]::after {\n    content: \"\";\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  ul,\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    widows: 3;\n    orphans: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n","// ==========================================================================\n// Mixins and functions\n//\n// Note: always put function at the beginning of the sub-section\n// ==========================================================================\n\n@import \"globals\";\n@import \"fonts\";\n@import \"sass-mq/mq\";\n\n// Generic\n// ==========================================================================\n\n@function perc($width, $container-width) {\n    @return percentage($width / $container-width);\n}\n\n@function strip-units($value) {\n    @return $value / ($value * 0 + 1);\n}\n\n@function z-index($level: 'base') {\n    @return map-get($layers, $level);\n}\n\n@function vw($width, $viewport-reference-width: $viewport-width) {\n    @return (strip-units($width) / strip-units($viewport-reference-width)) * 100 + vw;\n}\n\n@function vh($height, $viewport-reference-height: $viewport-height) {\n    @return (strip-units($height) / strip-units($viewport-reference-height)) * 100 + vh;\n}\n\n\n// Elements\n// ==========================================================================\n\n@mixin boost-performance ($translate: true) {\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n    @if ($translate) {\n        transform: translate3d(0, 0, 0);\n        will-change: transform;\n    }\n}\n\n@mixin clearfix {\n\n    &::before,\n    &::after {\n        display: table;\n        content: \" \";\n    }\n\n    &::after {\n        clear: both;\n    }\n}\n\n@mixin img-responsive($display: block) {\n    display: $display;\n    max-width: 100%;\n    height: auto;\n}\n\n//see https://github.com/tinganho/compass-placeholder\n@mixin placeholder {\n\n    &::-webkit-input-placeholder {\n        @content;\n    }\n\n    &:-moz-placeholder {\n        @content;\n    }\n\n    &::-moz-placeholder {\n        @content;\n    }\n\n    &:-ms-input-placeholder {\n        @content;\n    }\n}\n\n@mixin classed-headings($headings...) {\n    @if length($headings) == 0 {\n        $headings: map-keys($font-sizes-headings);\n    }\n    $selectors: ();\n    @each $i in $headings {\n        $current-heading: nth($headings, $i);\n        $selector: unquote(\"h#{$current-heading}, .h#{$current-heading}\");\n        $selectors: append($selectors, $selector, comma);\n    }\n\n    #{$selectors} {\n        @content;\n    }\n}\n\n\n\n// Typography\n//\n// ==========================================================================\n\n@function em($pixels, $context: $font-size-default) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n\n    @if (unitless($context)) {\n        $context: $context * 1px;\n    }\n\n    @return #{$pixels / $context}em;\n}\n\n@function rem($pixels) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n    @return #{$pixels / $font-size-default}rem;\n}\n\n\n@function font-size($size, $rem: true) {\n    $result: $size;\n    @if map-has-key($font-sizes, $size) {\n        $result: map-get($font-sizes, $size);\n    }\n\n    @if $rem == true {\n        @return rem($result);\n    }\n\n    @return $result;\n}\n\n@function font-weight($weight) {\n    @if map-has-key($font-weights, $weight) {\n        @return map-get($font-weights, $weight);\n    } @else {\n        @warn \"Weight #{$weight} undefined\";\n    }\n}\n\n@function line-height($size, $context: m) {\n    $context-size: font-size($context, false);\n    @return em($size, $context-size);\n}\n\n\n@mixin text-ellipsis {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n@mixin visually-hidden {\n    position: absolute;\n    overflow: hidden;\n    clip: rect(0 0 0 0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    border: 0;\n}\n\n@mixin font-heading() {\n    margin-bottom: 0.7em;\n    font-family: $font-family-sans;\n    font-size: font-size(20px);\n    font-weight: font-weight(bold);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(22px);\n    }\n}\n\n@mixin font-content() {\n    font-size: font-size(16px);\n    font-weight: font-weight(regular);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(18px);\n    }\n}\n\n@mixin responsive-typography($font-min, $font-max, $breakpoint-min, $breakpoint-max) {\n    //https://www.smashingmagazine.com/2016/05/fluid-typography/\n\n    $font-diff: ($font-max - $font-min);\n    $breakpoint-diff: ($breakpoint-max - $breakpoint-min);\n    $font-scale: $font-diff / $breakpoint-diff;\n    $base-font-size: percentage($font-min / 16px);\n    $base-font-size-em: em($font-min, 16px);\n\n    // https://zellwk.com/blog/viewport-based-typography/\n    font-size: calc(#{$base-font-size-em} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n    //font-size: calc(#{$base-font-size} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n}\n\n\n@mixin a11y-anchor-focus() {\n    outline: 2px solid rgba($color-link, 0);\n    outline-offset: 4px;\n    transition: outline-offset 0.2s ease, color 0.2s ease;\n\n    &:focus {\n        color: $color-link;\n        outline-color: rgba($color-link, 0.2);\n        outline-offset: 2px;\n\n        &::before,\n        &::after {\n            opacity: 0;\n        }\n    }\n}","//base styles and mixins\n@import \"base\";\n\n//utility come last so they can overwrite stuff...\n@import \"utility\";\n\n@import \"print\";","/* ==========================================================================\n\n   Utilities\n   ====\n\n   ========================================================================== */\n\n@import \"globals\";\n@import \"fonts\";\n@import \"mixins\";\n@import \"sass-mq/mq\";\n\n/* ==========================================================================\n   Section Title\n\n   ```\n   <p class=\"u-text--left\">Left aligned text</p>\n   <p class=\"u-text--right\">Right aligned text</p>\n   <p class=\"u-text--center\">Centered text</p>\n   <p class=\"u-text--hide\">Hidden text</p>\n   <p class=\"u-text--ellipsis\">This text is one line with ellipsis</p>\n   ```\n   ========================================================================== */\n\n:global {\n\n    .u-text--left {\n        text-align: left !important;\n    }\n\n    .u-text--right {\n        text-align: right !important;\n    }\n\n    .u-text--center {\n        text-align: center !important;\n    }\n\n    //@see bootstrap\n    .u-text--hide {\n        border: 0;\n        background-color: transparent;\n        color: transparent;\n        font: 0 / 0 a;\n        font-size: 0.1px;\n        text-shadow: none;\n    }\n\n    .u-text--ellipsis {\n        @include text-ellipsis;\n    }\n}\n\n/* ==========================================================================\n   ##Box model helpers\n\n   ```\n\n   <div class=\"u-clearfix\">Clearfixed box</div>\n   <div class=\"u-centered\">Centered</div>\n   <div class=\"u-float--left\">Floated left</div>\n   <div class=\"u-float--right\">Floated right</div>\n   <div class=\"u-clear\">Clearing box</div>\n\n   <div class=\"u-inline\">\n    <div>inlined</div>\n    <div>items</div>\n   </div>\n\n   <div class=\"u-stacked\">\n    <span>stacked</span>\n    <span>items</span>\n   </div>\n   ```\n   ========================================================================== */\n\n\n:global {\n\n    .u-clearfix {\n        @include clearfix;\n    }\n\n    .u-clear {\n        clear: both !important;\n    }\n\n    .u-centered {\n        float: none !important;\n        margin-right: auto !important;\n        margin-left: auto !important;\n    }\n\n    .u-float,\n    .u-float--left {\n        float: left !important;\n    }\n\n    .u-float--right {\n        float: right !important;\n    }\n\n    //inline children\n    .u-inline > * {\n        display: inline-block !important;\n    }\n\n    // vertically stacked\n    .u-stacked > * {\n        display: block !important;\n    }\n\n    // inline\n    .u-inline--baseline > * {\n        display: inline-block !important;\n        vertical-align: baseline !important;\n    }\n}\n\n/* ==========================================================================\n   ##Typographic Helpers\n\n   ```\n   <p class=\"u-type--xs\">font size extra small</p>\n   <p class=\"u-type--s\">font size small</p>\n   <p class=\"u-type--m\">font size medium (default)</p>\n   <p class=\"u-type--l\">font size large</p>\n   <p class=\"u-type--xl\">font size extra large</p>\n   <p class=\"u-type--xxl\">font size oversized</p>\n\n   <p class=\"u-type--larger\">relative size</p>\n   <p class=\"u-weight--strong\">strong font weight</p>\n   <p class=\"u-weight--medium\">medium font weight</p>\n   <p class=\"u-weight--light\">light font weight</p>\n   ```\n   ========================================================================== */\n\n:global {\n\n    @each $font-size-key, $font-size-value in $font-sizes {\n\n        .u-type--#{$font-size-key} {\n            font-size: rem($font-size-value) !important;\n        }\n    }\n\n    .u-type--default {\n        font-size: rem($font-size-default) !important;\n    }\n\n    .u-type--larger {\n        font-size: 130% !important;\n    }\n\n    .u-type--smaller {\n        font-size: 85% !important;\n    }\n\n    @each $font-weight-key, $font-weight-value in $font-weights {\n\n        .u-weight--#{$font-weight-key} {\n            font-weight: $font-weight-value !important;\n        }\n    }\n\n    .u-type--mark {\n        position: relative;\n        display: inline-block;\n        padding: 0 0.2em 0.1em;\n        background-color: transparent;\n        color: $color-light;\n        line-height: 1;\n\n        &::after {\n            position: absolute;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            z-index: z-index(behind);\n            background-color: $color-link;\n            content: \"\";\n        }\n    }\n}\n\n/* ==========================================================================\n\n   ### Visibility Helpers\n\n   ```\n   <p class=\"u-hidden\">this is hidden from mobile screens</p>\n   <p class=\"u-visuallyhidden\">this is hidden from small tablet screens</p>\n   <p class=\"u-invisible\">this is hidden from large tablets screens</p>\n   ```\n   ========================================================================== */\n\n:global {\n\n    .u-hidden,\n    .js .is-jshidden {\n        display: none !important;\n        visibility: hidden !important;\n    }\n\n    .u-visuallyhidden {\n        @include visually-hidden;\n\n        .focusable {\n\n            &:active,\n            &:focus {\n                position: static;\n                overflow: visible;\n                clip: auto;\n                width: auto;\n                height: auto;\n                margin: 0;\n            }\n        }\n    }\n\n    //also as global state\n    .u-invisible {\n        visibility: hidden !important;\n    }\n\n    @each $mq-key, $mq-value in $mq-breakpoints {\n\n        @include mq($mq-key) {\n\n            .u-hidden--from-#{$mq-key} {\n                display: none !important;\n                visibility: hidden !important;\n            }\n        }\n\n        @include mq($until: $mq-key) {\n\n            .u-hidden--until-#{$mq-key} {\n                display: none !important;\n                visibility: hidden !important;\n            }\n        }\n    }\n\n    @media not print {\n\n        .u-only-print {\n            display: none;\n        }\n    }\n\n    @media print {\n\n        .u-only-screen {\n            display: none;\n        }\n    }\n}","/* ==========================================================================\n\n   Print Styles\n   ====\n\n   ```\n   ```\n\n   ========================================================================== */\n\n@import \"fonts\";\n@import \"colors\";\n\n@media print {\n\n    @page {\n        margin: 0;\n        padding: 0;\n        size: A4 portrait;\n    }\n\n    @page :first {\n        margin: 0;\n    }\n\n    * {\n        box-shadow: none !important;\n        text-shadow: none !important;\n        -webkit-print-color-adjust: exact;\n        print-color-adjust: exact; //stylelint-disable-line\n    }\n\n    html {\n        font-size: 8pt !important;\n    }\n\n    body {\n        overflow: auto;\n        height: auto;\n    }\n\n    a,\n    a:visited {\n        color: $color-text !important;\n        text-decoration: none;\n    }\n\n    a[href][target=\"_blank\"] {\n        display: inline;\n        background-image: none;\n        color: $color-text !important;\n        text-decoration: none;\n    }\n\n    a[href][target=\"_blank\"]::after {\n        position: static;\n        opacity: 1;\n        border-bottom: 2px solid rgba($color-text, 0.2);\n        background-color: transparent;\n        font-size: 0.8em;\n        content: \" (\" attr(href) \")\";\n    }\n\n    // Don't show links for images, or javascript/internal links\n    :global(.ir) a::after,\n    a[href^=\"javascript:\"]::after,\n    a[href^=\"#\"]::after {\n        content: \"\";\n    }\n\n    thead {\n        display: table-header-group;\n    }\n\n    ul,\n    tr,\n    img {\n        page-break-inside: avoid;\n    }\n\n    img {\n        max-width: 100% !important;\n    }\n\n    p,\n    h2,\n    h3 {\n        widows: 3;\n        orphans: 3;\n    }\n\n    h2,\n    h3 {\n        page-break-after: avoid;\n    }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b9b3e3f\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Anchor/anchor.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.anchor__root---18Dmf {\n  display: inline-block;\n  color: currentColor;\n  text-decoration: none;\n}\n.anchor__root---18Dmf:focus,\n.anchor__root---18Dmf:active {\n  outline: 0;\n}\n[data-whatinput=\"keyboard\"] .anchor__root---18Dmf:focus,\n[data-whatinput=\"keyboard\"] .anchor__root---18Dmf:active {\n  outline: 2px solid rgba(160, 44, 44, 0);\n  outline-offset: 4px;\n  -webkit-transition: outline-offset 0.2s ease, color 0.2s ease;\n  transition: outline-offset 0.2s ease, color 0.2s ease;\n}\n[data-whatinput=\"keyboard\"] .anchor__root---18Dmf:focus:focus,\n[data-whatinput=\"keyboard\"] .anchor__root---18Dmf:active:focus {\n  color: #a02c2c;\n  outline-color: rgba(160, 44, 44, 0.2);\n  outline-offset: 2px;\n}\n[data-whatinput=\"keyboard\"] .anchor__root---18Dmf:focus:focus::before,\n[data-whatinput=\"keyboard\"] .anchor__root---18Dmf:focus:focus::after,\n[data-whatinput=\"keyboard\"] .anchor__root---18Dmf:active:focus::before,\n[data-whatinput=\"keyboard\"] .anchor__root---18Dmf:active:focus::after {\n  opacity: 0;\n}\n.anchor__ico---3QWlR {\n  display: inline-block;\n  line-height: 1;\n  text-align: center;\n}\n.anchor__label---11dXt {\n  position: relative;\n  display: inline-block;\n}\n.anchor__root--cursor---2fDjx .anchor__label---11dXt {\n  margin-left: 0.2em;\n  padding-bottom: 0.2em;\n  font-weight: inherit;\n}\n.anchor__root--cursor---2fDjx .anchor__label---11dXt::before {\n  position: relative;\n  bottom: -0.1em;\n  display: inline-block;\n  width: 0.5em;\n  margin-right: 0.1em;\n  border-bottom: 2px solid currentColor;\n  content: \"\";\n}\n@media print {\n.anchor__root--cursor---2fDjx .anchor__label---11dXt::before {\n    display: none;\n}\n}\n.no-touchevents .anchor__root--cursor---2fDjx:hover .anchor__label---11dXt::before {\n  color: #a02c2c;\n  -webkit-animation-name: anchor__blinking-cursor---3PBsX;\n          animation-name: anchor__blinking-cursor---3PBsX;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes anchor__blinking-cursor---3PBsX {\n0% {\n    opacity: 1;\n}\n30% {\n    opacity: 0;\n}\n50% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes anchor__blinking-cursor---3PBsX {\n0% {\n    opacity: 1;\n}\n30% {\n    opacity: 0;\n}\n50% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Anchor/anchor.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Anchor/anchor.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/_mixins.scss"],"names":[],"mappings":";AAGA;EACI,sBAAA;EACA,oBAAA;EACA,sBAAA;CCFH;ADDD;;EAOQ,WAAA;CCDP;ADGO;;EEmMJ,wCAAA;EACA,oBAAA;EACA,8DAAA;EAAA,sDAAA;CDjMH;ADJ4C;;EEwMrC,eAAA;EACA,sCAAA;EACA,oBAAA;CD/LP;ADXO;;;;EE8MI,WAAA;CD5LX;ADZD;EACI,sBAAA;EACA,eAAA;EACA,mBAAA;CCeH;ADZD;EACI,mBAAA;EACA,sBAAA;CCeH;ADZD;EAGQ,mBAAA;EACA,sBAAA;EACA,qBAAA;CCaP;ADhBG;EAMQ,mBAAA;EACA,eAAA;EACA,sBAAA;EACA,aAAA;EACA,oBAAA;EACA,sCAAA;EACA,YAAA;CCcX;ADXO;AAfJ;IAkBY,cAAA;CCab;CACF;ADRD;EAGQ,eAAA;EACA,wDAAA;UAAA,gDAAA;EACA,iCAAA;UAAA,yBAAA;EACA,4CAAA;UAAA,oCAAA;EACA,4CAAA;UAAA,oCAAA;CCSP;ADLD;AAEI;IACI,WAAA;CCOL;ADJC;IACI,WAAA;CCOL;ADJC;IACI,WAAA;CCOL;ADJC;IACI,WAAA;CCOL;CACF;ADvBD;AAEI;IACI,WAAA;CCOL;ADJC;IACI,WAAA;CCOL;ADJC;IACI,WAAA;CCOL;ADJC;IACI,WAAA;CCOL;CACF","file":"anchor.scss","sourcesContent":["@import \"mixins\";\n@import \"colors\";\n\n.root {\n    display: inline-block;\n    color: currentColor;\n    text-decoration: none;\n\n    &:focus,\n    &:active {\n        outline: 0;\n\n        :global([data-whatinput=\"keyboard\"]) & {\n            @include a11y-anchor-focus;\n        }\n    }\n}\n\n.ico {\n    display: inline-block;\n    line-height: 1;\n    text-align: center;\n}\n\n.label {\n    position: relative;\n    display: inline-block;\n}\n\n.root--cursor {\n\n    .label {\n        margin-left: 0.2em;\n        padding-bottom: 0.2em;\n        font-weight: inherit;\n\n        &::before {\n            position: relative;\n            bottom: -0.1em;\n            display: inline-block;\n            width: 0.5em;\n            margin-right: 0.1em;\n            border-bottom: 2px solid currentColor;\n            content: \"\";\n        }\n\n        @media print {\n\n            &::before {\n                display: none;\n            }\n        }\n    }\n}\n\n:global(.no-touchevents) .root--cursor:hover {\n\n    .label::before {\n        color: $color-link;\n        animation-name: blinking-cursor;\n        animation-duration: 0.7s;\n        animation-timing-function: ease-out;\n        animation-iteration-count: infinite;\n    }\n}\n\n@keyframes blinking-cursor {\n\n    0% {\n        opacity: 1;\n    }\n\n    30% {\n        opacity: 0;\n    }\n\n    50% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}",".root {\n  display: inline-block;\n  color: currentColor;\n  text-decoration: none;\n}\n\n.root:focus,\n.root:active {\n  outline: 0;\n}\n\n:global([data-whatinput=\"keyboard\"]) .root:focus,\n:global([data-whatinput=\"keyboard\"]) .root:active {\n  outline: 2px solid rgba(160, 44, 44, 0);\n  outline-offset: 4px;\n  transition: outline-offset 0.2s ease, color 0.2s ease;\n}\n\n:global([data-whatinput=\"keyboard\"]) .root:focus:focus,\n:global([data-whatinput=\"keyboard\"]) .root:active:focus {\n  color: #a02c2c;\n  outline-color: rgba(160, 44, 44, 0.2);\n  outline-offset: 2px;\n}\n\n:global([data-whatinput=\"keyboard\"]) .root:focus:focus::before,\n:global([data-whatinput=\"keyboard\"]) .root:focus:focus::after,\n:global([data-whatinput=\"keyboard\"]) .root:active:focus::before,\n:global([data-whatinput=\"keyboard\"]) .root:active:focus::after {\n  opacity: 0;\n}\n\n.ico {\n  display: inline-block;\n  line-height: 1;\n  text-align: center;\n}\n\n.label {\n  position: relative;\n  display: inline-block;\n}\n\n.root--cursor .label {\n  margin-left: 0.2em;\n  padding-bottom: 0.2em;\n  font-weight: inherit;\n}\n\n.root--cursor .label::before {\n  position: relative;\n  bottom: -0.1em;\n  display: inline-block;\n  width: 0.5em;\n  margin-right: 0.1em;\n  border-bottom: 2px solid currentColor;\n  content: \"\";\n}\n\n@media print {\n  .root--cursor .label::before {\n    display: none;\n  }\n}\n\n:global(.no-touchevents) .root--cursor:hover .label::before {\n  color: #a02c2c;\n  animation-name: blinking-cursor;\n  animation-duration: 0.7s;\n  animation-timing-function: ease-out;\n  animation-iteration-count: infinite;\n}\n\n@keyframes blinking-cursor {\n  0% {\n    opacity: 1;\n  }\n\n  30% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n","// ==========================================================================\n// Mixins and functions\n//\n// Note: always put function at the beginning of the sub-section\n// ==========================================================================\n\n@import \"globals\";\n@import \"fonts\";\n@import \"sass-mq/mq\";\n\n// Generic\n// ==========================================================================\n\n@function perc($width, $container-width) {\n    @return percentage($width / $container-width);\n}\n\n@function strip-units($value) {\n    @return $value / ($value * 0 + 1);\n}\n\n@function z-index($level: 'base') {\n    @return map-get($layers, $level);\n}\n\n@function vw($width, $viewport-reference-width: $viewport-width) {\n    @return (strip-units($width) / strip-units($viewport-reference-width)) * 100 + vw;\n}\n\n@function vh($height, $viewport-reference-height: $viewport-height) {\n    @return (strip-units($height) / strip-units($viewport-reference-height)) * 100 + vh;\n}\n\n\n// Elements\n// ==========================================================================\n\n@mixin boost-performance ($translate: true) {\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n    @if ($translate) {\n        transform: translate3d(0, 0, 0);\n        will-change: transform;\n    }\n}\n\n@mixin clearfix {\n\n    &::before,\n    &::after {\n        display: table;\n        content: \" \";\n    }\n\n    &::after {\n        clear: both;\n    }\n}\n\n@mixin img-responsive($display: block) {\n    display: $display;\n    max-width: 100%;\n    height: auto;\n}\n\n//see https://github.com/tinganho/compass-placeholder\n@mixin placeholder {\n\n    &::-webkit-input-placeholder {\n        @content;\n    }\n\n    &:-moz-placeholder {\n        @content;\n    }\n\n    &::-moz-placeholder {\n        @content;\n    }\n\n    &:-ms-input-placeholder {\n        @content;\n    }\n}\n\n@mixin classed-headings($headings...) {\n    @if length($headings) == 0 {\n        $headings: map-keys($font-sizes-headings);\n    }\n    $selectors: ();\n    @each $i in $headings {\n        $current-heading: nth($headings, $i);\n        $selector: unquote(\"h#{$current-heading}, .h#{$current-heading}\");\n        $selectors: append($selectors, $selector, comma);\n    }\n\n    #{$selectors} {\n        @content;\n    }\n}\n\n\n\n// Typography\n//\n// ==========================================================================\n\n@function em($pixels, $context: $font-size-default) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n\n    @if (unitless($context)) {\n        $context: $context * 1px;\n    }\n\n    @return #{$pixels / $context}em;\n}\n\n@function rem($pixels) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n    @return #{$pixels / $font-size-default}rem;\n}\n\n\n@function font-size($size, $rem: true) {\n    $result: $size;\n    @if map-has-key($font-sizes, $size) {\n        $result: map-get($font-sizes, $size);\n    }\n\n    @if $rem == true {\n        @return rem($result);\n    }\n\n    @return $result;\n}\n\n@function font-weight($weight) {\n    @if map-has-key($font-weights, $weight) {\n        @return map-get($font-weights, $weight);\n    } @else {\n        @warn \"Weight #{$weight} undefined\";\n    }\n}\n\n@function line-height($size, $context: m) {\n    $context-size: font-size($context, false);\n    @return em($size, $context-size);\n}\n\n\n@mixin text-ellipsis {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n@mixin visually-hidden {\n    position: absolute;\n    overflow: hidden;\n    clip: rect(0 0 0 0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    border: 0;\n}\n\n@mixin font-heading() {\n    margin-bottom: 0.7em;\n    font-family: $font-family-sans;\n    font-size: font-size(20px);\n    font-weight: font-weight(bold);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(22px);\n    }\n}\n\n@mixin font-content() {\n    font-size: font-size(16px);\n    font-weight: font-weight(regular);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(18px);\n    }\n}\n\n@mixin responsive-typography($font-min, $font-max, $breakpoint-min, $breakpoint-max) {\n    //https://www.smashingmagazine.com/2016/05/fluid-typography/\n\n    $font-diff: ($font-max - $font-min);\n    $breakpoint-diff: ($breakpoint-max - $breakpoint-min);\n    $font-scale: $font-diff / $breakpoint-diff;\n    $base-font-size: percentage($font-min / 16px);\n    $base-font-size-em: em($font-min, 16px);\n\n    // https://zellwk.com/blog/viewport-based-typography/\n    font-size: calc(#{$base-font-size-em} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n    //font-size: calc(#{$base-font-size} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n}\n\n\n@mixin a11y-anchor-focus() {\n    outline: 2px solid rgba($color-link, 0);\n    outline-offset: 4px;\n    transition: outline-offset 0.2s ease, color 0.2s ease;\n\n    &:focus {\n        color: $color-link;\n        outline-color: rgba($color-link, 0.2);\n        outline-offset: 2px;\n\n        &::before,\n        &::after {\n            opacity: 0;\n        }\n    }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "anchor__root---18Dmf",
	"ico": "anchor__ico---3QWlR",
	"label": "anchor__label---11dXt",
	"root--cursor": "anchor__root--cursor---2fDjx",
	"rootCursor": "anchor__root--cursor---2fDjx",
	"blinking-cursor": "anchor__blinking-cursor---3PBsX",
	"blinkingCursor": "anchor__blinking-cursor---3PBsX"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-232d8e35\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/SocialList/social-list.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n@media (max-width: 63.99em) {\n.social-list__root---2xHkP {\n    max-width: 82%;\n    margin: 0 auto;\n}\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/SocialList/social-list.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/SocialList/social-list.scss"],"names":[],"mappings":";AAgOQ;AC7NR;IAEQ,eAAA;IACA,eAAA;CCFL;CACF","file":"social-list.scss","sourcesContent":["@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n","@import \"globals\";\n@import \"sass-mq/mq\";\n\n.root {\n    @include mq($until: tablet-landscape) {\n        max-width: 82%;\n        margin: 0 auto;\n    }\n}","@media (max-width: 63.99em) {\n  .root {\n    max-width: 82%;\n    margin: 0 auto;\n  }\n}\n\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "social-list__root---2xHkP"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2590b1f3\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Loader/loader.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.loader__root---1GX7T {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: 100vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n@media (min-width: 64em) {\n.loader__root---1GX7T {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n}\n@media print {\n.loader__root---1GX7T {\n    display: none;\n}\n}\n.loader__root---1GX7T::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  content: \"\";\n}\n.loader__body---1jtbT {\n  position: relative;\n  z-index: 1;\n}\n.loader__body---1jtbT.h1 {\n  font-size: 1.75rem;\n  font-weight: 400;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n@media (min-width: 64em) {\n.loader__body---1jtbT.h1 {\n    font-size: 2.5rem;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n}\n}\n.loader__line---3Ski4 {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  white-space: pre;\n  -webkit-transform: translateX(-0.125em);\n          transform: translateX(-0.125em);\n  -webkit-transition: all 0.6s ease-in-out;\n  transition: all 0.6s ease-in-out;\n}\n.loader__line---3Ski4::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  display: block;\n  background-color: #fff;\n  content: \"\";\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: all 0.8s ease-in-out;\n  transition: all 0.8s ease-in-out;\n}\n.loader__is-entering---gHnnt .loader__line---3Ski4::before {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n.loader__line---3Ski4:nth-child(1) {\n  -webkit-transition-delay: 0.05s;\n          transition-delay: 0.05s;\n}\n.loader__line---3Ski4:nth-child(1)::before {\n  -webkit-transition-delay: 0.25s;\n          transition-delay: 0.25s;\n}\n.loader__line---3Ski4:nth-child(2) {\n  -webkit-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n}\n.loader__line---3Ski4:nth-child(2)::before {\n  -webkit-transition-delay: 0.5s;\n          transition-delay: 0.5s;\n}\n.loader__line---3Ski4:nth-child(3) {\n  -webkit-transition-delay: 0.55s;\n          transition-delay: 0.55s;\n}\n.loader__line---3Ski4:nth-child(3)::before {\n  -webkit-transition-delay: 0.75s;\n          transition-delay: 0.75s;\n}\n.loader__line---3Ski4:nth-child(4) {\n  -webkit-transition-delay: 0.8s;\n          transition-delay: 0.8s;\n}\n.loader__line---3Ski4:nth-child(4)::before {\n  -webkit-transition-delay: 1s;\n          transition-delay: 1s;\n}\n.loader__is-entering---gHnnt .loader__line---3Ski4 {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.loader__line--pre---2kPL3 {\n  left: 0.8em;\n}\n.loader__dots---2hpfn {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: bottom;\n  /*\n\n    &::after {\n        position: relative;\n        display: inline-block;\n        content: \"...\";\n        transform: translateX(-100%);\n\n        .is-entering & {\n            animation-name: intro-dots;\n            animation-duration: 2.5s;\n            animation-timing-function: steps(4);\n            animation-delay: 1.5s;\n            animation-iteration-count: 2;\n        }\n    }\n    */\n}\n\n/*\n@keyframes intro-dots {\n\n    0% {\n        transform: translateX(-100%);\n    }\n\n    100% {\n        transform: translateX(33%);\n    }\n}\n*/\n.loader-animation-leave-to {\n  opacity: 0;\n  -webkit-transform: translateX(-5%);\n          transform: translateX(-5%);\n}\n.loader-animation-leave-to::after {\n  opacity: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.loader-animation-leave-active {\n  -webkit-transition: all 350ms ease-out;\n  transition: all 350ms ease-out;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform;\n  transition-property: opacity, transform, -webkit-transform;\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/components/Loader/loader.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/components/Loader/loader.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss"],"names":[],"mappings":";AAKA;EACI,mBAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,iBAAA;EACA,YAAA;EACA,cAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,sBAAA;MAAA,kBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;CCJH;ACoNO;AF3NR;IAcQ,sBAAA;QAAA,mBAAA;YAAA,0BAAA;CCFL;CACF;AC8MO;AF3NR;IAkBQ,cAAA;CCAL;CACF;ADnBD;EAsBQ,mBAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;CCCP;ADGD;EACI,mBAAA;EACA,WAAA;CCAH;ADGD;EACI,mBAAA;EACA,iBAAA;EACA,oBAAA;MAAA,mBAAA;UAAA,eAAA;CCAH;ACkLO;AFrLR;IAOQ,kBAAA;IACA,oBAAA;QAAA,kBAAA;YAAA,cAAA;CCCL;CACF;ADED;EACI,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,wCAAA;UAAA,gCAAA;EACA,yCAAA;EAAA,iCAAA;CCCH;ADPD;EASQ,mBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;EACA,YAAA;EACA,wCAAA;UAAA,gCAAA;EACA,yCAAA;EAAA,iCAAA;CCEP;ADAoB;EACT,2CAAA;UAAA,mCAAA;CCGX;ADGO;EAEI,gCAAA;UAAA,wBAAA;CCDX;AD7BD;EAiCgB,gCAAA;UAAA,wBAAA;CCAf;ADLO;EAEI,+BAAA;UAAA,uBAAA;CCOX;ADrCD;EAiCgB,+BAAA;UAAA,uBAAA;CCQf;ADbO;EAEI,gCAAA;UAAA,wBAAA;CCeX;AD7CD;EAiCgB,gCAAA;UAAA,wBAAA;CCgBf;ADjDD;EA8BY,+BAAA;UAAA,uBAAA;CCuBX;ADrBW;EACI,6BAAA;UAAA,qBAAA;CCwBf;ADnBG;EACI,iCAAA;UAAA,yBAAA;CCsBP;ADlBD;EAEI,YAAA;CCqBH;ADlBD;EACI,mBAAA;EACA,sBAAA;EACA,iBAAA;EACA,uBAAA;EAEA;;;;;;;;;;;;;;;;MCmCE;CACL;;ADjBD;;;;;;;;;;;EC8BE;ADfE;EACI,WAAA;EACA,mCAAA;UAAA,2BAAA;CCkBP;ADpBG;EAKQ,WAAA;EACA,oCAAA;UAAA,4BAAA;CCmBX;ADfG;EACI,uCAAA;EAAA,+BAAA;EACA,wDAAA;EAAA,gDAAA;EAAA,wCAAA;EAAA,2DAAA;CCkBP","file":"loader.scss","sourcesContent":["@import \"globals\";\n@import \"colors\";\n@import \"mixins\";\n@import \"sass-mq/mq\";\n\n.root {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: z-index(loader);\n    display: flex;\n    overflow: hidden;\n    width: 100%;\n    height: 100vh;\n    align-items: center;\n    flex-wrap: nowrap;\n    justify-content: center;\n\n    @include mq(tablet-landscape) {\n        justify-content: flex-end;\n    }\n\n    @include mq($media-type: print) {\n        display: none;\n    }\n\n    &::after {\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        width: 100%;\n        height: 100%;\n        background-color: #fff;\n        content: \"\";\n    }\n}\n\n.body {\n    position: relative;\n    z-index: 1;\n}\n\n.body:global(.h1) {\n    font-size: font-size(28px);\n    font-weight: font-weight(regular);\n    flex: 0 0 auto;\n\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(xl);\n        flex: 0 0 50%;\n    }\n}\n\n.line {\n    position: relative;\n    display: block;\n    overflow: hidden;\n    white-space: pre;\n    transform: translateX(em(-5px, font-size(xl, false)));\n    transition: all 0.6s ease-in-out;\n\n    &::before {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: z-index(above);\n        display: block;\n        background-color: $color-bg;\n        content: \"\";\n        transform: translate3d(0, 0, 0);\n        transition: all 0.8s ease-in-out;\n\n        .is-entering & {\n            transform: translate3d(100%, 0, 0);\n        }\n    }\n\n    @for $i from 1 through 4 {\n\n        &:nth-child(#{$i}) {\n            $before-delay: 0.25s * $i;\n            transition-delay: $before-delay - 0.2s;\n\n            &::before {\n                transition-delay: $before-delay;\n            }\n        }\n    }\n\n    .is-entering & {\n        transform: translateX(0);\n    }\n}\n\n.line--pre {\n    composes: line;\n    left: 0.8em;\n}\n\n.dots {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: bottom;\n\n    /*\n\n    &::after {\n        position: relative;\n        display: inline-block;\n        content: \"...\";\n        transform: translateX(-100%);\n\n        .is-entering & {\n            animation-name: intro-dots;\n            animation-duration: 2.5s;\n            animation-timing-function: steps(4);\n            animation-delay: 1.5s;\n            animation-iteration-count: 2;\n        }\n    }\n    */\n}\n\n/*\n@keyframes intro-dots {\n\n    0% {\n        transform: translateX(-100%);\n    }\n\n    100% {\n        transform: translateX(33%);\n    }\n}\n*/\n\n:global {\n\n    .loader-animation-leave-to {\n        opacity: 0;\n        transform: translateX(-5%);\n\n        &::after {\n            opacity: 0;\n            transform: translateX(-50%);\n        }\n    }\n\n    .loader-animation-leave-active {\n        transition: all 350ms ease-out;\n        transition-property: opacity, transform;\n    }\n}",".root {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: 100vh;\n  align-items: center;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n\n@media (min-width: 64em) {\n  .root {\n    justify-content: flex-end;\n  }\n}\n\n@media print {\n  .root {\n    display: none;\n  }\n}\n\n.root::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  content: \"\";\n}\n\n.body {\n  position: relative;\n  z-index: 1;\n}\n\n.body:global(.h1) {\n  font-size: 1.75rem;\n  font-weight: 400;\n  flex: 0 0 auto;\n}\n\n@media (min-width: 64em) {\n  .body:global(.h1) {\n    font-size: 2.5rem;\n    flex: 0 0 50%;\n  }\n}\n\n.line {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  white-space: pre;\n  transform: translateX(-0.125em);\n  transition: all 0.6s ease-in-out;\n}\n\n.line::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  display: block;\n  background-color: #fff;\n  content: \"\";\n  transform: translate3d(0, 0, 0);\n  transition: all 0.8s ease-in-out;\n}\n\n.is-entering .line::before {\n  transform: translate3d(100%, 0, 0);\n}\n\n.line:nth-child(1) {\n  transition-delay: 0.05s;\n}\n\n.line:nth-child(1)::before {\n  transition-delay: 0.25s;\n}\n\n.line:nth-child(2) {\n  transition-delay: 0.3s;\n}\n\n.line:nth-child(2)::before {\n  transition-delay: 0.5s;\n}\n\n.line:nth-child(3) {\n  transition-delay: 0.55s;\n}\n\n.line:nth-child(3)::before {\n  transition-delay: 0.75s;\n}\n\n.line:nth-child(4) {\n  transition-delay: 0.8s;\n}\n\n.line:nth-child(4)::before {\n  transition-delay: 1s;\n}\n\n.is-entering .line {\n  transform: translateX(0);\n}\n\n.line--pre {\n  composes: line;\n  left: 0.8em;\n}\n\n.dots {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: bottom;\n  /*\n\n    &::after {\n        position: relative;\n        display: inline-block;\n        content: \"...\";\n        transform: translateX(-100%);\n\n        .is-entering & {\n            animation-name: intro-dots;\n            animation-duration: 2.5s;\n            animation-timing-function: steps(4);\n            animation-delay: 1.5s;\n            animation-iteration-count: 2;\n        }\n    }\n    */\n}\n\n/*\n@keyframes intro-dots {\n\n    0% {\n        transform: translateX(-100%);\n    }\n\n    100% {\n        transform: translateX(33%);\n    }\n}\n*/\n\n:global .loader-animation-leave-to {\n  opacity: 0;\n  transform: translateX(-5%);\n}\n\n:global .loader-animation-leave-to::after {\n  opacity: 0;\n  transform: translateX(-50%);\n}\n\n:global .loader-animation-leave-active {\n  transition: all 350ms ease-out;\n  transition-property: opacity, transform;\n}\n\n","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "loader__root---1GX7T",
	"body": "loader__body---1jtbT",
	"line": "loader__line---3Ski4",
	"is-entering": "loader__is-entering---gHnnt",
	"isEntering": "loader__is-entering---gHnnt",
	"line--pre": "loader__line--pre---2kPL3 loader__line---3Ski4",
	"linePre": "loader__line--pre---2kPL3 loader__line---3Ski4",
	"dots": "loader__dots---2hpfn"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338939db\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/SkillList/skill-list.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.skill-list__root---VTs_f {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.skill-list__item---3SEur > p {\n  margin-bottom: 1.25em;\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/SkillList/skill-list.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/SkillList/skill-list.scss"],"names":[],"mappings":";AAEA;EACI,UAAA;EACA,WAAA;EACA,sBAAA;CCDH;ADIO;EACJ,sBAAA;CCDH","file":"skill-list.scss","sourcesContent":["@import \"mixins\";\n\n.root {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\n.item > p {\n    margin-bottom: em(20px);\n}\n",".root {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.item > p {\n  margin-bottom: 1.25em;\n}\n\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "skill-list__root---VTs_f",
	"item": "skill-list__item---3SEur"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338cb554\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/MeterBar/meter-bar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.meter-bar__root---1JrKz {\n  position: relative;\n  margin-bottom: 1.25em;\n  -webkit-transition-delay: inherit;\n          transition-delay: inherit;\n}\n.meter-bar__label---3yilO {\n  display: block;\n  padding: 0.0625em 1em 0.0625em 0.5em;\n  white-space: nowrap;\n  -webkit-transition: color 250ms ease-out;\n  transition: color 250ms ease-out;\n}\n[class*=\"data-set__item\"]:hover .meter-bar__label---3yilO {\n  color: #fff;\n}\n.meter-bar__bar---2Kse- {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  font-weight: 400;\n  -webkit-transition: all 200ms ease-out;\n  transition: all 200ms ease-out;\n}\n.meter-bar__bar---2Kse-::before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #a02c2c;\n  content: \"\";\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transition: all 200ms ease-out;\n  transition: all 200ms ease-out;\n}\n.meter-bar__bar---2Kse-::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  opacity: 0.4;\n  height: 100%;\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(0, rgba(160, 44, 44, 0.8)), to(#a02c2c));\n  background-image: linear-gradient(to right, rgba(160, 44, 44, 0.8) 0, #a02c2c 100%);\n  content: \"\";\n  -webkit-transform: scaleY(0.2);\n          transform: scaleY(0.2);\n  -webkit-transform-origin: 0 120%;\n          transform-origin: 0 120%;\n  -webkit-animation: meter-bar__bar-down---1cAYs 0.5s;\n          animation: meter-bar__bar-down---1cAYs 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@media print {\n.meter-bar__bar---2Kse-::after {\n    bottom: -5px;\n    border-bottom: 5px solid rgba(160, 44, 44, 0.8);\n    background-image: none;\n    -webkit-transform: none;\n            transform: none;\n    -webkit-animation: none;\n            animation: none;\n}\n}\n[class*=\"data-set__item\"]:hover .meter-bar__bar---2Kse-::before {\n  opacity: 0.4;\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n[class*=\"data-set__item\"]:hover .meter-bar__bar---2Kse-::after {\n  -webkit-animation: meter-bar__bar-up---2xypH 1s;\n          animation: meter-bar__bar-up---2xypH 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes meter-bar__bar-up---2xypH {\n0% {\n    opacity: 0.4;\n    -webkit-transform: scaleY(0.2);\n            transform: scaleY(0.2);\n}\n50% {\n    opacity: 0;\n    -webkit-transform: translateY(-2px) scaleY(0.2);\n            transform: translateY(-2px) scaleY(0.2);\n}\n50.1% {\n    opacity: 0;\n    -webkit-transform: scale(0, 1);\n            transform: scale(0, 1);\n}\n70% {\n    opacity: 0;\n    -webkit-transform: scale(0.1, 1);\n            transform: scale(0.1, 1);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n}\n}\n@keyframes meter-bar__bar-up---2xypH {\n0% {\n    opacity: 0.4;\n    -webkit-transform: scaleY(0.2);\n            transform: scaleY(0.2);\n}\n50% {\n    opacity: 0;\n    -webkit-transform: translateY(-2px) scaleY(0.2);\n            transform: translateY(-2px) scaleY(0.2);\n}\n50.1% {\n    opacity: 0;\n    -webkit-transform: scale(0, 1);\n            transform: scale(0, 1);\n}\n70% {\n    opacity: 0;\n    -webkit-transform: scale(0.1, 1);\n            transform: scale(0.1, 1);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n}\n}\n@-webkit-keyframes meter-bar__bar-down---1cAYs {\n0% {\n    opacity: 1;\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n}\n100% {\n    opacity: 0.4;\n    -webkit-transform: scaleY(0.2);\n            transform: scaleY(0.2);\n}\n}\n@keyframes meter-bar__bar-down---1cAYs {\n0% {\n    opacity: 1;\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n}\n100% {\n    opacity: 0.4;\n    -webkit-transform: scaleY(0.2);\n            transform: scaleY(0.2);\n}\n}\n.meter-bar__bar--10---2Seyy::after {\n  width: 10%;\n}\n.meter-bar__bar--10---2Seyy > .meter-bar__value---37txy {\n  right: 90%;\n}\n.meter-bar__bar--20---3rBeg::after {\n  width: 20%;\n}\n.meter-bar__bar--20---3rBeg > .meter-bar__value---37txy {\n  right: 80%;\n}\n.meter-bar__bar--30---27ub7::after {\n  width: 30%;\n}\n.meter-bar__bar--30---27ub7 > .meter-bar__value---37txy {\n  right: 70%;\n}\n.meter-bar__bar--40---2pyUw::after {\n  width: 40%;\n}\n.meter-bar__bar--40---2pyUw > .meter-bar__value---37txy {\n  right: 60%;\n}\n.meter-bar__bar--50---2P3cV::after {\n  width: 50%;\n}\n.meter-bar__bar--50---2P3cV > .meter-bar__value---37txy {\n  right: 50%;\n}\n.meter-bar__bar--60---17_HV::after {\n  width: 60%;\n}\n.meter-bar__bar--60---17_HV > .meter-bar__value---37txy {\n  right: 40%;\n}\n.meter-bar__bar--70---2csR1::after {\n  width: 70%;\n}\n.meter-bar__bar--70---2csR1 > .meter-bar__value---37txy {\n  right: 30%;\n}\n.meter-bar__bar--80---1hpVs::after {\n  width: 80%;\n}\n.meter-bar__bar--80---1hpVs > .meter-bar__value---37txy {\n  right: 20%;\n}\n.meter-bar__bar--90---Ren3t::after {\n  width: 90%;\n}\n.meter-bar__bar--90---Ren3t > .meter-bar__value---37txy {\n  right: 10%;\n}\n.meter-bar__bar--100---Wk48t::after {\n  width: 100%;\n}\n.meter-bar__bar--100---Wk48t > .meter-bar__value---37txy {\n  right: 0%;\n}\n.meter-bar__value---37txy {\n  position: absolute;\n  top: 100%;\n  opacity: 0;\n  height: 0.7em;\n  margin-top: 2px;\n  margin-right: 1px;\n  padding-right: 5px;\n  border-right: 1px solid currentColor;\n  font-size: 0.625em;\n  -webkit-transform: translateY(-0.5em);\n          transform: translateY(-0.5em);\n  -webkit-transition: all 200ms ease-out;\n  transition: all 200ms ease-out;\n}\n[class*=\"data-set__item\"]:hover .meter-bar__value---37txy {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition-delay: 500ms;\n          transition-delay: 500ms;\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/MeterBar/meter-bar.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/MeterBar/meter-bar.scss"],"names":[],"mappings":";AAGA;EACI,mBAAA;EACA,sBAAA;EACA,kCAAA;UAAA,0BAAA;CCFH;ADKD;EACI,eAAA;EACA,qCAAA;EACA,oBAAA;EACA,yCAAA;EAAA,iCAAA;CCFH;ADED;EAGQ,YAAA;CCDP;ADKD;EACI,mBAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,uCAAA;EAAA,+BAAA;CCFH;ADRD;EAaQ,mBAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,0BAAA;EACA,YAAA;EACA,6BAAA;UAAA,qBAAA;EACA,iCAAA;UAAA,yBAAA;EACA,uCAAA;EAAA,+BAAA;CCDP;ADIG;EACI,mBAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EAEA,oHAAA;EAAA,oFAAA;EAKA,YAAA;EACA,+BAAA;UAAA,uBAAA;EACA,iCAAA;UAAA,yBAAA;EACA,oDAAA;UAAA,4CAAA;EACA,sCAAA;UAAA,8BAAA;CCNP;ADQO;AA9CR;IA+CY,aAAA;IACA,gDAAA;IACA,uBAAA;IACA,wBAAA;YAAA,gBAAA;IACA,wBAAA;YAAA,gBAAA;CCJT;CACF;ADED;EAQY,aAAA;EACA,6BAAA;UAAA,qBAAA;CCNX;ADED;EAQY,gDAAA;UAAA,wCAAA;EACA,sCAAA;UAAA,8BAAA;CCNX;ADWD;AAEI;IACI,aAAA;IACA,+BAAA;YAAA,uBAAA;CCTL;ADYC;IACI,WAAA;IACA,gDAAA;YAAA,wCAAA;CCTL;ADYC;IACI,WAAA;IACA,+BAAA;YAAA,uBAAA;CCTL;ADYC;IACI,WAAA;IAEA,iCAAA;YAAA,yBAAA;CCVL;ADaC;IACI,WAAA;IACA,+BAAA;YAAA,uBAAA;CCVL;CACF;ADhBD;AAEI;IACI,aAAA;IACA,+BAAA;YAAA,uBAAA;CCTL;ADYC;IACI,WAAA;IACA,gDAAA;YAAA,wCAAA;CCTL;ADYC;IACI,WAAA;IACA,+BAAA;YAAA,uBAAA;CCTL;ADYC;IACI,WAAA;IAEA,iCAAA;YAAA,yBAAA;CCVL;ADaC;IACI,WAAA;IACA,+BAAA;YAAA,uBAAA;CCVL;CACF;ADaD;AAEI;IACI,WAAA;IACA,6BAAA;YAAA,qBAAA;CCXL;ADcC;IACI,aAAA;IACA,+BAAA;YAAA,uBAAA;CCXL;CACF;ADCD;AAEI;IACI,WAAA;IACA,6BAAA;YAAA,qBAAA;CCXL;ADcC;IACI,aAAA;IACA,+BAAA;YAAA,uBAAA;CCXL;CACF;ADgBG;EACI,WAAA;CCbP;ADgBG;EACI,WAAA;CCbP;ADQG;EACI,WAAA;CCLP;ADQG;EACI,WAAA;CCLP;ADAG;EACI,WAAA;CCGP;ADAG;EACI,WAAA;CCGP;ADRG;EACI,WAAA;CCWP;ADRc;EACP,WAAA;CCWP;ADhBG;EACI,WAAA;CCmBP;ADhBG;EACI,WAAA;CCmBP;ADxBG;EACI,WAAA;CC2BP;ADxBG;EACI,WAAA;CC2BP;ADhCG;EACI,WAAA;CCmCP;ADhCG;EACI,WAAA;CCmCP;ADxCG;EACI,WAAA;CC2CP;ADxCc;EACP,WAAA;CC2CP;ADhDG;EACI,WAAA;CCmDP;ADhDG;EACI,WAAA;CCmDP;ADxDG;EACI,YAAA;CC2DP;ADxDG;EACI,UAAA;CC2DP;ADvDD;EACI,mBAAA;EACA,UAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;EACA,mBAAA;EACA,sCAAA;UAAA,8BAAA;EACA,uCAAA;EAAA,+BAAA;CC0DH;ADHD;EApDQ,WAAA;EACA,iCAAA;UAAA,yBAAA;EACA,gCAAA;UAAA,wBAAA;CC2DP","file":"meter-bar.scss","sourcesContent":["@import \"colors\";\n@import \"mixins\";\n\n.root {\n    position: relative;\n    margin-bottom: em(20px);\n    transition-delay: inherit;\n}\n\n.label {\n    display: block;\n    padding: em(1px) em(16px) em(1px) em(8px);\n    white-space: nowrap;\n    transition: color 250ms ease-out;\n\n    [class*=\"data-set__item\"]:hover & {\n        color: $color-light;\n    }\n}\n\n.bar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: z-index(behind);\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    font-weight: font-weight(regular);\n    transition: all 200ms ease-out;\n\n    &::before {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        z-index: z-index(above);\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        background-color: $color-link;\n        content: \"\";\n        transform: scaleY(0);\n        transform-origin: 0 100%;\n        transition: all 200ms ease-out;\n    }\n\n    &::after {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        z-index: z-index(above);\n        opacity: 0.4;\n        height: 100%;\n        //background-color: rgba($color-link, 0.6);\n        background-image: linear-gradient(\n            to right,\n            rgba($color-link, 0.8) 0,\n            rgba($color-link, 1) 100%\n        );\n        content: \"\";\n        transform: scaleY(0.2);\n        transform-origin: 0 120%;\n        animation: bar-down 0.5s;\n        animation-fill-mode: forwards;\n\n        @media print {\n            bottom: -5px;\n            border-bottom: 5px solid rgba($color-link, 0.8);\n            background-image: none;\n            transform: none;\n            animation: none;\n        }\n    }\n\n    [class*=\"data-set__item\"]:hover & {\n\n        &::before {\n            opacity: 0.4;\n            transform: scaleY(1);\n        }\n\n        &::after {\n            animation: bar-up 1s;\n            animation-fill-mode: forwards;\n        }\n    }\n}\n\n@keyframes bar-up {\n\n    0% {\n        opacity: 0.4;\n        transform: scaleY(0.2);\n    }\n\n    50% {\n        opacity: 0;\n        transform: translateY(-2px) scaleY(0.2);\n    }\n\n    50.1% {\n        opacity: 0;\n        transform: scale(0, 1);\n    }\n\n    70% {\n        opacity: 0;\n        //0.1 because of a shitty Edge/IE bug :(\n        transform: scale(0.1, 1);\n    }\n\n    100% {\n        opacity: 1;\n        transform: scale(1, 1);\n    }\n}\n\n@keyframes bar-down {\n\n    0% {\n        opacity: 1;\n        transform: scaleX(1);\n    }\n\n    100% {\n        opacity: 0.4;\n        transform: scaleY(0.2);\n    }\n}\n\n@for $value from 1 through 10 {\n\n    .bar--#{($value * 10)}::after {\n        width: percentage($value / 10);\n    }\n\n    .bar--#{($value * 10)} > .value {\n        right: percentage((10 - $value) / 10);\n    }\n}\n\n.value {\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    height: 0.7em;\n    margin-top: 2px;\n    margin-right: 1px;\n    padding-right: 5px;\n    border-right: 1px solid currentColor;\n    font-size: em(font-size(xs, false));\n    transform: translateY(-0.5em);\n    transition: all 200ms ease-out;\n\n    [class*=\"data-set__item\"]:hover & {\n        opacity: 1;\n        transform: translateY(0);\n        transition-delay: 500ms;\n    }\n}",".root {\n  position: relative;\n  margin-bottom: 1.25em;\n  transition-delay: inherit;\n}\n\n.label {\n  display: block;\n  padding: 0.0625em 1em 0.0625em 0.5em;\n  white-space: nowrap;\n  transition: color 250ms ease-out;\n}\n\n[class*=\"data-set__item\"]:hover .label {\n  color: #fff;\n}\n\n.bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  font-weight: 400;\n  transition: all 200ms ease-out;\n}\n\n.bar::before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #a02c2c;\n  content: \"\";\n  transform: scaleY(0);\n  transform-origin: 0 100%;\n  transition: all 200ms ease-out;\n}\n\n.bar::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  opacity: 0.4;\n  height: 100%;\n  background-image: linear-gradient(to right, rgba(160, 44, 44, 0.8) 0, #a02c2c 100%);\n  content: \"\";\n  transform: scaleY(0.2);\n  transform-origin: 0 120%;\n  animation: bar-down 0.5s;\n  animation-fill-mode: forwards;\n}\n\n@media print {\n  .bar::after {\n    bottom: -5px;\n    border-bottom: 5px solid rgba(160, 44, 44, 0.8);\n    background-image: none;\n    transform: none;\n    animation: none;\n  }\n}\n\n[class*=\"data-set__item\"]:hover .bar::before {\n  opacity: 0.4;\n  transform: scaleY(1);\n}\n\n[class*=\"data-set__item\"]:hover .bar::after {\n  animation: bar-up 1s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes bar-up {\n  0% {\n    opacity: 0.4;\n    transform: scaleY(0.2);\n  }\n\n  50% {\n    opacity: 0;\n    transform: translateY(-2px) scaleY(0.2);\n  }\n\n  50.1% {\n    opacity: 0;\n    transform: scale(0, 1);\n  }\n\n  70% {\n    opacity: 0;\n    transform: scale(0.1, 1);\n  }\n\n  100% {\n    opacity: 1;\n    transform: scale(1, 1);\n  }\n}\n\n@keyframes bar-down {\n  0% {\n    opacity: 1;\n    transform: scaleX(1);\n  }\n\n  100% {\n    opacity: 0.4;\n    transform: scaleY(0.2);\n  }\n}\n\n.bar--10::after {\n  width: 10%;\n}\n\n.bar--10 > .value {\n  right: 90%;\n}\n\n.bar--20::after {\n  width: 20%;\n}\n\n.bar--20 > .value {\n  right: 80%;\n}\n\n.bar--30::after {\n  width: 30%;\n}\n\n.bar--30 > .value {\n  right: 70%;\n}\n\n.bar--40::after {\n  width: 40%;\n}\n\n.bar--40 > .value {\n  right: 60%;\n}\n\n.bar--50::after {\n  width: 50%;\n}\n\n.bar--50 > .value {\n  right: 50%;\n}\n\n.bar--60::after {\n  width: 60%;\n}\n\n.bar--60 > .value {\n  right: 40%;\n}\n\n.bar--70::after {\n  width: 70%;\n}\n\n.bar--70 > .value {\n  right: 30%;\n}\n\n.bar--80::after {\n  width: 80%;\n}\n\n.bar--80 > .value {\n  right: 20%;\n}\n\n.bar--90::after {\n  width: 90%;\n}\n\n.bar--90 > .value {\n  right: 10%;\n}\n\n.bar--100::after {\n  width: 100%;\n}\n\n.bar--100 > .value {\n  right: 0%;\n}\n\n.value {\n  position: absolute;\n  top: 100%;\n  opacity: 0;\n  height: 0.7em;\n  margin-top: 2px;\n  margin-right: 1px;\n  padding-right: 5px;\n  border-right: 1px solid currentColor;\n  font-size: 0.625em;\n  transform: translateY(-0.5em);\n  transition: all 200ms ease-out;\n}\n\n[class*=\"data-set__item\"]:hover .value {\n  opacity: 1;\n  transform: translateY(0);\n  transition-delay: 500ms;\n}\n\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "meter-bar__root---1JrKz",
	"label": "meter-bar__label---3yilO",
	"bar": "meter-bar__bar---2Kse-",
	"bar-down": "meter-bar__bar-down---1cAYs",
	"barDown": "meter-bar__bar-down---1cAYs",
	"bar-up": "meter-bar__bar-up---2xypH",
	"barUp": "meter-bar__bar-up---2xypH",
	"bar--10": "meter-bar__bar--10---2Seyy",
	"bar10": "meter-bar__bar--10---2Seyy",
	"value": "meter-bar__value---37txy",
	"bar--20": "meter-bar__bar--20---3rBeg",
	"bar20": "meter-bar__bar--20---3rBeg",
	"bar--30": "meter-bar__bar--30---27ub7",
	"bar30": "meter-bar__bar--30---27ub7",
	"bar--40": "meter-bar__bar--40---2pyUw",
	"bar40": "meter-bar__bar--40---2pyUw",
	"bar--50": "meter-bar__bar--50---2P3cV",
	"bar50": "meter-bar__bar--50---2P3cV",
	"bar--60": "meter-bar__bar--60---17_HV",
	"bar60": "meter-bar__bar--60---17_HV",
	"bar--70": "meter-bar__bar--70---2csR1",
	"bar70": "meter-bar__bar--70---2csR1",
	"bar--80": "meter-bar__bar--80---1hpVs",
	"bar80": "meter-bar__bar--80---1hpVs",
	"bar--90": "meter-bar__bar--90---Ren3t",
	"bar90": "meter-bar__bar--90---Ren3t",
	"bar--100": "meter-bar__bar--100---Wk48t",
	"bar100": "meter-bar__bar--100---Wk48t"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47c9fd1e\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/PageList/page-list.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.page-list__root---2l0sU {\n  display: block !important;\n  visibility: hidden;\n  overflow: hidden;\n}\n@media (min-width: 64em) {\n.page-list__root---2l0sU {\n    position: relative;\n    height: 100vh;\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n}\n}\n@media print {\n.page-list__root---2l0sU {\n    opacity: 1 !important;\n    visibility: visible !important;\n    height: auto !important;\n    -webkit-transform: none !important;\n            transform: none !important;\n}\n}\n.page-list__root---2l0sU > [data-scrollbar] {\n  height: 100vh;\n}\n@media print {\n.page-list__root---2l0sU > [data-scrollbar] {\n    overflow: visible !important;\n    height: auto !important;\n}\n.page-list__root---2l0sU > [data-scrollbar] .scroll-content {\n    -webkit-transform: none !important;\n            transform: none !important;\n}\n}\n.page-list__root---2l0sU .page-list__c-page---1QDTu:last-child .page-list__c-section---O2n1H:last-child {\n  min-height: 100vh;\n}\n.page-list__is-active---2wYyn {\n  visibility: visible;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n.page-list__footer---mbNI9 {\n  padding: 0 0 30px;\n  font-size: 0.75rem;\n  text-align: center;\n}\n@media print {\n.page-list__footer---mbNI9 {\n    display: none;\n}\n}\n.pagelist-slide-appear {\n  opacity: 0;\n}\n.pagelist-slide-appear-active {\n  -webkit-transition: opacity 500ms cubic-bezier(0.74, 0.01, 0.29, 0.99) 500ms;\n  transition: opacity 500ms cubic-bezier(0.74, 0.01, 0.29, 0.99) 500ms;\n  will-change: transform, opacity;\n}\n@media (min-width: 64em) {\n.pagelist-slide-enter {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n}\n.pagelist-slide-enter-to {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n.pagelist-slide-leave {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n.pagelist-slide-leave-to {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n}\n.pagelist-slide-enter-active {\n    -webkit-transition: all 800ms cubic-bezier(0.74, 0.01, 0.29, 0.99) 1200ms;\n    transition: all 800ms cubic-bezier(0.74, 0.01, 0.29, 0.99) 1200ms;\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, -webkit-transform;\n    transition-property: transform, opacity;\n    transition-property: transform, opacity, -webkit-transform;\n    will-change: transform, opacity;\n}\n.pagelist-slide-leave-active {\n    visibility: visible;\n    -webkit-transition: all 800ms cubic-bezier(0.74, 0.01, 0.29, 0.99);\n    transition: all 800ms cubic-bezier(0.74, 0.01, 0.29, 0.99);\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, -webkit-transform;\n    transition-property: transform, opacity;\n    transition-property: transform, opacity, -webkit-transform;\n    will-change: transform, opacity;\n}\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/containers/PageList/page-list.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/containers/PageList/page-list.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss"],"names":[],"mappings":";AAKA;EACI,0BAAA;EACA,mBAAA;EACA,iBAAA;CCJH;AC4NO;AF3NR;IAMQ,mBAAA;IACA,cAAA;IACA,oCAAA;YAAA,4BAAA;CCFL;CACF;ACoNO;AF3NR;IAYQ,sBAAA;IACA,+BAAA;IACA,wBAAA;IACA,mCAAA;YAAA,2BAAA;CCAL;CACF;ADhBD;EAmBQ,cAAA;CCCP;ACuMO;AFzMF;IAIM,6BAAA;IACA,wBAAA;CCGT;AD1BH;IA0BgB,mCAAA;YAAA,2BAAA;CCIb;CACF;ADAsB;EACf,kBAAA;CCGP;ADCD;EACI,oBAAA;EACA,iCAAA;UAAA,yBAAA;CCEH;ADCD;EACI,kBAAA;EACA,mBAAA;EACA,mBAAA;CCEH;AC6KO;AFlLR;IAMQ,cAAA;CCIL;CACF;ADAD;EAGQ,WAAA;CCCP;ADEG;EACI,6EAAA;EAAA,qEAAA;EACA,gCAAA;CCCP;AC8JO;AFvKR;IAcY,oCAAA;YAAA,4BAAA;CCAT;ADdH;IAmBY,iCAAA;YAAA,yBAAA;CCDT;ADlBH;IAuBY,iCAAA;YAAA,yBAAA;CCDT;ADIK;IACI,oCAAA;YAAA,4BAAA;CCDT;AD1BH;IA+BY,0EAAA;IAAA,kEAAA;IACA,wDAAA;IAAA,gDAAA;IAAA,wCAAA;IAAA,2DAAA;IACA,gCAAA;CCDT;ADhCH;IAqCY,oBAAA;IACA,mEAAA;IAAA,2DAAA;IACA,wDAAA;IAAA,gDAAA;IAAA,wCAAA;IAAA,2DAAA;IACA,gCAAA;CCDT;CACF","file":"page-list.scss","sourcesContent":["@import \"globals\";\n@import \"colors\";\n@import \"mixins\";\n@import \"sass-mq/mq\";\n\n.root {\n    display: block !important;\n    visibility: hidden;\n    overflow: hidden;\n\n    @include mq(tablet-landscape) {\n        position: relative;\n        height: 100vh;\n        transform: translateY(100%);\n    }\n\n    @include mq($media-type: print) {\n        opacity: 1 !important;\n        visibility: visible !important;\n        height: auto !important;\n        transform: none !important;\n    }\n\n    > [data-scrollbar] {\n        height: 100vh;\n\n        @include mq($media-type: print) {\n            overflow: visible !important;\n            height: auto !important;\n\n            :global(.scroll-content) {\n                transform: none !important;\n            }\n        }\n    }\n\n    .c-page:last-child .c-section:last-child {\n        min-height: 100vh;\n    }\n}\n\n.is-active {\n    visibility: visible;\n    transform: translateY(0);\n} //stylelint-disable-line block-no-empty\n\n.footer {\n    padding: 0 0 30px;\n    font-size: font-size(12px);\n    text-align: center;\n\n    @include mq($media-type: print) {\n        display: none;\n    }\n}\n\n\n:global {\n\n    .pagelist-slide-appear {\n        opacity: 0;\n    }\n\n    .pagelist-slide-appear-active {\n        transition: opacity 500ms cubic-bezier(0.74, 0.01, 0.29, 0.99) 500ms;\n        will-change: transform, opacity;\n    }\n\n    @include mq(tablet-landscape) {\n\n        .pagelist-slide-enter {\n            transform: translateY(100%);\n        }\n\n\n        .pagelist-slide-enter-to {\n            transform: translateY(0);\n        }\n\n        .pagelist-slide-leave {\n            transform: translateY(0);\n        }\n\n        .pagelist-slide-leave-to {\n            transform: translateY(100%);\n        }\n\n        .pagelist-slide-enter-active {\n            transition: all 800ms cubic-bezier(0.74, 0.01, 0.29, 0.99) 1200ms;\n            transition-property: transform, opacity;\n            will-change: transform, opacity;\n        }\n\n        .pagelist-slide-leave-active {\n            visibility: visible;\n            transition: all 800ms cubic-bezier(0.74, 0.01, 0.29, 0.99);\n            transition-property: transform, opacity;\n            will-change: transform, opacity;\n        }\n    }\n}",".root {\n  display: block !important;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n@media (min-width: 64em) {\n  .root {\n    position: relative;\n    height: 100vh;\n    transform: translateY(100%);\n  }\n}\n\n@media print {\n  .root {\n    opacity: 1 !important;\n    visibility: visible !important;\n    height: auto !important;\n    transform: none !important;\n  }\n}\n\n.root > [data-scrollbar] {\n  height: 100vh;\n}\n\n@media print {\n  .root > [data-scrollbar] {\n    overflow: visible !important;\n    height: auto !important;\n  }\n\n  .root > [data-scrollbar] :global(.scroll-content) {\n    transform: none !important;\n  }\n}\n\n.root .c-page:last-child .c-section:last-child {\n  min-height: 100vh;\n}\n\n.is-active {\n  visibility: visible;\n  transform: translateY(0);\n}\n\n.footer {\n  padding: 0 0 30px;\n  font-size: 0.75rem;\n  text-align: center;\n}\n\n@media print {\n  .footer {\n    display: none;\n  }\n}\n\n:global .pagelist-slide-appear {\n  opacity: 0;\n}\n\n:global .pagelist-slide-appear-active {\n  transition: opacity 500ms cubic-bezier(0.74, 0.01, 0.29, 0.99) 500ms;\n  will-change: transform, opacity;\n}\n\n@media (min-width: 64em) {\n  :global .pagelist-slide-enter {\n    transform: translateY(100%);\n  }\n\n  :global .pagelist-slide-enter-to {\n    transform: translateY(0);\n  }\n\n  :global .pagelist-slide-leave {\n    transform: translateY(0);\n  }\n\n  :global .pagelist-slide-leave-to {\n    transform: translateY(100%);\n  }\n\n  :global .pagelist-slide-enter-active {\n    transition: all 800ms cubic-bezier(0.74, 0.01, 0.29, 0.99) 1200ms;\n    transition-property: transform, opacity;\n    will-change: transform, opacity;\n  }\n\n  :global .pagelist-slide-leave-active {\n    visibility: visible;\n    transition: all 800ms cubic-bezier(0.74, 0.01, 0.29, 0.99);\n    transition-property: transform, opacity;\n    will-change: transform, opacity;\n  }\n}\n\n","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "page-list__root---2l0sU",
	"c-page": "page-list__c-page---1QDTu",
	"cPage": "page-list__c-page---1QDTu",
	"c-section": "page-list__c-section---O2n1H",
	"cSection": "page-list__c-section---O2n1H",
	"is-active": "page-list__is-active---2wYyn",
	"isActive": "page-list__is-active---2wYyn",
	"footer": "page-list__footer---mbNI9"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-52c18eb8\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/DataSet/data-set.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.data-set__root---11CRM {\n  display: block;\n  width: 90%;\n  margin: 0 auto;\n  padding: 0;\n  list-style: none;\n}\n@media (min-width: 64em), print {\n.data-set__root---11CRM {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    margin: 0;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n}\n@media (min-width: 80em) {\n.data-set__root---11CRM {\n    width: 90%;\n}\n}\n@media print {\n.data-set__root---11CRM {\n    display: block;\n    width: 100%;\n}\n.data-set__root---11CRM::before,\n  .data-set__root---11CRM::after {\n    display: table;\n    content: \" \";\n}\n.data-set__root---11CRM::after {\n    clear: both;\n}\n}\n.data-set__item---1WzPc {\n  margin: 0;\n  padding: 0 0.625rem 1.25rem;\n}\n@media (max-width: 63.99em) {\n.data-set__item---1WzPc:last-child {\n    padding-bottom: 0;\n}\n}\n@media (min-width: 64em) {\n.data-set__item---1WzPc {\n    width: 47%;\n    padding: 0 0 1.875rem;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n}\n.data-set__item---1WzPc:nth-child(2n) {\n    padding-left: 1.25rem;\n}\n.data-set__item---1WzPc:nth-child(2n+1) {\n    padding-right: 1.25rem;\n}\n}\n@media print {\n.data-set__item---1WzPc {\n    float: left;\n    width: 30%;\n    padding: 0 0.625rem 1.25rem !important;\n}\n.data-set__item---1WzPc:nth-child(3n) {\n    padding-right: 0 !important;\n}\n.data-set__item---1WzPc:nth-child(3n+1) {\n    clear: both;\n    padding-left: 0 !important;\n}\n}\n.data-set__label---3wELH {\n  margin-bottom: 0.7em;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 700;\n  position: relative;\n  display: block;\n}\n@media (min-width: 64em) {\n.data-set__label---3wELH {\n    font-size: 1.375rem;\n}\n}\n.data-set__label---3wELH::before {\n  position: relative;\n  left: -0.1em;\n  display: inline-block;\n  opacity: 0.6;\n  width: 1em;\n  margin-left: -1em;\n  color: #a02c2c;\n  text-align: center;\n  content: \"+\";\n  -webkit-transition: all 250ms;\n  transition: all 250ms;\n}\n@media (min-width: 64em) {\n.data-set__label---3wELH::before {\n    left: -0.5em;\n}\n}\n.data-set__ico---1F6Ou.data-set__ico---1F6Ou {\n  position: absolute;\n  top: 50%;\n  left: -1.3em;\n  display: inline-block;\n  opacity: 0;\n  width: 1em;\n  color: #a02c2c;\n  text-align: center;\n  content: \"+\";\n  -webkit-transform: translate(0, -50%) scale(0.2);\n          transform: translate(0, -50%) scale(0.2);\n  -webkit-transition: all 150ms ease-out;\n  transition: all 150ms ease-out;\n}\n@media (min-width: 64em) {\n.data-set__ico---1F6Ou.data-set__ico---1F6Ou {\n    left: -1.5em;\n}\n}\n.data-set__body---2MC9h {\n  font-size: 1rem;\n  font-weight: 400;\n}\n@media (min-width: 64em) {\n.data-set__body---2MC9h {\n    font-size: 1.125rem;\n}\n}\n.touchevents .data-set__item---1WzPc .data-set__label---3wELH::before,\n.data-set__item---1WzPc:hover .data-set__label---3wELH::before {\n  opacity: 0;\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n.touchevents .data-set__item---1WzPc .data-set__ico---1F6Ou,\n.data-set__item---1WzPc:hover .data-set__ico---1F6Ou {\n  opacity: 0.6;\n  -webkit-transform: translateY(-50%) scale(1);\n          transform: translateY(-50%) scale(1);\n  -webkit-transition-delay: 240ms;\n          transition-delay: 240ms;\n}\n@media print {\n.data-set__label---3wELH::before {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n}\n.data-set__ico---1F6Ou {\n    opacity: 0.6;\n    -webkit-transform: translate(0, -50%) scale(1);\n            transform: translate(0, -50%) scale(1);\n}\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/DataSet/data-set.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/DataSet/data-set.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/_mixins.scss"],"names":[],"mappings":";AAOA;EACI,eAAA;EACA,WAAA;EACA,eAAA;EACA,WAAA;EACA,iBAAA;CCNH;ADQG;AAPJ;IAQQ,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,YAAA;IACA,UAAA;IACA,oBAAA;QAAA,gBAAA;CCJL;CACF;ACiNO;AFzNR;IAeQ,WAAA;CCFL;CACF;ADIG;AAlBJ;IAoBQ,eAAA;IACA,YAAA;CCDL;AEqBC;;IAEI,eAAA;IACA,aAAA;CFlBL;AEqBC;IACI,YAAA;CFlBL;CACF;ADND;EACI,UAAA;EACA,4BAAA;CCSH;ACqLO;AF5LJ;IAEQ,kBAAA;CCUT;CACF;ADPG;AAVJ;IAWQ,WAAA;IACA,sBAAA;IACA,oBAAA;QAAA,mBAAA;YAAA,eAAA;CCWL;ADxBH;IAgBY,sBAAA;CCYT;AD5BH;IAoBY,uBAAA;CCYT;CACF;ADTG;AAxBJ;IAyBQ,YAAA;IACA,WAAA;IACA,uCAAA;CCaL;ADxCH;IA8BY,4BAAA;CCcT;AD5CH;IAkCY,YAAA;IACA,2BAAA;CCcT;CACF;ADVD;EGoGI,qBAAA;EACA,qCAAA;EACA,mBAAA;EACA,iBAAA;EHrGA,mBAAA;EACA,eAAA;CCgBH;ACqIO;AFxJR;IG0GQ,oBAAA;CFlFL;CACF;ADzBD;EAMQ,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EAAA,sBAAA;CCuBP;ACkHO;AFxJR;IAkBY,aAAA;CCyBT;CACF;ADrBD;EACI,mBAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;EACA,aAAA;EACA,iDAAA;UAAA,yCAAA;EACA,uCAAA;EAAA,+BAAA;CCwBH;AC8FO;AFjIR;IAcQ,aAAA;CC0BL;CACF;ADvBD;EGsEI,gBAAA;EACA,iBAAA;CF3CH;ACmFO;AF/GR;IG0EQ,oBAAA;CFzCL;CACF;AD9BD;;EAIQ,WAAA;EACA,8BAAA;UAAA,sBAAA;CC+BP;ADpCD;;EASQ,aAAA;EACA,6CAAA;UAAA,qCAAA;EACA,gCAAA;UAAA,wBAAA;CCgCP;AD5BD;AAEI;IACI,WAAA;IACA,8BAAA;YAAA,sBAAA;CC8BL;AD3BC;IACI,aAAA;IACA,+CAAA;YAAA,uCAAA;CC8BL;CACF","file":"data-set.scss","sourcesContent":["@import \"globals\";\n@import \"colors\";\n@import \"mixins\";\n@import \"sass-mq/mq\";\n\n$data-list-bp: mq-px2em(map-get($mq-breakpoints, tablet-landscape));\n\n.root {\n    display: block;\n    width: 90%;\n    margin: 0 auto;\n    padding: 0;\n    list-style: none;\n\n    @media (min-width: $data-list-bp), print {\n        display: flex;\n        width: 100%;\n        margin: 0;\n        flex-wrap: wrap;\n    }\n\n    @include mq(desktop) {\n        width: 90%;\n    }\n\n    @media print {\n        @include clearfix;\n        display: block;\n        width: 100%;\n    }\n}\n\n.item {\n    margin: 0;\n    padding: 0 rem(10px) rem(20px);\n\n    &:last-child {\n        @include mq($until: tablet-landscape) {\n            padding-bottom: 0;\n        }\n    }\n\n    @media (min-width: $data-list-bp) {\n        width: 47%;\n        padding: 0 0 rem(30px);\n        flex: 0 0 auto;\n\n        &:nth-child(2n) {\n            padding-left: rem(20px);\n        }\n\n        &:nth-child(2n+1) {\n            padding-right: rem(20px);\n        }\n    }\n\n    @media print {\n        float: left;\n        width: 30%;\n        padding: 0 rem(10px) rem(20px) !important;\n\n        &:nth-child(3n) {\n            padding-right: 0 !important;\n        }\n\n        &:nth-child(3n+1) {\n            clear: both;\n            padding-left: 0 !important;\n        }\n    }\n}\n\n.label {\n    @include font-heading;\n    position: relative;\n    display: block;\n\n    &::before {\n        position: relative;\n        left: -0.1em;\n        display: inline-block;\n        opacity: 0.6;\n        width: 1em;\n        margin-left: -1em;\n        color: $color-link;\n        text-align: center;\n        content: \"+\";\n        transition: all 250ms;\n\n        @include mq(tablet-landscape) {\n            left: -0.5em;\n        }\n    }\n}\n\n.ico.ico {\n    position: absolute;\n    top: 50%;\n    left: -1.3em;\n    display: inline-block;\n    opacity: 0;\n    width: 1em;\n    color: $color-link;\n    text-align: center;\n    content: \"+\";\n    transform: translate(0, -50%) scale(0.2);\n    transition: all 150ms ease-out;\n\n    @include mq(tablet-landscape) {\n        left: -1.5em;\n    }\n}\n\n.body {\n    @include font-content;\n}\n\n:global(.touchevents) .item,\n.item:hover {\n\n    .label::before {\n        opacity: 0;\n        transform: scale(1.5);\n    }\n\n    .ico {\n        opacity: 0.6;\n        transform: translateY(-50%) scale(1);\n        transition-delay: 240ms;\n    }\n}\n\n@media print {\n\n    .label::before {\n        opacity: 0;\n        transform: scale(1.5);\n    }\n\n    .ico {\n        opacity: 0.6;\n        transform: translate(0, -50%) scale(1);\n    }\n}",".root {\n  display: block;\n  width: 90%;\n  margin: 0 auto;\n  padding: 0;\n  list-style: none;\n}\n\n@media (min-width: 64em), print {\n  .root {\n    display: flex;\n    width: 100%;\n    margin: 0;\n    flex-wrap: wrap;\n  }\n}\n\n@media (min-width: 80em) {\n  .root {\n    width: 90%;\n  }\n}\n\n@media print {\n  .root {\n    display: block;\n    width: 100%;\n  }\n\n  .root::before,\n  .root::after {\n    display: table;\n    content: \" \";\n  }\n\n  .root::after {\n    clear: both;\n  }\n}\n\n.item {\n  margin: 0;\n  padding: 0 0.625rem 1.25rem;\n}\n\n@media (max-width: 63.99em) {\n  .item:last-child {\n    padding-bottom: 0;\n  }\n}\n\n@media (min-width: 64em) {\n  .item {\n    width: 47%;\n    padding: 0 0 1.875rem;\n    flex: 0 0 auto;\n  }\n\n  .item:nth-child(2n) {\n    padding-left: 1.25rem;\n  }\n\n  .item:nth-child(2n+1) {\n    padding-right: 1.25rem;\n  }\n}\n\n@media print {\n  .item {\n    float: left;\n    width: 30%;\n    padding: 0 0.625rem 1.25rem !important;\n  }\n\n  .item:nth-child(3n) {\n    padding-right: 0 !important;\n  }\n\n  .item:nth-child(3n+1) {\n    clear: both;\n    padding-left: 0 !important;\n  }\n}\n\n.label {\n  margin-bottom: 0.7em;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 700;\n  position: relative;\n  display: block;\n}\n\n@media (min-width: 64em) {\n  .label {\n    font-size: 1.375rem;\n  }\n}\n\n.label::before {\n  position: relative;\n  left: -0.1em;\n  display: inline-block;\n  opacity: 0.6;\n  width: 1em;\n  margin-left: -1em;\n  color: #a02c2c;\n  text-align: center;\n  content: \"+\";\n  transition: all 250ms;\n}\n\n@media (min-width: 64em) {\n  .label::before {\n    left: -0.5em;\n  }\n}\n\n.ico.ico {\n  position: absolute;\n  top: 50%;\n  left: -1.3em;\n  display: inline-block;\n  opacity: 0;\n  width: 1em;\n  color: #a02c2c;\n  text-align: center;\n  content: \"+\";\n  transform: translate(0, -50%) scale(0.2);\n  transition: all 150ms ease-out;\n}\n\n@media (min-width: 64em) {\n  .ico.ico {\n    left: -1.5em;\n  }\n}\n\n.body {\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n@media (min-width: 64em) {\n  .body {\n    font-size: 1.125rem;\n  }\n}\n\n:global(.touchevents) .item .label::before,\n.item:hover .label::before {\n  opacity: 0;\n  transform: scale(1.5);\n}\n\n:global(.touchevents) .item .ico,\n.item:hover .ico {\n  opacity: 0.6;\n  transform: translateY(-50%) scale(1);\n  transition-delay: 240ms;\n}\n\n@media print {\n  .label::before {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n\n  .ico {\n    opacity: 0.6;\n    transform: translate(0, -50%) scale(1);\n  }\n}\n\n","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n","// ==========================================================================\n// Mixins and functions\n//\n// Note: always put function at the beginning of the sub-section\n// ==========================================================================\n\n@import \"globals\";\n@import \"fonts\";\n@import \"sass-mq/mq\";\n\n// Generic\n// ==========================================================================\n\n@function perc($width, $container-width) {\n    @return percentage($width / $container-width);\n}\n\n@function strip-units($value) {\n    @return $value / ($value * 0 + 1);\n}\n\n@function z-index($level: 'base') {\n    @return map-get($layers, $level);\n}\n\n@function vw($width, $viewport-reference-width: $viewport-width) {\n    @return (strip-units($width) / strip-units($viewport-reference-width)) * 100 + vw;\n}\n\n@function vh($height, $viewport-reference-height: $viewport-height) {\n    @return (strip-units($height) / strip-units($viewport-reference-height)) * 100 + vh;\n}\n\n\n// Elements\n// ==========================================================================\n\n@mixin boost-performance ($translate: true) {\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n    @if ($translate) {\n        transform: translate3d(0, 0, 0);\n        will-change: transform;\n    }\n}\n\n@mixin clearfix {\n\n    &::before,\n    &::after {\n        display: table;\n        content: \" \";\n    }\n\n    &::after {\n        clear: both;\n    }\n}\n\n@mixin img-responsive($display: block) {\n    display: $display;\n    max-width: 100%;\n    height: auto;\n}\n\n//see https://github.com/tinganho/compass-placeholder\n@mixin placeholder {\n\n    &::-webkit-input-placeholder {\n        @content;\n    }\n\n    &:-moz-placeholder {\n        @content;\n    }\n\n    &::-moz-placeholder {\n        @content;\n    }\n\n    &:-ms-input-placeholder {\n        @content;\n    }\n}\n\n@mixin classed-headings($headings...) {\n    @if length($headings) == 0 {\n        $headings: map-keys($font-sizes-headings);\n    }\n    $selectors: ();\n    @each $i in $headings {\n        $current-heading: nth($headings, $i);\n        $selector: unquote(\"h#{$current-heading}, .h#{$current-heading}\");\n        $selectors: append($selectors, $selector, comma);\n    }\n\n    #{$selectors} {\n        @content;\n    }\n}\n\n\n\n// Typography\n//\n// ==========================================================================\n\n@function em($pixels, $context: $font-size-default) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n\n    @if (unitless($context)) {\n        $context: $context * 1px;\n    }\n\n    @return #{$pixels / $context}em;\n}\n\n@function rem($pixels) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n    @return #{$pixels / $font-size-default}rem;\n}\n\n\n@function font-size($size, $rem: true) {\n    $result: $size;\n    @if map-has-key($font-sizes, $size) {\n        $result: map-get($font-sizes, $size);\n    }\n\n    @if $rem == true {\n        @return rem($result);\n    }\n\n    @return $result;\n}\n\n@function font-weight($weight) {\n    @if map-has-key($font-weights, $weight) {\n        @return map-get($font-weights, $weight);\n    } @else {\n        @warn \"Weight #{$weight} undefined\";\n    }\n}\n\n@function line-height($size, $context: m) {\n    $context-size: font-size($context, false);\n    @return em($size, $context-size);\n}\n\n\n@mixin text-ellipsis {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n@mixin visually-hidden {\n    position: absolute;\n    overflow: hidden;\n    clip: rect(0 0 0 0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    border: 0;\n}\n\n@mixin font-heading() {\n    margin-bottom: 0.7em;\n    font-family: $font-family-sans;\n    font-size: font-size(20px);\n    font-weight: font-weight(bold);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(22px);\n    }\n}\n\n@mixin font-content() {\n    font-size: font-size(16px);\n    font-weight: font-weight(regular);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(18px);\n    }\n}\n\n@mixin responsive-typography($font-min, $font-max, $breakpoint-min, $breakpoint-max) {\n    //https://www.smashingmagazine.com/2016/05/fluid-typography/\n\n    $font-diff: ($font-max - $font-min);\n    $breakpoint-diff: ($breakpoint-max - $breakpoint-min);\n    $font-scale: $font-diff / $breakpoint-diff;\n    $base-font-size: percentage($font-min / 16px);\n    $base-font-size-em: em($font-min, 16px);\n\n    // https://zellwk.com/blog/viewport-based-typography/\n    font-size: calc(#{$base-font-size-em} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n    //font-size: calc(#{$base-font-size} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n}\n\n\n@mixin a11y-anchor-focus() {\n    outline: 2px solid rgba($color-link, 0);\n    outline-offset: 4px;\n    transition: outline-offset 0.2s ease, color 0.2s ease;\n\n    &:focus {\n        color: $color-link;\n        outline-color: rgba($color-link, 0.2);\n        outline-offset: 2px;\n\n        &::before,\n        &::after {\n            opacity: 0;\n        }\n    }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "data-set__root---11CRM",
	"item": "data-set__item---1WzPc",
	"label": "data-set__label---3wELH",
	"ico": "data-set__ico---1F6Ou",
	"body": "data-set__body---2MC9h"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55fce8b8\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/Navigation/nav.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* pattern appearance vs  nav items appearance */\n\n/* stylelint-disable property-no-unknown */\n\n/* stylelint-enable property-no-unknown */\n.nav__root---1kSrH {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5;\n  /*\n    &::after,\n    &::before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: z-index(behind);\n        visibility: hidden;\n        overflow: hidden;\n        width: 1px;\n        height: 1px;\n    }\n    */\n}\n.nav__burger---1BajY {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n  z-index: 2;\n  opacity: 0;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n@media (min-width: 64em) {\n.nav__burger---1BajY {\n    top: 30px;\n    right: 30px;\n}\n}\n.nav__root---1kSrH.nav__is-visible---zMUUp .nav__burger---1BajY {\n  opacity: 1;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  -webkit-transition-delay: 1.7s;\n          transition-delay: 1.7s;\n}\n.nav__menu---12hlY {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  visibility: hidden;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0 0 2vh;\n  list-style: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  background-color: transparent;\n  text-align: center;\n  pointer-events: none;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n}\n@media (min-width: 64em) {\n.nav__menu---12hlY {\n    padding: 10vh 0 0;\n}\n}\n.nav__menu---12hlY::after {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  z-index: -1;\n  display: block;\n  border-bottom: 1px solid #a02c2c;\n  background-color: #a02c2c;\n  background-image: linear-gradient(55deg, #a02c2c 40%, rgba(160, 44, 44, 0.2) 100%), url(" + __webpack_require__("./app/assets/images/circuits-full.svg") + ");\n  background-position: right 0;\n  content: \"\";\n}\n.nav__menu---12hlY::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -2;\n  background-color: #a02c2c;\n  content: \"\";\n}\n.nav__item---1Bynp {\n  opacity: 0;\n  -webkit-transform: translateY(0.5em);\n          transform: translateY(0.5em);\n  -webkit-transition: all 170ms ease-out;\n  transition: all 170ms ease-out;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform;\n  transition-property: opacity, transform, -webkit-transform;\n}\n.nav__route---2EKDF {\n  position: relative;\n  display: inline-block;\n  opacity: 0.8;\n  padding: 1em 1.5em;\n  color: #fff;\n  font-family: \"Bree Serif\", serif;\n  font-size: 1.375rem;\n  text-align: center;\n  text-decoration: none;\n  letter-spacing: 0.05em;\n  -webkit-transition: opacity 150ms linear;\n  transition: opacity 150ms linear;\n}\n.nav__route---2EKDF::before {\n  position: relative;\n  display: inline-block;\n  opacity: 0;\n  margin-left: -0.3em;\n  content: \".\";\n  -webkit-transform: translateX(-0.4em);\n          transform: translateX(-0.4em);\n  -webkit-transition: all 250ms ease-out;\n  transition: all 250ms ease-out;\n}\n.nav__is-current---3POOT > .nav__route---2EKDF {\n  opacity: 1;\n}\n.nav__footer---zC3jl {\n  position: fixed;\n  bottom: 10vh;\n  left: 0;\n  z-index: 1;\n  opacity: 0;\n  width: 100%;\n  color: #fff;\n  font-size: 1.125rem;\n  text-align: center;\n  -webkit-transform: translateY(20vh);\n          transform: translateY(20vh);\n  -webkit-transition: opacity 0.4s ease-out, -webkit-transform 0s ease-out 1.5s;\n  transition: opacity 0.4s ease-out, -webkit-transform 0s ease-out 1.5s;\n  transition: opacity 0.4s ease-out, transform 0s ease-out 1.5s;\n  transition: opacity 0.4s ease-out, transform 0s ease-out 1.5s, -webkit-transform 0s ease-out 1.5s;\n}\n.nav__root---1kSrH.nav__is-active---120tm .nav__footer---zC3jl {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition-delay: 1.6s;\n          transition-delay: 1.6s;\n}\n.nav__footer---zC3jl > * {\n  position: relative;\n  opacity: 0.8;\n  padding-right: 1em;\n  padding-left: 1em;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.nav__footer---zC3jl > *::after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  width: 2em;\n  height: 2em;\n  margin: -0.9em 0 0 -1em;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.1);\n  content: \"\";\n  -webkit-transition: inherit;\n  transition: inherit;\n}\n.no-touchevents .nav__footer---zC3jl > *:hover {\n  opacity: 1;\n}\n.no-touchevents .nav__footer---zC3jl > *:hover::after {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.navigation-enter {\n  opacity: 1;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.navigation-enter-active {\n  -webkit-transition: -webkit-transform ease-out 250ms 100ms;\n  transition: -webkit-transform ease-out 250ms 100ms;\n  transition: transform ease-out 250ms 100ms;\n  transition: transform ease-out 250ms 100ms, -webkit-transform ease-out 250ms 100ms;\n}\n.navigation-enter-to {\n  opacity: 1;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.navigation-leave {\n  opacity: 1;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.navigation-leave-to {\n  opacity: 0;\n  -webkit-transform: translateX(-10%);\n          transform: translateX(-10%);\n}\n.navigation-leave-active {\n  visibility: visible;\n  pointer-events: auto;\n  -webkit-transition: all ease-out 150ms;\n  transition: all ease-out 150ms;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n}\n.nav__root---1kSrH.nav__is-active---120tm .nav__menu---12hlY {\n  visibility: visible;\n  pointer-events: auto;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.nav__root---1kSrH.nav__is-active---120tm .nav__menu---12hlY::after {\n  -webkit-animation-name: nav__menu-enter-pattern---23a_u;\n          animation-name: nav__menu-enter-pattern---23a_u;\n  -webkit-animation-duration: 250ms;\n          animation-duration: 250ms;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-delay: 600ms;\n          animation-delay: 600ms;\n}\n.nav__root---1kSrH.nav__is-active---120tm .nav__menu---12hlY::before {\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  -webkit-animation-name: nav__menu-enter-bg---2DLf3;\n          animation-name: nav__menu-enter-bg---2DLf3;\n  -webkit-animation-duration: 250ms;\n          animation-duration: 250ms;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-delay: 350ms;\n          animation-delay: 350ms;\n}\n.nav__root---1kSrH.nav__is-active---120tm .nav__item---1Bynp {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  will-change: transform;\n}\n.nav__root---1kSrH.nav__is-active---120tm .nav__is-current---3POOT > .nav__route---2EKDF,\n.nav__root---1kSrH.nav__is-active---120tm .nav__route---2EKDF:hover {\n  opacity: 1;\n}\n.nav__root---1kSrH.nav__is-active---120tm .nav__is-current---3POOT > .nav__route---2EKDF::before,\n.nav__root---1kSrH.nav__is-active---120tm .nav__route---2EKDF:hover::before {\n  opacity: 1;\n  -webkit-transform: translateX(-0.1em);\n          transform: translateX(-0.1em);\n}\n@-webkit-keyframes nav__menu-enter-bg---2DLf3 {\n0% {\n    opacity: 0.7;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n}\n}\n@keyframes nav__menu-enter-bg---2DLf3 {\n0% {\n    opacity: 0.7;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n}\n}\n@-webkit-keyframes nav__menu-enter-pattern---23a_u {\n0% {\n    top: 0;\n    opacity: 0;\n    height: 100%;\n}\n100% {\n    top: 0;\n    opacity: 0.3;\n    height: 100%;\n}\n}\n@keyframes nav__menu-enter-pattern---23a_u {\n0% {\n    top: 0;\n    opacity: 0;\n    height: 100%;\n}\n100% {\n    top: 0;\n    opacity: 0.3;\n    height: 100%;\n}\n}\n@media print {\n.nav__root---1kSrH {\n    display: none;\n}\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/containers/Navigation/nav.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/containers/Navigation/nav.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss"],"names":[],"mappings":"AAcA,iDAAA;;AAMA,2CAAA;;AAQA,0CAAA;AAEA;EACI,gBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EAEA;;;;;;;;;;;;MCLE;CACL;AD6BD;EACI,mBAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;UAAA,4BAAA;EACA,sCAAA;EAAA,8BAAA;CC1BH;ACqLO;AFlKR;IAUQ,UAAA;IACA,YAAA;CCxBL;CACF;AD0BG;EACI,WAAA;EACA,iCAAA;UAAA,yBAAA;EACA,+BAAA;UAAA,uBAAA;CCvBP;AD2BD;EACI,gBAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,gCAAA;EAAA,gCAAA;EAAA,yBAAA;EACA,mBAAA;EACA,iBAAA;EACA,6BAAA;EAAA,8BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;EACA,iBAAA;EACA,iBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,2BAAA;MAAA,wBAAA;UAAA,qBAAA;EACA,8BAAA;EACA,mBAAA;EACA,qBAAA;EACA,oCAAA;UAAA,4BAAA;EACA,gCAAA;UAAA,wBAAA;CCxBH;ACiJO;AF7IR;IA4BQ,kBAAA;CC3BL;CACF;AD8BG;EACI,mBAAA;EACA,SAAA;EACA,SAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,iCAAA;EACA,0BAAA;EACA,kHAAA;EAOA,6BAAA;EACA,YAAA;CCjCP;ADqCG;EACI,mBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;EACA,0BAAA;EACA,YAAA;CClCP;ADsCD;EACI,WAAA;EACA,qCAAA;UAAA,6BAAA;EACA,uCAAA;EAAA,+BAAA;EACA,wDAAA;EAAA,gDAAA;EAAA,wCAAA;EAAA,2DAAA;CCnCH;ADsCD;EACI,mBAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,iCAAA;EACA,oBAAA;EACA,mBAAA;EACA,sBAAA;EACA,uBAAA;EACA,yCAAA;EAAA,iCAAA;CCnCH;ADwBD;EAcQ,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,oBAAA;EACA,aAAA;EACA,sCAAA;UAAA,8BAAA;EACA,uCAAA;EAAA,+BAAA;CClCP;ADqCG;EACI,WAAA;CClCP;ADsCD;EACI,gBAAA;EACA,aAAA;EACA,QAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;EACA,mBAAA;EACA,oCAAA;UAAA,4BAAA;EACA,8EAAA;EAAA,sEAAA;EAAA,8DAAA;EAAA,kGAAA;CCnCH;ADqCmB;EACZ,WAAA;EACA,iCAAA;UAAA,yBAAA;EACA,+BAAA;UAAA,uBAAA;CClCP;ADqCK;EACE,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,sCAAA;EAAA,8BAAA;CClCP;AD6BK;EAQM,mBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,mBAAA;EACA,qCAAA;EACA,YAAA;EACA,4BAAA;EAAA,oBAAA;CCjCX;ADqCO;EAGQ,WAAA;CCpCf;ADWK;EA4Bc,8BAAA;UAAA,sBAAA;CCnCnB;AD4CG;EACI,WAAA;EACA,oCAAA;UAAA,4BAAA;CCzCP;AD4CG;EACI,2DAAA;EAAA,mDAAA;EAAA,2CAAA;EAAA,mFAAA;CCzCP;ADiCD;EAYQ,WAAA;EACA,iCAAA;UAAA,yBAAA;CCzCP;AD4BD;EAiBQ,WAAA;EACA,iCAAA;UAAA,yBAAA;CCzCP;ADuBD;EAsBQ,WAAA;EACA,oCAAA;UAAA,4BAAA;CCzCP;ADkBD;EA2BQ,oBAAA;EACA,qBAAA;EACA,uCAAA;EAAA,+BAAA;EACA,wDAAA;EAAA,gDAAA;EAAA,wCAAA;EAAA,2DAAA;CCzCP;AD6CD;EAIQ,oBAAA;EACA,qBAAA;EACA,iCAAA;UAAA,yBAAA;CC7CP;ADuCD;EAaY,wDAAA;UAAA,gDAAA;EACA,kCAAA;UAAA,0BAAA;EACA,4CAAA;UAAA,oCAAA;EACA,sCAAA;UAAA,8BAAA;EACA,+BAAA;UAAA,uBAAA;CChDX;AD+BD;EAsBY,6BAAA;UAAA,qBAAA;EACA,mDAAA;UAAA,2CAAA;EACA,kCAAA;UAAA,0BAAA;EACA,4CAAA;UAAA,oCAAA;EACA,sCAAA;UAAA,8BAAA;EACA,+BAAA;UAAA,uBAAA;CCjDX;ADsBD;EAgCQ,WAAA;EACA,iCAAA;UAAA,yBAAA;EACA,uBAAA;CClDP;ADqDiB;;EAEV,WAAA;CClDP;ADgDiB;;EAKN,WAAA;EACA,sCAAA;UAAA,8BAAA;CChDX;ADgFD;AAEI;IACI,aAAA;IACA,6BAAA;YAAA,qBAAA;CC9EL;ADiFC;IACI,WAAA;IACA,6BAAA;YAAA,qBAAA;CC9EL;CACF;ADoED;AAEI;IACI,aAAA;IACA,6BAAA;YAAA,qBAAA;CC9EL;ADiFC;IACI,WAAA;IACA,6BAAA;YAAA,qBAAA;CC9EL;CACF;ADiFD;AAEI;IACI,OAAA;IACA,WAAA;IACA,aAAA;CC/EL;ADkFC;IACI,OAAA;IACA,aAAA;IACA,aAAA;CC/EL;CACF;ADmED;AAEI;IACI,OAAA;IACA,WAAA;IACA,aAAA;CC/EL;ADkFC;IACI,OAAA;IACA,aAAA;IACA,aAAA;CC/EL;CACF;ADkFD;AAEI;IACI,cAAA;CChFL;CACF","file":"nav.scss","sourcesContent":["@import \"globals\";\n@import \"colors\";\n@import \"fonts\";\n@import \"mixins\";\n@import \"sass-mq/mq\";\n\n$nav-timing-in: 250ms;\n$nav-pattern-delay-in: 600ms;\n$nav-items-delay-in: 800ms;\n$nav-items: 5;\n$nav-item-stagger: 90;\n\n$nav-anim-out: 150ms;\n\n/* pattern appearance vs  nav items appearance */\n$nav-total-timing-in: max(\n    ($nav-timing-in + $nav-pattern-delay-in),\n    ($nav-items-delay-in + ($nav-items * $nav-item-stagger))\n);\n\n/* stylelint-disable property-no-unknown */\n:export {\n    nav-timing-in: strip-units($nav-timing-in);\n    nav-items-delay-in: strip-units($nav-items-delay-in);\n    nav-pattern-delay-in: strip-units($nav-pattern-delay-in);\n    nav-item-stagger: $nav-item-stagger;\n    nav-anim-out: strip-units($nav-anim-out);\n}\n/* stylelint-enable property-no-unknown */\n\n.root {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: z-index(navigation);\n\n    /*\n    &::after,\n    &::before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: z-index(behind);\n        visibility: hidden;\n        overflow: hidden;\n        width: 1px;\n        height: 1px;\n    }\n    */\n\n    //in timing\n    //&::after {\n    //    content: \"#{$nav-total-timing-in}\";\n    //}\n\n    //out timing\n    //&::before {\n    //    content: \"#{$nav-anim-out}\";\n    //}\n}\n\n.burger {\n    position: absolute;\n    top: 20px;\n    right: 25px;\n    z-index: z-index(above) + 1;\n    opacity: 0;\n    transform: translateX(100%);\n    transition: all 0.3s ease-out;\n\n    @include mq(tablet-landscape) {\n        top: 30px;\n        right: 30px;\n    }\n\n    .root.is-visible & {\n        opacity: 1;\n        transform: translateX(0);\n        transition-delay: 1.7s;\n    }\n}\n\n.menu {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: z-index(above);\n    display: flex !important;\n    visibility: hidden;\n    overflow: hidden;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0 0 2vh;\n    list-style: none;\n    justify-content: center;\n    align-items: stretch;\n    background-color: transparent;\n    text-align: center;\n    pointer-events: none;\n    transform: translateX(100%);\n    transform-origin: 0 50%;\n    //animation: $nav-anim-out ease-out menu-leave;\n    //animation-fill-mode: forwards;\n    //transition: opacity $nav-anim-out ease-out;\n\n\n\n    @include mq(tablet-landscape) {\n        padding: 10vh 0 0;\n    }\n\n    // the line and the background with pattern\n    &::after {\n        position: absolute;\n        top: 50%;\n        right: 0;\n        left: 0;\n        z-index: z-index(behind);\n        display: block;\n        border-bottom: 1px solid $color-link;\n        background-color: $color-link;\n        background-image:\n            linear-gradient(\n                55deg,\n                rgba($color-link, 1) 40%,\n                rgba($color-link, 0.2) 100%\n            ),\n            url(\"../../../images/circuits-full.svg\");\n        background-position: right 0;\n        content: \"\";\n    }\n\n    // the red background\n    &::before {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: z-index(behind) - 1;\n        background-color: $color-link;\n        content: \"\";\n    }\n}\n\n.item {\n    opacity: 0;\n    transform: translateY(0.5em);\n    transition: all 170ms ease-out;\n    transition-property: opacity, transform;\n}\n\n.route {\n    position: relative;\n    display: inline-block;\n    opacity: 0.8;\n    padding: 1em 1.5em;\n    color: $color-light;\n    font-family: $font-family-h;\n    font-size: font-size(22px);\n    text-align: center;\n    text-decoration: none;\n    letter-spacing: 0.05em;\n    transition: opacity 150ms linear;\n\n    &::before {\n        position: relative;\n        display: inline-block;\n        opacity: 0;\n        margin-left: -0.3em;\n        content: \".\";\n        transform: translateX(-0.4em);\n        transition: all 250ms ease-out;\n    }\n\n    .is-current > & {\n        opacity: 1;\n    }\n}\n\n.footer {\n    position: fixed;\n    bottom: 10vh;\n    left: 0;\n    z-index: z-index(above);\n    opacity: 0;\n    width: 100%;\n    color: $color-light;\n    font-size: font-size(18px);\n    text-align: center;\n    transform: translateY(20vh);\n    transition: opacity 0.4s ease-out, transform 0s ease-out 1.5s;\n\n    .root.is-active & {\n        opacity: 1;\n        transform: translateY(0);\n        transition-delay: 1.6s;\n    }\n\n    > * {\n        position: relative;\n        opacity: 0.8;\n        padding-right: 1em;\n        padding-left: 1em;\n        transition: all 0.2s ease-out;\n\n        &::after {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            z-index: z-index(behind);\n            width: 2em;\n            height: 2em;\n            margin: -0.9em 0 0 -1em;\n            border-radius: 50%;\n            background-color: rgba(black, 0.1);\n            content: \"\";\n            transition: inherit;\n        }\n\n\n        :global(.no-touchevents) & {\n\n            &:hover {\n                opacity: 1;\n\n                &::after {\n                    transform: scale(1.2);\n                }\n            }\n        }\n    }\n}\n\n:global {\n\n    .navigation-enter {\n        opacity: 1;\n        transform: translateX(100%);\n    }\n\n    .navigation-enter-active {\n        transition: transform ease-out $nav-timing-in 100ms;\n    }\n\n    .navigation-enter-to {\n        opacity: 1;\n        transform: translateX(0);\n    }\n\n    .navigation-leave {\n        opacity: 1;\n        transform: translateX(0);\n    }\n\n    .navigation-leave-to {\n        opacity: 0;\n        transform: translateX(-10%);\n    }\n\n    .navigation-leave-active {\n        visibility: visible;\n        pointer-events: auto;\n        transition: all ease-out $nav-anim-out;\n        transition-property: transform, opacity;\n    }\n}\n\n.root.is-active {\n\n    .menu {\n        //opacity: 1;\n        visibility: visible;\n        pointer-events: auto;\n        transform: translateX(0);\n        //animation: $nav-timing-in ease-out menu-enter 0.1s;\n        //animation-fill-mode: forwards;\n        //transition: none;\n\n        // the pattern\n        &::after {\n            animation-name: menu-enter-pattern;\n            animation-duration: $nav-timing-in;\n            animation-timing-function: ease-out;\n            animation-fill-mode: forwards;\n            animation-delay: $nav-pattern-delay-in;\n        }\n\n        // the red background\n        &::before {\n            transform: scaleY(0);\n            animation-name: menu-enter-bg;\n            animation-duration: $nav-timing-in;\n            animation-timing-function: ease-out;\n            animation-fill-mode: forwards;\n            animation-delay: 350ms;\n        }\n    }\n\n    .item {\n        opacity: 1;\n        transform: translateY(0);\n        will-change: transform;\n    }\n\n    .is-current > .route,\n    .route:hover {\n        opacity: 1;\n\n        &::before {\n            opacity: 1;\n            transform: translateX(-0.1em);\n        }\n    }\n}\n\n// @keyframes menu-leave {\n\n//     0% {\n//         transform: translateX(0);\n//     }\n\n//     99.999% {\n//         transform: translateX(-10%);\n//     }\n\n//     100% {\n//         visibility: hidden;\n//         transform: translateX(-10%);\n//     }\n// }\n\n// @keyframes menu-enter {\n\n//     0% {\n//         transform: translateX(100%);\n//     }\n\n//     100% {\n//         transform: translateX(0);\n//     }\n// }\n\n@keyframes menu-enter-bg {\n\n    0% {\n        opacity: 0.7;\n        transform: scaleY(0);\n    }\n\n    100% {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n}\n\n@keyframes menu-enter-pattern {\n\n    0% {\n        top: 0;\n        opacity: 0;\n        height: 100%;\n    }\n\n    100% {\n        top: 0;\n        opacity: 0.3;\n        height: 100%;\n    }\n}\n\n@media print {\n\n    .root {\n        display: none;\n    }\n}\n","/* pattern appearance vs  nav items appearance */\n\n/* stylelint-disable property-no-unknown */\n\n:export {\n  nav-timing-in: 250;\n  nav-items-delay-in: 800;\n  nav-pattern-delay-in: 600;\n  nav-item-stagger: 90;\n  nav-anim-out: 150;\n}\n\n/* stylelint-enable property-no-unknown */\n\n.root {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5;\n  /*\n    &::after,\n    &::before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: z-index(behind);\n        visibility: hidden;\n        overflow: hidden;\n        width: 1px;\n        height: 1px;\n    }\n    */\n}\n\n.burger {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n  z-index: 2;\n  opacity: 0;\n  transform: translateX(100%);\n  transition: all 0.3s ease-out;\n}\n\n@media (min-width: 64em) {\n  .burger {\n    top: 30px;\n    right: 30px;\n  }\n}\n\n.root.is-visible .burger {\n  opacity: 1;\n  transform: translateX(0);\n  transition-delay: 1.7s;\n}\n\n.menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: flex !important;\n  visibility: hidden;\n  overflow: hidden;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0 0 2vh;\n  list-style: none;\n  justify-content: center;\n  align-items: stretch;\n  background-color: transparent;\n  text-align: center;\n  pointer-events: none;\n  transform: translateX(100%);\n  transform-origin: 0 50%;\n}\n\n@media (min-width: 64em) {\n  .menu {\n    padding: 10vh 0 0;\n  }\n}\n\n.menu::after {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  z-index: -1;\n  display: block;\n  border-bottom: 1px solid #a02c2c;\n  background-color: #a02c2c;\n  background-image: linear-gradient(55deg, #a02c2c 40%, rgba(160, 44, 44, 0.2) 100%), url(\"../../../images/circuits-full.svg\");\n  background-position: right 0;\n  content: \"\";\n}\n\n.menu::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -2;\n  background-color: #a02c2c;\n  content: \"\";\n}\n\n.item {\n  opacity: 0;\n  transform: translateY(0.5em);\n  transition: all 170ms ease-out;\n  transition-property: opacity, transform;\n}\n\n.route {\n  position: relative;\n  display: inline-block;\n  opacity: 0.8;\n  padding: 1em 1.5em;\n  color: #fff;\n  font-family: \"Bree Serif\", serif;\n  font-size: 1.375rem;\n  text-align: center;\n  text-decoration: none;\n  letter-spacing: 0.05em;\n  transition: opacity 150ms linear;\n}\n\n.route::before {\n  position: relative;\n  display: inline-block;\n  opacity: 0;\n  margin-left: -0.3em;\n  content: \".\";\n  transform: translateX(-0.4em);\n  transition: all 250ms ease-out;\n}\n\n.is-current > .route {\n  opacity: 1;\n}\n\n.footer {\n  position: fixed;\n  bottom: 10vh;\n  left: 0;\n  z-index: 1;\n  opacity: 0;\n  width: 100%;\n  color: #fff;\n  font-size: 1.125rem;\n  text-align: center;\n  transform: translateY(20vh);\n  transition: opacity 0.4s ease-out, transform 0s ease-out 1.5s;\n}\n\n.root.is-active .footer {\n  opacity: 1;\n  transform: translateY(0);\n  transition-delay: 1.6s;\n}\n\n.footer > * {\n  position: relative;\n  opacity: 0.8;\n  padding-right: 1em;\n  padding-left: 1em;\n  transition: all 0.2s ease-out;\n}\n\n.footer > *::after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  width: 2em;\n  height: 2em;\n  margin: -0.9em 0 0 -1em;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.1);\n  content: \"\";\n  transition: inherit;\n}\n\n:global(.no-touchevents) .footer > *:hover {\n  opacity: 1;\n}\n\n:global(.no-touchevents) .footer > *:hover::after {\n  transform: scale(1.2);\n}\n\n:global .navigation-enter {\n  opacity: 1;\n  transform: translateX(100%);\n}\n\n:global .navigation-enter-active {\n  transition: transform ease-out 250ms 100ms;\n}\n\n:global .navigation-enter-to {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n:global .navigation-leave {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n:global .navigation-leave-to {\n  opacity: 0;\n  transform: translateX(-10%);\n}\n\n:global .navigation-leave-active {\n  visibility: visible;\n  pointer-events: auto;\n  transition: all ease-out 150ms;\n  transition-property: transform, opacity;\n}\n\n.root.is-active .menu {\n  visibility: visible;\n  pointer-events: auto;\n  transform: translateX(0);\n}\n\n.root.is-active .menu::after {\n  animation-name: menu-enter-pattern;\n  animation-duration: 250ms;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  animation-delay: 600ms;\n}\n\n.root.is-active .menu::before {\n  transform: scaleY(0);\n  animation-name: menu-enter-bg;\n  animation-duration: 250ms;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  animation-delay: 350ms;\n}\n\n.root.is-active .item {\n  opacity: 1;\n  transform: translateY(0);\n  will-change: transform;\n}\n\n.root.is-active .is-current > .route,\n.root.is-active .route:hover {\n  opacity: 1;\n}\n\n.root.is-active .is-current > .route::before,\n.root.is-active .route:hover::before {\n  opacity: 1;\n  transform: translateX(-0.1em);\n}\n\n@keyframes menu-enter-bg {\n  0% {\n    opacity: 0.7;\n    transform: scaleY(0);\n  }\n\n  100% {\n    opacity: 1;\n    transform: scaleY(1);\n  }\n}\n\n@keyframes menu-enter-pattern {\n  0% {\n    top: 0;\n    opacity: 0;\n    height: 100%;\n  }\n\n  100% {\n    top: 0;\n    opacity: 0.3;\n    height: 100%;\n  }\n}\n\n@media print {\n  .root {\n    display: none;\n  }\n}\n\n","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"nav-timing-in": "250",
	"navTimingIn": "250",
	"nav-items-delay-in": "800",
	"navItemsDelayIn": "800",
	"nav-pattern-delay-in": "600",
	"navPatternDelayIn": "600",
	"nav-item-stagger": "90",
	"navItemStagger": "90",
	"nav-anim-out": "150",
	"navAnimOut": "150",
	"root": "nav__root---1kSrH",
	"burger": "nav__burger---1BajY",
	"is-visible": "nav__is-visible---zMUUp",
	"isVisible": "nav__is-visible---zMUUp",
	"menu": "nav__menu---12hlY",
	"item": "nav__item---1Bynp",
	"route": "nav__route---2EKDF",
	"is-current": "nav__is-current---3POOT",
	"isCurrent": "nav__is-current---3POOT",
	"footer": "nav__footer---zC3jl",
	"is-active": "nav__is-active---120tm",
	"isActive": "nav__is-active---120tm",
	"menu-enter-pattern": "nav__menu-enter-pattern---23a_u",
	"menuEnterPattern": "nav__menu-enter-pattern---23a_u",
	"menu-enter-bg": "nav__menu-enter-bg---2DLf3",
	"menuEnterBg": "nav__menu-enter-bg---2DLf3"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62b857ff\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Burger/burger.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.burger__root---1ZSsw::before,\n.burger__root---1ZSsw::after,\n.burger__label---1KsjM::after {\n  position: absolute;\n  right: 0;\n  left: 0;\n  display: block;\n  height: 3px;\n  background-color: currentColor;\n  color: #de8787;\n  content: \"\";\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n.burger__root---1ZSsw {\n  display: block;\n  width: 24px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  background-image: none;\n  cursor: pointer;\n}\n.burger__root---1ZSsw::before {\n  top: 0;\n}\n.burger__root---1ZSsw::after {\n  bottom: 0;\n  -webkit-transform: scaleX(0.7);\n          transform: scaleX(0.7);\n}\n.burger__label---1KsjM {\n  display: block;\n  height: 17px;\n  font-size: 0;\n}\n.burger__label---1KsjM::after {\n  top: 7px;\n  -webkit-transform: scaleX(0.85);\n          transform: scaleX(0.85);\n}\n.burger__root---1ZSsw:focus,\n.burger__root---1ZSsw:active {\n  outline: 0;\n}\n[data-whatinput=\"keyboard\"] .burger__root---1ZSsw:focus::before,\n.no-touchevents .burger__root---1ZSsw.burger__is-active---rG_j3::before,\n.no-touchevents .burger__root---1ZSsw:hover::before {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n}\n[data-whatinput=\"keyboard\"] .burger__root---1ZSsw:focus::after,\n.no-touchevents .burger__root---1ZSsw.burger__is-active---rG_j3::after,\n.no-touchevents .burger__root---1ZSsw:hover::after {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n}\n[data-whatinput=\"keyboard\"] .burger__root---1ZSsw:focus .burger__label---1KsjM::after,\n.no-touchevents .burger__root---1ZSsw.burger__is-active---rG_j3 .burger__label---1KsjM::after,\n.no-touchevents .burger__root---1ZSsw:hover .burger__label---1KsjM::after {\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n}\n[class*=\"is-active\"] > .burger__root---1ZSsw.burger__is-active---rG_j3 {\n  opacity: 0.8;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n[class*=\"is-active\"] > .burger__root---1ZSsw.burger__is-active---rG_j3::before,\n[class*=\"is-active\"] > .burger__root---1ZSsw.burger__is-active---rG_j3::after,\n[class*=\"is-active\"] > .burger__root---1ZSsw.burger__is-active---rG_j3 .burger__label---1KsjM::after {\n  color: #fff;\n}\n.touchevents [class*=\"is-active\"] > .burger__root---1ZSsw.burger__is-active---rG_j3,\n[class*=\"is-active\"] > .burger__root---1ZSsw.burger__is-active---rG_j3:hover {\n  opacity: 1;\n}\n[class*=\"is-active\"] > .burger__root---1ZSsw.burger__is-active---rG_j3::before {\n  -webkit-transform: translate(0, 17px) rotate(45deg);\n          transform: translate(0, 17px) rotate(45deg);\n  -webkit-transition: color 0.2s ease-out 0.6s, -webkit-transform 0.2s ease-out 0.6s;\n  transition: color 0.2s ease-out 0.6s, -webkit-transform 0.2s ease-out 0.6s;\n  transition: color 0.2s ease-out 0.6s, transform 0.2s ease-out 0.6s;\n  transition: color 0.2s ease-out 0.6s, transform 0.2s ease-out 0.6s, -webkit-transform 0.2s ease-out 0.6s;\n}\n[class*=\"is-active\"] > .burger__root---1ZSsw.burger__is-active---rG_j3::after {\n  -webkit-transform: translate(-3px, -14px) rotate(-45deg);\n          transform: translate(-3px, -14px) rotate(-45deg);\n  -webkit-transition: color 0.2s ease-out 0.6s, -webkit-transform 0.2s ease-out 0.6s;\n  transition: color 0.2s ease-out 0.6s, -webkit-transform 0.2s ease-out 0.6s;\n  transition: color 0.2s ease-out 0.6s, transform 0.2s ease-out 0.6s;\n  transition: color 0.2s ease-out 0.6s, transform 0.2s ease-out 0.6s, -webkit-transform 0.2s ease-out 0.6s;\n}\n[class*=\"is-active\"] > .burger__root---1ZSsw.burger__is-active---rG_j3 .burger__label---1KsjM::after {\n  opacity: 0;\n  -webkit-transition: color 0.2s ease-out 0.6s, opacity 0.2s ease-out 0.6s;\n  transition: color 0.2s ease-out 0.6s, opacity 0.2s ease-out 0.6s;\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Burger/burger.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Burger/burger.scss"],"names":[],"mappings":";AAQA;;;EACI,mBAAA;EACA,SAAA;EACA,QAAA;EACA,eAAA;EACA,YAAA;EACA,+BAAA;EACA,eAAA;EACA,YAAA;EACA,iCAAA;UAAA,yBAAA;EACA,sCAAA;EAAA,8BAAA;CCLH;ADQD;EACI,eAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,8BAAA;EACA,uBAAA;EACA,gBAAA;CCLH;ADHD;EAYQ,OAAA;CCLP;ADPD;EAiBQ,UAAA;EACA,+BAAA;UAAA,uBAAA;CCNP;ADUD;EACI,eAAA;EACA,aAAA;EACA,aAAA;CCPH;ADID;EAOQ,SAAA;EACA,gCAAA;UAAA,wBAAA;CCPP;ADYD;;EAEI,WAAA;CCTH;ADAD;;;EAiBQ,6BAAA;UAAA,qBAAA;CCXP;ADAD;;;EAeQ,6BAAA;UAAA,qBAAA;CCTP;ADAD;;;EAaQ,6BAAA;UAAA,qBAAA;CCPP;ADAD;EAYI,aAAA;EACA,6BAAA;UAAA,qBAAA;CCRH;ADAD;;;EAaQ,YAAA;CCPP;ADAsB;;EAYf,WAAA;CCPP;ADFD;EAaQ,oDAAA;UAAA,4CAAA;EACA,mFAAA;EAAA,2EAAA;EAAA,mEAAA;EAAA,yGAAA;CCPP;ADFD;EAaQ,yDAAA;UAAA,iDAAA;EACA,mFAAA;EAAA,2EAAA;EAAA,mEAAA;EAAA,yGAAA;CCPP;ADFD;EAaQ,WAAA;EACA,yEAAA;EAAA,iEAAA;CCPP","file":"burger.scss","sourcesContent":["@import \"colors\";\n@import \"mixins\";\n\n$burger-size: 24px;\n$burger-height: 17px;\n$burger-bar-height: 3px;\n$burger-bar-spacing: 4px;\n\n%o-burger-bar {\n    position: absolute;\n    right: 0;\n    left: 0;\n    display: block;\n    height: $burger-bar-height;\n    background-color: currentColor;\n    color: lighten($color-link, 30);\n    content: \"\";\n    transform-origin: 100% 0;\n    transition: all 0.2s ease-out;\n}\n\n.root {\n    display: block;\n    width: $burger-size;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background-color: transparent;\n    background-image: none;\n    cursor: pointer;\n\n    &::before {\n        @extend %o-burger-bar;\n        top: 0;\n    }\n\n    &::after {\n        @extend %o-burger-bar;\n        bottom: 0;\n        transform: scaleX(0.7);\n    }\n}\n\n.label {\n    display: block;\n    height: $burger-height;\n    font-size: 0;\n\n    &::after {\n        @extend %o-burger-bar;\n        top: $burger-bar-spacing + $burger-bar-height;\n        transform: scaleX(0.85);\n    }\n}\n\n\n.root:focus,\n.root:active {\n    outline: 0;\n}\n\n[data-whatinput=\"keyboard\"] .root:focus,\n:global(.no-touchevents) .root.is-active,\n:global(.no-touchevents) .root:hover {\n\n    &::before {\n        transform: scaleX(1);\n    }\n\n    &::after {\n        transform: scaleX(1);\n    }\n\n    .label::after {\n        transform: scaleX(1);\n    }\n}\n\n[class*=\"is-active\"] > .root.is-active {\n    opacity: 0.8;\n    transition-delay: 0s;\n\n    &::before,\n    &::after,\n    .label::after {\n        color: $color-light;\n    }\n\n    :global(.touchevents) &,\n    &:hover {\n        opacity: 1;\n    }\n\n    &::before {\n        transform: translate(0, 17px) rotate(45deg);\n        transition: color 0.2s ease-out 0.6s, transform 0.2s ease-out 0.6s;\n    }\n\n    &::after {\n        transform: translate(-3px, -14px) rotate(-45deg);\n        transition: color 0.2s ease-out 0.6s, transform 0.2s ease-out 0.6s;\n    }\n\n    .label::after {\n        opacity: 0;\n        transition: color 0.2s ease-out 0.6s, opacity 0.2s ease-out 0.6s;\n    }\n}",".root::before,\n.root::after,\n.label::after {\n  position: absolute;\n  right: 0;\n  left: 0;\n  display: block;\n  height: 3px;\n  background-color: currentColor;\n  color: #de8787;\n  content: \"\";\n  transform-origin: 100% 0;\n  transition: all 0.2s ease-out;\n}\n\n.root {\n  display: block;\n  width: 24px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  background-image: none;\n  cursor: pointer;\n}\n\n.root::before {\n  top: 0;\n}\n\n.root::after {\n  bottom: 0;\n  transform: scaleX(0.7);\n}\n\n.label {\n  display: block;\n  height: 17px;\n  font-size: 0;\n}\n\n.label::after {\n  top: 7px;\n  transform: scaleX(0.85);\n}\n\n.root:focus,\n.root:active {\n  outline: 0;\n}\n\n[data-whatinput=\"keyboard\"] .root:focus::before,\n:global(.no-touchevents) .root.is-active::before,\n:global(.no-touchevents) .root:hover::before {\n  transform: scaleX(1);\n}\n\n[data-whatinput=\"keyboard\"] .root:focus::after,\n:global(.no-touchevents) .root.is-active::after,\n:global(.no-touchevents) .root:hover::after {\n  transform: scaleX(1);\n}\n\n[data-whatinput=\"keyboard\"] .root:focus .label::after,\n:global(.no-touchevents) .root.is-active .label::after,\n:global(.no-touchevents) .root:hover .label::after {\n  transform: scaleX(1);\n}\n\n[class*=\"is-active\"] > .root.is-active {\n  opacity: 0.8;\n  transition-delay: 0s;\n}\n\n[class*=\"is-active\"] > .root.is-active::before,\n[class*=\"is-active\"] > .root.is-active::after,\n[class*=\"is-active\"] > .root.is-active .label::after {\n  color: #fff;\n}\n\n:global(.touchevents) [class*=\"is-active\"] > .root.is-active,\n[class*=\"is-active\"] > .root.is-active:hover {\n  opacity: 1;\n}\n\n[class*=\"is-active\"] > .root.is-active::before {\n  transform: translate(0, 17px) rotate(45deg);\n  transition: color 0.2s ease-out 0.6s, transform 0.2s ease-out 0.6s;\n}\n\n[class*=\"is-active\"] > .root.is-active::after {\n  transform: translate(-3px, -14px) rotate(-45deg);\n  transition: color 0.2s ease-out 0.6s, transform 0.2s ease-out 0.6s;\n}\n\n[class*=\"is-active\"] > .root.is-active .label::after {\n  opacity: 0;\n  transition: color 0.2s ease-out 0.6s, opacity 0.2s ease-out 0.6s;\n}\n\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "burger__root---1ZSsw",
	"label": "burger__label---1KsjM",
	"is-active": "burger__is-active---rG_j3",
	"isActive": "burger__is-active---rG_j3"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-639dcfe9\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/Cover/cover.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.cover__root---1g1Nj {\n  position: relative;\n  z-index: 1;\n  width: 100vw;\n  padding: 4.375rem 5.46875vw;\n}\n@media (max-width: 63.99em) {\n.cover__root---1g1Nj {\n    opacity: 1 !important;\n    visibility: visible !important;\n    -webkit-transform: none !important;\n            transform: none !important;\n}\n}\n@media (min-width: 64em) {\n.cover__root---1g1Nj {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    width: 100vw;\n    height: 100vh;\n    padding-top: 0;\n    padding-bottom: 0;\n    border-right: 8px solid #a02c2c;\n}\n}\n@media print {\n.cover__root---1g1Nj {\n    position: relative;\n    opacity: 1 !important;\n    visibility: visible !important;\n    overflow-x: hidden;\n    overflow-y: visible;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: auto;\n    min-height: 100vh;\n    border: 0;\n    -webkit-transform: none !important;\n            transform: none !important;\n    page-break-after: always;\n}\n.cover__root---1g1Nj [style] {\n    opacity: 1 !important;\n    visibility: visible !important;\n    -webkit-transform: none !important;\n            transform: none !important;\n}\n}\n.cover__pic---319qF {\n  position: relative;\n  z-index: 1;\n  will-change: opacity, transform;\n}\n@media (max-width: 63.99em) {\n.cover__is-app-loaded---3CfW2 > .cover__pic---319qF {\n    opacity: 1 !important;\n    visibility: visible !important;\n}\n}\n@media (min-width: 64em) {\n.cover__pic---319qF {\n    position: absolute;\n    top: 50%;\n    left: 2.34375vw;\n    width: 28.3125vw;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n}\n}\n@media (min-width: 80em) {\n.cover__pic---319qF {\n    left: 4.6875vw;\n}\n}\n@media print {\n.cover__pic---319qF {\n    position: static;\n    width: 100%;\n}\n}\n.cover__pic---319qF > .cover__avatar---21fJr {\n  width: 50vw;\n  height: 50vw;\n  margin: 0 auto;\n}\n@media (min-width: 64em) {\n.cover__pic---319qF > .cover__avatar---21fJr {\n    width: 21.09375vw;\n    height: 21.09375vw;\n    margin-top: -10.546875vw;\n}\n}\n@media print {\n.cover__pic---319qF > .cover__avatar---21fJr {\n    width: 40vw;\n    height: 40vw;\n    margin-top: 10vw;\n    -webkit-transform: none !important;\n            transform: none !important;\n}\n}\n.cover__body---1odFS {\n  position: relative;\n  z-index: 1;\n}\n@media (min-width: 64em) {\n.cover__body---1odFS {\n    margin-left: 33%;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n}\n@media print {\n.cover__body---1odFS {\n    margin-left: 0;\n}\n}\n.cover__body---1odFS > * {\n  margin-bottom: 3.75rem;\n  will-change: transform, opacity;\n}\n@media (max-width: 63.99em) {\n.cover__is-app-loaded---3CfW2 .cover__body---1odFS > * {\n    opacity: 1 !important;\n    visibility: visible !important;\n    -webkit-transform: none !important;\n            transform: none !important;\n}\n}\n.cover__body---1odFS > *:last-child {\n  margin-bottom: 0;\n}\n.cover__headline---18ICL {\n  margin-top: 0.5em;\n  font-family: inherit;\n  font-size: 2.5rem;\n  font-weight: 700;\n  text-align: center;\n}\n@media (min-width: 64em) {\n.cover__headline---18ICL {\n    margin-top: 0;\n    font-size: 2.8125rem;\n    text-align: left;\n}\n}\n.cover__text---1TP_5 {\n  position: relative;\n  max-width: 82%;\n  margin-right: auto;\n  margin-bottom: 2.5rem;\n  margin-left: auto;\n  font-size: 1.25rem;\n}\n@media (min-width: 64em) {\n.cover__text---1TP_5 {\n    max-width: 32rem;\n    margin-right: 0;\n    margin-left: 0;\n    font-size: 1.25rem;\n}\n}\n.cover__text---1TP_5::before {\n  position: absolute;\n  top: -0.35em;\n  left: -0.55em;\n  opacity: 0.5;\n  color: #a02c2c;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 2.5em;\n  content: \"\\201C\";\n}\n@media (min-width: 64em) {\n.cover__text---1TP_5::before {\n    font-size: 4em;\n}\n}\n.cover__text---1TP_5 > * {\n  margin-bottom: 0.8em;\n  line-height: 1.4em;\n}\n@media (min-width: 64em) {\n.cover__footer---3CjAE {\n    max-width: 32rem;\n}\n}\n@media (max-width: 63.99em) {\n.cover__footer---3CjAE > .cover__social-list---njmeh {\n    max-width: 82%;\n    margin: 0 auto;\n}\n}\n.cover__scrollhint---2-4wM {\n  position: absolute;\n  bottom: 6vh;\n  left: 50%;\n  display: none;\n  opacity: 0.8;\n  color: #4d4d4d;\n  font-size: 0.75rem;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  will-change: transform, opacity;\n}\n@media (min-width: 64em) {\n.cover__scrollhint---2-4wM {\n    display: block;\n}\n}\n@media print {\n.cover__scrollhint---2-4wM {\n    display: none;\n}\n}\n.cover__scrollhint---2-4wM > * {\n  margin-bottom: 1em;\n}\n.cover__scrollhint---2-4wM .cover__scrollhint-ico---1cgir {\n  -webkit-transition: -webkit-transform 0.25s ease-out;\n  transition: -webkit-transform 0.25s ease-out;\n  transition: transform 0.25s ease-out;\n  transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;\n}\n.cover__intersect---3ThOX {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  display: block;\n  width: 100%;\n  height: 10px;\n  pointer-events: none;\n}\n.cover__intersect--top---1ddei {\n  top: 30vh;\n}\n.cover__intersect--bottom---1EXNY {\n  bottom: 10vh;\n}\n.no-touchevents .cover__scrollhint---2-4wM:hover .cover__scrollhint-ico---1cgir,\n[data-whatinput=\"keyboard\"] .cover__scrollhint---2-4wM:focus .cover__scrollhint-ico---1cgir {\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n}\n@media not print {\n.cover__root---1g1Nj.appear-enter-active .cover__pic---319qF,\n  .cover__root---1g1Nj.appear-enter-active .cover__body---1odFS {\n    -webkit-transition: all 400ms ease-out 300ms;\n    transition: all 400ms ease-out 300ms;\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, -webkit-transform;\n    transition-property: opacity, transform;\n    transition-property: opacity, transform, -webkit-transform;\n    will-change: transform, opacity;\n}\n.cover__root---1g1Nj.appear-enter-active .cover__scrollhint---2-4wM {\n    -webkit-transition: all 500ms ease-out 3250ms;\n    transition: all 500ms ease-out 3250ms;\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, -webkit-transform;\n    transition-property: opacity, transform;\n    transition-property: opacity, transform, -webkit-transform;\n    will-change: transform, opacity;\n}\n.cover__root---1g1Nj.appear-enter .cover__pic---319qF {\n    opacity: 0;\n    -webkit-transform: translateX(15%);\n            transform: translateX(15%);\n}\n.cover__root---1g1Nj.appear-enter .cover__body---1odFS {\n    opacity: 0;\n    -webkit-transform: translateX(7%);\n            transform: translateX(7%);\n}\n.cover__root---1g1Nj.appear-enter .cover__scrollhint---2-4wM {\n    opacity: 0;\n    -webkit-transform: translate(-50%, -10%);\n            transform: translate(-50%, -10%);\n}\n.cover__root---1g1Nj.slide-enter-active {\n    -webkit-transition: -webkit-transform 800ms cubic-bezier(0.8, 0.09, 0.29, 0.97);\n    transition: -webkit-transform 800ms cubic-bezier(0.8, 0.09, 0.29, 0.97);\n    transition: transform 800ms cubic-bezier(0.8, 0.09, 0.29, 0.97);\n    transition: transform 800ms cubic-bezier(0.8, 0.09, 0.29, 0.97), -webkit-transform 800ms cubic-bezier(0.8, 0.09, 0.29, 0.97);\n    will-change: transform;\n}\n.cover__root---1g1Nj.slide-enter-active .cover__body---1odFS {\n    -webkit-transition: opacity 150ms ease;\n    transition: opacity 150ms ease;\n}\n.cover__root---1g1Nj.slide-enter {\n    -webkit-transform: translateY(-120vh);\n            transform: translateY(-120vh);\n}\n.cover__root---1g1Nj.slide-enter .cover__body---1odFS {\n    opacity: 0;\n}\n.cover__root---1g1Nj.slide-enter-to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n.cover__root---1g1Nj.slide-leave-active {\n    -webkit-transition: -webkit-transform 700ms cubic-bezier(0.71, 0.13, 0.37, 0.93) 1550ms;\n    transition: -webkit-transform 700ms cubic-bezier(0.71, 0.13, 0.37, 0.93) 1550ms;\n    transition: transform 700ms cubic-bezier(0.71, 0.13, 0.37, 0.93) 1550ms;\n    transition: transform 700ms cubic-bezier(0.71, 0.13, 0.37, 0.93) 1550ms, -webkit-transform 700ms cubic-bezier(0.71, 0.13, 0.37, 0.93) 1550ms;\n    will-change: transform;\n}\n.cover__root---1g1Nj.slide-leave-active .cover__pic---319qF,\n  .cover__root---1g1Nj.slide-leave-active .cover__scrollhint---2-4wM {\n    -webkit-transition: opacity 300ms cubic-bezier(0.71, 0.13, 0.37, 0.93);\n    transition: opacity 300ms cubic-bezier(0.71, 0.13, 0.37, 0.93);\n}\n.cover__root---1g1Nj.slide-leave-active .cover__headline---18ICL,\n  .cover__root---1g1Nj.slide-leave-active .cover__text---1TP_5,\n  .cover__root---1g1Nj.slide-leave-active .cover__footer---3CjAE {\n    -webkit-transition: all 500ms cubic-bezier(0.71, 0.13, 0.37, 0.93) 650ms;\n    transition: all 500ms cubic-bezier(0.71, 0.13, 0.37, 0.93) 650ms;\n    will-change: transform, opacity;\n}\n.cover__root---1g1Nj.slide-leave-active .cover__text---1TP_5 {\n    -webkit-transition-delay: 850ms;\n            transition-delay: 850ms;\n}\n.cover__root---1g1Nj.slide-leave-active .cover__footer---3CjAE {\n    -webkit-transition-delay: 1050ms;\n            transition-delay: 1050ms;\n}\n.cover__root---1g1Nj.slide-leave-to {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n}\n.cover__root---1g1Nj.slide-leave-to .cover__pic---319qF,\n  .cover__root---1g1Nj.slide-leave-to .cover__scrollhint---2-4wM {\n    opacity: 0;\n}\n.cover__root---1g1Nj.slide-leave-to .cover__headline---18ICL {\n    opacity: 0;\n    -webkit-transform: translateY(-100vh);\n            transform: translateY(-100vh);\n}\n.cover__root---1g1Nj.slide-leave-to .cover__text---1TP_5,\n  .cover__root---1g1Nj.slide-leave-to .cover__footer---3CjAE {\n    opacity: 0;\n    -webkit-transform: translateY(-100vh);\n            transform: translateY(-100vh);\n}\n.cover__root---1g1Nj.async-avatar-enter-active {\n    -webkit-transition: opacity 1s;\n    transition: opacity 1s;\n}\n.cover__root---1g1Nj.async-avatar-enter {\n    opacity: 0;\n}\n.cover__root---1g1Nj.async-avatar-enter-to {\n    opacity: 1;\n}\n}\n\n/* stylelint-disable property-no-unknown */\n\n/* stylelint-enable property-no-unknown */\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/containers/Cover/cover.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/containers/Cover/cover.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss"],"names":[],"mappings":";AAOA;EACI,mBAAA;EACA,WAAA;EACA,aAAA;EACA,4BAAA;CCNH;AC2NO;AFzNR;IAOQ,sBAAA;IACA,+BAAA;IACA,mCAAA;YAAA,2BAAA;CCJL;CACF;ACmNO;AFzNR;IAaQ,mBAAA;IACA,OAAA;IACA,QAAA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,iBAAA;IACA,0BAAA;QAAA,uBAAA;YAAA,oBAAA;IACA,sBAAA;QAAA,kBAAA;IACA,wBAAA;QAAA,qBAAA;YAAA,4BAAA;IACA,aAAA;IACA,cAAA;IACA,eAAA;IACA,kBAAA;IACA,gCAAA;CCFL;CACF;ACiMO;AFzNR;IA6BQ,mBAAA;IACA,sBAAA;IACA,+BAAA;IACA,mBAAA;IACA,oBAAA;IACA,6BAAA;IAAA,8BAAA;QAAA,2BAAA;YAAA,uBAAA;IACA,aAAA;IACA,kBAAA;IACA,UAAA;IACA,mCAAA;YAAA,2BAAA;IACA,yBAAA;CCAL;ADvCH;IA0CY,sBAAA;IACA,+BAAA;IACA,mCAAA;YAAA,2BAAA;CCCT;CACF;ADKD;EACI,mBAAA;EACA,WAAA;EAGA,gCAAA;CCJH;ACqKO;AF3JA;IACI,sBAAA;IACA,+BAAA;CCNT;CACF;AC8JO;AFtKR;IAkBQ,mBAAA;IACA,SAAA;IACA,gBAAA;IACA,iBAAA;IACA,oBAAA;QAAA,mBAAA;YAAA,eAAA;CCLL;CACF;ACoJO;AFtKR;IA0BQ,eAAA;CCHL;CACF;ADKG;AA7BJ;IA8BQ,iBAAA;IACA,YAAA;CCDL;CACF;ADGK;EACE,YAAA;EACA,aAAA;EACA,eAAA;CCAP;ACiIO;AFtKR;IAwCY,kBAAA;IACA,mBAAA;IACA,yBAAA;CCET;CACF;ACyHO;AFtKR;IA8CY,YAAA;IACA,aAAA;IACA,iBAAA;IACA,mCAAA;YAAA,2BAAA;CCIT;CACF;ADSD;EAII,mBAAA;EACA,WAAA;CCTH;AC2GO;AFvGR;IAQQ,iBAAA;IACA,oBAAA;QAAA,mBAAA;YAAA,eAAA;CCPL;CACF;ADSG;AAZJ;IAaQ,eAAA;CCLL;CACF;ADTD;EAkBQ,uBAAA;EACA,gCAAA;CCLP;ACyFO;AFtFF;IAMU,sBAAA;IACA,+BAAA;IACA,mCAAA;YAAA,2BAAA;CCJb;CACF;ADtBD;EA8BY,iBAAA;CCJX;ADcD;EACI,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;CCXH;ACqEO;AF/DR;IAQQ,cAAA;IACA,qBAAA;IACA,iBAAA;CCTL;CACF;ADYD;EACI,mBAAA;EACA,eAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;CCTH;ACoDO;AFjDR;IASQ,iBAAA;IACA,gBAAA;IACA,eAAA;IACA,mBAAA;CCPL;CACF;ADND;EAgBQ,mBAAA;EACA,aAAA;EACA,cAAA;EACA,aAAA;EACA,eAAA;EACA,6CAAA;EACA,iBAAA;EACA,iBAAA;CCNP;ACgCO;AFjDR;IA0BY,eAAA;CCJT;CACF;ADvBD;EA+BQ,qBAAA;EACA,mBAAA;CCJP;ACqBO;AFbR;IAEQ,iBAAA;CCLL;CACF;ACeO;AFPF;IAEM,eAAA;IACA,eAAA;CCLT;CACF;ADSD;EACI,mBAAA;EACA,YAAA;EACA,UAAA;EACA,cAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;EACA,sCAAA;UAAA,8BAAA;EACA,gCAAA;CCNH;ACNO;AFCR;IAeQ,eAAA;CCLL;CACF;ACZO;AFCR;IAmBQ,cAAA;CCHL;CACF;ADjBD;EAuBQ,mBAAA;CCFP;ADrBD;EA2BQ,qDAAA;EAAA,6CAAA;EAAA,qCAAA;EAAA,uEAAA;CCFP;ADMD;EACI,mBAAA;EACA,QAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;CCHH;ADMD;EAEI,UAAA;CCHH;ADMD;EAEI,aAAA;CCHH;ADMD;;EAIQ,mCAAA;UAAA,2BAAA;CCLP;ADeD;AAEI;;IAMY,6CAAA;IAAA,qCAAA;IACA,wDAAA;IAAA,gDAAA;IAAA,wCAAA;IAAA,2DAAA;IACA,gCAAA;CCjBb;ADSC;IAYY,8CAAA;IAAA,sCAAA;IACA,wDAAA;IAAA,gDAAA;IAAA,wCAAA;IAAA,2DAAA;IACA,gCAAA;CCjBb;ADGC;IAqBY,WAAA;IACA,mCAAA;YAAA,2BAAA;CCpBb;ADuBS;IACI,WAAA;IACA,kCAAA;YAAA,0BAAA;CCpBb;ADPC;IA+BY,WAAA;IACA,yCAAA;YAAA,iCAAA;CCpBb;ADZC;IAsCQ,gFAAA;IAAA,wEAAA;IAAA,gEAAA;IAAA,6HAAA;IACA,uBAAA;CCtBT;ADjBC;IA0CY,uCAAA;IAAA,+BAAA;CCrBb;ADrBC;IA+CQ,sCAAA;YAAA,8BAAA;CCtBT;ADzBC;IAkDY,WAAA;CCrBb;AD7BC;IAuDQ,WAAA;IACA,iCAAA;YAAA,yBAAA;CCtBT;ADlCC;IA6DQ,wFAAA;IAAA,gFAAA;IAAA,wEAAA;IAAA,6IAAA;IACA,uBAAA;CCvBT;ADvCC;;IAkEY,uEAAA;IAAA,+DAAA;CCtBb;AD5CC;;;IAwEY,yEAAA;IAAA,iEAAA;IACA,gCAAA;CCtBb;ADyBS;IACI,gCAAA;YAAA,wBAAA;CCtBb;ADyBS;IACI,iCAAA;YAAA,yBAAA;CCtBb;AD0BK;IACI,qCAAA;YAAA,6BAAA;CCvBT;AD/DC;;IA0FY,WAAA;CCtBb;ADpEC;IA8FY,WAAA;IACA,sCAAA;YAAA,8BAAA;CCtBb;ADzEC;;IAoGY,WAAA;IACA,sCAAA;YAAA,8BAAA;CCtBb;AD0BK;IACI,+BAAA;IAAA,uBAAA;CCvBT;ADnFC;IA8GQ,WAAA;CCvBT;ADvFC;IAkHQ,WAAA;CCvBT;CACF;;AD4BD,2CAAA;;AAMA,0CAAA","file":"cover.scss","sourcesContent":["@import \"globals\";\n@import \"colors\";\n@import \"mixins\";\n@import \"sass-mq/mq\";\n\n$cover-max-width: 32rem;\n\n.root {\n    position: relative;\n    z-index: z-index(above);\n    width: 100vw;\n    padding: rem($page-gutter) vw($page-gutter);\n\n    @include mq($until: tablet-landscape) {\n        opacity: 1 !important;\n        visibility: visible !important;\n        transform: none !important;\n    }\n\n    @include mq(tablet-landscape) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        display: flex;\n        overflow: hidden;\n        align-items: center;\n        flex-wrap: nowrap;\n        justify-content: flex-start;\n        width: 100vw;\n        height: 100vh;\n        padding-top: 0;\n        padding-bottom: 0;\n        border-right: 8px solid $color-link;\n    }\n\n    @include mq($media-type: print) {\n        position: relative;\n        opacity: 1 !important;\n        visibility: visible !important;\n        overflow-x: hidden;\n        overflow-y: visible;\n        flex-direction: column;\n        height: auto;\n        min-height: 100vh;\n        border: 0;\n        transform: none !important;\n        page-break-after: always;\n\n        [style] {\n            opacity: 1 !important;\n            visibility: visible !important;\n            transform: none !important;\n        }\n    }\n}\n\n\n\n.pic {\n    position: relative;\n    z-index: 1;\n    //opacity: 0;\n    //transform: translateX(15%);\n    will-change: opacity, transform;\n    //transition: all 0.4s ease-out 0.35s;\n\n\n    @include mq($until: tablet-landscape) {\n\n        .is-app-loaded > & {\n            opacity: 1 !important;\n            visibility: visible !important;\n        }\n    }\n\n    @include mq(tablet-landscape) {\n        position: absolute;\n        top: 50%;\n        left: vw(30px);\n        width: 33 - 4.6875#{vw};\n        flex: 0 0 auto;\n    }\n\n    @include mq(desktop) {\n        left: vw(60px);\n    }\n\n    @media print {\n        position: static;\n        width: 100%;\n    }\n\n    > .avatar {\n        width: 50vw;\n        height: 50vw;\n        margin: 0 auto;\n\n        @include mq(tablet-landscape) {\n            width: vw(270px);\n            height: vw(270px);\n            margin-top: vw(270px / -2);\n        }\n\n        @include mq($media-type: print) {\n            width: 40vw;\n            height: 40vw;\n            margin-top: 10vw;\n            transform: none !important;\n        }\n    }\n\n    // .is-active > & {\n    //     opacity: 1;\n    //     transform: translateX(0);\n    // }\n\n    // .is-leaving & {\n    //     transition-delay: 0s;\n    // }\n}\n\n.body {\n    //opacity: 0;\n    //transform: translateX(7%);\n    //transition: all 0.4s ease-out 0.35s;\n    position: relative;\n    z-index: 1;\n\n    @include mq(tablet-landscape) {\n        margin-left: 33%;\n        flex: 1 1 auto;\n    }\n\n    @media print {\n        margin-left: 0;\n    }\n\n\n    > * {\n        margin-bottom: rem(60px);\n        will-change: transform, opacity;\n\n        .is-app-loaded & {\n            @include mq($until: tablet-landscape) {\n                opacity: 1 !important;\n                visibility: visible !important;\n                transform: none !important;\n            }\n        }\n\n        &:last-child {\n            margin-bottom: 0;\n        }\n    }\n\n    // .is-active > & {\n    //     opacity: 1;\n    //     transform: translateX(0);\n    // }\n}\n\n.headline {\n    margin-top: 0.5em;\n    font-family: inherit;\n    font-size: font-size(40px);\n    font-weight: 700;\n    text-align: center;\n\n    @include mq(tablet-landscape) {\n        margin-top: 0;\n        font-size: font-size(45px);\n        text-align: left;\n    }\n}\n\n.text {\n    position: relative;\n    max-width: 82%;\n    margin-right: auto;\n    margin-bottom: rem(40px);\n    margin-left: auto;\n    font-size: font-size(20px);\n\n    @include mq(tablet-landscape) {\n        max-width: $cover-max-width;\n        margin-right: 0;\n        margin-left: 0;\n        font-size: font-size(20px);\n    }\n\n    &::before {\n        position: absolute;\n        top: -0.35em;\n        left: -0.55em;\n        opacity: 0.5;\n        color: $color-link;\n        font-family: 'Times New Roman', Times, serif;\n        font-size: 2.5em;\n        content: \"\\201c\";\n\n        @include mq(tablet-landscape) {\n            font-size: 4em;\n        }\n    }\n\n    > * {\n        margin-bottom: 0.8em;\n        line-height: 1.4em;\n    }\n}\n\n.footer {\n    @include mq(tablet-landscape) {\n        max-width: $cover-max-width;\n    }\n\n\n    > .social-list {\n        @include mq($until: tablet-landscape) {\n            max-width: 82%;\n            margin: 0 auto;\n        }\n    }\n}\n\n.scrollhint {\n    position: absolute;\n    bottom: 6vh;\n    left: 50%;\n    display: none;\n    opacity: 0.8;\n    color: $color-text;\n    font-size: font-size(12px);\n    text-align: center;\n    text-decoration: none;\n    transform: translate(-50%, 0);\n    will-change: transform, opacity;\n    //transition: all 0.5s ease-out;\n\n    @include mq(tablet-landscape) {\n        display: block;\n    }\n\n    @include mq($media-type: print) {\n        display: none;\n    }\n\n    > * {\n        margin-bottom: 1em;\n    }\n\n    .scrollhint-ico {\n        transition: transform 0.25s ease-out;\n    }\n}\n\n.intersect {\n    position: absolute;\n    left: 0;\n    z-index: 1;\n    display: block;\n    width: 100%;\n    height: 10px;\n    pointer-events: none;\n}\n\n.intersect--top {\n    composes: intersect;\n    top: 30vh;\n}\n\n.intersect--bottom {\n    composes: intersect;\n    bottom: 10vh;\n}\n\n:global(.no-touchevents) .scrollhint:hover,\n[data-whatinput=\"keyboard\"] .scrollhint:focus {\n\n    .scrollhint-ico {\n        transform: translateY(50%);\n    }\n}\n\n$appear-enter-timing: 3250ms;\n$slide-enter-timing: 800ms;\n$slide-leave-timing: 700ms;\n$slide-leave-delay: 1550ms;\n\n\n@media not print {\n\n    .root {\n\n        &:global(.appear-enter-active) {\n\n            .pic,\n            .body {\n                transition: all 400ms ease-out 300ms;\n                transition-property: opacity, transform;\n                will-change: transform, opacity;\n            }\n\n            .scrollhint {\n                transition: all 500ms ease-out $appear-enter-timing;\n                transition-property: opacity, transform;\n                will-change: transform, opacity;\n            }\n        }\n\n        &:global(.appear-enter) {\n\n            .pic {\n                opacity: 0;\n                transform: translateX(15%);\n            }\n\n            .body {\n                opacity: 0;\n                transform: translateX(7%);\n            }\n\n            .scrollhint {\n                opacity: 0;\n                transform: translate(-50%, -10%);\n            }\n        }\n\n\n        &:global(.slide-enter-active) {\n            transition: transform $slide-enter-timing cubic-bezier(0.8, 0.09, 0.29, 0.97);\n            will-change: transform;\n\n            .body {\n                transition: opacity 150ms ease;\n            }\n        }\n\n        &:global(.slide-enter) {\n            transform: translateY(-120vh);\n\n            .body {\n                opacity: 0;\n            }\n        }\n\n        &:global(.slide-enter-to) {\n            opacity: 1;\n            transform: translateY(0);\n        }\n\n        &:global(.slide-leave-active) {\n            $easing: cubic-bezier(0.71, 0.13, 0.37, 0.93);\n            transition: transform $slide-leave-timing $easing $slide-leave-delay;\n            will-change: transform;\n\n            .pic,\n            .scrollhint {\n                transition: opacity 300ms $easing;\n            }\n\n            .headline,\n            .text,\n            .footer {\n                transition: all 500ms $easing 650ms;\n                will-change: transform, opacity;\n            }\n\n            .text {\n                transition-delay: 850ms;\n            }\n\n            .footer {\n                transition-delay: 1050ms;\n            }\n        }\n\n        &:global(.slide-leave-to) {\n            transform: translateY(-100%);\n\n            .pic,\n            .scrollhint {\n                opacity: 0;\n            }\n\n            .headline {\n                opacity: 0;\n                transform: translateY(-100vh);\n            }\n\n            .text,\n            .footer {\n                opacity: 0;\n                transform: translateY(-100vh);\n            }\n        }\n\n        &:global(.async-avatar-enter-active) {\n            transition: opacity 1s;\n        }\n\n        &:global(.async-avatar-enter) {\n            opacity: 0;\n        }\n\n        &:global(.async-avatar-enter-to) {\n            opacity: 1;\n        }\n    }\n}\n\n\n/* stylelint-disable property-no-unknown */\n:export {\n    appear-enter-timing: strip-units($appear-enter-timing);\n    slide-enter-timing: strip-units($slide-enter-timing);\n    slide-leave-timing: strip-units($slide-leave-delay) + strip-units($slide-leave-timing);\n}\n/* stylelint-enable property-no-unknown */",".root {\n  position: relative;\n  z-index: 1;\n  width: 100vw;\n  padding: 4.375rem 5.46875vw;\n}\n\n@media (max-width: 63.99em) {\n  .root {\n    opacity: 1 !important;\n    visibility: visible !important;\n    transform: none !important;\n  }\n}\n\n@media (min-width: 64em) {\n  .root {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    overflow: hidden;\n    align-items: center;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    width: 100vw;\n    height: 100vh;\n    padding-top: 0;\n    padding-bottom: 0;\n    border-right: 8px solid #a02c2c;\n  }\n}\n\n@media print {\n  .root {\n    position: relative;\n    opacity: 1 !important;\n    visibility: visible !important;\n    overflow-x: hidden;\n    overflow-y: visible;\n    flex-direction: column;\n    height: auto;\n    min-height: 100vh;\n    border: 0;\n    transform: none !important;\n    page-break-after: always;\n  }\n\n  .root [style] {\n    opacity: 1 !important;\n    visibility: visible !important;\n    transform: none !important;\n  }\n}\n\n.pic {\n  position: relative;\n  z-index: 1;\n  will-change: opacity, transform;\n}\n\n@media (max-width: 63.99em) {\n  .is-app-loaded > .pic {\n    opacity: 1 !important;\n    visibility: visible !important;\n  }\n}\n\n@media (min-width: 64em) {\n  .pic {\n    position: absolute;\n    top: 50%;\n    left: 2.34375vw;\n    width: 28.3125vw;\n    flex: 0 0 auto;\n  }\n}\n\n@media (min-width: 80em) {\n  .pic {\n    left: 4.6875vw;\n  }\n}\n\n@media print {\n  .pic {\n    position: static;\n    width: 100%;\n  }\n}\n\n.pic > .avatar {\n  width: 50vw;\n  height: 50vw;\n  margin: 0 auto;\n}\n\n@media (min-width: 64em) {\n  .pic > .avatar {\n    width: 21.09375vw;\n    height: 21.09375vw;\n    margin-top: -10.546875vw;\n  }\n}\n\n@media print {\n  .pic > .avatar {\n    width: 40vw;\n    height: 40vw;\n    margin-top: 10vw;\n    transform: none !important;\n  }\n}\n\n.body {\n  position: relative;\n  z-index: 1;\n}\n\n@media (min-width: 64em) {\n  .body {\n    margin-left: 33%;\n    flex: 1 1 auto;\n  }\n}\n\n@media print {\n  .body {\n    margin-left: 0;\n  }\n}\n\n.body > * {\n  margin-bottom: 3.75rem;\n  will-change: transform, opacity;\n}\n\n@media (max-width: 63.99em) {\n  .is-app-loaded .body > * {\n    opacity: 1 !important;\n    visibility: visible !important;\n    transform: none !important;\n  }\n}\n\n.body > *:last-child {\n  margin-bottom: 0;\n}\n\n.headline {\n  margin-top: 0.5em;\n  font-family: inherit;\n  font-size: 2.5rem;\n  font-weight: 700;\n  text-align: center;\n}\n\n@media (min-width: 64em) {\n  .headline {\n    margin-top: 0;\n    font-size: 2.8125rem;\n    text-align: left;\n  }\n}\n\n.text {\n  position: relative;\n  max-width: 82%;\n  margin-right: auto;\n  margin-bottom: 2.5rem;\n  margin-left: auto;\n  font-size: 1.25rem;\n}\n\n@media (min-width: 64em) {\n  .text {\n    max-width: 32rem;\n    margin-right: 0;\n    margin-left: 0;\n    font-size: 1.25rem;\n  }\n}\n\n.text::before {\n  position: absolute;\n  top: -0.35em;\n  left: -0.55em;\n  opacity: 0.5;\n  color: #a02c2c;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 2.5em;\n  content: \"\\201c\";\n}\n\n@media (min-width: 64em) {\n  .text::before {\n    font-size: 4em;\n  }\n}\n\n.text > * {\n  margin-bottom: 0.8em;\n  line-height: 1.4em;\n}\n\n@media (min-width: 64em) {\n  .footer {\n    max-width: 32rem;\n  }\n}\n\n@media (max-width: 63.99em) {\n  .footer > .social-list {\n    max-width: 82%;\n    margin: 0 auto;\n  }\n}\n\n.scrollhint {\n  position: absolute;\n  bottom: 6vh;\n  left: 50%;\n  display: none;\n  opacity: 0.8;\n  color: #4d4d4d;\n  font-size: 0.75rem;\n  text-align: center;\n  text-decoration: none;\n  transform: translate(-50%, 0);\n  will-change: transform, opacity;\n}\n\n@media (min-width: 64em) {\n  .scrollhint {\n    display: block;\n  }\n}\n\n@media print {\n  .scrollhint {\n    display: none;\n  }\n}\n\n.scrollhint > * {\n  margin-bottom: 1em;\n}\n\n.scrollhint .scrollhint-ico {\n  transition: transform 0.25s ease-out;\n}\n\n.intersect {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  display: block;\n  width: 100%;\n  height: 10px;\n  pointer-events: none;\n}\n\n.intersect--top {\n  composes: intersect;\n  top: 30vh;\n}\n\n.intersect--bottom {\n  composes: intersect;\n  bottom: 10vh;\n}\n\n:global(.no-touchevents) .scrollhint:hover .scrollhint-ico,\n[data-whatinput=\"keyboard\"] .scrollhint:focus .scrollhint-ico {\n  transform: translateY(50%);\n}\n\n@media not print {\n  .root:global(.appear-enter-active) .pic,\n  .root:global(.appear-enter-active) .body {\n    transition: all 400ms ease-out 300ms;\n    transition-property: opacity, transform;\n    will-change: transform, opacity;\n  }\n\n  .root:global(.appear-enter-active) .scrollhint {\n    transition: all 500ms ease-out 3250ms;\n    transition-property: opacity, transform;\n    will-change: transform, opacity;\n  }\n\n  .root:global(.appear-enter) .pic {\n    opacity: 0;\n    transform: translateX(15%);\n  }\n\n  .root:global(.appear-enter) .body {\n    opacity: 0;\n    transform: translateX(7%);\n  }\n\n  .root:global(.appear-enter) .scrollhint {\n    opacity: 0;\n    transform: translate(-50%, -10%);\n  }\n\n  .root:global(.slide-enter-active) {\n    transition: transform 800ms cubic-bezier(0.8, 0.09, 0.29, 0.97);\n    will-change: transform;\n  }\n\n  .root:global(.slide-enter-active) .body {\n    transition: opacity 150ms ease;\n  }\n\n  .root:global(.slide-enter) {\n    transform: translateY(-120vh);\n  }\n\n  .root:global(.slide-enter) .body {\n    opacity: 0;\n  }\n\n  .root:global(.slide-enter-to) {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  .root:global(.slide-leave-active) {\n    transition: transform 700ms cubic-bezier(0.71, 0.13, 0.37, 0.93) 1550ms;\n    will-change: transform;\n  }\n\n  .root:global(.slide-leave-active) .pic,\n  .root:global(.slide-leave-active) .scrollhint {\n    transition: opacity 300ms cubic-bezier(0.71, 0.13, 0.37, 0.93);\n  }\n\n  .root:global(.slide-leave-active) .headline,\n  .root:global(.slide-leave-active) .text,\n  .root:global(.slide-leave-active) .footer {\n    transition: all 500ms cubic-bezier(0.71, 0.13, 0.37, 0.93) 650ms;\n    will-change: transform, opacity;\n  }\n\n  .root:global(.slide-leave-active) .text {\n    transition-delay: 850ms;\n  }\n\n  .root:global(.slide-leave-active) .footer {\n    transition-delay: 1050ms;\n  }\n\n  .root:global(.slide-leave-to) {\n    transform: translateY(-100%);\n  }\n\n  .root:global(.slide-leave-to) .pic,\n  .root:global(.slide-leave-to) .scrollhint {\n    opacity: 0;\n  }\n\n  .root:global(.slide-leave-to) .headline {\n    opacity: 0;\n    transform: translateY(-100vh);\n  }\n\n  .root:global(.slide-leave-to) .text,\n  .root:global(.slide-leave-to) .footer {\n    opacity: 0;\n    transform: translateY(-100vh);\n  }\n\n  .root:global(.async-avatar-enter-active) {\n    transition: opacity 1s;\n  }\n\n  .root:global(.async-avatar-enter) {\n    opacity: 0;\n  }\n\n  .root:global(.async-avatar-enter-to) {\n    opacity: 1;\n  }\n}\n\n/* stylelint-disable property-no-unknown */\n\n:export {\n  appear-enter-timing: 3250;\n  slide-enter-timing: 800;\n  slide-leave-timing: 2250;\n}\n\n/* stylelint-enable property-no-unknown */\n\n","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"appear-enter-timing": "3250",
	"appearEnterTiming": "3250",
	"slide-enter-timing": "800",
	"slideEnterTiming": "800",
	"slide-leave-timing": "2250",
	"slideLeaveTiming": "2250",
	"root": "cover__root---1g1Nj",
	"pic": "cover__pic---319qF",
	"is-app-loaded": "cover__is-app-loaded---3CfW2",
	"isAppLoaded": "cover__is-app-loaded---3CfW2",
	"avatar": "cover__avatar---21fJr",
	"body": "cover__body---1odFS",
	"headline": "cover__headline---18ICL",
	"text": "cover__text---1TP_5",
	"footer": "cover__footer---3CjAE",
	"social-list": "cover__social-list---njmeh",
	"socialList": "cover__social-list---njmeh",
	"scrollhint": "cover__scrollhint---2-4wM",
	"scrollhint-ico": "cover__scrollhint-ico---1cgir",
	"scrollhintIco": "cover__scrollhint-ico---1cgir",
	"intersect": "cover__intersect---3ThOX",
	"intersect--top": "cover__intersect--top---1ddei cover__intersect---3ThOX",
	"intersectTop": "cover__intersect--top---1ddei cover__intersect---3ThOX",
	"intersect--bottom": "cover__intersect--bottom---1EXNY cover__intersect---3ThOX",
	"intersectBottom": "cover__intersect--bottom---1EXNY cover__intersect---3ThOX"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b47b6e4\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Title/title.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.title__root---2wMJg {\n  margin-top: 0;\n  color: inherit;\n  font-family: \"Bree Serif\", serif;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.46875em;\n}\n.title__prefix---1lfSg {\n  position: relative;\n  display: inline-block;\n  margin-right: 0.05em;\n  padding-right: 0.3125em;\n  padding-left: 0.3125em;\n  color: #fff;\n  font-weight: inherit;\n}\n.title__prefix---1lfSg::before {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  z-index: -1;\n  display: block;\n  width: 100%;\n  height: 90%;\n  background-color: #a02c2c;\n  content: \"\";\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n}\n.title__root--sub---14C_G {\n  margin-top: 0.8em;\n  font-size: 1rem;\n}\n@media (min-width: 64em) {\n.title__root--sub---14C_G {\n    margin-bottom: -1.8em;\n}\n}\n@media print {\n.title__root--sub---14C_G {\n    margin-bottom: 1em;\n}\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Title/title.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Title/title.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss"],"names":[],"mappings":";AASA;EACI,cAAA;EACA,eAAA;EACA,iCAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;CCRH;ADWD;EACI,mBAAA;EACA,sBAAA;EACA,qBAAA;EACA,wBAAA;EAEA,uBAAA;EACA,YAAA;EACA,qBAAA;CCTH;ADCD;EAWQ,mBAAA;EACA,SAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;EACA,0BAAA;EACA,YAAA;EACA,4BAAA;UAAA,oBAAA;EACA,gCAAA;UAAA,wBAAA;CCRP;ADYD;EAEI,kBAAA;EACA,gBAAA;CCTH;AC2LO;AFrLR;IAMQ,sBAAA;CCPL;CACF;ADSG;AATJ;IAUQ,mBAAA;CCLL;CACF","file":"title.scss","sourcesContent":["@import \"globals\";\n@import \"colors\";\n@import \"fonts\";\n@import \"mixins\";\n@import \"sass-mq/mq\";\n\n$title-size: font-size(l, false);\n\n\n.root {\n    margin-top: 0;\n    color: inherit;\n    font-family: $font-family-h;\n    font-size: font-size($title-size);\n    font-weight: font-weight(regular);\n    line-height: em(47px, $title-size);\n}\n\n.prefix {\n    position: relative;\n    display: inline-block;\n    margin-right: 0.05em;\n    padding-right: em(10px, $title-size);\n    //padding-bottom: 5px;\n    padding-left: em(10px, $title-size);\n    color: $color-light;\n    font-weight: inherit;\n\n    &::before {\n        position: absolute;\n        top: 10%;\n        left: 0;\n        z-index: z-index(behind);\n        display: block;\n        width: 100%;\n        height: 90%;\n        background-color: $color-dark-red;\n        content: \"\";\n        transform: scale(1);\n        transform-origin: 0 50%;\n    }\n}\n\n.root--sub {\n    composes: root;\n    margin-top: 0.8em;\n    font-size: font-size(m);\n\n    @include mq(tablet-landscape) {\n        margin-bottom: -1.8em;\n    }\n\n    @media print {\n        margin-bottom: 1em;\n    }\n}",".root {\n  margin-top: 0;\n  color: inherit;\n  font-family: \"Bree Serif\", serif;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.46875em;\n}\n\n.prefix {\n  position: relative;\n  display: inline-block;\n  margin-right: 0.05em;\n  padding-right: 0.3125em;\n  padding-left: 0.3125em;\n  color: #fff;\n  font-weight: inherit;\n}\n\n.prefix::before {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  z-index: -1;\n  display: block;\n  width: 100%;\n  height: 90%;\n  background-color: #a02c2c;\n  content: \"\";\n  transform: scale(1);\n  transform-origin: 0 50%;\n}\n\n.root--sub {\n  composes: root;\n  margin-top: 0.8em;\n  font-size: 1rem;\n}\n\n@media (min-width: 64em) {\n  .root--sub {\n    margin-bottom: -1.8em;\n  }\n}\n\n@media print {\n  .root--sub {\n    margin-bottom: 1em;\n  }\n}\n\n","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "title__root---2wMJg",
	"prefix": "title__prefix---1lfSg",
	"root--sub": "title__root--sub---14C_G title__root---2wMJg",
	"rootSub": "title__root--sub---14C_G title__root---2wMJg"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a4629be\",\"scoped\":false,\"hasInlineConfig\":false}!./app/assets/vendors/icomoon/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n[class^=\"ico-\"], [class*=\" ico-\"] {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\n/* ==========================================\nSingle-colored icons can be modified like so:\n.ico-name {\n  font-size: 32px;\n  color: red;\n}\n========================================== */\n.style__ico-languages---3qcRz {\n  width: 0.875em;\n}\n.style__ico-checklist---9Y-3W {\n  width: 0.7470703125em;\n}\n.style__ico-code---3fEKC {\n  width: 0.875em;\n}\n.style__ico-heart---3QlIx {\n  width: 0.75em;\n}\n.style__ico-organization---1mSew {\n  width: 0.875em;\n}\n.style__ico-pencil---1z5nM {\n  width: 0.875em;\n}\n.style__ico-terminal---3NIyl {\n  width: 0.875em;\n}\n.style__ico-pdf---s6cOQ {\n  width: 0.8571428571428571em;\n}\n.style__ico-award---1kS0j {\n  width: 0.9285712447017431em;\n}\n.style__ico-video---3QYoD {\n  width: 1.071429569274187em;\n}\n.style__ico-twitter---1vl1o {\n  width: 0.9285703301429749em;\n}\n.style__ico-github---3ENTm {\n  width: 0.8571436107158661em;\n}\n.style__ico-link---2-_VW {\n  width: 0.9285722523927689em;\n}\n.style__ico-linkedin---3jKhc {\n  width: 0.8571425303816795em;\n}\n.style__ico-slides---F-YwR {\n  width: 0.9999999590218067em;\n}\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/vendors/icomoon/style.css"],"names":[],"mappings":";AAAA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;CACpB;;AAED;;;;;;6CAM6C;AAE7C;EACE,eAAe;CAChB;AAED;EACE,sBAAsB;CACvB;AAED;EACE,eAAe;CAChB;AAED;EACE,cAAc;CACf;AAED;EACE,eAAe;CAChB;AAED;EACE,eAAe;CAChB;AAED;EACE,eAAe;CAChB;AAED;EACE,4BAA4B;CAC7B;AAED;EACE,4BAA4B;CAC7B;AAED;EACE,2BAA2B;CAC5B;AAED;EACE,4BAA4B;CAC7B;AAED;EACE,4BAA4B;CAC7B;AAED;EACE,4BAA4B;CAC7B;AAED;EACE,4BAA4B;CAC7B;AAED;EACE,4BAA4B;CAC7B","file":"style.css","sourcesContent":["[class^=\"ico-\"], [class*=\" ico-\"] {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n\n/* ==========================================\nSingle-colored icons can be modified like so:\n.ico-name {\n  font-size: 32px;\n  color: red;\n}\n========================================== */\n\n.ico-languages {\n  width: 0.875em;\n}\n\n.ico-checklist {\n  width: 0.7470703125em;\n}\n\n.ico-code {\n  width: 0.875em;\n}\n\n.ico-heart {\n  width: 0.75em;\n}\n\n.ico-organization {\n  width: 0.875em;\n}\n\n.ico-pencil {\n  width: 0.875em;\n}\n\n.ico-terminal {\n  width: 0.875em;\n}\n\n.ico-pdf {\n  width: 0.8571428571428571em;\n}\n\n.ico-award {\n  width: 0.9285712447017431em;\n}\n\n.ico-video {\n  width: 1.071429569274187em;\n}\n\n.ico-twitter {\n  width: 0.9285703301429749em;\n}\n\n.ico-github {\n  width: 0.8571436107158661em;\n}\n\n.ico-link {\n  width: 0.9285722523927689em;\n}\n\n.ico-linkedin {\n  width: 0.8571425303816795em;\n}\n\n.ico-slides {\n  width: 0.9999999590218067em;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"ico-languages": "style__ico-languages---3qcRz",
	"icoLanguages": "style__ico-languages---3qcRz",
	"ico-checklist": "style__ico-checklist---9Y-3W",
	"icoChecklist": "style__ico-checklist---9Y-3W",
	"ico-code": "style__ico-code---3fEKC",
	"icoCode": "style__ico-code---3fEKC",
	"ico-heart": "style__ico-heart---3QlIx",
	"icoHeart": "style__ico-heart---3QlIx",
	"ico-organization": "style__ico-organization---1mSew",
	"icoOrganization": "style__ico-organization---1mSew",
	"ico-pencil": "style__ico-pencil---1z5nM",
	"icoPencil": "style__ico-pencil---1z5nM",
	"ico-terminal": "style__ico-terminal---3NIyl",
	"icoTerminal": "style__ico-terminal---3NIyl",
	"ico-pdf": "style__ico-pdf---s6cOQ",
	"icoPdf": "style__ico-pdf---s6cOQ",
	"ico-award": "style__ico-award---1kS0j",
	"icoAward": "style__ico-award---1kS0j",
	"ico-video": "style__ico-video---3QYoD",
	"icoVideo": "style__ico-video---3QYoD",
	"ico-twitter": "style__ico-twitter---1vl1o",
	"icoTwitter": "style__ico-twitter---1vl1o",
	"ico-github": "style__ico-github---3ENTm",
	"icoGithub": "style__ico-github---3ENTm",
	"ico-link": "style__ico-link---2-_VW",
	"icoLink": "style__ico-link---2-_VW",
	"ico-linkedin": "style__ico-linkedin---3jKhc",
	"icoLinkedin": "style__ico-linkedin---3jKhc",
	"ico-slides": "style__ico-slides---F-YwR",
	"icoSlides": "style__ico-slides---F-YwR"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a4629be\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Ico/ico.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.i(__webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a4629be\",\"scoped\":false,\"hasInlineConfig\":false}!./app/assets/vendors/icomoon/style.css"), "");

// module
exports.push([module.i, "\n.ico-pencil use {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n.ico-award {\n  width: 1.3em;\n  height: 1.3em;\n  vertical-align: middle;\n}\n.ico-linkedin {\n  top: -0.05em;\n}\n.ico-pdf {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n}\n.ico__root---2_33e {\n  position: relative;\n  vertical-align: middle;\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Ico/ico.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Ico/ico.scss"],"names":[],"mappings":";AAAA;EAMY,8BAAA;UAAA,sBAAA;EACA,kCAAA;UAAA,0BAAA;CCAX;ADPD;EAYQ,aAAA;EACA,cAAA;EACA,uBAAA;CCDP;ADIG;EACI,aAAA;CCDP;ADjBD;EAsBQ,8BAAA;UAAA,sBAAA;CCDP;ADKD;EACI,mBAAA;EACA,uBAAA;CCFH","file":"ico.scss","sourcesContent":[":global {\n    @import \"../../../vendors/icomoon/style.css\";\n\n    .ico-pencil {\n\n        use {\n            transform: scale(0.9);\n            transform-origin: 50% 50%;\n        }\n    }\n\n    .ico-award {\n        width: 1.3em;\n        height: 1.3em;\n        vertical-align: middle;\n    }\n\n    .ico-linkedin {\n        top: -0.05em;\n    }\n\n    .ico-pdf {\n        transform: scale(0.9);\n    }\n}\n\n.root {\n    position: relative;\n    vertical-align: middle;\n}\n\n","@import url(../../../vendors/icomoon/style.css);\n\n\n\n:global .ico-pencil use {\n  transform: scale(0.9);\n  transform-origin: 50% 50%;\n}\n\n:global .ico-award {\n  width: 1.3em;\n  height: 1.3em;\n  vertical-align: middle;\n}\n\n:global .ico-linkedin {\n  top: -0.05em;\n}\n\n:global .ico-pdf {\n  transform: scale(0.9);\n}\n\n.root {\n  position: relative;\n  vertical-align: middle;\n}\n\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "ico__root---2_33e"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ac4866d0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/TableList/table-list.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.table-list__root---3RrkR {\n  max-width: 700px;\n}\n@media (min-width: 100em) {\n.table-list__root---3RrkR {\n    max-width: 750px;\n}\n}\n@media print {\n.table-list__root---3RrkR {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    max-width: none;\n}\n.table-list__root---3RrkR::before,\n  .table-list__root---3RrkR::after {\n    display: table;\n    content: \" \";\n}\n.table-list__root---3RrkR::after {\n    clear: both;\n}\n}\n.table-list__root---3RrkR > * {\n  margin-bottom: 2.5rem;\n}\n@media print {\n.table-list__root---3RrkR > * {\n    width: calc(50% - rem(20px));\n    margin-bottom: 1.875rem;\n}\n.table-list__root---3RrkR > *:nth-child(odd) {\n    padding-right: 0.625rem;\n}\n}\n.table-list__root---3RrkR > *:last-child {\n  margin-bottom: 0;\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/TableList/table-list.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/TableList/table-list.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/_mixins.scss"],"names":[],"mappings":";AAIA;EACI,iBAAA;CCHH;AC8NO;AF5NR;IAIQ,iBAAA;CCDL;CACF;ADGG;AAPJ;IASQ,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,oBAAA;QAAA,gBAAA;IACA,gBAAA;CCAL;ADXH;;IG8CQ,eAAA;IACA,aAAA;CF9BL;ADjBH;IGmDQ,YAAA;CF9BL;CACF;ADRK;EACE,sBAAA;CCWP;ADTO;AAHF;IAIM,6BAAA;IACA,wBAAA;CCaT;ADlBG;IAQU,wBAAA;CCcb;CACF;ADrCD;EA2BY,iBAAA;CCcX","file":"table-list.scss","sourcesContent":["@import \"globals\";\n@import \"mixins\";\n@import \"sass-mq/mq\";\n\n.root {\n    max-width: 700px;\n\n    @include mq(wide) {\n        max-width: 750px;\n    }\n\n    @media print {\n        @include clearfix;\n        display: flex;\n        flex-wrap: wrap;\n        max-width: none;\n    }\n\n    > * {\n        margin-bottom: rem(40px);\n\n        @media print {\n            width: calc(50% - rem(20px));\n            margin-bottom: rem(30px);\n\n            &:nth-child(odd) {\n                padding-right: rem(10px);\n            }\n        }\n\n        &:last-child {\n            margin-bottom: 0;\n        }\n    }\n}",".root {\n  max-width: 700px;\n}\n\n@media (min-width: 100em) {\n  .root {\n    max-width: 750px;\n  }\n}\n\n@media print {\n  .root {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: none;\n  }\n\n  .root::before,\n  .root::after {\n    display: table;\n    content: \" \";\n  }\n\n  .root::after {\n    clear: both;\n  }\n}\n\n.root > * {\n  margin-bottom: 2.5rem;\n}\n\n@media print {\n  .root > * {\n    width: calc(50% - rem(20px));\n    margin-bottom: 1.875rem;\n  }\n\n  .root > *:nth-child(odd) {\n    padding-right: 0.625rem;\n  }\n}\n\n.root > *:last-child {\n  margin-bottom: 0;\n}\n\n","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n","// ==========================================================================\n// Mixins and functions\n//\n// Note: always put function at the beginning of the sub-section\n// ==========================================================================\n\n@import \"globals\";\n@import \"fonts\";\n@import \"sass-mq/mq\";\n\n// Generic\n// ==========================================================================\n\n@function perc($width, $container-width) {\n    @return percentage($width / $container-width);\n}\n\n@function strip-units($value) {\n    @return $value / ($value * 0 + 1);\n}\n\n@function z-index($level: 'base') {\n    @return map-get($layers, $level);\n}\n\n@function vw($width, $viewport-reference-width: $viewport-width) {\n    @return (strip-units($width) / strip-units($viewport-reference-width)) * 100 + vw;\n}\n\n@function vh($height, $viewport-reference-height: $viewport-height) {\n    @return (strip-units($height) / strip-units($viewport-reference-height)) * 100 + vh;\n}\n\n\n// Elements\n// ==========================================================================\n\n@mixin boost-performance ($translate: true) {\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n    @if ($translate) {\n        transform: translate3d(0, 0, 0);\n        will-change: transform;\n    }\n}\n\n@mixin clearfix {\n\n    &::before,\n    &::after {\n        display: table;\n        content: \" \";\n    }\n\n    &::after {\n        clear: both;\n    }\n}\n\n@mixin img-responsive($display: block) {\n    display: $display;\n    max-width: 100%;\n    height: auto;\n}\n\n//see https://github.com/tinganho/compass-placeholder\n@mixin placeholder {\n\n    &::-webkit-input-placeholder {\n        @content;\n    }\n\n    &:-moz-placeholder {\n        @content;\n    }\n\n    &::-moz-placeholder {\n        @content;\n    }\n\n    &:-ms-input-placeholder {\n        @content;\n    }\n}\n\n@mixin classed-headings($headings...) {\n    @if length($headings) == 0 {\n        $headings: map-keys($font-sizes-headings);\n    }\n    $selectors: ();\n    @each $i in $headings {\n        $current-heading: nth($headings, $i);\n        $selector: unquote(\"h#{$current-heading}, .h#{$current-heading}\");\n        $selectors: append($selectors, $selector, comma);\n    }\n\n    #{$selectors} {\n        @content;\n    }\n}\n\n\n\n// Typography\n//\n// ==========================================================================\n\n@function em($pixels, $context: $font-size-default) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n\n    @if (unitless($context)) {\n        $context: $context * 1px;\n    }\n\n    @return #{$pixels / $context}em;\n}\n\n@function rem($pixels) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n    @return #{$pixels / $font-size-default}rem;\n}\n\n\n@function font-size($size, $rem: true) {\n    $result: $size;\n    @if map-has-key($font-sizes, $size) {\n        $result: map-get($font-sizes, $size);\n    }\n\n    @if $rem == true {\n        @return rem($result);\n    }\n\n    @return $result;\n}\n\n@function font-weight($weight) {\n    @if map-has-key($font-weights, $weight) {\n        @return map-get($font-weights, $weight);\n    } @else {\n        @warn \"Weight #{$weight} undefined\";\n    }\n}\n\n@function line-height($size, $context: m) {\n    $context-size: font-size($context, false);\n    @return em($size, $context-size);\n}\n\n\n@mixin text-ellipsis {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n@mixin visually-hidden {\n    position: absolute;\n    overflow: hidden;\n    clip: rect(0 0 0 0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    border: 0;\n}\n\n@mixin font-heading() {\n    margin-bottom: 0.7em;\n    font-family: $font-family-sans;\n    font-size: font-size(20px);\n    font-weight: font-weight(bold);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(22px);\n    }\n}\n\n@mixin font-content() {\n    font-size: font-size(16px);\n    font-weight: font-weight(regular);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(18px);\n    }\n}\n\n@mixin responsive-typography($font-min, $font-max, $breakpoint-min, $breakpoint-max) {\n    //https://www.smashingmagazine.com/2016/05/fluid-typography/\n\n    $font-diff: ($font-max - $font-min);\n    $breakpoint-diff: ($breakpoint-max - $breakpoint-min);\n    $font-scale: $font-diff / $breakpoint-diff;\n    $base-font-size: percentage($font-min / 16px);\n    $base-font-size-em: em($font-min, 16px);\n\n    // https://zellwk.com/blog/viewport-based-typography/\n    font-size: calc(#{$base-font-size-em} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n    //font-size: calc(#{$base-font-size} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n}\n\n\n@mixin a11y-anchor-focus() {\n    outline: 2px solid rgba($color-link, 0);\n    outline-offset: 4px;\n    transition: outline-offset 0.2s ease, color 0.2s ease;\n\n    &:focus {\n        color: $color-link;\n        outline-color: rgba($color-link, 0.2);\n        outline-offset: 2px;\n\n        &::before,\n        &::after {\n            opacity: 0;\n        }\n    }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "table-list__root---3RrkR"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b56f06b0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/List/list.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.list__root---1zDF2 {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.list__item---22AN7 {\n  font-size: 1rem;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n  line-height: 1.4em;\n}\n@media (min-width: 64em) {\n.list__item---22AN7 {\n    font-size: 1.125rem;\n}\n}\n.list__item---22AN7:last-child {\n  margin-bottom: 0;\n}\n.list__item---22AN7 > * {\n  vertical-align: middle;\n}\n.list__item---22AN7 [class*=\" ico-\"] {\n  display: inline-block;\n  margin-right: 0.2em;\n  font-size: 1.2em;\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/List/list.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/List/list.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/_mixins.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss"],"names":[],"mappings":";AAIA;EACI,mBAAA;EACA,UAAA;EACA,WAAA;EACA,sBAAA;CCHH;ADMD;EE4KI,gBAAA;EACA,iBAAA;EF3KA,qBAAA;EACA,mBAAA;CCFH;AEoNO;AHrNR;IEgLQ,oBAAA;CD1KL;CACF;ADPD;EAMQ,iBAAA;CCKP;ADFK;EACE,uBAAA;CCKP;ADfD;EAcQ,sBAAA;EACA,oBAAA;EACA,iBAAA;CCKP","file":"list.scss","sourcesContent":["@import \"fonts\";\n@import \"colors\";\n@import \"mixins\";\n\n.root {\n    position: relative;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\n.item {\n    @include font-content;\n    margin-bottom: 0.3em;\n    line-height: 1.4em;\n\n    &:last-child {\n        margin-bottom: 0;\n    }\n\n    > * {\n        vertical-align: middle;\n    }\n\n    [class*=\" ico-\"] {\n        display: inline-block;\n        margin-right: 0.2em;\n        font-size: 1.2em;\n    }\n}\n\n",".root {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.item {\n  font-size: 1rem;\n  font-weight: 400;\n  margin-bottom: 0.3em;\n  line-height: 1.4em;\n}\n\n@media (min-width: 64em) {\n  .item {\n    font-size: 1.125rem;\n  }\n}\n\n.item:last-child {\n  margin-bottom: 0;\n}\n\n.item > * {\n  vertical-align: middle;\n}\n\n.item [class*=\" ico-\"] {\n  display: inline-block;\n  margin-right: 0.2em;\n  font-size: 1.2em;\n}\n\n","// ==========================================================================\n// Mixins and functions\n//\n// Note: always put function at the beginning of the sub-section\n// ==========================================================================\n\n@import \"globals\";\n@import \"fonts\";\n@import \"sass-mq/mq\";\n\n// Generic\n// ==========================================================================\n\n@function perc($width, $container-width) {\n    @return percentage($width / $container-width);\n}\n\n@function strip-units($value) {\n    @return $value / ($value * 0 + 1);\n}\n\n@function z-index($level: 'base') {\n    @return map-get($layers, $level);\n}\n\n@function vw($width, $viewport-reference-width: $viewport-width) {\n    @return (strip-units($width) / strip-units($viewport-reference-width)) * 100 + vw;\n}\n\n@function vh($height, $viewport-reference-height: $viewport-height) {\n    @return (strip-units($height) / strip-units($viewport-reference-height)) * 100 + vh;\n}\n\n\n// Elements\n// ==========================================================================\n\n@mixin boost-performance ($translate: true) {\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n    @if ($translate) {\n        transform: translate3d(0, 0, 0);\n        will-change: transform;\n    }\n}\n\n@mixin clearfix {\n\n    &::before,\n    &::after {\n        display: table;\n        content: \" \";\n    }\n\n    &::after {\n        clear: both;\n    }\n}\n\n@mixin img-responsive($display: block) {\n    display: $display;\n    max-width: 100%;\n    height: auto;\n}\n\n//see https://github.com/tinganho/compass-placeholder\n@mixin placeholder {\n\n    &::-webkit-input-placeholder {\n        @content;\n    }\n\n    &:-moz-placeholder {\n        @content;\n    }\n\n    &::-moz-placeholder {\n        @content;\n    }\n\n    &:-ms-input-placeholder {\n        @content;\n    }\n}\n\n@mixin classed-headings($headings...) {\n    @if length($headings) == 0 {\n        $headings: map-keys($font-sizes-headings);\n    }\n    $selectors: ();\n    @each $i in $headings {\n        $current-heading: nth($headings, $i);\n        $selector: unquote(\"h#{$current-heading}, .h#{$current-heading}\");\n        $selectors: append($selectors, $selector, comma);\n    }\n\n    #{$selectors} {\n        @content;\n    }\n}\n\n\n\n// Typography\n//\n// ==========================================================================\n\n@function em($pixels, $context: $font-size-default) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n\n    @if (unitless($context)) {\n        $context: $context * 1px;\n    }\n\n    @return #{$pixels / $context}em;\n}\n\n@function rem($pixels) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n    @return #{$pixels / $font-size-default}rem;\n}\n\n\n@function font-size($size, $rem: true) {\n    $result: $size;\n    @if map-has-key($font-sizes, $size) {\n        $result: map-get($font-sizes, $size);\n    }\n\n    @if $rem == true {\n        @return rem($result);\n    }\n\n    @return $result;\n}\n\n@function font-weight($weight) {\n    @if map-has-key($font-weights, $weight) {\n        @return map-get($font-weights, $weight);\n    } @else {\n        @warn \"Weight #{$weight} undefined\";\n    }\n}\n\n@function line-height($size, $context: m) {\n    $context-size: font-size($context, false);\n    @return em($size, $context-size);\n}\n\n\n@mixin text-ellipsis {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n@mixin visually-hidden {\n    position: absolute;\n    overflow: hidden;\n    clip: rect(0 0 0 0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    border: 0;\n}\n\n@mixin font-heading() {\n    margin-bottom: 0.7em;\n    font-family: $font-family-sans;\n    font-size: font-size(20px);\n    font-weight: font-weight(bold);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(22px);\n    }\n}\n\n@mixin font-content() {\n    font-size: font-size(16px);\n    font-weight: font-weight(regular);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(18px);\n    }\n}\n\n@mixin responsive-typography($font-min, $font-max, $breakpoint-min, $breakpoint-max) {\n    //https://www.smashingmagazine.com/2016/05/fluid-typography/\n\n    $font-diff: ($font-max - $font-min);\n    $breakpoint-diff: ($breakpoint-max - $breakpoint-min);\n    $font-scale: $font-diff / $breakpoint-diff;\n    $base-font-size: percentage($font-min / 16px);\n    $base-font-size-em: em($font-min, 16px);\n\n    // https://zellwk.com/blog/viewport-based-typography/\n    font-size: calc(#{$base-font-size-em} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n    //font-size: calc(#{$base-font-size} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n}\n\n\n@mixin a11y-anchor-focus() {\n    outline: 2px solid rgba($color-link, 0);\n    outline-offset: 4px;\n    transition: outline-offset 0.2s ease, color 0.2s ease;\n\n    &:focus {\n        color: $color-link;\n        outline-color: rgba($color-link, 0.2);\n        outline-offset: 2px;\n\n        &::before,\n        &::after {\n            opacity: 0;\n        }\n    }\n}","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "list__root---1zDF2",
	"item": "list__item---22AN7"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1ba164c\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Table/table.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.table__root---D_Oeh {\n  position: relative;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 30px;\n}\n@media (min-width: 64em) {\n.table__root---D_Oeh {\n    margin-top: -10px;\n    padding-left: 0;\n}\n}\n@media print {\n.table__root---D_Oeh {\n    position: relative;\n    top: -2px;\n    width: 50%;\n    border-left: 30px solid transparent;\n    page-break-inside: avoid;\n}\n}\n.table__caption---gIFqb {\n  margin-bottom: 0.7em;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 700;\n  padding-left: 0.3em;\n  page-break-inside: avoid;\n}\n@media (min-width: 64em) {\n.table__caption---gIFqb {\n    font-size: 1.375rem;\n}\n}\n.table__caption---gIFqb::before {\n  display: inline-block;\n  margin-left: -0.3em;\n  content: \". \";\n}\n.table__bracket---2rvyM {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.5;\n  width: 8px;\n  background-color: #a02c2c;\n  page-break-inside: avoid;\n}\n@media (min-width: 64em) {\n.table__bracket---2rvyM {\n    left: -20px;\n}\n}\n.table__bracket---2rvyM::before,\n.table__bracket---2rvyM::after {\n  position: absolute;\n  left: 8px;\n  width: 8px;\n  height: 8px;\n  background-color: inherit;\n  content: \"\";\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transition: -webkit-transform 0.2s ease-out;\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n}\n.table__bracket---2rvyM::before {\n  top: 0;\n}\n.table__bracket---2rvyM::after {\n  bottom: 0;\n}\n.table__data---38zgb {\n  font-size: 1rem;\n  font-weight: 400;\n  width: 90%;\n  line-height: 1.35em;\n  text-align: left;\n  vertical-align: top;\n  page-break-inside: avoid;\n}\n@media (min-width: 64em) {\n.table__data---38zgb {\n    font-size: 1.125rem;\n}\n}\n.table__data---38zgb tr {\n  display: block;\n  padding-bottom: 0.2em;\n  padding-left: 0.3em;\n  line-height: 1.4em;\n}\n@media (min-width: 64em) {\n.table__data---38zgb tr {\n    padding-bottom: 0.1em;\n    line-height: 1.5em;\n}\n}\n.table__data---38zgb td,\n.table__data---38zgb th {\n  display: inline;\n  vertical-align: top;\n}\n@media (min-width: 64em) {\n.table__data---38zgb td,\n  .table__data---38zgb th {\n    display: inline;\n    vertical-align: top;\n}\n}\n@media print {\n.table__data---38zgb td,\n  .table__data---38zgb th {\n    display: inline;\n    vertical-align: top;\n}\n}\n.table__data---38zgb th {\n  font-weight: 700;\n}\n.table__data---38zgb tr[data-row=\"title\"] {\n  padding-top: 0.5em;\n}\n.table__footer---m1DCS {\n  margin-top: 0.4375rem;\n  margin-right: -0.5em;\n  margin-left: 0;\n  font-size: 0.875rem;\n}\n.table__footer---m1DCS > * {\n  margin-right: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: 0.5em;\n}\n@media print {\n.table__footer---m1DCS {\n    overflow: hidden;\n}\n.table__footer---m1DCS > a {\n    float: left;\n    clear: left;\n    border-bottom: 0 !important;\n}\n}\n@media print {\n.table__root--brackets---2vPPB:last-child {\n    margin-bottom: 20px;\n}\n}\n.table__root--brackets---2vPPB .table__data---38zgb th::before {\n  display: inline-block;\n  margin-left: -0.3em;\n  content: \". \";\n}\n.table__root--brackets---2vPPB .table__data---38zgb th::after {\n  font-weight: 400;\n  content: \": \";\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Table/table.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Table/table.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/_mixins.scss"],"names":[],"mappings":";AAUA;EACI,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;CCTH;AC0NO;AFtNR;IASQ,kBAAA;IACA,gBAAA;CCRL;CACF;ACmNO;AFtNR;IAeQ,mBAAA;IACA,UAAA;IACA,WAAA;IACA,oCAAA;IACA,yBAAA;CCPL;CACF;ADUD;EG2II,qBAAA;EACA,qCAAA;EACA,mBAAA;EACA,iBAAA;EH5IA,oBAAA;EACA,yBAAA;CCJH;ACgMO;AF/LR;IGiJQ,oBAAA;CF7IL;CACF;ADLD;EAMQ,sBAAA;EACA,oBAAA;EACA,cAAA;CCGP;ADCD;EACI,mBAAA;EACA,OAAA;EACA,UAAA;EACA,QAAA;EACA,aAAA;EACA,WAAA;EACA,0BAAA;EACA,yBAAA;CCEH;ACyKO;AFnLR;IAWQ,YAAA;CCIL;CACF;ADhBD;;EAgBQ,mBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;EACA,YAAA;EACA,6BAAA;UAAA,qBAAA;EACA,8BAAA;UAAA,sBAAA;EACA,oDAAA;EAAA,4CAAA;EAAA,oCAAA;EAAA,qEAAA;CCKP;AD7BD;EA4BQ,OAAA;CCKP;ADFG;EACI,UAAA;CCKP;ADDD;EGsGI,gBAAA;EACA,iBAAA;EHrGA,WAAA;EACA,oBAAA;EACA,iBAAA;EACA,oBAAA;EACA,yBAAA;CCKH;ACoIO;AF/IR;IG0GQ,oBAAA;CF1FL;CACF;ADTG;EACI,eAAA;EACA,sBAAA;EACA,oBAAA;EACA,mBAAA;CCYP;ACuHO;AFvIJ;IAOQ,sBAAA;IACA,mBAAA;CCcT;CACF;AD/BD;;EAsBQ,gBAAA;EACA,oBAAA;CCcP;AC0GO;AF/IR;;IA0BY,gBAAA;IACA,oBAAA;CCiBT;CACF;ACkGO;AF/IR;;IA+BY,gBAAA;IACA,oBAAA;CCoBT;CACF;ADjBG;EACI,iBAAA;CCoBP;ADzDD;EA2CQ,mBAAA;CCkBP;ADdD;EACI,sBAAA;EACA,qBAAA;EACA,eAAA;EACA,oBAAA;CCiBH;ADrBD;EAOQ,oBAAA;EACA,qBAAA;EACA,mBAAA;CCkBP;ACqEO;AFhGR;IAaQ,iBAAA;CCmBL;ADhCH;IAgBY,YAAA;IACA,YAAA;IACA,4BAAA;CCoBT;CACF;ACyDO;AFvER;IAMY,oBAAA;CCaT;CACF;ADpBD;EAaY,sBAAA;EACA,oBAAA;EACA,cAAA;CCWX;AD1BD;EAmBY,iBAAA;EACA,cAAA;CCWX","file":"table.scss","sourcesContent":["@import \"globals\";\n@import \"fonts\";\n@import \"colors\";\n@import \"mixins\";\n@import \"sass-mq/mq\";\n\n$c-table-row-indent: 0.3em;\n\n$c-table-indent: 30px;\n\n.root {\n    position: relative;\n    width: 100%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: $c-table-indent;\n\n    @include mq(tablet-landscape) {\n        //margin-left: $c-table-indent * -1;\n        margin-top: -10px;\n        padding-left: 0;\n        //border-left: $c-table-indent solid transparent;\n    }\n\n    @include mq($media-type: print) {\n        position: relative;\n        top: -2px;\n        width: 50%;\n        border-left: $c-table-indent solid transparent;\n        page-break-inside: avoid;\n    }\n}\n\n.caption {\n    @include font-heading;\n    padding-left: $c-table-row-indent;\n    page-break-inside: avoid;\n\n    &::before {\n        display: inline-block;\n        margin-left: $c-table-row-indent * -1;\n        content: \". \";\n    }\n}\n\n.bracket {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    opacity: 0.5;\n    width: 8px;\n    background-color: $color-link;\n    page-break-inside: avoid;\n\n    @include mq(tablet-landscape) {\n        left: -20px;\n    }\n\n    &::before,\n    &::after {\n        position: absolute;\n        left: 8px;\n        width: 8px;\n        height: 8px;\n        background-color: inherit;\n        content: \"\";\n        transform: scaleX(1);\n        transform-origin: 0 0;\n        transition: transform 0.2s ease-out;\n    }\n\n    &::before {\n        top: 0;\n    }\n\n    &::after {\n        bottom: 0;\n    }\n}\n\n.data {\n    @include font-content;\n    width: 90%;\n    line-height: 1.35em;\n    text-align: left;\n    vertical-align: top;\n    page-break-inside: avoid;\n\n    tr {\n        display: block;\n        padding-bottom: 0.2em;\n        padding-left: $c-table-row-indent;\n        line-height: 1.4em;\n\n        @include mq(tablet-landscape) {\n            padding-bottom: 0.1em;\n            line-height: 1.5em;\n        }\n    }\n\n    td,\n    th {\n        display: inline;\n        vertical-align: top;\n\n        @include mq(tablet-landscape) {\n            display: inline;\n            vertical-align: top;\n        }\n\n        @include mq($media-type: print) {\n            display: inline;\n            vertical-align: top;\n        }\n    }\n\n    th {\n        font-weight: font-weight(bold);\n    }\n\n\n\n    tr[data-row=\"title\"] {\n        padding-top: 0.5em;\n    }\n}\n\n.footer {\n    margin-top: rem(7px);\n    margin-right: -0.5em;\n    margin-left: 0;\n    font-size: font-size(s);\n\n    > * {\n        margin-right: 0.5em;\n        margin-bottom: 0.5em;\n        margin-left: 0.5em;\n    }\n\n    @include mq($media-type: print) {\n        overflow: hidden;\n\n        > a {\n            float: left;\n            clear: left;\n            border-bottom: 0 !important;\n        }\n    }\n}\n\n\n\n.root--brackets {\n\n    @include mq($media-type: print) {\n        //top: 10px;\n\n        &:last-child {\n            margin-bottom: 20px;\n        }\n    }\n\n    .data {\n\n        th::before {\n            display: inline-block;\n            margin-left: $c-table-row-indent * -1;\n            content: \". \";\n        }\n\n        th::after {\n            font-weight: font-weight(regular);\n            content: \": \";\n        }\n    }\n}\n",".root {\n  position: relative;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 30px;\n}\n\n@media (min-width: 64em) {\n  .root {\n    margin-top: -10px;\n    padding-left: 0;\n  }\n}\n\n@media print {\n  .root {\n    position: relative;\n    top: -2px;\n    width: 50%;\n    border-left: 30px solid transparent;\n    page-break-inside: avoid;\n  }\n}\n\n.caption {\n  margin-bottom: 0.7em;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 700;\n  padding-left: 0.3em;\n  page-break-inside: avoid;\n}\n\n@media (min-width: 64em) {\n  .caption {\n    font-size: 1.375rem;\n  }\n}\n\n.caption::before {\n  display: inline-block;\n  margin-left: -0.3em;\n  content: \". \";\n}\n\n.bracket {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.5;\n  width: 8px;\n  background-color: #a02c2c;\n  page-break-inside: avoid;\n}\n\n@media (min-width: 64em) {\n  .bracket {\n    left: -20px;\n  }\n}\n\n.bracket::before,\n.bracket::after {\n  position: absolute;\n  left: 8px;\n  width: 8px;\n  height: 8px;\n  background-color: inherit;\n  content: \"\";\n  transform: scaleX(1);\n  transform-origin: 0 0;\n  transition: transform 0.2s ease-out;\n}\n\n.bracket::before {\n  top: 0;\n}\n\n.bracket::after {\n  bottom: 0;\n}\n\n.data {\n  font-size: 1rem;\n  font-weight: 400;\n  width: 90%;\n  line-height: 1.35em;\n  text-align: left;\n  vertical-align: top;\n  page-break-inside: avoid;\n}\n\n@media (min-width: 64em) {\n  .data {\n    font-size: 1.125rem;\n  }\n}\n\n.data tr {\n  display: block;\n  padding-bottom: 0.2em;\n  padding-left: 0.3em;\n  line-height: 1.4em;\n}\n\n@media (min-width: 64em) {\n  .data tr {\n    padding-bottom: 0.1em;\n    line-height: 1.5em;\n  }\n}\n\n.data td,\n.data th {\n  display: inline;\n  vertical-align: top;\n}\n\n@media (min-width: 64em) {\n  .data td,\n  .data th {\n    display: inline;\n    vertical-align: top;\n  }\n}\n\n@media print {\n  .data td,\n  .data th {\n    display: inline;\n    vertical-align: top;\n  }\n}\n\n.data th {\n  font-weight: 700;\n}\n\n.data tr[data-row=\"title\"] {\n  padding-top: 0.5em;\n}\n\n.footer {\n  margin-top: 0.4375rem;\n  margin-right: -0.5em;\n  margin-left: 0;\n  font-size: 0.875rem;\n}\n\n.footer > * {\n  margin-right: 0.5em;\n  margin-bottom: 0.5em;\n  margin-left: 0.5em;\n}\n\n@media print {\n  .footer {\n    overflow: hidden;\n  }\n\n  .footer > a {\n    float: left;\n    clear: left;\n    border-bottom: 0 !important;\n  }\n}\n\n@media print {\n  .root--brackets:last-child {\n    margin-bottom: 20px;\n  }\n}\n\n.root--brackets .data th::before {\n  display: inline-block;\n  margin-left: -0.3em;\n  content: \". \";\n}\n\n.root--brackets .data th::after {\n  font-weight: 400;\n  content: \": \";\n}\n\n","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n","// ==========================================================================\n// Mixins and functions\n//\n// Note: always put function at the beginning of the sub-section\n// ==========================================================================\n\n@import \"globals\";\n@import \"fonts\";\n@import \"sass-mq/mq\";\n\n// Generic\n// ==========================================================================\n\n@function perc($width, $container-width) {\n    @return percentage($width / $container-width);\n}\n\n@function strip-units($value) {\n    @return $value / ($value * 0 + 1);\n}\n\n@function z-index($level: 'base') {\n    @return map-get($layers, $level);\n}\n\n@function vw($width, $viewport-reference-width: $viewport-width) {\n    @return (strip-units($width) / strip-units($viewport-reference-width)) * 100 + vw;\n}\n\n@function vh($height, $viewport-reference-height: $viewport-height) {\n    @return (strip-units($height) / strip-units($viewport-reference-height)) * 100 + vh;\n}\n\n\n// Elements\n// ==========================================================================\n\n@mixin boost-performance ($translate: true) {\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n    @if ($translate) {\n        transform: translate3d(0, 0, 0);\n        will-change: transform;\n    }\n}\n\n@mixin clearfix {\n\n    &::before,\n    &::after {\n        display: table;\n        content: \" \";\n    }\n\n    &::after {\n        clear: both;\n    }\n}\n\n@mixin img-responsive($display: block) {\n    display: $display;\n    max-width: 100%;\n    height: auto;\n}\n\n//see https://github.com/tinganho/compass-placeholder\n@mixin placeholder {\n\n    &::-webkit-input-placeholder {\n        @content;\n    }\n\n    &:-moz-placeholder {\n        @content;\n    }\n\n    &::-moz-placeholder {\n        @content;\n    }\n\n    &:-ms-input-placeholder {\n        @content;\n    }\n}\n\n@mixin classed-headings($headings...) {\n    @if length($headings) == 0 {\n        $headings: map-keys($font-sizes-headings);\n    }\n    $selectors: ();\n    @each $i in $headings {\n        $current-heading: nth($headings, $i);\n        $selector: unquote(\"h#{$current-heading}, .h#{$current-heading}\");\n        $selectors: append($selectors, $selector, comma);\n    }\n\n    #{$selectors} {\n        @content;\n    }\n}\n\n\n\n// Typography\n//\n// ==========================================================================\n\n@function em($pixels, $context: $font-size-default) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n\n    @if (unitless($context)) {\n        $context: $context * 1px;\n    }\n\n    @return #{$pixels / $context}em;\n}\n\n@function rem($pixels) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n    @return #{$pixels / $font-size-default}rem;\n}\n\n\n@function font-size($size, $rem: true) {\n    $result: $size;\n    @if map-has-key($font-sizes, $size) {\n        $result: map-get($font-sizes, $size);\n    }\n\n    @if $rem == true {\n        @return rem($result);\n    }\n\n    @return $result;\n}\n\n@function font-weight($weight) {\n    @if map-has-key($font-weights, $weight) {\n        @return map-get($font-weights, $weight);\n    } @else {\n        @warn \"Weight #{$weight} undefined\";\n    }\n}\n\n@function line-height($size, $context: m) {\n    $context-size: font-size($context, false);\n    @return em($size, $context-size);\n}\n\n\n@mixin text-ellipsis {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n@mixin visually-hidden {\n    position: absolute;\n    overflow: hidden;\n    clip: rect(0 0 0 0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    border: 0;\n}\n\n@mixin font-heading() {\n    margin-bottom: 0.7em;\n    font-family: $font-family-sans;\n    font-size: font-size(20px);\n    font-weight: font-weight(bold);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(22px);\n    }\n}\n\n@mixin font-content() {\n    font-size: font-size(16px);\n    font-weight: font-weight(regular);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(18px);\n    }\n}\n\n@mixin responsive-typography($font-min, $font-max, $breakpoint-min, $breakpoint-max) {\n    //https://www.smashingmagazine.com/2016/05/fluid-typography/\n\n    $font-diff: ($font-max - $font-min);\n    $breakpoint-diff: ($breakpoint-max - $breakpoint-min);\n    $font-scale: $font-diff / $breakpoint-diff;\n    $base-font-size: percentage($font-min / 16px);\n    $base-font-size-em: em($font-min, 16px);\n\n    // https://zellwk.com/blog/viewport-based-typography/\n    font-size: calc(#{$base-font-size-em} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n    //font-size: calc(#{$base-font-size} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n}\n\n\n@mixin a11y-anchor-focus() {\n    outline: 2px solid rgba($color-link, 0);\n    outline-offset: 4px;\n    transition: outline-offset 0.2s ease, color 0.2s ease;\n\n    &:focus {\n        color: $color-link;\n        outline-color: rgba($color-link, 0.2);\n        outline-offset: 2px;\n\n        &::before,\n        &::after {\n            opacity: 0;\n        }\n    }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "table__root---D_Oeh",
	"caption": "table__caption---gIFqb",
	"bracket": "table__bracket---2rvyM",
	"data": "table__data---38zgb",
	"footer": "table__footer---m1DCS",
	"root--brackets": "table__root--brackets---2vPPB",
	"rootBrackets": "table__root--brackets---2vPPB"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc54ebee\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Wrapper/wrapper.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.wrapper__root---1tcgq {\n  position: relative;\n  z-index: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  height: 100vh;\n}\n@media (max-width: 63.99em) {\n.wrapper__root---1tcgq {\n    -webkit-overflow-scrolling: touch;\n}\n.wrapper__root---1tcgq::-webkit-scrollbar {\n    width: 4px;\n}\n.wrapper__root---1tcgq::-webkit-scrollbar-thumb {\n    background: #782121;\n}\n.wrapper__root---1tcgq::-webkit-scrollbar-track {\n    background: #a02c2c;\n}\n}\n@media (min-width: 64em) {\n.wrapper__root---1tcgq {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n}\n}\n@media print {\n.wrapper__root---1tcgq {\n    overflow-x: visible !important;\n    overflow-y: visible !important;\n    height: auto;\n}\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/components/Wrapper/wrapper.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/components/Wrapper/wrapper.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss"],"names":[],"mappings":";AAIA;EACI,mBAAA;EACA,WAAA;EACA,mBAAA;EACA,mBAAA;EACA,cAAA;CCHH;AC0NO;AF5NR;IAQQ,kCAAA;CCDL;ADGK;IACI,WAAA;CCAT;ADGK;IACI,oBAAA;CCAT;ADGK;IACI,oBAAA;CCAT;CACF;ACwMO;AF5NR;IAwBQ,mBAAA;IACA,mBAAA;IACA,kCAAA;IAAA,0BAAA;CCCL;CACF;ACgMO;AF5NR;IA8BQ,+BAAA;IACA,+BAAA;IACA,aAAA;CCGL;CACF","file":"wrapper.scss","sourcesContent":["@import \"globals\";\n@import \"colors\";\n@import \"sass-mq/mq\";\n\n.root {\n    position: relative;\n    z-index: 0;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    height: 100vh;\n\n    @include mq($until: tablet-landscape) {\n        -webkit-overflow-scrolling: touch;\n\n        &::-webkit-scrollbar {\n            width: 4px;\n        }\n\n        &::-webkit-scrollbar-thumb {\n            background: darken($color-link, 10%);\n        }\n\n        &::-webkit-scrollbar-track {\n            background: $color-link;\n        }\n    }\n\n    @include mq(tablet-landscape) {\n        overflow-x: hidden;\n        overflow-y: hidden;\n        transition: all 0.2s ease;\n    }\n\n    @include mq($media-type: print) {\n        overflow-x: visible !important;\n        overflow-y: visible !important;\n        height: auto;\n    }\n}",".root {\n  position: relative;\n  z-index: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  height: 100vh;\n}\n\n@media (max-width: 63.99em) {\n  .root {\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .root::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  .root::-webkit-scrollbar-thumb {\n    background: #782121;\n  }\n\n  .root::-webkit-scrollbar-track {\n    background: #a02c2c;\n  }\n}\n\n@media (min-width: 64em) {\n  .root {\n    overflow-x: hidden;\n    overflow-y: hidden;\n    transition: all 0.2s ease;\n  }\n}\n\n@media print {\n  .root {\n    overflow-x: visible !important;\n    overflow-y: visible !important;\n    height: auto;\n  }\n}\n\n","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "wrapper__root---1tcgq"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec87744a\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Section/section.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.section__root---18dwh {\n  position: relative;\n  z-index: 1;\n  padding-bottom: 7.5rem;\n}\n.section__root---18dwh:last-child {\n  padding-bottom: 6.25rem;\n}\n@media print {\n.section__root---18dwh {\n    padding: 0.3cm 1cm 0.5cm;\n}\n.section__root---18dwh .section__title---2kzog {\n    orphans: 3;\n}\n#contacts .section__root---18dwh {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n}\n.section__title---2kzog {\n  margin-bottom: 2em;\n  text-align: center;\n}\n@media (min-width: 64em) {\n.section__title---2kzog {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    will-change: transform;\n    position: absolute;\n    top: 0.625rem;\n    left: 0;\n    max-width: 35%;\n    margin-bottom: 0;\n    text-align: left;\n    white-space: nowrap;\n}\n}\n@media (min-width: 80em) {\n.section__title---2kzog {\n    left: 4.6875vw;\n}\n}\n@media print {\n.section__title---2kzog {\n    position: static;\n    max-width: none;\n    margin-top: 1.3em;\n    margin-bottom: 1.5em;\n    padding-top: 0.5cm;\n    text-align: center;\n}\n}\n.section__body---1KvGW {\n  display: block;\n  width: 100%;\n}\n@media (max-width: 63.99em) {\n.section__body---1KvGW {\n    -webkit-transform: none !important;\n            transform: none !important;\n}\n}\n@media (min-width: 48em) {\n.section__body---1KvGW {\n    padding-right: 7%;\n    padding-left: 10%;\n}\n}\n@media (min-width: 64em) {\n.section__body---1KvGW {\n    padding-right: 0;\n    padding-left: 33%;\n    will-change: transform;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n}\n@media print {\n.section__body---1KvGW {\n    padding: 0;\n    -webkit-transform: none !important;\n            transform: none !important;\n}\n#contacts .section__body---1KvGW {\n    width: auto;\n    white-space: nowrap;\n}\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/components/Section/section.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/components/Section/section.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/node_modules/sass-mq/_mq.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles/_mixins.scss"],"names":[],"mappings":";AAIA;EACI,mBAAA;EACA,WAAA;EACA,uBAAA;CCHH;ADAD;EAMQ,wBAAA;CCFP;ADKG;AATJ;IAUQ,yBAAA;CCDL;ADGK;IACI,WAAA;CCAT;ADGK;IACI,qBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,6BAAA;IAAA,8BAAA;QAAA,2BAAA;YAAA,uBAAA;IACA,0BAAA;QAAA,uBAAA;YAAA,oBAAA;CCAT;CACF;ADID;EACI,mBAAA;EACA,mBAAA;CCDH;ACmMO;AFpMR;IGUI,oCAAA;YAAA,4BAAA;IACA,qCAAA;YAAA,6BAAA;IAEI,wCAAA;YAAA,gCAAA;IACA,uBAAA;IHRA,mBAAA;IACA,cAAA;IACA,QAAA;IACA,eAAA;IACA,iBAAA;IACA,iBAAA;IACA,oBAAA;CCIL;CACF;ACmLO;AFpMR;IAgBQ,eAAA;CCML;CACF;ADJG;AAnBJ;IAoBQ,iBAAA;IACA,gBAAA;IACA,kBAAA;IACA,qBAAA;IACA,mBAAA;IACA,mBAAA;CCQL;CACF;ADLD;EACI,eAAA;EACA,YAAA;CCQH;AC6JO;AFvKR;IAKQ,mCAAA;YAAA,2BAAA;CCUL;CACF;ACuJO;AFvKR;IASQ,kBAAA;IACA,kBAAA;CCYL;CACF;ACgJO;AFvKR;IAcQ,iBAAA;IACA,kBAAA;IACA,uBAAA;IACA,oCAAA;YAAA,4BAAA;CCcL;CACF;ACuIO;AFvKR;IAsBQ,WAAA;IACA,mCAAA;YAAA,2BAAA;CCeL;ADbwB;IACf,YAAA;IACA,oBAAA;CCgBT;CACF","file":"section.scss","sourcesContent":["@import \"globals\";\n@import \"mixins\";\n@import \"sass-mq/mq\";\n\n.root {\n    position: relative;\n    z-index: z-index(above);\n    padding-bottom: rem(120px);\n\n    &:last-child {\n        padding-bottom: rem(100px);\n    }\n\n    @media print {\n        padding: 0.3cm 1cm 0.5cm;\n\n        .title {\n            orphans: 3;\n        }\n\n        :global(#contacts) & {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n    }\n}\n\n.title {\n    margin-bottom: 2em;\n    text-align: center;\n\n    @include mq(tablet-landscape) {\n        @include boost-performance;\n        position: absolute;\n        top: rem(10px);\n        left: 0;\n        max-width: 35%;\n        margin-bottom: 0;\n        text-align: left;\n        white-space: nowrap;\n    }\n\n    @include mq(desktop) {\n        left: vw(60px);\n    }\n\n    @media print {\n        position: static;\n        max-width: none;\n        margin-top: 1.3em;\n        margin-bottom: 1.5em;\n        padding-top: 0.5cm;\n        text-align: center;\n    }\n}\n\n.body {\n    display: block;\n    width: 100%;\n\n    @include mq($until: tablet-landscape) {\n        transform: none !important;\n    }\n\n    @include mq(tablet) {\n        padding-right: 7%;\n        padding-left: 10%;\n    }\n\n    @include mq(tablet-landscape) {\n        padding-right: 0;\n        padding-left: 33%;\n        will-change: transform;\n        backface-visibility: hidden;\n        // transition: transform 0.2s ease-out;\n    }\n\n    @include mq($media-type: print) {\n        padding: 0;\n        transform: none !important;\n\n        :global(#contacts) & {\n            width: auto;\n            white-space: nowrap;\n        }\n    }\n}",".root {\n  position: relative;\n  z-index: 1;\n  padding-bottom: 7.5rem;\n}\n\n.root:last-child {\n  padding-bottom: 6.25rem;\n}\n\n@media print {\n  .root {\n    padding: 0.3cm 1cm 0.5cm;\n  }\n\n  .root .title {\n    orphans: 3;\n  }\n\n  :global(#contacts) .root {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n.title {\n  margin-bottom: 2em;\n  text-align: center;\n}\n\n@media (min-width: 64em) {\n  .title {\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n    transform: translate3d(0, 0, 0);\n    will-change: transform;\n    position: absolute;\n    top: 0.625rem;\n    left: 0;\n    max-width: 35%;\n    margin-bottom: 0;\n    text-align: left;\n    white-space: nowrap;\n  }\n}\n\n@media (min-width: 80em) {\n  .title {\n    left: 4.6875vw;\n  }\n}\n\n@media print {\n  .title {\n    position: static;\n    max-width: none;\n    margin-top: 1.3em;\n    margin-bottom: 1.5em;\n    padding-top: 0.5cm;\n    text-align: center;\n  }\n}\n\n.body {\n  display: block;\n  width: 100%;\n}\n\n@media (max-width: 63.99em) {\n  .body {\n    transform: none !important;\n  }\n}\n\n@media (min-width: 48em) {\n  .body {\n    padding-right: 7%;\n    padding-left: 10%;\n  }\n}\n\n@media (min-width: 64em) {\n  .body {\n    padding-right: 0;\n    padding-left: 33%;\n    will-change: transform;\n    backface-visibility: hidden;\n  }\n}\n\n@media print {\n  .body {\n    padding: 0;\n    transform: none !important;\n  }\n\n  :global(#contacts) .body {\n    width: auto;\n    white-space: nowrap;\n  }\n}\n\n","@charset \"UTF-8\"; // Fixes an issue where Ruby locale is not set properly\n                  // See https://github.com/sass-mq/sass-mq/pull/10\n\n/// Base font size on the `<body>` element\n/// @type Number (unit)\n$mq-base-font-size: 16px !default;\n\n/// Responsive mode\n///\n/// Set to `false` to enable support for browsers that do not support @media queries,\n/// (IE <= 8, Firefox <= 3, Opera <= 9)\n///\n/// You could create a stylesheet served exclusively to older browsers,\n/// where @media queries are rasterized\n///\n/// @example scss\n///  // old-ie.scss\n///  $mq-responsive: false;\n///  @import 'main'; // @media queries in this file will be rasterized up to $mq-static-breakpoint\n///                   // larger breakpoints will be ignored\n///\n/// @type Boolean\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-off Disabled responsive mode documentation\n$mq-responsive: true !default;\n\n/// Breakpoint list\n///\n/// Name your breakpoints in a way that creates a ubiquitous language\n/// across team members. It will improve communication between\n/// stakeholders, designers, developers, and testers.\n///\n/// @type Map\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint Full documentation and examples\n$mq-breakpoints: (\n    mobile:  320px,\n    tablet:  740px,\n    desktop: 980px,\n    wide:    1300px\n) !default;\n\n/// Static breakpoint (for fixed-width layouts)\n///\n/// Define the breakpoint from $mq-breakpoints that should\n/// be used as the target width for the fixed-width layout\n/// (i.e. when $mq-responsive is set to 'false') in a old-ie.scss\n///\n/// @example scss\n///  // tablet-only.scss\n///  //\n///  // Ignore all styles above tablet breakpoint,\n///  // and fix the styles (e.g. layout) at tablet width\n///  $mq-responsive: false;\n///  $mq-static-breakpoint: tablet;\n///  @import 'main'; // @media queries in this file will be rasterized up to tablet\n///                   // larger breakpoints will be ignored\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#adding-custom-breakpoints Full documentation and examples\n$mq-static-breakpoint: desktop !default;\n\n/// Show breakpoints in the top right corner\n///\n/// If you want to display the currently active breakpoint in the top\n/// right corner of your site during development, add the breakpoints\n/// to this list, ordered by width, e.g. (mobile, tablet, desktop).\n///\n/// @type map\n$mq-show-breakpoints: () !default;\n\n/// Customize the media type (e.g. `@media screen` or `@media print`)\n/// By default sass-mq uses an \"all\" media type (`@media all and â¦`)\n///\n/// @type String\n/// @link https://github.com/sass-mq/sass-mq#changing-media-type Full documentation and examples\n$mq-media-type: all !default;\n\n/// Convert pixels to ems\n///\n/// @param {Number} $px - value to convert\n/// @param {Number} $base-font-size ($mq-base-font-size) - `<body>` font size\n///\n/// @example scss\n///  $font-size-in-ems: mq-px2em(16px);\n///  p { font-size: mq-px2em(16px); }\n///\n/// @requires $mq-base-font-size\n/// @returns {Number}\n@function mq-px2em($px, $base-font-size: $mq-base-font-size) {\n    @if unitless($px) {\n        @warn \"Assuming #{$px} to be in pixels, attempting to convert it into pixels.\";\n        @return mq-px2em($px * 1px, $base-font-size);\n    } @else if unit($px) == em {\n        @return $px;\n    }\n    @return ($px / $base-font-size) * 1em;\n}\n\n/// Get a breakpoint's width\n///\n/// @param {String} $name - Name of the breakpoint. One of $mq-breakpoints\n///\n/// @example scss\n///  $tablet-width: mq-get-breakpoint-width(tablet);\n///  @media (min-width: mq-get-breakpoint-width(desktop)) {}\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @returns {Number} Value in pixels\n@function mq-get-breakpoint-width($name, $breakpoints: $mq-breakpoints) {\n    @if map-has-key($breakpoints, $name) {\n        @return map-get($breakpoints, $name);\n    } @else {\n        @warn \"Breakpoint #{$name} wasn't found in $breakpoints.\";\n    }\n}\n\n/// Media Query mixin\n///\n/// @param {String | Boolean} $from (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $until (false) - One of $mq-breakpoints\n/// @param {String | Boolean} $and (false) - Additional media query parameters\n/// @param {String} $media-type ($mq-media-type) - Media type: screen, printâ¦\n///\n/// @ignore Undocumented API, for advanced use only:\n/// @ignore @param {Map} $breakpoints ($mq-breakpoints)\n/// @ignore @param {String} $static-breakpoint ($mq-static-breakpoint)\n///\n/// @content styling rules, wrapped into a @media query when $responsive is true\n///\n/// @requires {Variable} $mq-media-type\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-static-breakpoint\n/// @requires {function} mq-px2em\n/// @requires {function} mq-get-breakpoint-width\n///\n/// @link https://github.com/sass-mq/sass-mq#responsive-mode-on-default Full documentation and examples\n///\n/// @example scss\n///  .element {\n///    @include mq($from: mobile) {\n///      color: red;\n///    }\n///    @include mq($until: tablet) {\n///      color: blue;\n///    }\n///    @include mq(mobile, tablet) {\n///      color: green;\n///    }\n///    @include mq($from: tablet, $and: '(orientation: landscape)') {\n///      color: teal;\n///    }\n///    @include mq(950px) {\n///      color: hotpink;\n///    }\n///    @include mq(tablet, $media-type: screen) {\n///      color: hotpink;\n///    }\n///    // Advanced use:\n///    $my-breakpoints: (L: 900px, XL: 1200px);\n///    @include mq(L, $breakpoints: $my-breakpoints, $static-breakpoint: L) {\n///      color: hotpink;\n///    }\n///  }\n@mixin mq(\n    $from: false,\n    $until: false,\n    $and: false,\n    $media-type: $mq-media-type,\n    $breakpoints: $mq-breakpoints,\n    $responsive: $mq-responsive,\n    $static-breakpoint: $mq-static-breakpoint\n) {\n    $min-width: 0;\n    $max-width: 0;\n    $media-query: '';\n\n    // From: this breakpoint (inclusive)\n    @if $from {\n        @if type-of($from) == number {\n            $min-width: mq-px2em($from);\n        } @else {\n            $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));\n        }\n    }\n\n    // Until: that breakpoint (exclusive)\n    @if $until {\n        @if type-of($until) == number {\n            $max-width: mq-px2em($until);\n        } @else {\n            $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;\n        }\n    }\n\n    // Responsive support is disabled, rasterize the output outside @media blocks\n    // The browser will rely on the cascade itself.\n    @if $responsive == false {\n        $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);\n        $target-width: mq-px2em($static-breakpoint-width);\n\n        // Output only rules that start at or span our target width\n        @if (\n            $and == false\n            and $min-width <= $target-width\n            and (\n                $until == false or $max-width >= $target-width\n            )\n        ) {\n            @content;\n        }\n    }\n\n    // Responsive support is enabled, output rules inside @media queries\n    @else {\n        @if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }\n        @if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }\n        @if $and            { $media-query: '#{$media-query} and #{$and}'; }\n\n        // Remove unnecessary media query prefix 'all and '\n        @if ($media-type == 'all' and $media-query != '') {\n            $media-type: '';\n            $media-query: str-slice(unquote($media-query), 6);\n        }\n\n        @media #{$media-type + $media-query} {\n            @content;\n        }\n    }\n}\n\n/// Add a breakpoint\n///\n/// @param {String} $name - Name of the breakpoint\n/// @param {Number} $width - Width of the breakpoint\n///\n/// @requires {Variable} $mq-breakpoints\n///\n/// @example scss\n///  @include mq-add-breakpoint(tvscreen, 1920px);\n///  @include mq(tvscreen) {}\n@mixin mq-add-breakpoint($name, $width) {\n    $new-breakpoint: ($name: $width);\n    $mq-breakpoints: map-merge($mq-breakpoints, $new-breakpoint) !global;\n}\n\n/// Show the active breakpoint in the top right corner of the viewport\n/// @link https://github.com/sass-mq/sass-mq#seeing-the-currently-active-breakpoint\n///\n/// @param {List} $show-breakpoints ($mq-show-breakpoints) - List of breakpoints to show in the top right corner\n/// @param {Map} $breakpoints ($mq-breakpoints) - Breakpoint names and sizes\n///\n/// @requires {Variable} $mq-breakpoints\n/// @requires {Variable} $mq-show-breakpoints\n///\n/// @example scss\n///  // Show breakpoints using global settings\n///  @include mq-show-breakpoints;\n///\n///  // Show breakpoints using custom settings\n///  @include mq-show-breakpoints((L, XL), (S: 300px, L: 800px, XL: 1200px));\n@mixin mq-show-breakpoints($show-breakpoints: $mq-show-breakpoints, $breakpoints: $mq-breakpoints) {\n    body:before {\n        background-color: #FCF8E3;\n        border-bottom: 1px solid #FBEED5;\n        border-left: 1px solid #FBEED5;\n        color: #C09853;\n        font: small-caption;\n        padding: 3px 6px;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 100;\n\n        // Loop through the breakpoints that should be shown\n        @each $show-breakpoint in $show-breakpoints {\n            $width: mq-get-breakpoint-width($show-breakpoint, $breakpoints);\n            @include mq($show-breakpoint, $breakpoints: $breakpoints) {\n                content: \"#{$show-breakpoint} â¥ #{$width} (#{mq-px2em($width)})\";\n            }\n        }\n    }\n}\n\n@if length($mq-show-breakpoints) > 0 {\n    @include mq-show-breakpoints;\n}\n","// ==========================================================================\n// Mixins and functions\n//\n// Note: always put function at the beginning of the sub-section\n// ==========================================================================\n\n@import \"globals\";\n@import \"fonts\";\n@import \"sass-mq/mq\";\n\n// Generic\n// ==========================================================================\n\n@function perc($width, $container-width) {\n    @return percentage($width / $container-width);\n}\n\n@function strip-units($value) {\n    @return $value / ($value * 0 + 1);\n}\n\n@function z-index($level: 'base') {\n    @return map-get($layers, $level);\n}\n\n@function vw($width, $viewport-reference-width: $viewport-width) {\n    @return (strip-units($width) / strip-units($viewport-reference-width)) * 100 + vw;\n}\n\n@function vh($height, $viewport-reference-height: $viewport-height) {\n    @return (strip-units($height) / strip-units($viewport-reference-height)) * 100 + vh;\n}\n\n\n// Elements\n// ==========================================================================\n\n@mixin boost-performance ($translate: true) {\n    backface-visibility: hidden;\n    transform-style: preserve-3d;\n    @if ($translate) {\n        transform: translate3d(0, 0, 0);\n        will-change: transform;\n    }\n}\n\n@mixin clearfix {\n\n    &::before,\n    &::after {\n        display: table;\n        content: \" \";\n    }\n\n    &::after {\n        clear: both;\n    }\n}\n\n@mixin img-responsive($display: block) {\n    display: $display;\n    max-width: 100%;\n    height: auto;\n}\n\n//see https://github.com/tinganho/compass-placeholder\n@mixin placeholder {\n\n    &::-webkit-input-placeholder {\n        @content;\n    }\n\n    &:-moz-placeholder {\n        @content;\n    }\n\n    &::-moz-placeholder {\n        @content;\n    }\n\n    &:-ms-input-placeholder {\n        @content;\n    }\n}\n\n@mixin classed-headings($headings...) {\n    @if length($headings) == 0 {\n        $headings: map-keys($font-sizes-headings);\n    }\n    $selectors: ();\n    @each $i in $headings {\n        $current-heading: nth($headings, $i);\n        $selector: unquote(\"h#{$current-heading}, .h#{$current-heading}\");\n        $selectors: append($selectors, $selector, comma);\n    }\n\n    #{$selectors} {\n        @content;\n    }\n}\n\n\n\n// Typography\n//\n// ==========================================================================\n\n@function em($pixels, $context: $font-size-default) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n\n    @if (unitless($context)) {\n        $context: $context * 1px;\n    }\n\n    @return #{$pixels / $context}em;\n}\n\n@function rem($pixels) {\n    @if (unitless($pixels)) {\n        $pixels: $pixels * 1px;\n    }\n    @return #{$pixels / $font-size-default}rem;\n}\n\n\n@function font-size($size, $rem: true) {\n    $result: $size;\n    @if map-has-key($font-sizes, $size) {\n        $result: map-get($font-sizes, $size);\n    }\n\n    @if $rem == true {\n        @return rem($result);\n    }\n\n    @return $result;\n}\n\n@function font-weight($weight) {\n    @if map-has-key($font-weights, $weight) {\n        @return map-get($font-weights, $weight);\n    } @else {\n        @warn \"Weight #{$weight} undefined\";\n    }\n}\n\n@function line-height($size, $context: m) {\n    $context-size: font-size($context, false);\n    @return em($size, $context-size);\n}\n\n\n@mixin text-ellipsis {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n@mixin visually-hidden {\n    position: absolute;\n    overflow: hidden;\n    clip: rect(0 0 0 0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    border: 0;\n}\n\n@mixin font-heading() {\n    margin-bottom: 0.7em;\n    font-family: $font-family-sans;\n    font-size: font-size(20px);\n    font-weight: font-weight(bold);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(22px);\n    }\n}\n\n@mixin font-content() {\n    font-size: font-size(16px);\n    font-weight: font-weight(regular);\n\n    @include mq(tablet-landscape) {\n        font-size: font-size(18px);\n    }\n}\n\n@mixin responsive-typography($font-min, $font-max, $breakpoint-min, $breakpoint-max) {\n    //https://www.smashingmagazine.com/2016/05/fluid-typography/\n\n    $font-diff: ($font-max - $font-min);\n    $breakpoint-diff: ($breakpoint-max - $breakpoint-min);\n    $font-scale: $font-diff / $breakpoint-diff;\n    $base-font-size: percentage($font-min / 16px);\n    $base-font-size-em: em($font-min, 16px);\n\n    // https://zellwk.com/blog/viewport-based-typography/\n    font-size: calc(#{$base-font-size-em} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n    //font-size: calc(#{$base-font-size} + (#{strip-units($font-diff)} * (100vw - #{$breakpoint-min}) / #{strip-units($breakpoint-diff)}));\n}\n\n\n@mixin a11y-anchor-focus() {\n    outline: 2px solid rgba($color-link, 0);\n    outline-offset: 4px;\n    transition: outline-offset 0.2s ease, color 0.2s ease;\n\n    &:focus {\n        color: $color-link;\n        outline-color: rgba($color-link, 0.2);\n        outline-offset: 2px;\n\n        &::before,\n        &::after {\n            opacity: 0;\n        }\n    }\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "section__root---18dwh",
	"title": "section__title---2kzog",
	"body": "section__body---1KvGW"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3c452a2\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Page/page.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.page__root---1CkN9 {\n  padding-top: 2.5rem;\n  outline: 0;\n}\n.page__root---1CkN9:first-child {\n  padding-top: 3.75rem;\n}\n@media print {\n.page__root---1CkN9 {\n    padding-top: 0.625rem;\n}\n}\n.page__body---3rTua {\n  padding: 0 5.46875vw;\n}\n@media print {\n.page__body---3rTua {\n    padding-right: 0;\n    padding-left: 0;\n}\n}\n.page__intersect---1_3l_ {\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: 100%;\n  height: 10px;\n  pointer-events: none;\n}\n.page__intersect--top---3-MbE {\n  margin-top: -1px;\n  -webkit-transform: translateY(30vh);\n          transform: translateY(30vh);\n}\n.page__intersect--bottom---1tco0 {\n  margin-bottom: -1px;\n  -webkit-transform: translateY(-60vh);\n          transform: translateY(-60vh);\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/components/Page/page.scss","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/components/Page/page.scss"],"names":[],"mappings":";AAGA;EACI,oBAAA;EACA,WAAA;CCFH;ADAD;EAKQ,qBAAA;CCDP;ADIG;AARJ;IASQ,sBAAA;CCAL;CACF;ADGD;EACI,qBAAA;CCAH;ADEG;AAHJ;IAIQ,iBAAA;IACA,gBAAA;CCEL;CACF;ADCD;EACI,mBAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EAEA,qBAAA;CCCH;ADED;EAEI,iBAAA;EACA,oCAAA;UAAA,4BAAA;CCCH;ADED;EAEI,oBAAA;EACA,qCAAA;UAAA,6BAAA;CCCH","file":"page.scss","sourcesContent":["@import \"globals\";\n@import \"mixins\";\n\n.root {\n    padding-top: rem(40px);\n    outline: 0;\n\n    &:first-child {\n        padding-top: rem(60px);\n    }\n\n    @media print {\n        padding-top: rem(10px);\n    }\n}\n\n.body {\n    padding: 0 vw($page-gutter);\n\n    @media print {\n        padding-right: 0;\n        padding-left: 0;\n    }\n}\n\n.intersect {\n    position: relative;\n    z-index: 1;\n    display: block;\n    width: 100%;\n    height: 10px;\n    //background-color: rgba(red, 0.2);\n    pointer-events: none;\n}\n\n.intersect--top {\n    composes: intersect;\n    margin-top: -1px;\n    transform: translateY(30vh);\n}\n\n.intersect--bottom {\n    composes: intersect;\n    margin-bottom: -1px;\n    transform: translateY(-60vh);\n}",".root {\n  padding-top: 2.5rem;\n  outline: 0;\n}\n\n.root:first-child {\n  padding-top: 3.75rem;\n}\n\n@media print {\n  .root {\n    padding-top: 0.625rem;\n  }\n}\n\n.body {\n  padding: 0 5.46875vw;\n}\n\n@media print {\n  .body {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n.intersect {\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: 100%;\n  height: 10px;\n  pointer-events: none;\n}\n\n.intersect--top {\n  composes: intersect;\n  margin-top: -1px;\n  transform: translateY(30vh);\n}\n\n.intersect--bottom {\n  composes: intersect;\n  margin-bottom: -1px;\n  transform: translateY(-60vh);\n}\n\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "page__root---1CkN9",
	"body": "page__body---3rTua",
	"intersect": "page__intersect---1_3l_",
	"intersect--top": "page__intersect--top---3-MbE page__intersect---1_3l_",
	"intersectTop": "page__intersect--top---3-MbE page__intersect---1_3l_",
	"intersect--bottom": "page__intersect--bottom---1tco0 page__intersect---1_3l_",
	"intersectBottom": "page__intersect--bottom---1tco0 page__intersect---1_3l_"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a4210c6\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/assets/js/containers/Root/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-66b31fd2\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/assets/js/objects/Time/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.index__root---NHhpE_0 {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: inherit;\n}\n\n", "", {"version":3,"sources":["/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Time/index.vue","/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/js/objects/Time/index.vue"],"names":[],"mappings":";AAqDA;EACI,mBAAA;EACA,sBAAA;EACA,iBAAA;EACA,wBAAA;CCpDH","file":"index.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import \"mixins\";\n\n.root {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    vertical-align: inherit;\n}\n",".root {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: inherit;\n}\n\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "index__root---NHhpE_0"
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0b9b3e3f\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Anchor/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      class: [
        _vm.$style.root,
        ((_obj = {}), (_obj[_vm.$style["root--" + _vm.type]] = _vm.type), _obj)
      ],
      attrs: { href: _vm.link, target: "_blank", rel: "noopener noreferrer" }
    },
    [
      _vm.ico
        ? _c("Ico", { class: _vm.$style.ico, attrs: { name: _vm.ico } })
        : _vm._e(),
      _vm.label
        ? _c("span", { class: _vm.$style.label }, [_vm._v(_vm._s(_vm.label))])
        : _vm._e()
    ],
    1
  )
  var _obj
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b9b3e3f", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1bc14a77\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Contacts/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { id: "contacts", observe: false } },
    [
      _c(
        "PageSection",
        { attrs: { title: "Want to know more?", prefix: "" } },
        [_c("SocialList", { attrs: { items: _vm.socials } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1bc14a77", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2269ab3a\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Jobs/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { id: _vm.id }, on: { enter: _vm.updateRoute } },
    [
      _c(
        "PageSection",
        { attrs: { title: "jobs.current" } },
        [
          _c(
            "TableList",
            [
              _c("SummaryTable", {
                attrs: {
                  caption: "company",
                  data: _vm.current,
                  styles: ["brackets"]
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "PageSection",
        { attrs: { title: "jobs.previous" } },
        [
          _c(
            "TableList",
            _vm._l(_vm.prev, function(job) {
              return _c("SummaryTable", {
                key: job.id,
                attrs: { caption: "company", data: job, styles: ["brackets"] }
              })
            })
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2269ab3a", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-232d8e35\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/SocialList/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "List",
    { class: _vm.$style.root },
    _vm._l(_vm.items, function(item) {
      return _c(
        "li",
        {
          key: item.type,
          class: {
            "u-only-print": item.type == "link",
            "u-only-screen": item.type == "pdf"
          }
        },
        [
          _c("Ico", { attrs: { name: item.type } }),
          _c(
            "a",
            {
              attrs: {
                href: item.url,
                target: "_blank",
                rel: "noopener noreferrer"
              }
            },
            [_vm._v(_vm._s(item.label))]
          )
        ],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-232d8e35", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2590b1f3\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/components/Loader/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { appear: "", name: "loader-animation" } }, [
    _c(
      "header",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.active,
            expression: "active"
          }
        ],
        class: _vm.$style.root
      },
      [
        _c(
          "div",
          {
            class: [
              "h1",
              _vm.$style.body,
              ((_obj = {}), (_obj[_vm.$style.isEntering] = _vm.entering), _obj)
            ]
          },
          [
            _c("span", { class: _vm.$style.line }, [
              _vm._v("Developer.query(")
            ]),
            _c("span", { class: _vm.$style.linePre }, [
              _vm._v("'/usr/"),
              _c("mark", { staticClass: "u-type--mark" }, [
                _vm._v("oliver+sim")
              ]),
              _vm._v("',")
            ]),
            _c("span", { class: _vm.$style.linePre }, [
              _vm._v("'job="),
              _c("mark", { staticClass: "u-type--mark" }, [
                _vm._v("senior fullstack dev")
              ]),
              _vm._v("'")
            ]),
            _c("span", { class: _vm.$style.line }, [
              _vm._v(").then((me) =›"),
              _c("span", { class: _vm.$style.dots }),
              _vm._v(_vm._s(_vm.dots))
            ])
          ]
        )
      ]
    )
  ])
  var _obj
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2590b1f3", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2a4210c6\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Root/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Loader", {
        attrs: { active: !_vm.isLoaded, assetLoaded: true },
        on: { "loader-end": _vm.loadFinish }
      }),
      _c("Navigation", { attrs: { paths: _vm.routes } }),
      _c(
        "Wrapper",
        [
          _c("Cover"),
          _c(
            "PageList",
            [
              _c("Jobs"),
              _c("Education"),
              _c("Skills"),
              _c("Portfolio"),
              _c("Contacts")
            ],
            1
          ),
          _c("BgPattern", { attrs: { active: _vm.isLoaded } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2a4210c6", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-338939db\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/SkillList/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { class: _vm.$style.root },
    _vm._l(_vm.skills, function(skill, index) {
      return _c(
        "li",
        {
          key: skill.id,
          class: _vm.$style.item,
          style: { transitionDelay: index * 150 + "ms" }
        },
        [
          skill.level
            ? _c("MeterBar", {
                attrs: { label: skill.label, value: parseInt(skill.level, 10) }
              })
            : _c("p", [_vm._v("{skill.label}")])
        ],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-338939db", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-338cb554\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/MeterBar/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        _vm.$style.root,
        ((_obj = {}), (_obj[_vm.$style.rootHigh] = _vm.value > 80), _obj)
      ]
    },
    [
      _c("span", { class: _vm.$style.label }, [_vm._v(_vm._s(_vm.label))]),
      _c("b", { class: [_vm.$style.bar, _vm.barValueClass] }, [
        _c("span", { class: _vm.$style.value }, [
          _vm._v(_vm._s(_vm.value) + "%")
        ])
      ])
    ]
  )
  var _obj
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-338cb554", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47c9fd1e\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/PageList/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: {
        appear: "",
        name: "pagelist-slide",
        "appear-class": "pagelist-slide-appear",
        "appear-active-class": "pagelist-slide-appear-active"
      },
      on: { afterEnter: _vm.onAfterEnter, beforeLeave: _vm.onBeforeLeave }
    },
    [
      _c(
        "section",
        {
          directives: [
            {
              name: "swipe",
              rawName: "v-swipe.up",
              value: _vm.swipeUpHandler,
              expression: "swipeUpHandler",
              modifiers: { up: true }
            },
            {
              name: "show",
              rawName: "v-show",
              value: _vm.active,
              expression: "active"
            }
          ],
          class: [
            _vm.$style.root,
            ((_obj = {}), (_obj[_vm.$style.isActive] = _vm.active), _obj)
          ],
          on: {
            "&wheel": function($event) {
              _vm.wheelListener($event)
            }
          }
        },
        [
          _c(
            "SmoothScrollbar",
            {
              ref: "smoothScroll",
              attrs: {
                tagName: "div",
                options: { alwaysShowTracks: true },
                active: _vm.$mq.matches("tabletLandscape")
              },
              on: { scroll: _vm.onScroll }
            },
            [
              _vm._t("default"),
              _c(
                "footer",
                { class: _vm.$style.footer, attrs: { role: "contentinfo" } },
                [
                  _vm._v(
                    "\n            © " +
                      _vm._s(_vm.fullYear) +
                      " Oliver Sim\n          "
                  )
                ]
              )
            ],
            2
          )
        ],
        1
      )
    ]
  )
  var _obj
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-47c9fd1e", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-52c18eb8\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/DataSet/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { class: _vm.$style.root },
    _vm._l(_vm.items, function(item) {
      return _c("li", { key: item.label, class: _vm.$style.item }, [
        _c(
          "span",
          { class: _vm.$style.label },
          [
            item.ico
              ? _c("Ico", { class: _vm.$style.ico, attrs: { name: item.ico } })
              : _vm._e(),
            _vm._v(_vm._s(item.label) + "\n        ")
          ],
          1
        ),
        _c(
          "div",
          { class: _vm.$style.body },
          [_vm._t("default", null, { data: item.data })],
          2
        )
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-52c18eb8", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-55fce8b8\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Navigation/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      class: [
        _vm.$style.root,
        ((_obj = {}),
        (_obj[_vm.$style.isActive] = _vm.activeNav),
        (_obj[_vm.$style.isVisible] = _vm.isLoaded),
        _obj)
      ],
      attrs: { role: "navigation" },
      on: {
        keyup: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "esc", 27, $event.key)
          ) {
            return null
          }
          _vm.closeNav($event)
        }
      }
    },
    [
      _c("Burger", {
        class: _vm.$style.burger,
        attrs: {
          onClick: _vm.toggleNavAction,
          active: _vm.activeNav,
          controls: "nav-menu"
        }
      }),
      _c(
        "transition",
        {
          attrs: {
            name: "navigation",
            duration: { enter: _vm.totalTimingIn, leave: _vm.navAnimOut }
          }
        },
        [
          _c(
            "ul",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.activeNav,
                  expression: "activeNav"
                }
              ],
              class: _vm.$style.menu,
              attrs: { id: "nav-menu" }
            },
            _vm._l(_vm.paths, function(path, index) {
              return _c(
                "li",
                {
                  key: path.path,
                  class: [
                    _vm.$style.item,
                    ((_obj = {}),
                    (_obj[_vm.$style.isCurrent] = _vm.route === path.path),
                    _obj)
                  ],
                  style: _vm.navItemDelay(index)
                },
                [
                  _c(
                    "a",
                    {
                      class: _vm.$style.route,
                      attrs: { href: "#" + path.path, tabindex: _vm.tabIndex },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.goTo(path.path)
                        }
                      }
                    },
                    [_vm._v(_vm._s(path.label))]
                  )
                ]
              )
              var _obj
            })
          )
        ]
      ),
      _vm.navSocials
        ? _c(
            "footer",
            { class: _vm.$style.footer },
            _vm._l(_vm.navSocials, function(ns) {
              return _c("Anchor", {
                key: ns.type,
                attrs: {
                  link: ns.url,
                  ico: ns.type,
                  tabindex: _vm.tabIndex,
                  "aria-label": ns.type + " profile: " + ns.label
                }
              })
            })
          )
        : _vm._e()
    ],
    1
  )
  var _obj
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-55fce8b8", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5ffabcba\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Portfolio/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { id: _vm.id }, on: { enter: _vm.updateRoute } },
    [
      _c(
        "PageSection",
        {
          attrs: {
            title: "portfolio.works",
            subtitle: "Latest agency & side projects"
          }
        },
        [
          _c(
            "TableList",
            _vm._l(_vm.works, function(work) {
              return _c("SummaryTable", {
                key: work.id,
                attrs: { caption: "project", data: work, styles: ["brackets"] }
              })
            })
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ffabcba", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-62b857ff\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Burger/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      class: [
        _vm.$style.root,
        ((_obj = {}), (_obj[_vm.$style.isActive] = _vm.active), _obj)
      ],
      attrs: { "aria-expanded": _vm.active },
      on: {
        click: function($event) {
          $event.preventDefault()
          _vm.onClick()
        }
      }
    },
    [_c("span", { class: _vm.$style.label }, [_vm._v("Menu")])]
  )
  var _obj
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62b857ff", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-639dcfe9\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Cover/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: {
        appear: "",
        name: _vm.transitionName,
        duration: _vm.transitionDuration
      },
      on: { afterEnter: _vm.onAfterEnter, beforeLeave: _vm.onBeforeLeave }
    },
    [
      _c(
        "section",
        {
          directives: [
            {
              name: "swipe",
              rawName: "v-swipe.down",
              value: _vm.swipeDownHandler,
              expression: "swipeDownHandler",
              modifiers: { down: true }
            },
            {
              name: "show",
              rawName: "v-show",
              value: _vm.active,
              expression: "active"
            }
          ],
          class: [
            _vm.$style.root,
            ((_obj = {}),
            (_obj[_vm.$style.isAppLoaded] = _vm.isAppLoaded),
            _obj)
          ],
          attrs: { id: _vm.id },
          on: {
            "&wheel": function($event) {
              _vm.wheelListener($event)
            }
          }
        },
        [
          _c("span", {
            ref: "top",
            class: _vm.$style.intersectTop,
            attrs: { "data-pos": "top" }
          }),
          _c(
            "div",
            { ref: "pic", class: _vm.$style.pic },
            [
              _c(
                "transition",
                {
                  attrs: {
                    name: "async-avatar",
                    appear: "",
                    duration: _vm.transitionDuration
                  }
                },
                [
                  _vm.active
                    ? _c("Avatar", {
                        class: _vm.$style.avatar,
                        attrs: {
                          active: _vm.active,
                          foreground: _vm.oli,
                          background: _vm.oli
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _c("div", { class: _vm.$style.body }, [
            _c("h2", { class: _vm.$style.headline, attrs: { lang: "ja" } }, [
              _vm._v("こんにちは！")
            ]),
            _c("article", { class: _vm.$style.text }, [
              _c("p", [
                _vm._v("My name is "),
                _c("b", [_vm._v("Oliver Sim.")])
              ]),
              _c("p", [
                _vm._v("I am a "),
                _c("b", [_vm._v("Full Stack Developer")]),
                _vm._v(" / "),
                _c("b", [_vm._v("UX Engineer")]),
                _vm._v(
                  " from Malaysia. Passionate about clean architecture\n          and best web development practice. Living in Selangor. I speak English, Malay, Mandarin, and some Hokkien.\n        "
                )
              ]),
              _c("p", [_vm._v("Minimalist. Loves dogs. Enjoys football.")])
            ]),
            _c(
              "footer",
              { class: _vm.$style.footer },
              [
                _c("SocialList", {
                  class: _vm.$style.socialList,
                  attrs: { items: _vm.socials }
                })
              ],
              1
            )
          ]),
          _c(
            "a",
            {
              class: _vm.$style.scrollhint,
              attrs: { href: "#" + _vm.NAV_PATH_JOBS },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.gotoPagelist($event)
                }
              }
            },
            [
              _c("div", [_vm._v("Get to know me")]),
              _c("Ico", {
                class: _vm.$style.scrollhintIco,
                attrs: { name: "chevron-down" }
              })
            ],
            1
          ),
          _c("span", {
            ref: "bottom",
            class: _vm.$style.intersectBottom,
            attrs: { "data-pos": "bottom" }
          })
        ]
      )
    ]
  )
  var _obj
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-639dcfe9", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-66b31fd2\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Time/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "time",
    { class: _vm.$style.root, attrs: { datetime: _vm.datetime.toISOString() } },
    [_c("span", [_vm._v(_vm._s(_vm.text))])]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-66b31fd2", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b47b6e4\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Title/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", [
    _c("h2", { class: _vm.$style.root }, [
      _vm.prefix
        ? _c("b", { class: _vm.$style.prefix }, [
            _vm._v("\n            " + _vm._s(_vm.prefix) + "\n        ")
          ])
        : _vm._e(),
      _c("span", { class: _vm.$style.text }, [
        _vm._v(_vm._s(_vm.prefix ? "." + _vm.title : _vm.title))
      ])
    ]),
    _vm.subtitle
      ? _c("p", { class: _vm.$style.rootSub }, [_vm._v(_vm._s(_vm.subtitle))])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6b47b6e4", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9a4629be\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Ico/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("svg", { class: [_vm.$style.root, "ico-" + _vm.name] }, [
    _c("use", _vm._b({}, "use", { "xlink:href": "#ico-" + _vm.name }, false))
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9a4629be", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a5b4ac34\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Skills/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { id: _vm.id }, on: { enter: _vm.updateRoute } },
    _vm._l(_vm.ids, function(id) {
      return _c(
        "PageSection",
        {
          key: id,
          attrs: { title: "skills." + id, subtitle: _vm.skills[id].label }
        },
        [
          _c("DataSet", {
            attrs: { items: _vm.skills[id].list },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(props) {
                  return [_c("SkillList", { attrs: { skills: props.data } })]
                }
              }
            ])
          })
        ],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a5b4ac34", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ac4866d0\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/TableList/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.$style.root }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ac4866d0", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d1ba164c\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/objects/Table/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("article", { class: [_vm.$style.root, _vm.tableStyles] }, [
    _vm.caption
      ? _c(
          "h3",
          { class: _vm.$style.caption, attrs: { id: "table-" + _vm.id } },
          [
            _vm._v(_vm._s(_vm.caption) + ":\n        "),
            _vm.data._link
              ? _c(
                  "a",
                  {
                    attrs: {
                      href: _vm.data._link,
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }
                  },
                  [_vm._v(_vm._s(_vm.captionLabel))]
                )
              : _vm._e(),
            !_vm.data._link
              ? _c("span", [_vm._v(_vm._s(_vm.captionLabel))])
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm.hasBrackets ? _c("div", { class: _vm.$style.bracket }) : _vm._e(),
    _c(
      "table",
      {
        class: _vm.$style.data,
        attrs: { "aria-labelledby": "table-" + _vm.id }
      },
      [
        _c(
          "tbody",
          _vm._l(_vm.rows, function(value, heading) {
            return _c("tr", { key: heading, attrs: { "data-row": heading } }, [
              _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(heading))]),
              _vm.isDate(heading)
                ? _c(
                    "td",
                    [_c("FormattedTime", { attrs: { value: value } })],
                    1
                  )
                : _c("td", { domProps: { innerHTML: _vm._s(value) } })
            ])
          })
        )
      ]
    ),
    _vm.data._meta
      ? _c(
          "footer",
          { class: _vm.$style.footer },
          _vm._l(_vm.data._meta, function(meta) {
            return _c("Anchor", {
              key: meta.link,
              attrs: {
                type: "cursor",
                link: meta.link,
                ico: meta.type,
                label: meta.label || meta.type,
                title: _vm.metaTitle(meta.type, _vm.data[_vm.caption])
              }
            })
          })
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d1ba164c", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-dc54ebee\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{\"stripWithFunctional\":true}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/components/Wrapper/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c(
    "main",
    { class: _vm.$style.root, attrs: { role: "main" } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dc54ebee", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ec87744a\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/components/Section/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { class: _vm.$style.root },
    [
      _c("SectionTitle", {
        class: _vm.$style.title,
        attrs: { prefix: _vm.prefix, title: _vm.title, subtitle: _vm.subtitle }
      }),
      _c(
        "div",
        {
          ref: "body",
          class: _vm.$style.body,
          style: { transform: "translate3d(0, " + _vm.scrollAmount + "px, 0)" }
        },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ec87744a", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f3c452a2\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/components/Page/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { class: _vm.$style.root, attrs: { id: _vm.id, tabIndex: "-1" } },
    [
      _c(
        "div",
        { ref: "body", class: _vm.$style.body },
        [
          _c("span", {
            ref: "top",
            class: _vm.$style.intersectTop,
            attrs: { "data-pos": "top" }
          }),
          _vm._t("default"),
          _c("span", {
            ref: "bottom",
            class: _vm.$style.intersectBottom,
            attrs: { "data-pos": "bottom" }
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f3c452a2", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f70cb1cc\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/assets/js/containers/Education/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { id: _vm.id }, on: { enter: _vm.updateRoute } },
    [
      _c(
        "PageSection",
        { attrs: { title: "education", subtitle: "Learning never ends" } },
        [
          _c(
            "TableList",
            _vm._l(_vm.items, function(item) {
              return _c("SummaryTable", {
                key: item.id,
                attrs: { caption: "title", data: item, styles: ["brackets"] }
              })
            })
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f70cb1cc", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b9b3e3f\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Anchor/anchor.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b9b3e3f\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Anchor/anchor.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("4e364160", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b9b3e3f\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./anchor.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b9b3e3f\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./anchor.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-232d8e35\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/SocialList/social-list.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-232d8e35\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/SocialList/social-list.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("84f24aa6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-232d8e35\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./social-list.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-232d8e35\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./social-list.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2590b1f3\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Loader/loader.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2590b1f3\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Loader/loader.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("354f7318", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2590b1f3\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./loader.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2590b1f3\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./loader.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338939db\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/SkillList/skill-list.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338939db\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/SkillList/skill-list.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3cd7d8a0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338939db\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./skill-list.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338939db\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./skill-list.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338cb554\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/MeterBar/meter-bar.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338cb554\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/MeterBar/meter-bar.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("24d22b79", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338cb554\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./meter-bar.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-338cb554\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./meter-bar.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47c9fd1e\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/PageList/page-list.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47c9fd1e\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/PageList/page-list.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("05ea5694", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47c9fd1e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./page-list.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47c9fd1e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./page-list.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-52c18eb8\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/DataSet/data-set.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-52c18eb8\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/DataSet/data-set.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("cdc55a28", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-52c18eb8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./data-set.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-52c18eb8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./data-set.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55fce8b8\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/Navigation/nav.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55fce8b8\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/Navigation/nav.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("432ea176", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55fce8b8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./nav.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55fce8b8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./nav.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62b857ff\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Burger/burger.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62b857ff\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Burger/burger.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3d154cfc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62b857ff\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./burger.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62b857ff\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./burger.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-639dcfe9\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/Cover/cover.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-639dcfe9\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/containers/Cover/cover.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0ee29dc3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-639dcfe9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./cover.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-639dcfe9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./cover.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b47b6e4\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Title/title.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b47b6e4\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Title/title.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1e3ed812", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b47b6e4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./title.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b47b6e4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./title.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a4629be\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Ico/ico.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a4629be\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Ico/ico.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("17f39f56", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a4629be\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./ico.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a4629be\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./ico.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ac4866d0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/TableList/table-list.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ac4866d0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/TableList/table-list.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("bbf249f4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ac4866d0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./table-list.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ac4866d0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./table-list.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b56f06b0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/List/list.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b56f06b0\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/List/list.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2dee2262", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b56f06b0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./list.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b56f06b0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./list.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1ba164c\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Table/table.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1ba164c\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/objects/Table/table.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("c3a5964a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1ba164c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./table.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d1ba164c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./table.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc54ebee\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Wrapper/wrapper.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc54ebee\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Wrapper/wrapper.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("918279ca", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc54ebee\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./wrapper.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc54ebee\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./wrapper.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec87744a\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Section/section.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec87744a\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Section/section.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0bf19979", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec87744a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./section.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ec87744a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./section.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3c452a2\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Page/page.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3c452a2\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./app/assets/js/components/Page/page.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2ee7f184", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3c452a2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./page.scss", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3c452a2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./page.scss");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a4210c6\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/assets/js/containers/Root/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a4210c6\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/assets/js/containers/Root/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("ef3419c4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a4210c6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a4210c6\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-66b31fd2\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/assets/js/objects/Time/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-66b31fd2\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/assets/js/objects/Time/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3b2dd493", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-66b31fd2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]__[local]---[hash:base64:5]_0\",\"importLoaders\":1,\"camelCase\":true,\"modules\":true}!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-66b31fd2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"debug\":false,\"root\":null,\"includeRoot\":false}!../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true,\"precision\":10,\"includePaths\":[\"/Users/oliversim/Documents/GitHub/olishiz-marco-personal-build-website/app/assets/styles\",\"node_modules\"],\"outputStyle\":\"expanded\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./app/assets/styles/index.js");
module.exports = __webpack_require__("./app/assets/js/app.js");


/***/ })

},[0]);
//# sourceMappingURL=app.js.map