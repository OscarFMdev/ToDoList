"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpacksetup"] = self["webpackChunkwebpacksetup"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n}\\n\\n.icon {\\n  cursor: pointer;\\n}\\n\\n.delete-icon {\\n  cursor: pointer;\\n}\\n\\n#card-bg {\\n  background: linear-gradient(219deg, #3270d8, #d28d86);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n}\\n\\n.editable {\\n  cursor: text;\\n}\\n\\n#container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background-color: white;\\n  opacity: 0.79;\\n  height: 60%;\\n  width: 25%;\\n  min-width: 350px;\\n  position: relative;\\n  box-shadow: 15px -2px 63px 13px rgba(0, 0, 0, 0.9);\\n  -webkit-box-shadow: 15px -2px 63px 13px rgba(0, 0, 0, 0.9);\\n  -moz-box-shadow: 15px -2px 63px 13px rgba(0, 0, 0, 0.9);\\n}\\n\\n.heading {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  position: relative;\\n  width: 98%;\\n  height: 60px;\\n}\\n\\n.list-title {\\n  font-weight: lighter;\\n  margin-left: 10px;\\n}\\n\\n.reload-icon {\\n  margin-right: 10px;\\n}\\n\\nform {\\n  position: relative;\\n  width: 93%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 10px;\\n  margin-top: 10px;\\n}\\n\\n.new-task {\\n  border: none;\\n  width: 270px;\\n  height: 40px;\\n}\\n\\nhr {\\n  background-color: lightgray;\\n  height: 2px;\\n  width: 100%;\\n}\\n\\n.tasks-container {\\n  position: relative;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 10px;\\n  overflow: scroll;\\n  -ms-overflow-style: none;  /* IE and Edge */\\n  scrollbar-width: none;  /* Firefox */\\n}\\n\\n.tasks-container::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.task {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-top: 5px;\\n  margin-left: 10px;\\n  margin-right: 10px;\\n  height: 30px;\\n}\\n\\n.task .left-side {\\n  display: flex;\\n  column-gap: 10px;\\n}\\n\\n.completed-container {\\n  position: absolute;\\n  bottom: 0;\\n  background-color: lightgray;\\n  width: 100%;\\n  height: 50px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.completed-text {\\n  color: black;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.completed-text:hover {\\n  text-decoration: underline;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpacksetup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpacksetup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpacksetup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpacksetup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpacksetup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpacksetup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpacksetup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpacksetup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpacksetup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpacksetup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayTasks.js */ \"./src/modules/displayTasks.js\");\n\n\n\n(0,_modules_displayTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://webpacksetup/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayTasks.js":
/*!*************************************!*\
  !*** ./src/modules/displayTasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/modules/functions.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n\n\n\nconst displayTasks = () => {\n  const tasksContainer = document.querySelector('.tasks-container');\n  tasksContainer.innerHTML = '';\n  _store_js__WEBPACK_IMPORTED_MODULE_1__.taskArray.sort((a, b) => a.index - b.index).map((task) => task.description);\n  _store_js__WEBPACK_IMPORTED_MODULE_1__.taskArray.forEach((task, index) => {\n      let box;\n      if (task.completed) {\n        box = 'checked';\n      } else {\n        box = '';\n      }\n      tasksContainer.innerHTML += `\n    <!-- Task -->\n    <li class=\"task\" data-index-number=\"${index + 1}\">\n      <div class=\"left-side\">\n        <input class=\"complete-box\" type=\"checkbox\" name=\"checkbox\" value=\"value\" ${box}>\n        <label for=\"checkbox\"><p class=\"editable\">${task.description}</p></label>  \n      </div>\n      <i class=\"fa-regular fa-trash-can delete-icon\" data-index-number=\"${index + 1}\"></i>\n    </li>\n    <hr class=\"line-separator\">\n    <!-- Task -->\n    `;\n      (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.store)();\n    });\n\n  /* Add */\n  const addBtn = document.querySelector('.fa-right-from-bracket');\n  addBtn.addEventListener('click', (e) => {\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(e);\n    displayTasks();\n  });\n\n  /* Delete */\n  const trashCans = document.querySelectorAll('.delete-icon');\n  for (let i = 0; i < trashCans.length; i += 1) {\n    trashCans[i].addEventListener('click', (e) => {\n      (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(e);\n      displayTasks();\n    });\n  }\n\n  /* Delete completed */\n  const deleteCompleted = document.querySelector('.completed-text');\n  const allCheckBoxes = document.querySelectorAll('input[type=checkbox]');\n\n  function clearCompleted(elem) {\n    return elem.completed !== true;\n  }\n\n  deleteCompleted.addEventListener('click', () => {\n    const data = _store_js__WEBPACK_IMPORTED_MODULE_1__.taskArray.filter(clearCompleted);\n    localStorage.setItem('taskInput', JSON.stringify(data));\n    window.location.reload();\n  });\n\n  for (let i = 0; i < allCheckBoxes.length; i += 1) {\n    allCheckBoxes[i].addEventListener('click', (e) => {\n      (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkBoxesStatus)(e);\n    });\n  }\n\n  /* Edit */\n  const taskTexts = document.querySelectorAll('p');\n  for (let i = 0; i < taskTexts.length; i += 1) {\n    taskTexts[i].addEventListener('click', (e) => {\n      (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.edit)(e);\n    });\n  }\n\n  /* Delete all */\n  const deleteAll = document.querySelector('.reload-icon');\n  deleteAll.addEventListener('click', () => {\n    _store_js__WEBPACK_IMPORTED_MODULE_1__.taskArray.splice(0, _store_js__WEBPACK_IMPORTED_MODULE_1__.taskArray.length);\n    (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.store)();\n    displayTasks();\n  });\n};\n// fa-regular  fa-trash-can delete-icon\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTasks);\n\n//# sourceURL=webpack://webpacksetup/./src/modules/displayTasks.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"checkBoxesStatus\": () => (/* binding */ checkBoxesStatus),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"edit\": () => (/* binding */ edit),\n/* harmony export */   \"submit\": () => (/* binding */ submit),\n/* harmony export */   \"taskName\": () => (/* binding */ taskName),\n/* harmony export */   \"tasksContainer\": () => (/* binding */ tasksContainer)\n/* harmony export */ });\n/* harmony import */ var _objectToLS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectToLS.js */ \"./src/modules/objectToLS.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n\n\n\nconst submit = document.querySelector('.fa-right-from-bracket');\nconst tasksContainer = document.querySelector('.tasks-container');\nconst taskName = document.querySelector('.new-task');\n\nconst addTask = (e) => {\n  e.preventDefault();\n  if (e.target.classList.contains('fa-right-from-bracket')) {\n    if (!taskName.value) return;\n    (0,_objectToLS_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskName.value);\n    taskName.value = '';\n  }\n};\n\nconst deleteTask = (e) => {\n  if (e.target.classList.contains('delete-icon')) {\n    const btn = e.target;\n    const removableTask = btn.closest('li');\n    const taskIndex = removableTask.dataset.indexNumber;\n\n    // Remove element from array\n    _store_js__WEBPACK_IMPORTED_MODULE_1__.taskArray.splice(taskIndex - 1, 1);\n    localStorage.setItem('taskInput', _store_js__WEBPACK_IMPORTED_MODULE_1__.taskArray);\n    (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.store)();\n  }\n};\n\nconst edit = (e) => {\n  const editableText = e.target;\n  const editableTask = editableText.closest('li');\n  const taskIndex = editableTask.dataset.indexNumber;\n  if (editableText.matches('p')) {\n    editableText.setAttribute('contenteditable', 'true');\n    editableText.focus();\n  }\n\n  // event listener to store the edited value to local storage.\n  editableText.addEventListener('blur', () => {\n    _store_js__WEBPACK_IMPORTED_MODULE_1__.taskArray[taskIndex - 1].description = editableText.innerText;\n    (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.store)();\n  });\n};\n\nconst checkBoxesStatus = (e) => {\n  const checkBoxes = document.querySelectorAll('input[type=\"checkbox\"]');\n  const clickLocation = e.target;\n  for (let i = 0; i < checkBoxes.length; i += 1) {\n    if (clickLocation === checkBoxes[i]) {\n      const element = clickLocation.closest('li');\n      const arrrayNumber = element.dataset.indexNumber - 1;\n      const arrayElement = _store_js__WEBPACK_IMPORTED_MODULE_1__.taskArray[arrrayNumber];\n      if (checkBoxes[i].checked) {\n        arrayElement.completed = true;\n        (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.store)();\n      } else {\n        arrayElement.completed = false;\n        (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.store)();\n      }\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://webpacksetup/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/objectToLS.js":
/*!***********************************!*\
  !*** ./src/modules/objectToLS.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n\n\nconst addObjToLocalStorage = (value) => {\n  const object = {\n    description: value,\n    completed: false,\n    index: _store_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length + 1,\n  };\n  _store_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.unshift(object);\n  (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.store)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addObjToLocalStorage);\n\n//# sourceURL=webpack://webpacksetup/./src/modules/objectToLS.js?");

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store),\n/* harmony export */   \"taskArray\": () => (/* binding */ taskArray)\n/* harmony export */ });\nconst taskArray = JSON.parse(localStorage.getItem('taskInput')) || [];\n\nconst store = () => {\n  localStorage.setItem('taskInput', JSON.stringify(taskArray));\n};\n\n\n\n//# sourceURL=webpack://webpacksetup/./src/modules/store.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);