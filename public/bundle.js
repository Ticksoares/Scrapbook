/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./soma */ \"./src/soma.js\");\n/*class TaskList {\r\n  constructor() {\r\n    this.titleInput = document.getElementById(\"messageTitle\");\r\n    this.editTitleInput = document.getElementById(\"editMessageTitle\");\r\n    this.messageInput = document.getElementById(\"messageBody\");\r\n    this.editMessageInput = document.getElementById(\"editMessageBody\");\r\n    this.addBtn = document.getElementById(\"addButton\");\r\n    this.btnSaveEdit = document.getElementById(\"saveEdit\");\r\n    this.scrapsField = document.getElementById(\"scrapsField\");\r\n\r\n    this.scraps = [];\r\n\r\n    this.registerAddScrapBtnEvent();\r\n  }\r\n\r\n  generateScrapId() {\r\n    return this.scraps.length + 1;\r\n  }\r\n\r\n  registerAddScrapBtnEvent() {\r\n    this.addBtn.onclick = () => this.addNewScrap();\r\n  }\r\n\r\n  setButtonEvents() {\r\n    document.querySelectorAll(\".delete-button\").forEach((item) => {\r\n      item.onclick = (event) => this.deleteScrap(event);\r\n    });\r\n\r\n    document.querySelectorAll(\".edit-button\").forEach((item) => {\r\n      item.onclick = (event) => this.openEditModal(event);\r\n    });\r\n  }\r\n\r\n  renderScraps() {\r\n    this.scrapsField.innerHTML = \"\";\r\n\r\n    for (const scrap of this.scraps) {\r\n      const cardHtml = this.createScrapCard(\r\n        scrap.id,\r\n        scrap.title,\r\n        scrap.message\r\n      );\r\n\r\n      this.insertHtml(cardHtml);\r\n    }\r\n\r\n    this.setButtonEvents();\r\n  }\r\n\r\n  addNewScrap() {\r\n    const id = this.generateScrapId();\r\n    const title = this.titleInput.value;\r\n    const message = this.messageInput.value;\r\n\r\n    this.titleInput.value = \"\";\r\n    this.messageInput.value = \"\";\r\n\r\n    this.scraps.push({ id, title, message });\r\n\r\n    this.renderScraps();\r\n  }\r\n\r\n  deleteScrap(event) {\r\n    event.path[2].remove();\r\n\r\n    const scrapId = event.path[2].getAttribute(\"id-scrap\");\r\n\r\n    const scrapIndex = this.scraps.findIndex((item) => {\r\n      return item.id == scrapId;\r\n    });\r\n\r\n    this.scraps.splice(scrapIndex, 1);\r\n  }\r\n\r\n  insertHtml(html) {\r\n    this.scrapsField.innerHTML += html;\r\n  }\r\n\r\n  openEditModal(event) {\r\n    $(\"#editModal\").modal(\"toggle\");\r\n\r\n    const scrapId = event.path[2].getAttribute(\"id-scrap\");\r\n\r\n    const scrapIndex = this.scraps.findIndex((item) => {\r\n      return item.id == scrapId;\r\n    });\r\n\r\n    this.editTitleInput.value = this.scraps[scrapIndex].title;\r\n    this.editMessageInput.value = this.scraps[scrapIndex].message;\r\n\r\n    this.btnSaveEdit.onclick = () => this.saveChanges(scrapIndex);\r\n  }\r\n\r\n  saveChanges(scrapIndex) {\r\n    let title = this.editTitleInput.value;\r\n    let message = this.editMessageInput.value;\r\n\r\n    this.scraps[scrapIndex] = { title, message };\r\n    this.renderScraps();\r\n    $(\"#editModal\").modal(\"hide\");\r\n  }\r\n\r\n  createScrapCard(id, title, message) {\r\n    return `\r\n    <div class=\"message-cards card text-white bg-dark m-2 col-3\" id-scrap=\"${id}\">\r\n      <div class=\"card-header font-weight-bold\">${title}</div>\r\n      <div class=\"card-body\">\r\n        <p class=\"card-text\">\r\n          ${message}\r\n        </p>\r\n      </div>\r\n      <div class=\"w-100 d-flex justify-content-end pr-2 pb-2\">\r\n        <button class=\"btn btn-danger mr-1 delete-button\">Deletar</button>\r\n        <button class=\"btn btn-info edit-button\">Editar</button>\r\n      </div>\r\n    </div>\r\n    `;\r\n  }\r\n}\r\n\r\nnew TaskList();*/\n\nalert(Object(_soma__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(1, 2));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/soma.js":
/*!*********************!*\
  !*** ./src/soma.js ***!
  \*********************/
/*! exports provided: soma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\nvar soma = function soma(a, b) {\n  return a + b;\n};\n\n//# sourceURL=webpack:///./src/soma.js?");

/***/ })

/******/ });