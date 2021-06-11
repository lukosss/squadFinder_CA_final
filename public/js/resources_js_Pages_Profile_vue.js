(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Profile",
  data: function data() {
    return {
      userId: null,
      first_name: '',
      oldEmail: '',
      email: '',
      password: '',
      last_name: '',
      display_name: '',
      bio: '',
      discord_username: '',
      steam_username: '',
      epic_username: '',
      origin_username: '',
      selected_city: null,
      loader: true,
      showDismissibleAlertMessage: false,
      domain: 'http://127.0.0.1:8000/'
    };
  },
  watch: {
    userFirstName: function userFirstName(newUser) {
      if (newUser) {
        this.first_name = newUser.first_name;
        this.email = newUser.email;
        this.userId = newUser.id;
        this.last_name = newUser.last_name;
        this.display_name = newUser.display_name;
        this.bio = newUser.bio;
        this.discord_username = newUser.discord_username;
        this.steam_username = newUser.steam_username;
        this.epic_username = newUser.epic_username;
        this.origin_username = newUser.origin_username;
        this.selected_city = newUser.city_id;
        this.loader = false;
      } else {
        this.first_name = '';
        this.email = '';
        this.userId = '';
        this.last_name = '';
        this.display_name = '';
        this.bio = '';
        this.discord_username = '';
        this.steam_username = '';
        this.epic_username = '';
        this.origin_username = '';
        this.selected_city = null;
        this.loader = false;
      }
    }
  },
  methods: _objectSpread({
    handleSubmit: function handleSubmit() {
      this.updateUser({
        first_name: this.first_name,
        email: this.email,
        last_name: this.last_name,
        display_name: this.display_name,
        bio: this.bio,
        discord_username: this.discord_username,
        steam_username: this.steam_username,
        epic_username: this.epic_username,
        origin_username: this.origin_username,
        city_id: this.selected_city
      });
      this.showDismissibleAlertMessage = true;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('profile', ['getUser', 'updateUser', 'getCities'])),
  created: function created() {
    this.getUser();
    this.getCities();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('profile', {
    userFirstName: 'getUserInfo',
    citiesList: 'getCities'
  }))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vertical-line[data-v-1bdc34e0] {\n    display: inline-block;\n    border-left: 1px solid #ccc;\n    margin: 0 10px;\n    height: auto;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Pages/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Profile.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_1bdc34e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=1bdc34e0&scoped=true& */ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _Profile_vue_vue_type_style_index_0_id_1bdc34e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css& */ "./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Profile_vue_vue_type_template_id_1bdc34e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_1bdc34e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1bdc34e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=1bdc34e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_1bdc34e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_1bdc34e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_1bdc34e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_1bdc34e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_1bdc34e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.loader === true
        ? _c(
            "b-card",
            {
              staticClass: "text-center",
              attrs: { title: "Your Profile", shadow: "true" }
            },
            [
              _c("b-spinner", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loader,
                    expression: "loader"
                  }
                ],
                attrs: { variant: "primary", label: "Loading..." }
              })
            ],
            1
          )
        : _c(
            "b-card",
            {
              staticClass: "mb-3",
              staticStyle: { width: "120%" },
              attrs: { title: "Your Profile", shadow: "true" }
            },
            [
              _c(
                "b-form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.handleSubmit()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "d-flex justify-content-around" }, [
                    _c(
                      "div",
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: { label: "Name", "label-for": "first_name" }
                          },
                          [
                            _c("b-form-input", {
                              attrs: { id: "first_name", type: "text" },
                              model: {
                                value: _vm.first_name,
                                callback: function($$v) {
                                  _vm.first_name = $$v
                                },
                                expression: "first_name"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          { attrs: { label: "Email", "label-for": "email" } },
                          [
                            _c("b-form-input", {
                              attrs: { id: "email", type: "email" },
                              model: {
                                value: _vm.email,
                                callback: function($$v) {
                                  _vm.email = $$v
                                },
                                expression: "email"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Last Name",
                              "label-for": "last_name"
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: { id: "last_name", type: "text" },
                              model: {
                                value: _vm.last_name,
                                callback: function($$v) {
                                  _vm.last_name = $$v
                                },
                                expression: "last_name"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Display Name",
                              "label-for": "display_name"
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: { id: "display_name", type: "text" },
                              model: {
                                value: _vm.display_name,
                                callback: function($$v) {
                                  _vm.display_name = $$v
                                },
                                expression: "display_name"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Your City",
                              "label-for": "city_id"
                            }
                          },
                          [
                            _c(
                              "b-form-select",
                              {
                                model: {
                                  value: _vm.selected_city,
                                  callback: function($$v) {
                                    _vm.selected_city = $$v
                                  },
                                  expression: "selected_city"
                                }
                              },
                              [
                                _c(
                                  "b-form-select-option",
                                  { attrs: { value: null } },
                                  [_vm._v("Please select an option")]
                                ),
                                _vm._v(" "),
                                _vm._l(this.citiesList, function(city) {
                                  return _c(
                                    "b-form-select-option",
                                    { key: city.id, attrs: { value: city.id } },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(city.city_name) +
                                          "\n                            "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "vertical-line" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-form-group",
                          { attrs: { label: "Bio", "label-for": "bio" } },
                          [
                            _c("b-form-input", {
                              attrs: { id: "bio", type: "text" },
                              model: {
                                value: _vm.bio,
                                callback: function($$v) {
                                  _vm.bio = $$v
                                },
                                expression: "bio"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Discord Username",
                              "label-for": "discord_username"
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: { id: "discord_username", type: "text" },
                              model: {
                                value: _vm.discord_username,
                                callback: function($$v) {
                                  _vm.discord_username = $$v
                                },
                                expression: "discord_username"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Steam Username",
                              "label-for": "steam_username"
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: { id: "steam_username", type: "text" },
                              model: {
                                value: _vm.steam_username,
                                callback: function($$v) {
                                  _vm.steam_username = $$v
                                },
                                expression: "steam_username"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Epic Games Username",
                              "label-for": "epic_username"
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: { id: "epic_username", type: "text" },
                              model: {
                                value: _vm.epic_username,
                                callback: function($$v) {
                                  _vm.epic_username = $$v
                                },
                                expression: "epic_username"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              label: "Origin Username",
                              "label-for": "origin_username"
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: { id: "origin_username", type: "text" },
                              model: {
                                value: _vm.origin_username,
                                callback: function($$v) {
                                  _vm.origin_username = $$v
                                },
                                expression: "origin_username"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      attrs: { variant: "success", dismissible: "" },
                      model: {
                        value: _vm.showDismissibleAlertMessage,
                        callback: function($$v) {
                          _vm.showDismissibleAlertMessage = $$v
                        },
                        expression: "showDismissibleAlertMessage"
                      }
                    },
                    [_vm._v("\n                Profile Saved!\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center mt-3" },
                    [
                      _c(
                        "b-button",
                        { attrs: { type: "submit", variant: "primary" } },
                        [_vm._v("\n                    Save\n                ")]
                      )
                    ],
                    1
                  )
                ],
                1
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



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1cd96b10", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);