/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./SquarePeg-Regular.ttf */ \"./src/SquarePeg-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./lily-banse--YHSwy6uqvk-unsplash.jpg */ \"./src/lily-banse--YHSwy6uqvk-unsplash.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: \\\"square peg\\\"; /* font for restaurant name */\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n/* Page load styling */\\n\\nhtml,\\nbody {\\n    margin: 0px;\\n    padding: 0px;\\n    color: rgb(0, 0, 0);\\n    background-color: rgb(255, 255, 255);\\n    font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n.background {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-size: cover;\\n    background-position: center;\\n    width: 100%;\\n    height: calc(100vh - 100px);\\n    color: white;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\nheader {\\n    height: 100px;\\n    display: grid;\\n    grid-template-columns: 1fr 5rem 1fr;\\n    align-items: center;\\n    justify-items: center;\\n    font-size: min(10vw, 6rem);\\n}\\n\\nheader,\\nh2,\\nh3 {\\n    font-family: \\\"square peg\\\";\\n}\\n\\nh2 {\\n    font-size: 3rem;\\n}\\n\\nh3 {\\n    font-size: 2rem;\\n}\\n\\n#para2 {\\n    max-width: calc(100% - 100px);\\n}\\n\\n#para2,\\n.opening,\\n.bottom,\\n.content {\\n    text-align: center;\\n}\\n\\n#logo {\\n    height: 5rem;\\n    justify-self: center;\\n}\\n\\nbutton {\\n    border-style: none;\\n    background-color: transparent;\\n    font-size: clamp(1rem, 2vw, 20px);\\n    cursor: pointer;\\n    color: inherit;\\n}\\n\\n.container {\\n    height: calc(70vh);\\n    width: max(calc(100% - 400px), 350px);\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    overflow: scroll;\\n    padding: 0px;\\n}\\n\\nfooter {\\n    position: absolute;\\n    bottom: 0px;\\n    width: 100%;\\n    padding: 2px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.container,\\nfooter {\\n    background-color: rgba(0, 0, 0, 0.5);\\n}\\n\\n#bottom-section {\\n    margin-top: 20px;\\n}\\n\\n/*Menu Styling*/\\n\\n.menuContent {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\\n    gap: 20px;\\n}\\n\\n#menuButtons {\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-around;\\n    margin-bottom: 20px;\\n    border-style: solid;\\n    border-color: white;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript_path/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript_path/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://javascript_path/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript_path/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript_path/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript_path/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript_path/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript_path/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript_path/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript_path/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript_path/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about-tab.js":
/*!**************************!*\
  !*** ./src/about-tab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutTabLoad)\n/* harmony export */ });\nfunction aboutTabLoad() {\n    const container = document.querySelector(\".container\")\n\n    const title = document.createElement('h2');\n    title.textContent = \"About Us\"\n\n    const content = document.createElement('div');\n    content.textContent = `Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit. Integer vehicula in sapien in maximus. Phasellus\n    neque erat, accumsan vitae ligula nec, dignissim fringilla ante.\n    Maecenas fringilla massa eu nulla rhoncus imperdiet. Phasellus\n    vulputate sollicitudin magna sit amet congue. Integer quis felis\n    luctus, luctus erat ut, pellentesque libero. Duis sollicitudin,\n    dolor non fringilla ornare, quam augue porta mauris, et\n    condimentum lorem tellus bibendum sem. Morbi at consectetur\n    lacus. Curabitur auctor metus et risus egestas scelerisque.\n    In feugiat ut quam sit amet auctor. Morbi et semper mi, et\n    tempus mauris. Maecenas at augue a elit consequat commodo.\n    Suspendisse ut tincidunt diam. Sed vel ligula nec lectus\n    consequat pellentesque id vel est. Sed mattis risus eu ex\n    finibus, eget placerat sem imperdiet. Sed magna nulla,\n    sollicitudin euismod lorem nec, faucibus vehicula est.\n    Nulla id ornare turpis, eget iaculis neque. Sed \n    dignissim risus at felis maximus, in condimentum\n    ligula convallis.`\n    content.setAttribute('class', 'content');\n\n    container.append(title,content);\n};\n\n\n\n//# sourceURL=webpack://javascript_path/./src/about-tab.js?");

/***/ }),

/***/ "./src/contact-tab.js":
/*!****************************!*\
  !*** ./src/contact-tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactTabLoad)\n/* harmony export */ });\nfunction contactTabLoad() {\n    const container = document.querySelector(\".container\")\n\n    const title = document.createElement('h2')\n    title.textContent = \"Contact Us\";\n\n    const content = document.createElement('div');\n    const number = document.createElement('div');\n    number.textContent = \"Telephone - 01332 123456\";\n    const email = document.createElement('div');\n    email.textContent = \"Email - info@dragonflypub.co.uk\"\n    content.append(number,email);\n\n    const address = document.createElement('div');\n    address.textContent = \"The Dragonfly, Bush Tree Road, Buntingham, Kent, TR4 8GH\";\n\n    const form = document.createElement('form');\n    const formName = document.createElement('input')\n    formName.setAttribute('type', 'text');\n    const formEmail = document.createElement('input');\n    formEmail.setAttribute('type', 'email')\n    const formPhone = document.createElement('input');\n    formEmail.setAttribute('type', 'tel')\n    const formMessage = document.createElement('textarea');\n    const submit = document.createElement('button');\n    submit.textContent = \"Submit\"\n\n    form.append(formName,formEmail,formPhone,formMessage,submit);\n\n    container.append(title,content,address,form);\n};\n\n\n\n// Address, Phone number, email, contact form skeleton?\n\n//# sourceURL=webpack://javascript_path/./src/contact-tab.js?");

/***/ }),

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homeTabLoad)\n/* harmony export */ });\n//Exports function to index.js to load the content for the Home Tab\n\nfunction homeTabLoad() {\n    const container = document.querySelector('.container')\n\n    const para1 = document.createElement('h2');\n    para1.textContent = \"Good Food, Made Well...\";\n\n    const para2 = document.createElement('div');\n    para2.textContent = \"A dining experience like no other, whether enjoying a glass of wine while taking in the picturesque views or enjoying a quiet meal with friends and family, you can be sure your visit will be unforgettable.\";\n    para2.setAttribute('id', 'para2');\n\n    const openingHrs = document.createElement('div');\n    openingHrs.setAttribute('class', 'opening')\n    const hrsTitle = document.createElement('h3');\n    hrsTitle.textContent = \"Come and visit! We are open every day from 11:00am till late\";\n    hrsTitle.setAttribute('class', 'opening')\n    const hrsContent1 = document.createElement('div');\n    hrsContent1.textContent = \"Monday - Saturday: 11:00am - 12:00pm\";\n    hrsContent1.setAttribute('class', 'opening')\n    const hrsContent2 = document.createElement('div');\n    hrsContent2.textContent = \"Sunday: 11:00am - 10:00pm\";\n    hrsContent2.setAttribute('class', 'opening')\n\n    openingHrs.append(hrsTitle,hrsContent1,hrsContent2);\n\n    const bottomSection = document.createElement('div');\n    bottomSection.setAttribute('id', 'bottom-section')\n    const bottom1 = document.createElement('div');\n    bottom1.textContent = \"Enjoy traditional, seasonal food.\";\n    bottom1.setAttribute('class', 'bottom')\n    const bottom2 = document.createElement('div');\n    bottom2.textContent = \"All of our meat is responsibly sourced from local farms. \";\n    bottom2.setAttribute('class', 'bottom')\n    const bottom3 = document.createElement('div');\n    bottom3.textContent = \"Everything served is bought fresh on the day from the market.\";\n    bottom3.setAttribute('class', 'bottom')\n\n    bottomSection.append(bottom1,bottom2,bottom3);\n\n    container.append(para1,para2,openingHrs,bottomSection);\n};\n\n \n\n\n//# sourceURL=webpack://javascript_path/./src/home-tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-tab */ \"./src/home-tab.js\");\n/* harmony import */ var _menu_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-tab */ \"./src/menu-tab.js\");\n/* harmony import */ var _about_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-tab */ \"./src/about-tab.js\");\n/* harmony import */ var _contact_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-tab */ \"./src/contact-tab.js\");\n\n\n\n\n\n\n\nconsole.log(\"hello! I'm working!\");\n(0,_page_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_home_tab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nfunction clearContainer() {\n    const container = document.querySelector('.container');\n    container.innerHTML = \"\";\n}\n\nconst home = document.querySelector('.home');\nhome.addEventListener('click', () => {\n    clearContainer();\n    (0,_home_tab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\nconst menu = document.querySelector('.menu');\nmenu.addEventListener('click', () => {\n    clearContainer();\n    (0,_menu_tab__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\nconst about = document.querySelector('.about');\nabout.addEventListener('click', () => {\n    clearContainer();\n    (0,_about_tab__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\nconst contact = document.querySelector('.contact');\ncontact.addEventListener('click', () => {\n    clearContainer();\n    (0,_contact_tab__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n});\n\n//# sourceURL=webpack://javascript_path/./src/index.js?");

/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuTabLoad)\n/* harmony export */ });\nfunction menuTabLoad() {\n    const container = document.querySelector(\".container\")\n\n    const menuTitle = document.createElement('h2');\n    menuTitle.textContent = \"Our Nosh\";\n\n    const menuButtons = document.createElement('div');\n    menuButtons.setAttribute('id', 'menuButtons');\n    const starters = document.createElement('button');\n    starters.textContent = \"Starters\";\n    const mains = document.createElement('button');\n    mains.textContent = \"Mains\";\n    const sides = document.createElement('button');\n    sides.textContent = \"Sides\";\n    const desserts = document.createElement('button');\n    desserts.textContent = \"Desserts\";\n    const drinks = document.createElement('button');\n    drinks.textContent = \"Drinks\";\n\n    menuButtons.append(starters,mains,sides,desserts,drinks);\n\n    const menuContent = document.createElement('div');\n    menuContent.setAttribute('class', 'menuContent')\n\n    const menuItem1 = document.createElement('div');\n    const menuItemTitle1 = document.createElement('div');\n    menuItemTitle1.textContent = \"Example Title ~ £10.00\";\n    const menuItemDescription1 = document.createElement('div');\n    menuItemDescription1.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed\";\n    menuItem1.append(menuItemTitle1,menuItemDescription1);\n\n    const menuItem2 = document.createElement('div');\n    const menuItemTitle2 = document.createElement('div');\n    menuItemTitle2.textContent = \"Example Title ~ £20.00\";\n    const menuItemDescription2 = document.createElement('div');\n    menuItemDescription2.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed\";\n    menuItem2.append(menuItemTitle2,menuItemDescription2);\n\n    const menuItem3 = document.createElement('div');\n    const menuItemTitle3 = document.createElement('div');\n    menuItemTitle3.textContent = \"Example Title ~ £30.00\";\n    const menuItemDescription3 = document.createElement('div');\n    menuItemDescription3.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed\";\n    menuItem3.append(menuItemTitle3,menuItemDescription3);\n\n    menuContent.append(menuItem1,menuItem2,menuItem3)\n\n    container.append(menuTitle,menuButtons,menuContent);\n};\n\n\n\n//# sourceURL=webpack://javascript_path/./src/menu-tab.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.svg */ \"./src/logo.svg\");\n/*Exports the pageLoad function to index.js to load the intial content of the page.\nLoads things such as Logos, background and basic container divs */\n\n\n\nfunction pageLoad() {\n\n    const content = document.querySelector(\"#content\");\n\n    const header = document.createElement('header');\n\n    const name = document.createElement('div')\n    name.textContent = 'Tasty Nosh'\n\n    const logo = new Image();\n    logo.src = _logo_svg__WEBPACK_IMPORTED_MODULE_0__;\n    logo.setAttribute('id', 'logo');\n\n    const headerBtns = document.createElement('div');\n    headerBtns.setAttribute('id', 'header-btns');\n\n    const homeBtn = document.createElement('button');\n    homeBtn.textContent = \"Home\";\n    homeBtn.setAttribute('class', 'home')\n    const menuBtn = document.createElement('button');\n    menuBtn.textContent = \"Menu\";\n    menuBtn.setAttribute('class', 'menu')\n    const aboutBtn = document.createElement('button');\n    aboutBtn.textContent = \"About\";\n    aboutBtn.setAttribute('class', 'about')\n    const contactBtn = document.createElement('button');\n    contactBtn.textContent = \"Contact Us\";\n    contactBtn.setAttribute('class', 'contact')\n\n    headerBtns.append(homeBtn,menuBtn,aboutBtn,contactBtn);\n    header.append(name);\n    header.append(logo);\n    header.append(headerBtns);\n\n    const background = document.createElement('div');\n    background.setAttribute('class', 'background');\n\n    const container = document.createElement('div');\n    container.setAttribute('class', 'container');\n\n    const footer = document.createElement('footer');\n    const copyright = document.createElement('div');\n    copyright.textContent = \"Copyright © - Oliver Browning 2022\";\n\n    footer.append(copyright);\n\n    background.append(container,footer);\n\n    content.append(header,background);\n};\n\n\n\n//# sourceURL=webpack://javascript_path/./src/page-load.js?");

/***/ }),

/***/ "./src/SquarePeg-Regular.ttf":
/*!***********************************!*\
  !*** ./src/SquarePeg-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"381be1381bbd94205c6f.ttf\";\n\n//# sourceURL=webpack://javascript_path/./src/SquarePeg-Regular.ttf?");

/***/ }),

/***/ "./src/lily-banse--YHSwy6uqvk-unsplash.jpg":
/*!*************************************************!*\
  !*** ./src/lily-banse--YHSwy6uqvk-unsplash.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6ef6db913df93a631506.jpg\";\n\n//# sourceURL=webpack://javascript_path/./src/lily-banse--YHSwy6uqvk-unsplash.jpg?");

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"58048822c039fc1480b5.svg\";\n\n//# sourceURL=webpack://javascript_path/./src/logo.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;