(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_EditGameInfo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/EditGameInfo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/EditGameInfo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EditGameInfo",
  data: function data() {
    return {
      ingame_name: '',
      comment: '',
      rank_id: null,
      loader: true,
      showDismissibleAlertMessage: false
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('myGames', ['setEditedGameId', 'getMySelectedGames', 'setEditedGameId', 'setGameId', 'updateGameInfo'])), {}, {
    logConsole: function logConsole() {
      console.log(this.selectedGameForEditing.game_id);
      console.log(this.getRanks.ranks);
    },
    handleSubmit: function handleSubmit() {
      this.updateGameInfo({
        ingame_name: this.ingame_name,
        comment: this.comment,
        rank_id: this.rank_id
      });
      this.showDismissibleAlertMessage = true;
    }
  }),
  mounted: function mounted() {
    this.setGameId(this.selectedGameForEditing.game_id);
    var selectedGame = this.selectedGameForEditing;
    this.ingame_name = selectedGame.ingame_name;
    this.comment = selectedGame.comment;
    this.rank_id = selectedGame.rank_id;
    this.loader = false;
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('myGames', {
    gamesList: 'getGamesList',
    myGames: 'getMyGamesList',
    selectedGameIdEdit: 'getEditedGameId',
    selectedGameForEditing: 'getMySelectedGameForEditing',
    getRanks: 'getSelectedGameRanks'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/EditGameInfo.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/EditGameInfo.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditGameInfo_vue_vue_type_template_id_154555da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditGameInfo.vue?vue&type=template&id=154555da&scoped=true& */ "./resources/js/Pages/EditGameInfo.vue?vue&type=template&id=154555da&scoped=true&");
/* harmony import */ var _EditGameInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditGameInfo.vue?vue&type=script&lang=js& */ "./resources/js/Pages/EditGameInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EditGameInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditGameInfo_vue_vue_type_template_id_154555da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditGameInfo_vue_vue_type_template_id_154555da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "154555da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/EditGameInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/EditGameInfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/EditGameInfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditGameInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditGameInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/EditGameInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditGameInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/EditGameInfo.vue?vue&type=template&id=154555da&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/EditGameInfo.vue?vue&type=template&id=154555da&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditGameInfo_vue_vue_type_template_id_154555da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditGameInfo_vue_vue_type_template_id_154555da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditGameInfo_vue_vue_type_template_id_154555da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditGameInfo.vue?vue&type=template&id=154555da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/EditGameInfo.vue?vue&type=template&id=154555da&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/EditGameInfo.vue?vue&type=template&id=154555da&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/EditGameInfo.vue?vue&type=template&id=154555da&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
              attrs: { title: "Change game info", shadow: "true" }
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
              attrs: {
                title: this.selectedGameForEditing.game.title,
                shadow: "true"
              }
            },
            [
              _c(
                "b-form",
                {
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
                            attrs: {
                              label: "Ingame Name",
                              "label-for": "ingame_name"
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: { id: "ingame_name", type: "text" },
                              model: {
                                value: _vm.ingame_name,
                                callback: function($$v) {
                                  _vm.ingame_name = $$v
                                },
                                expression: "ingame_name"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          {
                            attrs: { label: "Comment", "label-for": "comment" }
                          },
                          [
                            _c("b-form-input", {
                              attrs: { id: "comment", type: "text" },
                              model: {
                                value: _vm.comment,
                                callback: function($$v) {
                                  _vm.comment = $$v
                                },
                                expression: "comment"
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
                              label: "Your Rank",
                              "label-for": "rank_id"
                            }
                          },
                          [
                            _c(
                              "b-form-select",
                              {
                                model: {
                                  value: _vm.rank_id,
                                  callback: function($$v) {
                                    _vm.rank_id = $$v
                                  },
                                  expression: "rank_id"
                                }
                              },
                              [
                                _c(
                                  "b-form-select-option",
                                  { attrs: { value: null } },
                                  [_vm._v("Please select an option")]
                                ),
                                _vm._v(" "),
                                _vm._l(this.getRanks.ranks, function(rank) {
                                  return _c(
                                    "b-form-select-option",
                                    { key: rank.id, attrs: { value: rank.id } },
                                    [_vm._v(_vm._s(rank.rank_name))]
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
                    [_vm._v("\n                Game Saved!\n            ")]
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



/***/ })

}]);