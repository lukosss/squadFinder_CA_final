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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      sortBy: 'userName',
      sortDesc: false,
      perPage: 10,
      currentPage: 1,
      fields: [{
        key: 'gameName',
        label: 'Game Title',
        sortable: true,
        sortByFormatted: true,
        filterByFormatted: true,
        formatter: function formatter(value, key, item) {
          return item.game.title;
        }
      }, {
        key: 'rank',
        label: 'Rank',
        sortable: true,
        sortByFormatted: true,
        filterByFormatted: true,
        formatter: function formatter(value, key, item) {
          return item.rank.rank_name;
        }
      }, {
        key: 'userName',
        label: 'User',
        sortable: true,
        sortByFormatted: true,
        filterByFormatted: true,
        formatter: function formatter(value, key, item) {
          return item.user.display_name ? item.user.display_name : item.user.first_name;
        }
      }, {
        key: 'userInfo',
        label: 'Contacts'
      }],
      isBusy: true,
      filter: null,
      filterOn: [],
      sortDirection: 'asc'
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('squads', ['getUsers', 'getSelectedGames'])), {}, {
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }),
  created: function created() {
    this.getUsers();
    this.getSelectedGames();
  },
  updated: function updated() {
    this.isBusy = false;
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('squads', {
    usersList: 'getUsersList',
    selectedGamesList: 'getSelectedGamesList'
  })), {}, {
    rows: function rows() {
      return this.selectedGamesList.length;
    },
    sortOptions: function sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    }
  })
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
  return _c("div", { staticClass: "text-white" }, [
    _c("h2", { staticClass: "text-center" }, [_vm._v("Find Squadmates")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "overflow-auto text-white row" },
      [
        _c(
          "div",
          {
            staticClass:
              "d-flex align-items-center justify-content-center col-12"
          },
          [
            _c(
              "div",
              { staticClass: "my-1 w-50" },
              [
                _c(
                  "b-form-group",
                  {
                    staticClass: "mb-0",
                    attrs: {
                      label: "Filter",
                      "label-for": "filter-input",
                      "label-cols-sm": "3",
                      "label-align-sm": "right",
                      "label-size": "sm"
                    }
                  },
                  [
                    _c(
                      "b-input-group",
                      { attrs: { size: "sm" } },
                      [
                        _c("b-form-input", {
                          attrs: {
                            id: "filter-input",
                            type: "search",
                            placeholder: "Type to Search"
                          },
                          model: {
                            value: _vm.filter,
                            callback: function($$v) {
                              _vm.filter = $$v
                            },
                            expression: "filter"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "b-input-group-append",
                          [
                            _c(
                              "b-button",
                              {
                                attrs: { disabled: !_vm.filter },
                                on: {
                                  click: function($event) {
                                    _vm.filter = ""
                                  }
                                }
                              },
                              [_vm._v("Clear")]
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
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "my-1 ml-2 w-75" },
              [
                _c("b-form-group", {
                  staticClass: "mb-0",
                  attrs: {
                    label: "Filter On:",
                    description: "Leave all unchecked to search all data",
                    "label-cols-sm": "3",
                    "label-align-sm": "right",
                    "label-size": "sm"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var ariaDescribedby = ref.ariaDescribedby
                        return [
                          _c(
                            "b-form-checkbox-group",
                            {
                              staticClass: "mt-1 d-flex align-items-center",
                              attrs: { "aria-describedby": ariaDescribedby },
                              model: {
                                value: _vm.filterOn,
                                callback: function($$v) {
                                  _vm.filterOn = $$v
                                },
                                expression: "filterOn"
                              }
                            },
                            [
                              _c(
                                "b-form-checkbox",
                                { attrs: { value: "gameName" } },
                                [_vm._v("Game")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                { attrs: { value: "rank" } },
                                [_vm._v("Rank")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-checkbox",
                                { attrs: { value: "userName" } },
                                [_vm._v("Username")]
                              )
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.sortDirection,
                    callback: function($$v) {
                      _vm.sortDirection = $$v
                    },
                    expression: "sortDirection"
                  }
                })
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c("b-table", {
          staticClass: "text-white col-12",
          attrs: {
            id: "my-table",
            striped: "",
            hover: "",
            "table-variant": "dark",
            bordered: "",
            busy: _vm.isBusy,
            fields: _vm.fields,
            items: this.selectedGamesList,
            responsive: "true",
            "per-page": _vm.perPage,
            "sort-by": _vm.sortBy,
            "sort-desc": _vm.sortDesc,
            "sort-icon-left": "",
            filter: _vm.filter,
            "filter-included-fields": _vm.filterOn,
            "current-page": _vm.currentPage
          },
          on: {
            "update:sortBy": function($event) {
              _vm.sortBy = $event
            },
            "update:sort-by": function($event) {
              _vm.sortBy = $event
            },
            "update:sortDesc": function($event) {
              _vm.sortDesc = $event
            },
            "update:sort-desc": function($event) {
              _vm.sortDesc = $event
            },
            filtered: _vm.onFiltered
          },
          scopedSlots: _vm._u([
            {
              key: "cell(gameName)",
              fn: function(data) {
                return [
                  _c("p", { staticClass: "text-white" }, [
                    _vm._v(_vm._s(data.value))
                  ])
                ]
              }
            },
            {
              key: "cell(rank)",
              fn: function(data) {
                return [
                  _c("p", { staticClass: "text-white" }, [
                    _vm._v(_vm._s(data.value))
                  ])
                ]
              }
            },
            {
              key: "cell(userName)",
              fn: function(data) {
                return [
                  _c("p", { staticClass: "text-white" }, [
                    _vm._v(_vm._s(data.value))
                  ])
                ]
              }
            },
            {
              key: "cell(userInfo)",
              fn: function(data) {
                return [
                  _c(
                    "b-button",
                    {
                      attrs: {
                        id: data.item.id + "popover",
                        variant: "primary"
                      }
                    },
                    [
                      _vm._v("\n                    Show "),
                      _c("i", { staticClass: "far fa-address-book" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-popover",
                    {
                      attrs: {
                        target: data.item.id + "popover",
                        triggers: "hover",
                        placement: "left"
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      data.item.user.display_name
                                        ? data.item.user.display_name
                                        : data.item.user.first_name
                                    ) +
                                    "\n                    "
                                )
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [
                      _vm._v(" "),
                      _c("ul", [
                        data.item.ingame_name
                          ? _c("li", [
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      "Ingame Name: " + data.item.ingame_name
                                    )
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        data.item.comment
                          ? _c("li", [
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  " " + _vm._s("Comment: " + data.item.comment)
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        data.item.user.discord_username
                          ? _c("li", [
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      "Discord Username: " +
                                        data.item.user.discord_username
                                    )
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        data.item.user.steam_username
                          ? _c("li", [
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      "Steam Username: " +
                                        data.item.user.steam_username
                                    )
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        data.item.user.origin_username
                          ? _c("li", [
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      "Origin Username: " +
                                        data.item.user.origin_username
                                    )
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        data.item.user.epic_username
                          ? _c("li", [
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      "Epic Games Username: " +
                                        data.item.user.epic_username
                                    )
                                )
                              ])
                            ])
                          : _vm._e()
                      ])
                    ]
                  )
                ]
              }
            },
            {
              key: "table-busy",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "text-center text-danger my-2" },
                    [
                      _c("b-spinner", {
                        staticClass: "align-middle text-primary"
                      }),
                      _vm._v(" "),
                      _c("strong", { staticClass: "text-warning" }, [
                        _vm._v("Loading...")
                      ])
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ])
        }),
        _vm._v(" "),
        _c("b-pagination", {
          attrs: {
            pills: "",
            "total-rows": _vm.rows,
            "per-page": _vm.perPage,
            "aria-controls": "my-table"
          },
          model: {
            value: _vm.currentPage,
            callback: function($$v) {
              _vm.currentPage = $$v
            },
            expression: "currentPage"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);