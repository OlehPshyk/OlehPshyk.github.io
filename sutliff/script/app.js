!function(o){var t={};function r(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return o[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=o,r.c=t,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)r.d(o,t,function(e){return n[e]}.bind(null,t));return o},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s="./src/js/app.js")}({"./src/js/app.js":function(module,exports,__webpack_require__){"use strict";eval('\n\n__webpack_require__(/*! ./modules/handle-loading */ "./src/js/modules/handle-loading.js");\n\n__webpack_require__(/*! ./modules/mobile-menu.js */ "./src/js/modules/mobile-menu.js");\n\n//# sourceURL=webpack:///./src/js/app.js?')},"./src/js/modules/handle-loading.js":function(module,exports,__webpack_require__){"use strict";eval("\n\n$('.main').imagesLoaded().done(function () {\n  //console.log('loaded')\n  window.setTimeout(function () {\n    $(\".loading-wrapper\").fadeOut();\n  }, 1000);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-loading.js?")},"./src/js/modules/mobile-menu.js":function(module,exports,__webpack_require__){"use strict";eval('\n\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n\n  //OPEN-CLOSE MOBILE MENU\n  var openMobileMenu = function openMobileMenu() {\n    mobileMenuContainer && mobileMenuContainer.classList.add("open");\n  };\n  var closeMobileMenu = function closeMobileMenu() {\n    mobileMenuContainer && mobileMenuContainer.classList.contains("open") && mobileMenuContainer.classList.remove("open");\n  };\n\n  var hamburger = document.getElementById(\'hamburger\'),\n      mobileMenuContainer = document.getElementById(\'mobile-menu-container\'),\n      closeMobileMenuContainer = document.getElementById(\'close-mobile-menu-container\');\n\n  hamburger && hamburger.addEventListener(\'click\', function () {\n    return openMobileMenu();\n  });\n  closeMobileMenuContainer && closeMobileMenuContainer.addEventListener(\'click\', function () {\n    return closeMobileMenu();\n  });\n\n  //DROPDOWN\n  var dropdown = document.getElementsByClassName("drop-btn");\n\n  for (var i = 0; i < dropdown.length; i++) {\n    dropdown[i].addEventListener("click", function () {\n      this.classList.toggle("open");\n      var dropdownContent = this.nextElementSibling;\n      if (dropdownContent.style.display === "block") {\n        dropdownContent.style.display = "none";\n      } else {\n        dropdownContent.style.display = "block";\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/mobile-menu.js?')}});