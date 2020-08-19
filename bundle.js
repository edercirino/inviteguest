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
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Host = /*#__PURE__*/function () {\n  function Host() {\n    _classCallCheck(this, Host);\n\n    this.hostName;\n  }\n\n  _createClass(Host, [{\n    key: \"create\",\n    value: function create(hostName) {\n      if (hostName == \"\") {\n        alert(\"Digite um nome.\");\n      } else {\n        localStorage.setItem(\"hostName\", JSON.stringify(hostName));\n        document.getElementById(\"btnAddHostName\").style.display = \"none\";\n        document.getElementById(\"hostNameInput\").value = \"\";\n        document.getElementById(\"btnDelHostName\").style.display = \"block\";\n        window.location.reload();\n      }\n    }\n  }, {\n    key: \"list\",\n    value: function list() {\n      var hostName = localStorage.getItem(\"hostName\");\n\n      if (hostName) {\n        document.getElementById(\"btnDelHostName\").style.display = \"block\";\n        document.getElementById(\"btnAddHostName\").style.display = \"none\";\n        document.getElementById(\"hostNameInput\").value = JSON.parse(hostName);\n      }\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete() {\n      localStorage.removeItem(\"hostName\");\n      document.getElementById(\"btnAddHostName\").style.display = \"block\";\n      document.getElementById(\"btnDelHostName\").style.display = \"none\";\n    }\n  }]);\n\n  return Host;\n}();\n\nvar objHost = new Host();\n\ndocument.getElementById(\"btnAddHostName\").onclick = function () {\n  var nameHost = document.getElementById(\"hostNameInput\").value;\n  objHost.create(nameHost);\n};\n\nobjHost.list();\n\ndocument.getElementById(\"btnDelHostName\").onclick = function () {\n  document.getElementById(\"hostNameInput\").value = \"\";\n  objHost[\"delete\"]();\n}; // -----------------------------------------------------------------------------\n\n\nvar Receptionist = /*#__PURE__*/function () {\n  function Receptionist() {\n    _classCallCheck(this, Receptionist);\n\n    this.receptionistName;\n  }\n\n  _createClass(Receptionist, [{\n    key: \"create\",\n    value: function create(receptionistName) {\n      if (receptionistName == \"\") {\n        alert(\"Digite um nome.\");\n      } else {\n        localStorage.setItem(\"receptionistName\", JSON.stringify(receptionistName));\n        document.getElementById(\"btnAddReceptionistName\").style.display = \"none\";\n        document.getElementById(\"receptionistNameInput\").value = \"\";\n        document.getElementById(\"btnDelReceptionistName\").style.display = \"block\";\n        window.location.reload();\n      }\n    }\n  }, {\n    key: \"list\",\n    value: function list() {\n      var receptionistName = localStorage.getItem(\"receptionistName\");\n\n      if (receptionistName) {\n        document.getElementById(\"receptionistNameInput\").value = JSON.parse(receptionistName);\n        document.getElementById(\"btnDelReceptionistName\").style.display = \"block\";\n        document.getElementById(\"btnAddReceptionistName\").style.display = \"none\";\n      }\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete() {\n      localStorage.removeItem(\"receptionistName\");\n      document.getElementById(\"btnAddReceptionistName\").style.display = \"block\";\n      document.getElementById(\"btnDelReceptionistName\").style.display = \"none\";\n    }\n  }]);\n\n  return Receptionist;\n}();\n\nvar objReceptionist = new Receptionist();\n\ndocument.getElementById(\"btnAddReceptionistName\").onclick = function () {\n  var nameRecept = document.getElementById(\"receptionistNameInput\").value;\n  objReceptionist.create(nameRecept);\n};\n\nobjReceptionist.list();\n\ndocument.getElementById(\"btnDelReceptionistName\").onclick = function () {\n  document.getElementById(\"receptionistNameInput\").value = \"\";\n  objReceptionist[\"delete\"]();\n}; // -----------------------------------------------------------------------------\n\n\nvar Guest = /*#__PURE__*/function () {\n  function Guest() {\n    _classCallCheck(this, Guest);\n\n    this.guests = [];\n  }\n\n  _createClass(Guest, [{\n    key: \"create\",\n    value: function create(guestName) {\n      if (guestName == \"\") {\n        alert(\"Digite um nome.\");\n      } else {\n        // add guest to the list\n        var guestNameInput = document.getElementById(\"guestNameInput\");\n        var elGuestNameInput = guestNameInput.value;\n        this.guests.push({\n          name: elGuestNameInput\n        });\n        localStorage.setItem(\"guestName\", JSON.stringify(this.guests));\n        guestNameInput.value = \"\";\n        window.location.reload();\n      }\n    }\n  }, {\n    key: \"list\",\n    value: function list() {\n      // load the list\n      this.guests = JSON.parse(localStorage.getItem(\"guestName\")) || [];\n      var elNameList = document.getElementById(\"guestNameList\");\n      elNameList.innerHTML = \"\";\n\n      var _iterator = _createForOfIteratorHelper(this.guests),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var guest = _step.value;\n          var elTr = document.createElement(\"tr\");\n          var elTd1 = document.createElement(\"td\"); //guest name\n\n          var elTd2 = document.createElement(\"td\"); //button del\n\n          var elTdAEdit = document.createElement(\"a\");\n          elTdAEdit.setAttribute(\"href\", \"#\");\n          elTdAEdit.classList.add(\"btn\", \"btn-primary\"); //Adding the class\n\n          var elTdADel = document.createElement(\"a\");\n          elTdADel.setAttribute(\"href\", \"#\"); //Adding the class\n\n          elTdADel.setAttribute(\"onclick\", \"objGuest.delete(\" + guest.name + \")\"); //deleting\n\n          elTdADel.classList.add(\"btn\", \"btn-danger\", \"mx-1\"); //Adding the class\n\n          var elTdEdit = document.createTextNode(\"Editar\");\n          var elTdDel = document.createTextNode(\"Excluir\");\n          var elGuestName = document.createTextNode(guest.name);\n          elTd1.setAttribute(\"id\", guest.name); // name of the guest\n\n          elTd1.appendChild(elGuestName);\n          elTr.appendChild(elTd1);\n          elNameList.appendChild(elTr); // delete button\n\n          elTdADel.appendChild(elTdDel);\n          elTd2.appendChild(elTdADel);\n          elTr.appendChild(elTd2);\n          elNameList.appendChild(elTr);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(id) {\n      var guest = JSON.parse(localStorage.getItem(\"guestName\"));\n      var guestId = id.textContent; //get the content(name)\n\n      var guestRemoved = guest.filter(function (id) {\n        return id.name !== guestId;\n      });\n      localStorage.setItem(\"guestName\", JSON.stringify(guestRemoved));\n      window.location.reload();\n      console.log(guestRemoved);\n    }\n  }]);\n\n  return Guest;\n}();\n\nvar objGuest = new Guest();\n\ndocument.getElementById(\"btnAddGuest\").onclick = function () {\n  var guestName = document.getElementById(\"guestNameInput\").value;\n  objGuest.create(guestName);\n};\n\nobjGuest.list();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });