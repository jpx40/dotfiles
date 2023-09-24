/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/3rdparty/amplify-store.js":
/*!*******************************************!*\
  !*** ./scripts/3rdparty/amplify-store.js ***!
  \*******************************************/
/***/ (function() {

(function (amplify, undefined) {
  var store = amplify.store = function (key, value, options) {
    var type = store.type;
    if (options && options.type && options.type in store.types) {
      type = options.type;
    }
    return store.types[type](key, value, options || {});
  };
  store.types = {};
  store.type = null;
  store.addType = function (type, storage) {
    if (!store.type) {
      store.type = type;
    }
    store.types[type] = storage;
    store[type] = function (key, value, options) {
      options = options || {};
      options.type = type;
      return store(key, value, options);
    };
  };
  store.error = function () {
    return "amplify.store quota exceeded";
  };
  var rprefix = /^__amplify__/;
  function createFromStorageInterface(storageType, storage) {
    store.addType(storageType, function (key, value, options) {
      var storedValue,
        parsed,
        i,
        remove,
        ret = value,
        now = new Date().getTime();
      if (!key) {
        ret = {};
        remove = [];
        i = 0;
        try {
          // accessing the length property works around a localStorage bug
          // in Firefox 4.0 where the keys don't update cross-page
          // we assign to key just to avoid Closure Compiler from removing
          // the access as "useless code"
          // https://bugzilla.mozilla.org/show_bug.cgi?id=662511
          key = storage.length;
          while (key = storage.key(i++)) {
            if (rprefix.test(key)) {
              parsed = JSON.parse(storage.getItem(key));
              if (parsed.expires && parsed.expires <= now) {
                remove.push(key);
              } else {
                ret[key.replace(rprefix, "")] = parsed.data;
              }
            }
          }
          while (key = remove.pop()) {
            storage.removeItem(key);
          }
        } catch (error) {}
        return ret;
      }

      // protect against name collisions with direct storage
      key = "__amplify__" + key;
      if (value === undefined) {
        storedValue = storage.getItem(key);
        parsed = storedValue ? JSON.parse(storedValue) : {
          expires: -1
        };
        if (parsed.expires && parsed.expires <= now) {
          storage.removeItem(key);
        } else {
          return parsed.data;
        }
      } else {
        if (value === null) {
          storage.removeItem(key);
        } else {
          parsed = JSON.stringify({
            data: value,
            expires: options.expires ? now + options.expires : null
          });
          try {
            storage.setItem(key, parsed);
            // quota exceeded
          } catch (error) {
            // expire old data and try again
            store[storageType]();
            try {
              storage.setItem(key, parsed);
            } catch (error) {
              throw store.error();
            }
          }
        }
      }
      return ret;
    });
  }

  // localStorage + sessionStorage
  // IE 8+, Firefox 3.5+, Safari 4+, Chrome 4+, Opera 10.5+, iPhone 2+, Android 2+
  for (var webStorageType in {
    localStorage: 1,
    sessionStorage: 1
  }) {
    // try/catch for file protocol in Firefox and Private Browsing in Safari 5
    try {
      // Safari 5 in Private Browsing mode exposes localStorage
      // but doesn't allow storing data, so we attempt to store and remove an item.
      // This will unfortunately give us a false negative if we're at the limit.
      window[webStorageType].setItem("__amplify__", "x");
      window[webStorageType].removeItem("__amplify__");
      createFromStorageInterface(webStorageType, window[webStorageType]);
    } catch (e) {}
  }

  // globalStorage
  // non-standard: Firefox 2+
  // https://developer.mozilla.org/en/dom/storage#globalStorage
  if (!store.types.localStorage && window.globalStorage) {
    // try/catch for file protocol in Firefox
    try {
      createFromStorageInterface("globalStorage", window.globalStorage[window.location.hostname]);
      // Firefox 2.0 and 3.0 have sessionStorage and globalStorage
      // make sure we default to globalStorage
      // but don't default to globalStorage in 3.5+ which also has localStorage
      if (store.type === "sessionStorage") {
        store.type = "globalStorage";
      }
    } catch (e) {}
  }

  // userData
  // non-standard: IE 5+
  // http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx
  (function () {
    // IE 9 has quirks in userData that are a huge pain
    // rather than finding a way to detect these quirks
    // we just don't register userData if we have localStorage
    if (store.types.localStorage) {
      return;
    }

    // append to html instead of body so we can do this from the head
    var div = document.createElement("div"),
      attrKey = "amplify";
    div.style.display = "none";
    document.getElementsByTagName("head")[0].appendChild(div);

    // we can't feature detect userData support
    // so just try and see if it fails
    // surprisingly, even just adding the behavior isn't enough for a failure
    // so we need to load the data as well
    try {
      div.addBehavior("#default#userdata");
      div.load(attrKey);
    } catch (e) {
      div.parentNode.removeChild(div);
      return;
    }
    store.addType("userData", function (key, value, options) {
      div.load(attrKey);
      var attr,
        parsed,
        prevValue,
        i,
        remove,
        ret = value,
        now = new Date().getTime();
      if (!key) {
        ret = {};
        remove = [];
        i = 0;
        while (attr = div.XMLDocument.documentElement.attributes[i++]) {
          parsed = JSON.parse(attr.value);
          if (parsed.expires && parsed.expires <= now) {
            remove.push(attr.name);
          } else {
            ret[attr.name] = parsed.data;
          }
        }
        while (key = remove.pop()) {
          div.removeAttribute(key);
        }
        div.save(attrKey);
        return ret;
      }

      // convert invalid characters to dashes
      // http://www.w3.org/TR/REC-xml/#NT-Name
      // simplified to assume the starting character is valid
      // also removed colon as it is invalid in HTML attribute names
      key = key.replace(/[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
      // adjust invalid starting character to deal with our simplified sanitization
      key = key.replace(/^-/, "_-");
      if (value === undefined) {
        attr = div.getAttribute(key);
        parsed = attr ? JSON.parse(attr) : {
          expires: -1
        };
        if (parsed.expires && parsed.expires <= now) {
          div.removeAttribute(key);
        } else {
          return parsed.data;
        }
      } else {
        if (value === null) {
          div.removeAttribute(key);
        } else {
          // we need to get the previous value in case we need to rollback
          prevValue = div.getAttribute(key);
          parsed = JSON.stringify({
            data: value,
            expires: options.expires ? now + options.expires : null
          });
          div.setAttribute(key, parsed);
        }
      }
      try {
        div.save(attrKey);
        // quota exceeded
      } catch (error) {
        // roll the value back to the previous value
        if (prevValue === null) {
          div.removeAttribute(key);
        } else {
          div.setAttribute(key, prevValue);
        }

        // expire old data and try again
        store.userData();
        try {
          div.setAttribute(key, parsed);
          div.save(attrKey);
        } catch (error) {
          // roll the value back to the previous value
          if (prevValue === null) {
            div.removeAttribute(key);
          } else {
            div.setAttribute(key, prevValue);
          }
          throw store.error();
        }
      }
      return ret;
    });
  })();

  // in-memory storage
  // fallback for all browsers to enable the API even if we can't persist data
  (function () {
    var memory = {},
      timeout = {};
    function copy(obj) {
      return obj === undefined ? undefined : JSON.parse(JSON.stringify(obj));
    }
    store.addType("memory", function (key, value, options) {
      if (!key) {
        return copy(memory);
      }
      if (value === undefined) {
        return copy(memory[key]);
      }
      if (timeout[key]) {
        clearTimeout(timeout[key]);
        delete timeout[key];
      }
      if (value === null) {
        delete memory[key];
        return null;
      }
      memory[key] = value;
      if (options.expires) {
        timeout[key] = setTimeout(function () {
          delete memory[key];
          delete timeout[key];
        }, options.expires);
      }
      return value;
    });
  })();
})(this.amplify = this.amplify || {});

/***/ }),

/***/ "./scripts/appUtils/myWin.js":
/*!***********************************!*\
  !*** ./scripts/appUtils/myWin.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myWin": () => (/* binding */ myWin)
/* harmony export */ });
let myWin;
if (typeof window !== 'undefined') {
  myWin = window;
} else {
  myWin = {};
}


/*
const myWin = {};

export { myWin };
*/

/***/ }),

/***/ "./scripts/migrate-storage.js":
/*!************************************!*\
  !*** ./scripts/migrate-storage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runMigration": () => (/* binding */ runMigration)
/* harmony export */ });
/* harmony import */ var _utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/chromeStorage.js */ "./scripts/utils/chromeStorage.js");
/* global chrome */

/* eslint-disable require-atomic-updates */


var USER_PREFERENCE_STORAGE_MODE = 'storage-mode';
var dataMigration = {
  arrPropNames: ['apply-styles-automatically', 'disable-styles', 'language-mode', 'language-mode-non-file', 'last-applied-css', 'live-css-server-hostname', 'live-css-server-port', 'show-line-numbers', 'enable-line-wrap', 'textarea-value', 'ui-position-left', 'ui-position-top', 'ui-size-height', 'ui-size-width', 'use-css-linting', 'file-to-edit', 'watching-css-files'],
  oldDataPrefix: 'MagiCSS-bookmarklet-',
  newDataPrefix: 'live-css-'
};
dataMigration.arrPropNamesForLocalStorage = dataMigration.arrPropNames.map(function (propName) {
  return `__amplify__${dataMigration.oldDataPrefix}${propName}`;
});
dataMigration.arrPropNamesForChromeStorage = dataMigration.arrPropNames.map(function (propName) {
  return `(${window.location.origin}) ${dataMigration.newDataPrefix}${propName}`;
});
var chromeStorageForExtensionData = chrome.storage.sync || chrome.storage.local;
var runMigration = async function () {
  var whichStoreToUse = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageGet)(chromeStorageForExtensionData, USER_PREFERENCE_STORAGE_MODE);
  if (whichStoreToUse === 'localStorage') {
    // do nothing
  } else if (whichStoreToUse === 'chrome.storage.sync') {
    // do nothing
  } else {
    whichStoreToUse = 'chrome.storage.local';
  }
  const migrateDataFromLocalStorageToChromeStorage = async function (chromeStorageType) {
    for (let i = 0; i < dataMigration.arrPropNames.length; i++) {
      let propNameForLocalStorage = dataMigration.arrPropNamesForLocalStorage[i];
      let propNameForChromeStorage = dataMigration.arrPropNamesForChromeStorage[i];
      let valueFromLocalStorage = localStorage[propNameForLocalStorage];
      let valueFromChromeStorage;
      if (chromeStorageType === 'chrome.storage.sync') {
        valueFromChromeStorage = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageSyncGet)(propNameForChromeStorage);
      } else {
        valueFromChromeStorage = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageLocalGet)(propNameForChromeStorage);
      }
      if (!valueFromChromeStorage) {
        let json = {};
        try {
          json = JSON.parse(valueFromLocalStorage);
        } catch (e) {
          // TODO: Handle this error
        }
        if (json.data) {
          if (chromeStorageType === 'chrome.storage.sync') {
            await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageSyncSet)(propNameForChromeStorage, json.data);
          } else {
            await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageLocalSet)(propNameForChromeStorage, json.data);
          }
        }
      }
      delete localStorage[propNameForLocalStorage];
    }
  };
  const migrateDataFromChromeStorageToLocalStorage = async function (chromeStorageType) {
    for (let i = 0; i < dataMigration.arrPropNames.length; i++) {
      let propNameForLocalStorage = dataMigration.arrPropNamesForLocalStorage[i];
      let propNameForChromeStorage = dataMigration.arrPropNamesForChromeStorage[i];
      let valueFromLocalStorage = localStorage[propNameForLocalStorage];
      let valueFromChromeStorage;
      if (chromeStorageType === 'chrome.storage.sync') {
        valueFromChromeStorage = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageSyncGet)(propNameForChromeStorage);
      } else {
        valueFromChromeStorage = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageLocalGet)(propNameForChromeStorage);
      }
      if (!valueFromLocalStorage) {
        if (valueFromChromeStorage) {
          localStorage[propNameForLocalStorage] = JSON.stringify({
            data: valueFromChromeStorage,
            expires: null
          });
        }
      }
      if (typeof valueFromChromeStorage !== 'undefined') {
        if (chromeStorageType === 'chrome.storage.sync') {
          await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageSyncRemove)(propNameForChromeStorage);
        } else {
          await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageLocalRemove)(propNameForChromeStorage);
        }
      }
    }
  };
  const migrateDataFromChromeStorageToChromeStorage = async function (sourceChromeStorageType, destinationChromeStorageType) {
    for (let i = 0; i < dataMigration.arrPropNames.length; i++) {
      let propNameForChromeStorage = dataMigration.arrPropNamesForChromeStorage[i];
      let valueFromSourceStorage;
      if (sourceChromeStorageType === 'chrome.storage.sync') {
        valueFromSourceStorage = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageSyncGet)(propNameForChromeStorage);
      } else {
        valueFromSourceStorage = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageLocalGet)(propNameForChromeStorage);
      }
      let valueFromDestinationStorage;
      if (destinationChromeStorageType === 'chrome.storage.sync') {
        valueFromDestinationStorage = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageSyncGet)(propNameForChromeStorage);
      } else {
        valueFromDestinationStorage = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageLocalGet)(propNameForChromeStorage);
      }
      if (!valueFromDestinationStorage) {
        if (valueFromSourceStorage) {
          if (destinationChromeStorageType === 'chrome.storage.sync') {
            await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageSyncSet)(propNameForChromeStorage, valueFromSourceStorage);
          } else {
            await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageLocalSet)(propNameForChromeStorage, valueFromSourceStorage);
          }
        }
      }
      if (typeof valueFromSourceStorage !== 'undefined') {
        if (sourceChromeStorageType === 'chrome.storage.sync') {
          await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageSyncRemove)(propNameForChromeStorage);
        } else {
          await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_0__.chromeStorageLocalRemove)(propNameForChromeStorage);
        }
      }
    }
  };
  try {
    if (whichStoreToUse === 'chrome.storage.local') {
      await migrateDataFromLocalStorageToChromeStorage('chrome.storage.local');
      await migrateDataFromChromeStorageToChromeStorage('chrome.storage.sync', 'chrome.storage.local');
    } else if (whichStoreToUse === 'chrome.storage.sync') {
      await migrateDataFromLocalStorageToChromeStorage('chrome.storage.sync');
      await migrateDataFromChromeStorageToChromeStorage('chrome.storage.local', 'chrome.storage.sync');
    } else {
      await migrateDataFromChromeStorageToLocalStorage('chrome.storage.local');
      await migrateDataFromChromeStorageToLocalStorage('chrome.storage.sync');
    }
  } catch (e) {
    // TODO: Handle this error
  }
};
(async function () {
  await runMigration();
})();


/***/ }),

/***/ "./scripts/reapply-css.js":
/*!********************************!*\
  !*** ./scripts/reapply-css.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _migrate_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./migrate-storage.js */ "./scripts/migrate-storage.js");
/* harmony import */ var _utils_alertNote_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/alertNote.js */ "./scripts/utils/alertNote.js");
/* harmony import */ var _utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/chromeStorage.js */ "./scripts/utils/chromeStorage.js");
/* harmony import */ var _utils_StyleTag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/StyleTag.js */ "./scripts/utils/StyleTag.js");
/* harmony import */ var _3rdparty_amplify_store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./3rdparty/amplify-store.js */ "./scripts/3rdparty/amplify-store.js");
/* global chrome */






(async function () {
  await (0,_migrate_storage_js__WEBPACK_IMPORTED_MODULE_0__.runMigration)();
  var USER_PREFERENCE_STORAGE_MODE = 'storage-mode';
  var chromeStorageForExtensionData = chrome.storage.sync || chrome.storage.local;
  var whichStoreToUse = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_2__.chromeStorageGet)(chromeStorageForExtensionData, USER_PREFERENCE_STORAGE_MODE);
  if (whichStoreToUse === 'localStorage') {
    // do nothing
  } else if (whichStoreToUse === 'chrome.storage.sync') {
    // do nothing
  } else {
    whichStoreToUse = 'chrome.storage.local';
  }
  var chromeStorage;
  if (whichStoreToUse === 'chrome.storage.sync') {
    chromeStorage = chrome.storage.sync;
  } else {
    chromeStorage = chrome.storage.local;
  }

  // TODO: Refactor/Reuse the definition of "userPreference"
  var getUserPreference = function (pref) {
    return new Promise(function (resolve, reject) {
      // eslint-disable-line no-unused-vars
      if (whichStoreToUse === 'chrome.storage.local' || whichStoreToUse === 'chrome.storage.sync') {
        let prefix = 'live-css-';
        var propertyName = `(${window.location.origin}) ${prefix}${pref}`;
        chromeStorage.get(propertyName, function (values) {
          resolve(values[propertyName] || '');
        });
      } else {
        let prefix = 'MagiCSS-bookmarklet-';
        resolve(_3rdparty_amplify_store_js__WEBPACK_IMPORTED_MODULE_4__.amplify.store(prefix + pref) || '');
      }
    });
  };
  var showReapplyingStylesNotification = true;
  {
    const showReapplyingStylesNotificationOption = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_2__.chromeStorageGet)(chromeStorageForExtensionData, 'show-reapplying-styles-notification');
    if (showReapplyingStylesNotificationOption === 'no') {
      showReapplyingStylesNotification = false;
    }
  }
  var localStorageDisableStyles = 'disable-styles';
  var disableStyles = (await getUserPreference(localStorageDisableStyles)) === 'yes';
  var localStorageApplyStylesAutomatically = 'apply-styles-automatically';
  var applyStylesAutomatically = (await getUserPreference(localStorageApplyStylesAutomatically)) === 'yes';
  var localStorageLastAppliedCss = 'last-applied-css';
  var cssText = (await getUserPreference(localStorageLastAppliedCss)).trim();
  if (cssText && applyStylesAutomatically && !disableStyles) {
    var showReapplyingStylesNotificationAt = await (0,_utils_chromeStorage_js__WEBPACK_IMPORTED_MODULE_2__.chromeStorageGet)(chromeStorageForExtensionData, 'show-reapplying-styles-notification-at');
    showReapplyingStylesNotificationAt = (showReapplyingStylesNotificationAt || 'top-right').split('-');
    var verticalAlignment = showReapplyingStylesNotificationAt[0] || 'top',
      horizontalAlignment = showReapplyingStylesNotificationAt[1] || 'right';
    var alertNoteConfig = {
      unobtrusive: true,
      verticalAlignment: verticalAlignment,
      horizontalAlignment: horizontalAlignment
    };
    try {
      var id = 'MagiCSS-bookmarklet',
        newStyleTagId = id + '-html-id',
        newStyleTag = new _utils_StyleTag_js__WEBPACK_IMPORTED_MODULE_3__.StyleTag({
          id: newStyleTagId,
          parentTag: 'body',
          attributes: [{
            name: 'data-style-created-by',
            value: 'magicss'
          }],
          overwriteExistingStyleTagWithSameId: true
        });
      newStyleTag.cssText = cssText;
      newStyleTag.disabled = disableStyles;
      // When reapplying styles, try to load them ASAP
      newStyleTag.applyTag();
      // When reapplying styles, ensure that the style tag gets moved towards the bottom of the page (DOM structure) once the page load is complete
      document.addEventListener("DOMContentLoaded", function () {
        newStyleTag.applyTag();
      });
      if (showReapplyingStylesNotification) {
        (0,_utils_alertNote_js__WEBPACK_IMPORTED_MODULE_1__.alertNote)('Activated styles provided in Magic CSS.<br/><span style="font-weight:normal;">Run Magic CSS extension to make any changes.</span>', 5000, alertNoteConfig);
      }
    } catch (e) {
      // The code should never reach here. Just being cautious :-)
      console.log('An unexpected error was encountered by Magic CSS.');
      console.log(e);
      console.log('Kindly report this issue at:\n    https://github.com/webextensions/live-css-editor/issues');
      (0,_utils_alertNote_js__WEBPACK_IMPORTED_MODULE_1__.alertNote)('Error: Unable to auto-apply Magic CSS styles' + '<br/>Kindly report this issue at <a target="_blank" href="https://github.com/webextensions/live-css-editor/issues">GitHub repository for Magic CSS</a>', 10000);
    }
  }
})();

/***/ }),

/***/ "./scripts/utils/StyleTag.js":
/*!***********************************!*\
  !*** ./scripts/utils/StyleTag.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleTag": () => (/* binding */ StyleTag)
/* harmony export */ });
/* unused harmony export addStyleTag */
/* harmony import */ var _appUtils_myWin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appUtils/myWin.js */ "./scripts/appUtils/myWin.js");


/*
Parameters:
    config.cssText (required): The CSS style
    config.doc (optional): Which "document" object to use
    config.id (optional): ID attribute for the style tag
    config.parentTag (optional): 'body' (default) or 'head' or 'html' (the "parentTag" value would be used if that element is available)
    config.overwriteExistingStyleTagWithSameId: Overwrite definition of existing style tag with same id, true or false (default)
    config.removeExistingStyleTagWithSameId (optional): true or false (default),
        applicable only if "id" parameter is also specified
*/
const addStyleTag = function (config) {
  var doc = config.doc || document,
    id = config.id;
  if (id) {
    var removeExistingStyleTag = config.removeExistingStyleTagWithSameId;
    if (removeExistingStyleTag === true) {
      var existingStyleTag = document.getElementById(id);
      existingStyleTag.parentNode.removeChild(existingStyleTag);
    }
  }
  var overwriteExistingStyleTag = config.overwriteExistingStyleTagWithSameId,
    styleNode;
  if (overwriteExistingStyleTag && id) {
    styleNode = document.getElementById(id);
  }
  if (styleNode) {
    // do nothing
  } else {
    styleNode = doc.createElement('style');
    styleNode.type = 'text/css';
    if (id) {
      styleNode.id = id;
    }
  }
  var attributes = config.attributes || [];
  attributes.forEach(function (attribute) {
    styleNode.setAttribute(attribute.name, attribute.value);
  });
  var cssText = config.cssText;
  styleNode.innerHTML = '';
  styleNode.appendChild(doc.createTextNode(cssText));
  var parent = function () {
    var parentTag = config.parentTag || 'body';
    if (parentTag === 'html') {
      return 'documentElement';
    } else if (parentTag === 'head') {
      return 'head';
    } else {
      return 'body';
    }
  }();
  var parentEl = doc[parent] || doc['body'] || doc['head'] || doc['documentElement'];
  parentEl.appendChild(styleNode);
  var disabled = config.disabled;

  // TODO: FIXME: HACK: This 'if' condition should be converted into some standard implementation
  if (_appUtils_myWin_js__WEBPACK_IMPORTED_MODULE_0__.myWin.flagEditorInExternalWindow && id === 'MagiCSS-bookmarklet-html-id') {
    disabled = true;
  }
  if (disabled) {
    styleNode.disabled = true;
  } else {
    styleNode.disabled = false;
  }
};
const StyleTag = function (config) {
  this.cssText = config.cssText;
  this.id = config.id;
  this.parentTag = config.parentTag;
  this.overwriteExistingStyleTagWithSameId = config.overwriteExistingStyleTagWithSameId;
  this.removeExistingStyleTagWithSameId = config.removeExistingStyleTagWithSameId;
  var proto = StyleTag.prototype;
  if (typeof proto.firstExecution == 'undefined') {
    proto.firstExecution = true;
    proto.applyTag = function () {
      addStyleTag({
        attributes: config.attributes,
        cssText: this.cssText,
        id: this.id,
        parentTag: this.parentTag,
        overwriteExistingStyleTagWithSameId: this.overwriteExistingStyleTagWithSameId,
        removeExistingStyleTagWithSameId: this.removeExistingStyleTagWithSameId,
        disabled: this.disabled
      });
      var appliedCssText = this.cssText;
      return appliedCssText;
    };
    proto.disable = function () {
      // TODO
    };
  } else {
    proto.firstExecution = false;
  }
};


/***/ }),

/***/ "./scripts/utils/alertNote.js":
/*!************************************!*\
  !*** ./scripts/utils/alertNote.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alertNote": () => (/* binding */ alertNote)
/* harmony export */ });
const alertNote = function () {
  var w = window,
    d = document,
    dE = d.documentElement,
    div = d.createElement('div'),
    t;
  div.id = 'topCenterAlertNote';

  // Hide functionality
  var h = function (div) {
    div.style.display = 'none';
  };
  var clearTimeout = function () {
    w.clearTimeout(t);
  };
  const defaults = {
    paddingTop: '',
    paddingRight: '',
    paddingBottom: '',
    paddingLeft: '',
    verticalAlignment: 'top',
    horizontalAlignment: 'center',
    textAlignment: 'center'
  };
  var alertNote = function (msg, hideDelay, options) {
    options = options || {};
    var verticalAlignment = options.verticalAlignment || defaults.verticalAlignment || 'top',
      horizontalAlignment = options.horizontalAlignment || defaults.horizontalAlignment || 'center',
      textAlignment = options.textAlignment || defaults.textAlignment || 'center',
      backgroundColor = options.backgroundColor || '#f9edbe',
      borderColor = options.borderColor || '#eb7',
      opacity = options.opacity || '1',
      paddingTop = options.paddingTop || defaults.paddingTop || '',
      paddingRight = options.paddingRight || defaults.paddingRight || '',
      paddingBottom = options.paddingBottom || defaults.paddingBottom || '',
      paddingLeft = options.paddingLeft || defaults.paddingLeft || '',
      unobtrusive = options.unobtrusive || false;
    // TODO:
    // - Apply !important for various inline styles (otherwise, it might get over-ridden by some previously present !important CSS styles)
    // - "OK" button functionality

    /*eslint-disable indent */
    div.innerHTML = ['<div ' + 'style="' + 'pointer-events:none;' +
    // To avoid it from stealing hover (the pointer-events will be enabled for a child element)
    'position:fixed;width:100%;z-index:2147483600;' + (paddingTop ? `padding-top:   ${paddingTop};` : '') + (paddingBottom ? `padding-bottom:${paddingBottom};` : '') + (verticalAlignment === 'bottom' ? 'bottom:0;' : 'top:0;') + function () {
      if (horizontalAlignment === 'left') {
        return 'left:0;';
      } else if (horizontalAlignment === 'right') {
        return 'right:0;';
      } else {
        /* Even for center aligning, we need to set left or right as 0, without that
            it would try to center align whithout considering the width taken by vertical scrollbar */
        return 'left:0;';
      }
    }() + 'text-align:' + horizontalAlignment + ';' +
    // TODO: Check if we need this
    'opacity:' + opacity + ';' + '"' + '>', '<div ' + 'style="' + 'display:flex;width:auto;margin:0;padding:0;border:0;' + (paddingRight ? `padding-right:${paddingRight};` : '') + (paddingLeft ? `padding-left: ${paddingLeft};` : '') + function () {
      if (horizontalAlignment === 'left') {
        return 'justify-content:flex-start;';
      } else if (horizontalAlignment === 'right') {
        return 'justify-content:flex-end;';
      } else {
        return 'justify-content:center;';
      }
    }() +
    // margin:0 is useful for some sites (eg: https://developer.chrome.com/home)
    '"' + '>', '<div ' + 'style="' + 'pointer-events:initial;' +
    // To gain back the pointer-events which were disabled in one of the parent elements
    'border:1px solid ' + borderColor + ';' + 'background-color:' + backgroundColor + ';' +
    // background-color:#feb;
    // TODO: Check if we need "text-align: left". Maybe it helps to set the default style.
    'padding:2px 10px;max-width:980px;overflow:hidden;text-align:left;font-family:Arial,sans-serif;font-weight:bold;font-size:12px' + '"' + '>', '<div class="alert-note-text" style="color:#000;text-align:' + textAlignment + ';word-wrap:break-word;">', msg, '</div>', '</div>', '</div>', '</div>'].join('');
    /*eslint-enable indent */

    if (unobtrusive) {
      try {
        var firstChild = div.firstChild.firstChild.firstChild;
        firstChild.addEventListener('mouseenter', function () {
          // Note:
          //      If we wish to directly apply the opacity changes to the parent "div",
          //      which is currently a direct child of <html> tag, then, on some sites (eg:
          //      gmail.com) somehow, as soon as we reduce its opacity to a value less than
          //      1 (eg: 0.99), it gets hidden immediately. The fact that it is appended to
          //      <html> tag and not to <body> is somehow causing this behavior. Since we
          //      are using that parent div's inner child, the opacity transition works fine.
          firstChild.style.transition = 'opacity 0.3s ease-out';
          firstChild.style.opacity = '0';
          firstChild.style.pointerEvents = 'none';
        }, false);
      } catch (e) {
        // do nothing
      }
    }
    div.style.display = ''; // Required when the same div element is being reused

    dE.appendChild(div);
    clearTimeout();
    t = w.setTimeout(function () {
      h(div);
    }, hideDelay || 5000);
  };
  alertNote.hide = function () {
    h(div);
    clearTimeout();
  };
  alertNote.setup = function (defaultsToSet) {
    if (typeof defaultsToSet.verticalAlignment !== 'undefined') {
      defaults.verticalAlignment = defaultsToSet.verticalAlignment;
    }
    if (typeof defaultsToSet.horizontalAlignment !== 'undefined') {
      defaults.horizontalAlignment = defaultsToSet.horizontalAlignment;
    }
    if (typeof defaultsToSet.textAlignment !== 'undefined') {
      defaults.textAlignment = defaultsToSet.textAlignment;
    }
    if (typeof defaultsToSet.paddingTop !== 'undefined') {
      defaults.paddingTop = defaultsToSet.paddingTop;
    }
    if (typeof defaultsToSet.paddingRight !== 'undefined') {
      defaults.paddingRight = defaultsToSet.paddingRight;
    }
    if (typeof defaultsToSet.paddingBottom !== 'undefined') {
      defaults.paddingBottom = defaultsToSet.paddingBottom;
    }
    if (typeof defaultsToSet.paddingLeft !== 'undefined') {
      defaults.paddingLeft = defaultsToSet.paddingLeft;
    }
  };
  return alertNote;
}();


/***/ }),

/***/ "./scripts/utils/chromeStorage.js":
/*!****************************************!*\
  !*** ./scripts/utils/chromeStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chromeStorageGet": () => (/* binding */ chromeStorageGet),
/* harmony export */   "chromeStorageLocalGet": () => (/* binding */ chromeStorageLocalGet),
/* harmony export */   "chromeStorageLocalRemove": () => (/* binding */ chromeStorageLocalRemove),
/* harmony export */   "chromeStorageLocalSet": () => (/* binding */ chromeStorageLocalSet),
/* harmony export */   "chromeStorageSyncGet": () => (/* binding */ chromeStorageSyncGet),
/* harmony export */   "chromeStorageSyncRemove": () => (/* binding */ chromeStorageSyncRemove),
/* harmony export */   "chromeStorageSyncSet": () => (/* binding */ chromeStorageSyncSet)
/* harmony export */ });
/* unused harmony exports chromeStorageSet, chromeStorageRemove */
/* global chrome */

const chromeStorageGet = function (storageObject, prop) {
  return new Promise(function (resolve, reject) {
    // eslint-disable-line no-unused-vars
    storageObject.get(prop, function (values) {
      if (prop === null) {
        resolve(values);
      } else {
        resolve(values[prop]);
      }
    });
  });
};
const chromeStorageSet = function (storageObject, prop, value) {
  return new Promise(function (resolve, reject) {
    // eslint-disable-line no-unused-vars
    storageObject.set({
      [prop]: value
    }, function () {
      resolve();
    });
  });
};
const chromeStorageRemove = function (storageObject, prop) {
  return new Promise(function (resolve, reject) {
    // eslint-disable-line no-unused-vars
    storageObject.remove(prop, function () {
      resolve();
    });
  });
};
const chromeStorageLocalGet = async function (prop) {
  const value = await chromeStorageGet(chrome.storage.local, prop);
  return value;
};
const chromeStorageLocalSet = async function (prop, value) {
  await chromeStorageSet(chrome.storage.local, prop, value);
};
const chromeStorageLocalRemove = async function (prop, value) {
  await chromeStorageRemove(chrome.storage.local, prop, value);
};
const chromeStorageSyncGet = async function (prop) {
  const value = await chromeStorageGet(chrome.storage.sync, prop);
  return value;
};
const chromeStorageSyncSet = async function (prop, value) {
  await chromeStorageSet(chrome.storage.sync, prop, value);
};
const chromeStorageSyncRemove = async function (prop, value) {
  await chromeStorageRemove(chrome.storage.sync, prop, value);
};

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./scripts/load-reapply.js ***!
  \*********************************/
/* harmony import */ var _reapply_css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reapply-css.js */ "./scripts/reapply-css.js");

})();

/******/ })()
;