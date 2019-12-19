exports.ids = [1];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/About/index.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/About/index.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = module.exports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/components/About/index.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/node-style-loader/collect.js":
/*!***************************************************!*\
  !*** ./node_modules/node-style-loader/collect.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var styleStack = __webpack_require__(/*! ./lib/styleStack */ \"./node_modules/node-style-loader/lib/styleStack.js\");\n// it's necessary setting initialStyleStack as it may not be required as the same module between webpack and the user\n// due to path differences in certain scenarios\nglobal.initialStyleStack = (global.initialStyleStack !== undefined) ? global.initialStyleStack : new styleStack();\n\n// initial style collection\nexports.add = add.bind(null, initialStyleStack);\n\nexports.collectInitial = function collectInitial() {\n  var styleTag = initialStyleStack.getStyleTag();\n  exports.add = inactiveAdd;\n  // commented-out so it doesn't have to be stored by the user and to test hot-reload\n  //initialStyleStack = undefined;\n  return styleTag;\n}\n\nexports.collectContext = function collectContext(fn) {\n\n  var contextStyleStack = new styleStack();\n\n  // include path differences may make this fail, TODO: test\n  exports.add = add.bind(null, contextStyleStack);\n  var result = fn();\n  exports.add = inactiveAdd;\n\n  return [\n    contextStyleStack.getStyleTag(),\n    result\n  ]\n}\n\nfunction add(stack, list, options) {\n  var styles = styleStack.listToStyles(list);\n  stack.addStylesToStack(styles, options);\n}\n\nfunction inactiveAdd() {}\n\n\n//# sourceURL=webpack:///./node_modules/node-style-loader/collect.js?");

/***/ }),

/***/ "./node_modules/node-style-loader/lib/styleStack.js":
/*!**********************************************************!*\
  !*** ./node_modules/node-style-loader/lib/styleStack.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var styleStack = module.exports = function styleStack() {\n  this.stylesInStack = {}; // this is stylesInDom in style-loader\n  this.stackStyleElement = { // this is roughly equivalent to singletonElement in style-loader\n    cssText: \"\"\n  };\n  this.singletonCounter = 0;\n}\n\nstyleStack.prototype.addStylesToStack = function addStylesToStack(styles, options) {\n  for(var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var stackStyle = this.stylesInStack[item.id];\n    if(stackStyle) {\n      stackStyle.refs++;\n      for(var j = 0; j < stackStyle.parts.length; j++) {\n        stackStyle.parts[j](item.parts[j]); // calls updateStyle function\n      }\n      for(; j < item.parts.length; j++) {\n        stackStyle.parts.push(this.addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n      for(var j = 0; j < item.parts.length; j++) {\n        parts.push(this.addStyle(item.parts[j], options));\n      }\n      this.stylesInStack[item.id] = {id: item.id, refs: 1, parts: parts};\n    }\n  }\n}\n\nstyleStack.prototype.addStyle = function addStyle(obj) {\n  var styleIndex = this.singletonCounter++;\n  var update = applyToSingletonTag.bind(null, this.stackStyleElement, styleIndex);\n\n  update(obj); // call update once for first insertion\n\n  return function updateStyle(newObj) {\n    if(newObj) {\n      if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\n        return;\n      update(obj = newObj); // this case is not properly handled and would only be reached\n                            // if re-including a style while specifying a different sourceMap or media option\n    }\n  };\n}\n\nstyleStack.prototype.getStyleTag = function getStyleTag() {\n  return '<style class=\"server-style-loader-element\">'+this.stackStyleElement.cssText+'</style>';\n}\n\nfunction applyToSingletonTag(styleElement, index, obj) {\n  styleElement.cssText = replaceText(index, obj.css);\n}\n\nmodule.exports.listToStyles = function listToStyles(list) {\n  var styles = [];\n  var newStyles = {};\n  for(var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {css: css, media: media, sourceMap: sourceMap};\n    if(!newStyles[id])\n      styles.push(newStyles[id] = {id: id, parts: [part]});\n    else\n      newStyles[id].parts.push(part);\n  }\n  return styles;\n}\n\n\nvar replaceText = (function () {\n  var textStore = [];\n\n  return function (index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n})();\n\n\n//# sourceURL=webpack:///./node_modules/node-style-loader/lib/styleStack.js?");

/***/ }),

/***/ "./src/components/About/index.css":
/*!****************************************!*\
  !*** ./src/components/About/index.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-collector: Loads CSS like style-loader, but pass the content to the style collector instead of inserting in the DOM\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/About/index.css\");\nif (typeof content === 'string') content = [[module.i, content, '']];\n// collect the styles\n__webpack_require__(/*! ../../../node_modules/node-style-loader/collect.js */ \"./node_modules/node-style-loader/collect.js\").add(content, {});\nif (content.locals) module.exports = content.locals;\ndelete __webpack_require__.c[module.i];\n\n//# sourceURL=webpack:///./src/components/About/index.css?");

/***/ }),

/***/ "./src/components/About/index.js":
/*!***************************************!*\
  !*** ./src/components/About/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/components/About/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Component =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Component, _React$Component);\n\n  function Component() {\n    _classCallCheck(this, Component);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this));\n  }\n\n  _createClass(Component, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"About us\");\n    }\n  }]);\n\n  return Component;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n//# sourceURL=webpack:///./src/components/About/index.js?");

/***/ })

};;