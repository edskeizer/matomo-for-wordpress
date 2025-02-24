(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["WordPress"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["WordPress"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a5a2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "../plugins/WordPress/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a5a2":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a5a2__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "UseOptOutShortCode", function() { return /* reexport */ UseOptOutShortCode; });
__webpack_require__.d(__webpack_exports__, "PluginMeasurableSettings", function() { return /* reexport */ PluginMeasurableSettings; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!../plugins/WordPress/vue/src/UseOptOutShortCode/UseOptOutShortCode.vue?vue&type=template&id=70cf818a

var _hoisted_1 = {
  class: "WordPressOptOutCustomizer"
};
var _hoisted_2 = ["innerHTML"];

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_4 = {
  style: {
    "margin": "20px"
  }
};
var _hoisted_5 = {
  style: {
    "list-style": "disc"
  }
};

var _hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("code", null, "[matomo_opt_out language=de]", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('WordPress_UseShortCode')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    innerHTML: _ctx.$sanitize(_ctx.shortCodeDesc1)
  }, null, 8, _hoisted_2), _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('WordPress_UseShortCodeDesc2')) + ":", 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('WordPress_UseShortCodeOptionLanguage')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('WordPress_Example')) + ": ", 1), _hoisted_6])]);
}
// CONCATENATED MODULE: ../plugins/WordPress/vue/src/UseOptOutShortCode/UseOptOutShortCode.vue?vue&type=template&id=70cf818a

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!../plugins/WordPress/vue/src/UseOptOutShortCode/UseOptOutShortCode.vue?vue&type=script&lang=ts


/* harmony default export */ var UseOptOutShortCodevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  computed: {
    shortCodeDesc1: function shortCodeDesc1() {
      return Object(external_CoreHome_["translate"])('WordPress_UseShortCodeDesc1', '<code>[matomo_opt_out]</code>');
    }
  }
}));
external_CoreHome_["Matomo"].on('PrivacyManager.UsersOptOut.preface', function (components) {
  components.push({
    plugin: 'WordPress',
    component: 'UseOptOutShortCode'
  });
});
// CONCATENATED MODULE: ../plugins/WordPress/vue/src/UseOptOutShortCode/UseOptOutShortCode.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ../plugins/WordPress/vue/src/UseOptOutShortCode/UseOptOutShortCode.vue



UseOptOutShortCodevue_type_script_lang_ts.render = render

/* harmony default export */ var UseOptOutShortCode = (UseOptOutShortCodevue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!../plugins/WordPress/vue/src/PluginMeasurableSettings/PluginMeasurableSettings.vue?vue&type=template&id=2736ad7e

var PluginMeasurableSettingsvue_type_template_id_2736ad7e_hoisted_1 = {
  class: "pluginMeasurableSettings",
  ref: "root"
};
var PluginMeasurableSettingsvue_type_template_id_2736ad7e_hoisted_2 = ["innerHTML"];
var PluginMeasurableSettingsvue_type_template_id_2736ad7e_hoisted_3 = {
  key: 1,
  class: "settingsFormFooter row"
};
var PluginMeasurableSettingsvue_type_template_id_2736ad7e_hoisted_4 = {
  class: "col s12"
};
var PluginMeasurableSettingsvue_type_template_id_2736ad7e_hoisted_5 = ["disabled", "value"];
function PluginMeasurableSettingsvue_type_template_id_2736ad7e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");

  var _component_GroupedSettings = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("GroupedSettings");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", PluginMeasurableSettingsvue_type_template_id_2736ad7e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isLoading
  }, null, 8, ["loading"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_GroupedSettings, {
    "group-name": _ctx.pluginName,
    settings: _ctx.measurableSettings,
    "all-setting-values": _ctx.settingValues,
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.settingValues["".concat(_ctx.pluginName, ".").concat($event.name)] = $event.value;
    })
  }, null, 8, ["group-name", "settings", "all-setting-values"]), !_ctx.isLoading && !_ctx.measurableSettings.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("p", {
    key: 0,
    innerHTML: _ctx.$sanitize(_ctx.noMeasurableSettingsAvailableText),
    class: "noMeasurableSettingsAvailable"
  }, null, 8, PluginMeasurableSettingsvue_type_template_id_2736ad7e_hoisted_2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.isLoading && _ctx.measurableSettings.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", PluginMeasurableSettingsvue_type_template_id_2736ad7e_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", PluginMeasurableSettingsvue_type_template_id_2736ad7e_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    disabled: _ctx.isSaving,
    type: "submit",
    class: "button-primary",
    value: _ctx.translate('WordPress_SaveChanges'),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.saveSettings();
    })
  }, null, 8, PluginMeasurableSettingsvue_type_template_id_2736ad7e_hoisted_5), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.isLoading]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isSaving,
    "loading-message": "",
    style: {
      "display": "inline-block"
    }
  }, null, 8, ["loading"])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 512);
}
// CONCATENATED MODULE: ../plugins/WordPress/vue/src/PluginMeasurableSettings/PluginMeasurableSettings.vue?vue&type=template&id=2736ad7e

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!../plugins/WordPress/vue/src/PluginMeasurableSettings/PluginMeasurableSettings.vue?vue&type=script&lang=ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ var PluginMeasurableSettingsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    idSite: {
      type: Number,
      required: true
    },
    pluginName: {
      type: String,
      required: true
    }
  },
  components: {
    ActivityIndicator: external_CoreHome_["ActivityIndicator"],
    GroupedSettings: external_CorePluginsAdmin_["GroupedSettings"]
  },
  data: function data() {
    return {
      isSaving: false,
      isLoading: true,
      measurableSettings: [],
      settingValues: {}
    };
  },
  created: function created() {
    var _this = this;

    this.isLoading = true;
    external_CoreHome_["AjaxHelper"].fetch({
      method: 'SitesManager.getSiteSettings',
      idSite: this.idSite
    }).then(function (settings) {
      var settingsForPlugin = settings.find(function (settingsPerPlugin) {
        return settingsPerPlugin.pluginName === _this.pluginName;
      });
      _this.measurableSettings = (settingsForPlugin === null || settingsForPlugin === void 0 ? void 0 : settingsForPlugin.settings) || [];
    }).finally(function () {
      _this.isLoading = false;
    });
  },
  mounted: function mounted() {
    $(this.$refs.root).on('click', '.matomoAdminLink', function (e) {
      if (window.self !== window.top) {
        e.preventDefault();
        window.parent.postMessage('open-matomo-admin', window.location.origin);
      }
    });
  },
  watch: {
    measurableSettings: function measurableSettings(settings) {
      var _this2 = this;

      if (!settings.length) {
        return;
      }

      var settingValues = {};
      settings.forEach(function (setting) {
        settingValues["".concat(_this2.pluginName, ".").concat(setting.name)] = setting.value;
      });
      this.settingValues = settingValues;
    }
  },
  computed: {
    noMeasurableSettingsAvailableText: function noMeasurableSettingsAvailableText() {
      var link = "index.php?".concat(external_CoreHome_["MatomoUrl"].stringify(Object.assign(Object.assign({}, external_CoreHome_["MatomoUrl"].urlParsed.value), {}, {
        module: 'CoreAdminHome',
        action: 'generalSettings'
      })));
      return Object(external_CoreHome_["translate"])('WordPress_NoMeasurableSettingsAvailable', "<a href=\"".concat(link, "\" class=\"matomoAdminLink\">"), '</a>');
    }
  },
  methods: {
    saveSettings: function saveSettings() {
      var _this3 = this;

      if (this.isSaving) {
        return; // saving already in progress
      }

      var values = {
        idSite: this.idSite,
        settingValues: _defineProperty({}, this.pluginName, [])
      }; // process setting values

      Object.entries(this.settingValues).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            fullName = _ref2[0],
            fieldValue = _ref2[1];

        var _fullName$split = fullName.split('.'),
            _fullName$split2 = _slicedToArray(_fullName$split, 2),
            pluginName = _fullName$split2[0],
            name = _fullName$split2[1];

        var settingValues = values.settingValues;

        if (!settingValues[pluginName]) {
          settingValues[pluginName] = [];
        }

        var value = fieldValue;

        if (fieldValue === false) {
          value = '0';
        } else if (fieldValue === true) {
          value = '1';
        } else if (Array.isArray(fieldValue)) {
          value = fieldValue.filter(function (x) {
            return !!x;
          });
        }

        settingValues[pluginName].push({
          name: name,
          value: value
        });
      });
      this.isSaving = true;
      external_CoreHome_["AjaxHelper"].post({
        method: 'SitesManager.updateSite'
      }, values).finally(function () {
        _this3.isSaving = false;
      });
    }
  }
}));
// CONCATENATED MODULE: ../plugins/WordPress/vue/src/PluginMeasurableSettings/PluginMeasurableSettings.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ../plugins/WordPress/vue/src/PluginMeasurableSettings/PluginMeasurableSettings.vue



PluginMeasurableSettingsvue_type_script_lang_ts.render = PluginMeasurableSettingsvue_type_template_id_2736ad7e_render

/* harmony default export */ var PluginMeasurableSettings = (PluginMeasurableSettingsvue_type_script_lang_ts);
// CONCATENATED MODULE: ../plugins/WordPress/vue/src/index.ts
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=WordPress.umd.js.map