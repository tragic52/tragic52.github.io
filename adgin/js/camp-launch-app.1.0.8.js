// window["CampLaunchApp"] =
// /******/ (function(modules) { // webpackBootstrap
// /******/ 	// The module cache
// /******/ 	var installedModules = {};
// /******/
// /******/ 	// The require function
// /******/ 	function __webpack_require__(moduleId) {
// /******/
// /******/ 		// Check if module is in cache
// /******/ 		if(installedModules[moduleId]) {
// /******/ 			return installedModules[moduleId].exports;
// /******/ 		}
// /******/ 		// Create a new module (and put it into the cache)
// /******/ 		var module = installedModules[moduleId] = {
// /******/ 			i: moduleId,
// /******/ 			l: false,
// /******/ 			exports: {}
// /******/ 		};
// /******/
// /******/ 		// Execute the module function
// /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
// /******/
// /******/ 		// Flag the module as loaded
// /******/ 		module.l = true;
// /******/
// /******/ 		// Return the exports of the module
// /******/ 		return module.exports;
// /******/ 	}
// /******/
// /******/
// /******/ 	// expose the modules object (__webpack_modules__)
// /******/ 	__webpack_require__.m = modules;
// /******/
// /******/ 	// expose the module cache
// /******/ 	__webpack_require__.c = installedModules;
// /******/
// /******/ 	// define getter function for harmony exports
// /******/ 	__webpack_require__.d = function(exports, name, getter) {
// /******/ 		if(!__webpack_require__.o(exports, name)) {
// /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
// /******/ 		}
// /******/ 	};
// /******/
// /******/ 	// define __esModule on exports
// /******/ 	__webpack_require__.r = function(exports) {
// /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
// /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
// /******/ 		}
// /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
// /******/ 	};
// /******/
// /******/ 	// create a fake namespace object
// /******/ 	// mode & 1: value is a module id, require it
// /******/ 	// mode & 2: merge all properties of value into the ns
// /******/ 	// mode & 4: return value when already ns object
// /******/ 	// mode & 8|1: behave like require
// /******/ 	__webpack_require__.t = function(value, mode) {
// /******/ 		if(mode & 1) value = __webpack_require__(value);
// /******/ 		if(mode & 8) return value;
// /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
// /******/ 		var ns = Object.create(null);
// /******/ 		__webpack_require__.r(ns);
// /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
// /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
// /******/ 		return ns;
// /******/ 	};
// /******/
// /******/ 	// getDefaultExport function for compatibility with non-harmony modules
// /******/ 	__webpack_require__.n = function(module) {
// /******/ 		var getter = module && module.__esModule ?
// /******/ 			function getDefault() { return module['default']; } :
// /******/ 			function getModuleExports() { return module; };
// /******/ 		__webpack_require__.d(getter, 'a', getter);
// /******/ 		return getter;
// /******/ 	};
// /******/
// /******/ 	// Object.prototype.hasOwnProperty.call
// /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
// /******/
// /******/ 	// __webpack_public_path__
// /******/ 	__webpack_require__.p = "";
// /******/
// /******/
// /******/ 	// Load entry module and return exports
// /******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
// /******/ })
// /************************************************************************/
// /******/ ({

// /***/ "./src/index.js":
// /*!**********************!*\
//   !*** ./src/index.js ***!
//   \**********************/
// /*! no static exports found */
// /***/ (function(module, exports, __webpack_require__) {

// "use strict";


// Object.defineProperty(exports, "__esModule", {
//   value: true
// });

// var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// var _launch = __webpack_require__(/*! ./launch */ "./src/launch.js");

// window.Camp = window.Camp || {};
// window.Camp = _extends({}, window.Camp, {
//   launchApp: _launch.launchApp,
//   launchCamp: _launch.launchCamp
// });

// exports.default = {
//   launchApp: _launch.launchApp,
//   launchCamp: _launch.launchCamp
// };
// module.exports = exports.default;

// /***/ }),

// /***/ "./src/launch.js":
// /*!***********************!*\
//   !*** ./src/launch.js ***!
//   \***********************/
// /*! no static exports found */
// /***/ (function(module, exports, __webpack_require__) {

// "use strict";


// Object.defineProperty(exports, "__esModule", {
//   value: true
// });

// var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// exports.launchApp = launchApp;
// exports.launchCamp = launchCamp;

// var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

// var utils = _interopRequireWildcard(_utils);

// function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// // 默认是营地的appConf
// var defaultAppConf = {
//   packageName: 'com.tencent.gamehelper.smoba', // 包名
//   iosUniversalLink: '', // IOS universal link
//   appSchemeIos: 'smobagamehelper://infonews', // IOS app scheme
//   appSchemeAndroid: 'smobagamehelper://welcome', // 安卓app scheme
//   iosDownloadUrl: 'https://itunes.apple.com/cn/app/id1102305688', // 启动APP失败后跳到下载页面（IOS）
//   androidDownloadUrl: 'https://image.ttwz.qq.com/apks/TTWZ_android_4008_20001.apk', // 启动APP失败后跳到下载页面（安卓）
//   androidShop: 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.gamehelper.smoba' // 应用宝下载地址
// };

// /**
//  * H5打开营地APP
//  * @param {Object} appConfig
//  * @example
//  * 一、script引入方式：
//  * <script type="text/javascript" src="https://image.ttwz.qq.com/h5/webdist/sdk/wzyd-h5-helpers.1.0.0.js"></script>
//  * <script>
//  * function handleOpenButtonClick(){
//  *  launchApp()
//  *  launchApp({
//  *     packageName: 'air.tv.douyu.android',
//  *     iosUniversalLink: 'https://m.douyu.com/?type=2&url=https://www.douyu.com/topic/template/h5/20200416wuwu&isUl=1',
//  *     appSchemeIos: '',
//  *     appSchemeAndroid: 'dydeeplink://?type=2&url=https%3a%2f%2fwww.douyu.com%2ftopic%2fh5%2fryzlH5',
//  *     iosDownloadUrl: 'https://apps.apple.com/cn/app/id863882795',
//  *     androidShop: 'https://a.app.qq.com/o/simple.jsp?pkgname=air.tv.douyu.android'
//  *   })
//  * }
//  * </script>
//  * @see ios路由跳转协议请参考： http://tapd.oa.com/smoba_assistor/markdown_wikis/?#1020359852011004819
//  */
// function launchApp() {
//   var appConf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAppConf;

//   var appSchemeAndroid = appConf.appSchemeAndroid;
//   var appSchemeIos = appConf.appSchemeIos;
//   var iosUniversalLink = appConf.iosUniversalLink;
//   var packageName = appConf.packageName;

//   // 如果是ios系统，并且提供了iosUniversalLink，直接跳转universallink
//   if (utils.isIos() && iosUniversalLink) {
//     location.href = iosUniversalLink;
//     return true;
//   }

//   var wxPackageUrl = (utils.isIos() ? appSchemeIos : appSchemeAndroid).replace(/:\/\/.*/, '');
//   var timeoutToDownload = void 0;
//   var isLaunched = void 0;
//   var hidden = utils.visibility().hidden;
//   var visibilityChange = utils.visibility().visibilityChange;

//   // 一、如果在营地内
//   if (utils.isInCampApp()) {
//     var _scheme = utils.isIos() ? appSchemeIos : appSchemeAndroid;
//     if (/smobagamehelper:\/\//.test(_scheme)) {
//       window.location.href = _scheme; // 营地内自己跳自己
//     } else {
//       window.OnEnterForeground = onShow;
//       window.OnEnterBackground = onHide;
//       runScheme()(); // 营地内跳其他app
//     }
//   } else if (utils.isGameBrowserWSQ()) {
//     // 二、如果在游戏微社区浏览器内
//     if (typeof customBrowserInterface !== 'undefined') {
//       openInGameWSQ();
//     } else {
//       utils.loadJS('https://ossweb-img.qq.com/images/js/ingame_sdk/browser_adapt.js', function () {
//         openInGameWSQ();
//       });
//     }
//   } else {
//     // 三、不在营地及游戏微社区浏览器内（手机浏览器、微信、手Q、游戏msdk浏览器内）
//     if (hidden) {
//       document.addEventListener(visibilityChange, function (event) {
//         var isHidden = utils.isQQ() ? event.hidden : document[hidden];
//         if (isHidden) {
//           onHide();
//         } else {
//           onShow();
//         }
//       }, false);
//     } else {
//       window.addEventListener('blur', onHide, false);
//       window.addEventListener('focus', onShow, false);
//     }
//     if (utils.isWx()) {
//       var useWxApi = utils.versionCompare(utils.getClientVersion(false), '6.5.5');
//       var callback = useWxApi > 0 ? runSchemeByWxApi() : runScheme();
//       utils.loadJS('//res.wx.qq.com/open/js/jweixin-1.0.0.js', callback);
//     } else if (utils.isQQ()) {
//       utils.loadJS('https://pub.idqqimg.com/qqmobile/qqapi.js?_bid=152', runScheme());
//     } else {
//       runScheme()();
//     }
//   }
//   // 游戏中打开
//   function openInGameWSQ() {
//     // 微社区浏览器引擎，这个用他们的sdk去启动营地app就可以（http://alltest.ingame.qq.com/faniuxu/readme.html）
//     // 微社区提供判断是否安装APP api
//     if (Number(window.customBrowserInterface.hadInstalled(utils.isAndroid() ? appSchemeAndroid : appSchemeIos)) === 1) {
//       runScheme()();
//     } else {
//       launchFailCb();
//     }
//   }

//   function onHide() {
//     isLaunched = true;
//     clearTimeout(timeoutToDownload);
//   }
//   function onShow() {
//     isLaunched = false;
//   }
//   // 打开失败跳转下载链接
//   function launchFailCb() {
//     window.location.href = utils.isIos() ? appConf.iosDownloadUrl : appConf.androidShop || appConf.androidDownloadUrl;
//   }
//   // 微信中打开
//   function runSchemeByWxApi() {
//     return function () {
//       var _launchApp = function _launchApp() {
//         var openUrl = utils.isIos() ? appSchemeIos : appSchemeAndroid;
//         window.WeixinJSBridge && window.WeixinJSBridge.invoke('launchApplication', {
//           schemeUrl: openUrl,
//           showLaunchFaildToast: false
//         }, function (res) {
//           if (res.err_msg === 'launchApplication:fail') {
//             launchFailCb();
//           }
//         });
//       };
//       function callback() {
//         if (utils.isAndroid()) {
//           window.WeixinJSBridge.invoke('getInstallState', {
//             packageUrl: wxPackageUrl + '://', // wxAppID + '://',
//             packageName: packageName
//           }, function (res) {
//             if (/get_install_state:yes/.test(res.err_msg)) {
//               _launchApp();
//             } else {
//               launchFailCb();
//             }
//           });
//         } else {
//           _launchApp();
//         }
//       }
//       if ((typeof WeixinJSBridge === 'undefined' ? 'undefined' : _typeof(WeixinJSBridge)) === 'object' && typeof window.WeixinJSBridge.invoke === 'function') {
//         callback();
//       } else {
//         if (document.addEventListener) {
//           document.addEventListener('WeixinJSBridgeReady', callback, false);
//         } else if (document.attachEvent) {
//           document.attachEvent('WeixinJSBridgeReady', callback);
//           document.attachEvent('onWeixinJSBridgeReady', callback);
//         }
//       }
//     };
//   }
//   // 普通浏览器打开
//   function runScheme() {
//     return function () {
//       var schemeUrl = utils.isIos() ? appSchemeIos : appSchemeAndroid;
//       if (utils.isIos() || utils.isAndroid()) {
//         window.location.href = schemeUrl;
//       } else {
//         launchFailCb();
//       }
//       timeoutToDownload = setTimeout(function () {
//         !isLaunched && launchFailCb();
//       }, 3000);
//     };
//   }
// }

// /**
//  * 拉起王者营地APP
//  * @param {*} modParams 模块参数，如（battlehome?userid=544185773&roleid=1954314377）
//  */
// function launchCamp(modParams) {
//   var appConf = defaultAppConf;
//   if (modParams) {
//     appConf = _extends({}, appConf, {
//       appSchemeIos: 'smobagamehelper://' + modParams,
//       appSchemeAndroid: 'smobagamehelper://' + modParams
//     });
//   }
//   launchApp(appConf);
// }

// /***/ }),

// /***/ "./src/utils.js":
// /*!**********************!*\
//   !*** ./src/utils.js ***!
//   \**********************/
// /*! no static exports found */
// /***/ (function(module, exports, __webpack_require__) {

// "use strict";


// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.isQQ = isQQ;
// exports.isWx = isWx;
// exports.isIos = isIos;
// exports.isWeibo = isWeibo;
// exports.isIpad = isIpad;
// exports.isAndroid = isAndroid;
// exports.isMobile = isMobile;
// exports.isMSDK = isMSDK;
// exports.getClientVersion = getClientVersion;
// exports.versionCompare = versionCompare;
// exports.loadJS = loadJS;
// exports.getGameHelperVersionCode = getGameHelperVersionCode;
// exports.visibility = visibility;
// exports.isGameBrowserWSQ = isGameBrowserWSQ;
// exports.isGameBrowserMSDK = isGameBrowserMSDK;
// exports.isInCampApp = isInCampApp;
// // 获取打开的场景
// var userAgent = window.navigator && navigator.userAgent;

// function isQQ() {
//   return !!userAgent.match(/QQ\//);
// }
// function isWx() {
//   return !!userAgent.match(/micromessenger/i);
// }
// function isIos() {
//   return (/.*?(iPad|iPhone|iPod).*/.test(userAgent)
//   );
// }
// function isWeibo() {
//   return (/Weibo/.test(userAgent)
//   );
// }
// function isIpad() {
//   return (/.*?(iPad).*/.test(userAgent)
//   );
// }
// function isAndroid() {
//   return (/.*(Android).*/.test(userAgent)
//   );
// }
// function isMobile() {
//   return !!(isAndroid() || isIos());
// }
// function isMSDK() {
//   return (/MSDK\//.test(userAgent)
//   );
// }
// function getClientVersion(number) {
//   var mat = userAgent.match(/MicroMessenger\/([\d\.]+)/i);
//   var version = void 0;
//   if (mat && mat.length > 1) version = mat[1];
//   if (!version) return 0;
//   return number ? version.replace(/\./g, '') : version;
// }
// function versionCompare(vCurr, vNext) {
//   var versionCurr = vCurr.split('.');
//   var versionNext = vNext.split('.');
//   var len = Math.min(versionCurr.length, versionNext.length);
//   for (var i = 0; i < len; i++) {
//     var left = parseInt(versionCurr[i], 10) - parseInt(versionNext[i], 10);
//     if (left !== 0) return left;
//   }
//   return versionCurr.length - versionNext.length;
// }
// function loadJS(filename, finish_cb) {
//   var d = document;
//   var s = document.createElement('script');
//   s.async = false;
//   var loadedHandler = function loadedHandler() {
//     finish_cb(0);
//     s.parentNode.removeChild(s);
//     removeEventListener('load', loadedHandler, false);
//   };
//   var errorHandler = function errorHandler() {
//     s.parentNode.removeChild(s);
//     finish_cb(-1);
//   };
//   s.addEventListener('load', loadedHandler, false);
//   s.addEventListener('error', errorHandler, false);
//   s.src = filename;
//   d.body.appendChild(s);
// }
// function getGameHelperVersionCode(callback) {
//   if (typeof window.GameHelper === 'undefined' || typeof window.GameHelper.getAppVersionCode === 'undefined' || typeof window.GameHelper.getAppVersionName === 'undefined') {
//     return callback(0, 0);
//   }
//   if (isIos()) {
//     window.GameHelper.getAppVersionName(function (vname) {
//       window.GameHelper.getAppVersionCode(function (vcode) {
//         var versioncode = String(vcode);
//         var versionname = String(vname);
//         if (versioncode.indexOf('.') !== -1) {
//           var tempcode = versioncode;
//           versioncode = versionname;
//           versionname = tempcode;
//         }
//         var versionnum = parseFloat(versionname.substring(0, 3));
//         versioncode = parseInt(versioncode, 10);
//         return callback(versionnum, versioncode);
//       });
//     });
//   } else {
//     var versioncode = String(window.GameHelper.getAppVersionCode());
//     var versionname = String(window.GameHelper.getAppVersionName());
//     if (versioncode.indexOf('.') !== -1) {
//       var tempcode = versioncode;
//       versioncode = versionname;
//       versionname = tempcode;
//     }
//     var versionnum = parseFloat(versionname.substring(0, 3));
//     versioncode = parseInt(versioncode, 10);
//     return callback(versionnum, versioncode);
//   }
// }
// function visibility() {
//   var hidden = '';
//   var visibilityChange = '';
//   if (document.hidden !== undefined) {
//     hidden = 'hidden';
//     visibilityChange = 'visibilitychange';
//   } else if (document.mozHidden !== undefined) {
//     hidden = 'mozHidden';
//     visibilityChange = 'mozvisibilitychange';
//   } else if (document.msHidden !== undefined) {
//     hidden = 'msHidden';
//     visibilityChange = 'msvisibilitychange';
//   } else if (document.webkitHidden !== undefined) {
//     hidden = 'webkitHidden';
//     visibilityChange = 'webkitvisibilitychange';
//   }
//   if (isQQ()) {
//     visibilityChange = 'qbrowserVisibilityChange';
//   }
//   return {
//     hidden: hidden,
//     visibilityChange: visibilityChange
//   };
// }

// // 如果在游戏内需要特殊处理
// // 游戏内微社区浏览器有自己的浏览器引擎和自己的拉取app方法，游戏内普通浏览器则直接location.href跳转
// // 微社区浏览器引擎，这个用他们的sdk去启动营地app就可以（http://alltest.ingame.qq.com/faniuxu/readme.html）
// function isGameBrowserWSQ() {
//   return (/ingame/.test(userAgent.toLowerCase())
//   );
// }
// // 游戏内 - msdk浏览器引擎
// // 内置普通浏览器，也是用location.href去启动营地app
// function isGameBrowserMSDK() {
//   return (/msdkdevice/.test(userAgent.toLowerCase())
//   );
// }

// /**
//  * 是否是在app内
//  * 理想情况是通过userAgent即时判断，但老版本android部分页面没有该userAgent，辅以其他手段判断
//  * @returns true|false
//  */
// function isInCampApp() {
//   if (userAgent.indexOf('window.GameHelper') > -1 || userAgent.indexOf('JsCommonApi') > -1 || typeof window.GameHelper !== 'undefined' || typeof window.JsCommonApi !== 'undefined' || location.href.indexOf('source=smoba_zhushou') > -1 // 早期android版本赛事模块的webview中，userAgent没有GameHelper与JsCommonApi字符串
//   ) {
//       return true;
//     }
//   return false;
// }

// /***/ })

// /******/ });