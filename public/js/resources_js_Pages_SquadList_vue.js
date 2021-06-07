(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SquadList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SquadList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SquadList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SquadList",
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('squads', ['getUsers', 'getSelectedGames'])),
  created: function created() {
    this.getUsers();
    this.getSelectedGames();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('squads', {
    usersList: 'getUsersList',
    selectedGamesList: 'getSelectedGamesList'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/SquadList.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/SquadList.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SquadList_vue_vue_type_template_id_cedae6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SquadList.vue?vue&type=template&id=cedae6c2&scoped=true& */ "./resources/js/Pages/SquadList.vue?vue&type=template&id=cedae6c2&scoped=true&");
/* harmony import */ var _SquadList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SquadList.vue?vue&type=script&lang=js& */ "./resources/js/Pages/SquadList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SquadList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SquadList_vue_vue_type_template_id_cedae6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SquadList_vue_vue_type_template_id_cedae6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cedae6c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/SquadList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/SquadList.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/SquadList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SquadList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SquadList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SquadList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SquadList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/SquadList.vue?vue&type=template&id=cedae6c2&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/SquadList.vue?vue&type=template&id=cedae6c2&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SquadList_vue_vue_type_template_id_cedae6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SquadList_vue_vue_type_template_id_cedae6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SquadList_vue_vue_type_template_id_cedae6c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SquadList.vue?vue&type=template&id=cedae6c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SquadList.vue?vue&type=template&id=cedae6c2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SquadList.vue?vue&type=template&id=cedae6c2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/SquadList.vue?vue&type=template&id=cedae6c2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "text-white" },
    [
      _c("h2", [_vm._v("Find Squadmates")]),
      _vm._v(" "),
      _vm._l(this.selectedGamesList, function(gameUser) {
        return _c(
          "b-card",
          {
            key: gameUser.id,
            staticClass: "d-flex text-center mb-2",
            attrs: { "bg-variant": "light", "border-variant": "primary" }
          },
          [
            _c("div", [
              _vm._v(
                "\n           Game: " +
                  _vm._s(gameUser.game.title) +
                  ", Rank: " +
                  _vm._s(gameUser.rank.rank_name) +
                  ", Nickname: " +
                  _vm._s(
                    gameUser.user.display_name
                      ? gameUser.user.display_name
                      : gameUser.user.first_name
                  ) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c(
              "b-button",
              {
                directives: [
                  {
                    name: "b-toggle",
                    rawName: "v-b-toggle",
                    value: "info" + gameUser.id,
                    expression: "'info'+gameUser.id"
                  }
                ],
                attrs: { size: "sm", variant: "primary" }
              },
              [_vm._v("Show contacts")]
            ),
            _vm._v(" "),
            _c(
              "b-collapse",
              { staticClass: "mt-2", attrs: { id: "info" + gameUser.id } },
              [
                _c("b-card", { attrs: { "bg-variant": "light" } }, [
                  _c("ul", [
                    gameUser.ingame_name
                      ? _c("li", [
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v(
                              " " +
                                _vm._s("Ingame Name: " + gameUser.ingame_name)
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    gameUser.comment
                      ? _c("li", [
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v(" " + _vm._s("Comment: " + gameUser.comment))
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    gameUser.user.discord_username
                      ? _c("li", [
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v(
                              " " +
                                _vm._s(
                                  "Discord Username: " +
                                    gameUser.user.discord_username
                                )
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    gameUser.user.steam_username
                      ? _c("li", [
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v(
                              " " +
                                _vm._s(
                                  "Steam Username: " +
                                    gameUser.user.steam_username
                                )
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    gameUser.user.origin_username
                      ? _c("li", [
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v(
                              " " +
                                _vm._s(
                                  "Origin Username: " +
                                    gameUser.user.origin_username
                                )
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    gameUser.user.epic_username
                      ? _c("li", [
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v(
                              " " +
                                _vm._s(
                                  "Epic Games Username: " +
                                    gameUser.user.epic_username
                                )
                            )
                          ])
                        ])
                      : _vm._e()
                  ])
                ])
              ],
              1
            )
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);