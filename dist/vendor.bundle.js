/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"es6-shim\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"es6-promise\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zone.js/lib/browser/zone-microtask\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if ('production' !== process.env.ENV) {
	    __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"es7-reflect-metadata/dist/browser\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    Error['stackTraceLimit'] = Infinity;
	    Zone['longStackTraceZone'] = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zone.js/lib/zones/long-stack-trace.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	}
	if ('production' === process.env.ENV) {
	    var ngCore = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    ngCore.enableProdMode();
	}
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/platform/browser\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/platform/common_dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/router\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/http\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"angular2/core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rxjs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"C:\\ext_projects\\ng2-webpack\\node_modules\\webpack\\node_modules\\node-libs-browser\\node_modules\\process\\browser.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }
/******/ ]);
//# sourceMappingURL=vendor.map