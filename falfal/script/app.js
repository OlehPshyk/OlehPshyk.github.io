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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/handle-submit-news */ \"./src/js/modules/handle-submit-news.js\");\n\n__webpack_require__(/*! ./modules/handle-dropdown */ \"./src/js/modules/handle-dropdown.js\");\n\n__webpack_require__(/*! ./modules/handle-hamb */ \"./src/js/modules/handle-hamb.js\");\n\n__webpack_require__(/*! ./modules/handle-mslider */ \"./src/js/modules/handle-mslider.js\");\n\n__webpack_require__(/*! ./modules/handle-modal */ \"./src/js/modules/handle-modal.js\");\n\n__webpack_require__(/*! ./modules/handle-login-form */ \"./src/js/modules/handle-login-form.js\");\n\n__webpack_require__(/*! ./modules/handle-sign-up-form */ \"./src/js/modules/handle-sign-up-form.js\");\n\n__webpack_require__(/*! ./modules/handle-datepicker.js */ \"./src/js/modules/handle-datepicker.js\");\n\n__webpack_require__(/*! ./modules/handle-sign-slider */ \"./src/js/modules/handle-sign-slider.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/handle-datepicker.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-datepicker.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  flatpickr(\".flatpickr\", {\n    \"locale\": \"tr\", // locale for this instance only\n    wrap: true\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-datepicker.js?");

/***/ }),

/***/ "./src/js/modules/handle-dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/modules/handle-dropdown.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var dropbtn = document.getElementsByClassName(\"js-dropbtn\");\n  var dropdowns = document.getElementsByClassName(\"js-dropdown\");\n\n  for (var dropbtni = 0; dropbtni < dropbtn.length; dropbtni++) {\n    dropbtn[dropbtni].addEventListener(\"click\", dropdownOpen);\n  }\n  function dropdownOpen(e) {\n    var target = e.target;\n    e.preventDefault();\n    e.stopPropagation();\n    while (!target.classList.contains('js-dropdown')) {\n      target = target.parentNode;\n    }\n    if (target.classList.contains(\"active-dropdown\")) {\n      target.classList.remove(\"active-dropdown\");\n    } else {\n      closeAllDropdown();\n      target.classList.add(\"active-dropdown\");\n    }\n  }\n  function closeAllDropdown() {\n    for (var dropi = 0; dropi < dropdowns.length; dropi++) {\n      if (dropdowns[dropi].classList.contains('active-dropdown')) {\n        dropdowns[dropi].classList.remove('active-dropdown');\n      }\n    }\n  }\n  // Close the dropdown menu if the user clicks outside of it\n  document.addEventListener(\"click\", closeAllDropdown);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-dropdown.js?");

/***/ }),

/***/ "./src/js/modules/handle-hamb.js":
/*!***************************************!*\
  !*** ./src/js/modules/handle-hamb.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var hambButton = document.querySelector('.hamb-btn'),\n      xsNav = document.querySelector('.xs-nav');\n  var handleHambClick = function handleHambClick(e) {\n    hambButton.classList.toggle('open');\n    xsNav.classList.toggle('open');\n  };\n  var handleXsNavClick = function handleXsNavClick(e) {\n    if (e.target.classList.contains('nav-link') || e.target.parentNode.classList.contains('nav-link') || e.target.classList.contains('account-btn-login') || e.target.parentNode.classList.contains('account-btn-login') || e.target.classList.contains('account-btn-logined') || e.target.parentNode.classList.contains('account-btn-logined')) {\n      hambButton.classList.remove('open');\n      xsNav.classList.remove('open');\n    }\n  };\n  hambButton && hambButton.addEventListener(\"click\", handleHambClick);\n  xsNav && xsNav.addEventListener(\"click\", handleXsNavClick);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-hamb.js?");

/***/ }),

/***/ "./src/js/modules/handle-login-form.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-login-form.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var loginform = document.getElementById(\"login-form\");\n  loginform && loginform.addEventListener(\"submit\", checkLoginForm);\n  function checkLoginForm(e) {\n    submitLoginForm(e);\n    return false;\n  }\n  function submitLoginForm(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    var loginemail = encodeURIComponent(document.getElementById('loginemail').value);\n    var loginpassword = encodeURIComponent(document.getElementById('loginpassword').value);\n\n    var loginparameters = 'loginemail=' + loginemail + '&loginpassword=' + loginpassword;\n    var xhr = new XMLHttpRequest();\n    xhr.onreadystatechange = function (e) {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        loginform.innerHTML = xhr.responseText;\n      }\n    };\n    xhr.open(loginform.method, loginform.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    xhr.send(loginparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-login-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-modal.js":
/*!****************************************!*\
  !*** ./src/js/modules/handle-modal.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var vanillaModal = new VanillaModal.default({\n    modal: '.modal',\n    modalInner: '.modal-inner',\n    modalContent: '.modal-content',\n    open: '[data-modal-open]',\n    close: '[data-modal-close]',\n    page: 'body',\n    loadClass: 'vanilla-modal',\n    class: 'modal-visible',\n    clickOutside: true,\n    closeKeys: [27],\n    transitions: true,\n    onBeforeOpen: null,\n    onBeforeClose: null\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-modal.js?");

/***/ }),

/***/ "./src/js/modules/handle-mslider.js":
/*!******************************************!*\
  !*** ./src/js/modules/handle-mslider.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.mslider').slick({\n    arrows: true,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    //fade: true, \n    dots: true\n    // mobileFirst: true,   \n    // responsive: [\n    //   {\n    //     breakpoint: 767,\n    //     settings: {        \n    //       dots: true\n    //     }\n    //   }\n    // ]\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-mslider.js?");

/***/ }),

/***/ "./src/js/modules/handle-sign-slider.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-sign-slider.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.sign-slider').slick({\n    arrows: true,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    dots: false,\n    mobileFirst: true,\n    responsive: [{\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 1199,\n      settings: {\n        slidesToShow: 3\n      }\n    }]\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-sign-slider.js?");

/***/ }),

/***/ "./src/js/modules/handle-sign-up-form.js":
/*!***********************************************!*\
  !*** ./src/js/modules/handle-sign-up-form.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var signupform = document.getElementById(\"sign-up-form\");\n  signupform && signupform.addEventListener(\"submit\", checkSignupForm);\n  function checkSignupForm(e) {\n    submitSignupForm(e);\n    return false;\n  }\n  function submitSignupForm(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    var signupname = encodeURIComponent(document.getElementById('signupname').value);\n    var signupemail = encodeURIComponent(document.getElementById('signupemail').value);\n    var signuppassword = encodeURIComponent(document.getElementById('signuppassword').value);\n\n    var signupparameters = 'signupname=' + signupname + '&signupemail=' + signupemail + '&signuppassword=' + signuppassword;\n    var xhr = new XMLHttpRequest();\n    xhr.onreadystatechange = function (e) {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        signupform.innerHTML = xhr.responseText;\n      }\n    };\n    xhr.open(signupform.method, signupform.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    xhr.send(signupparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-sign-up-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-submit-news.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-submit-news.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var formNews = document.getElementById(\"news-form\"),\n      message = document.getElementById(\"news-form-message\");\n  formNews && formNews.addEventListener(\"submit\", checkNewsForm);\n  function checkNewsForm(e) {\n    submitNewsForm(e);\n    return false;\n  }\n  function submitNewsForm(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    var email = encodeURIComponent(document.getElementById('news-e-mail').value);\n    var newsparameters = 'email=' + email;\n    var xhr = new XMLHttpRequest();\n    xhr.onreadystatechange = function (e) {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        formNews.innerHTML = xhr.responseText;\n      }\n    };\n    xhr.open(formNews.method, formNews.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    xhr.send(newsparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-submit-news.js?");

/***/ })

/******/ });