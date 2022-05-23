// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/icon-cross.svg":[function(require,module,exports) {
module.exports = "/icon-cross.861255e5.svg";
},{}],"images/icon-sun.svg":[function(require,module,exports) {
module.exports = "/icon-sun.e8063967.svg";
},{}],"images/icon-moon.svg":[function(require,module,exports) {
module.exports = "/icon-moon.4401c989.svg";
},{}],"images/bg-desktop-dark.jpg":[function(require,module,exports) {
module.exports = "/bg-desktop-dark.0d96dc95.jpg";
},{}],"images/bg-desktop-light.jpg":[function(require,module,exports) {
module.exports = "/bg-desktop-light.6b6aa610.jpg";
},{}],"images/bg-mobile-dark.jpg":[function(require,module,exports) {
module.exports = "/bg-mobile-dark.824fb2b7.jpg";
},{}],"images/bg-mobile-light.jpg":[function(require,module,exports) {
module.exports = "/bg-mobile-light.d5335c35.jpg";
},{}],"js/script.js":[function(require,module,exports) {
"use strict"; // Main JS code for Application

var _iconCross = _interopRequireDefault(require("../images/icon-cross.svg"));

var _iconSun = _interopRequireDefault(require("../images/icon-sun.svg"));

var _iconMoon = _interopRequireDefault(require("../images/icon-moon.svg"));

var _bgDesktopDark = _interopRequireDefault(require("../images/bg-desktop-dark.jpg"));

var _bgDesktopLight = _interopRequireDefault(require("../images/bg-desktop-light.jpg"));

var _bgMobileDark = _interopRequireDefault(require("../images/bg-mobile-dark.jpg"));

var _bgMobileLight = _interopRequireDefault(require("../images/bg-mobile-light.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var todoInput = document.querySelector(".todo-input");
var todoContainer = document.querySelector(".todo-list");
var filterContainer = document.querySelectorAll(".filter");
var clearAllBtn = document.querySelector(".btn-clear");
var addTodoBtn = document.querySelector(".input-check");
var itemNumber = document.querySelector(".items-counter");
var itemSpan = document.querySelector(".items-number");
var itemCounter = 0;

function addItem() {
  itemCounter++;
  itemNumber.textContent = itemCounter;
  itemSpan.textContent = itemCounter === 1 ? "item" : "items";
}

function removeItem() {
  itemCounter--;
  itemNumber.textContent = itemCounter;
  itemSpan.textContent = itemCounter === 1 ? "item" : "items";
}

function addTodo() {
  var todo = "<li class=\"todo-item\" draggable=\"true\">\n              <input\n                type=\"checkbox\"\n                class=\"todo-check\"\n                name=\"\"\n                id=\"\"\n                aria-label=\"Select todo\"\n              />\n              <p class=\"todo\">".concat(todoInput.value, "</p>\n              <img\n                src=").concat(_iconCross.default, "\n                alt=\"Delete todo\"\n                class=\"btn-delete-todo\"\n              />\n            </li>");
  todoContainer.insertAdjacentHTML("afterbegin", todo);
  addItem();
  document.querySelectorAll(".btn-all").forEach(function (btn) {
    return btn.classList.add("btn-filter--active");
  });
}

function removeTodo(event) {
  if (!event.target.classList.contains("btn-delete-todo")) return;
  var todo = event.target.closest(".todo-item");
  todo.classList.add("todo-item--deleted");
  todo.addEventListener("transitionend", function () {
    todo.remove();
  });

  if (!event.target.previousElementSibling.classList.contains("todo-completed")) {
    removeItem();
  } else {
    itemNumber.textContent = itemCounter;
    itemSpan.textContent = itemCounter === 1 ? "item" : "items";
  }

  if (itemCounter == 0) {
    document.querySelectorAll(".btn-all").forEach(function (btn) {
      return btn.classList.remove("btn-filter--active");
    });
  }
}

function completedTodo(event) {
  if (event.target.classList.contains("todo-check") && !event.target.nextElementSibling.classList.contains("todo-completed")) {
    event.target.nextElementSibling.classList.add("todo-completed");
    removeItem();
  } else if (event.target.classList.contains("todo-check") && event.target.nextElementSibling.classList.contains("todo-completed")) {
    event.target.nextElementSibling.classList.remove("todo-completed");
    addItem();
  }
}

todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && todoInput.value !== "") {
    addTodo();
    todoInput.value = "";
  } else return;
});
addTodoBtn.addEventListener("click", function () {
  if (todoInput.value !== "") {
    addTodo();
    todoInput.value = "";
  } else return;
});
window.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});
window.addEventListener("load", function () {
  todoInput.value = "";
});
clearAllBtn.addEventListener("click", function () {
  todoContainer.innerHTML = "";
  itemCounter = 0;
  itemNumber.textContent = 0;
  var filterBtns = document.querySelectorAll(".btn-filter");
  filterBtns.forEach(function (btn) {
    return btn.classList.remove("btn-filter--active");
  });
});
todoContainer.addEventListener("click", function (e) {
  removeTodo(e);
  completedTodo(e);

  if (e.target.classList.contains("todo-check")) {
    e.target.classList.toggle("todo-check--active");
  }
});
filterContainer.forEach(function (filters) {
  filters.addEventListener("click", function (e) {
    if (!e.target.classList.contains("btn-filter")) return;
    var filterBtns = document.querySelectorAll(".btn-filter");
    filterBtns.forEach(function (btn) {
      return btn.classList.remove("btn-filter--active");
    });
    var selectedBtn = e.target;
    selectedBtn.classList.add("btn-filter--active");

    if (todoContainer.children.length === 0) {
      selectedBtn.classList.remove("btn-filter--active");
    } // Filtering Todos


    var todos = todoContainer.children; // HTML Collection

    var _iterator = _createForOfIteratorHelper(todos),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var todo = _step.value;

        switch (selectedBtn.dataset.filter) {
          case "all":
            todo.style.display = "flex";
            break;

          case "active":
            if (!todo.children[1].classList.contains("todo-completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }

            break;

          case "completed":
            if (todo.children[1].classList.contains("todo-completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }

            break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
}); // Dark/light mode toggling

var themeBtn = document.querySelector("#theme-btn");
var themeImg = document.querySelector(".theme-img");
var headerImg = document.querySelector("#header-img");
var theme = localStorage.getItem("theme");

var setDarkTheme = function setDarkTheme() {
  document.querySelector("body").dataset.theme = "dark";
  localStorage.setItem("theme", "dark");
  themeImg.src = "".concat(_iconSun.default);

  if (window.matchMedia("max-width(930px)").matches) {
    headerImg.style.backgroundImage = "url(".concat(_bgMobileDark.default, ")");
  } else {
    headerImg.style.backgroundImage = "url(".concat(_bgDesktopDark.default, ")");
  }
};

var setLightTheme = function setLightTheme() {
  document.querySelector("body").dataset.theme = "light";
  localStorage.setItem("theme", "light");
  themeImg.src = "".concat(_iconMoon.default);

  if (window.matchMedia("max-width(930px)").matches) {
    headerImg.style.backgroundImage = "url(".concat(_bgMobileLight.default, ")");
  } else {
    headerImg.style.backgroundImage = "url(".concat(_bgDesktopLight.default, ")");
  }
};

if (theme === "dark") {
  setDarkTheme();
} else {
  setLightTheme();
}

themeBtn.addEventListener("click", function () {
  theme = localStorage.getItem("theme");

  if (theme === "light") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
});

function checkTheme() {
  if (theme === "dark" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkTheme();
  } else if (theme === "light" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setLightTheme();
  } else if (theme === "dark" && window.matchMedia("(prefers-color-scheme: light)").matches) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

window.addEventListener("load", checkTheme()); // Making todos draggable
// Saving todos at local storage
},{"../images/icon-cross.svg":"images/icon-cross.svg","../images/icon-sun.svg":"images/icon-sun.svg","../images/icon-moon.svg":"images/icon-moon.svg","../images/bg-desktop-dark.jpg":"images/bg-desktop-dark.jpg","../images/bg-desktop-light.jpg":"images/bg-desktop-light.jpg","../images/bg-mobile-dark.jpg":"images/bg-mobile-dark.jpg","../images/bg-mobile-light.jpg":"images/bg-mobile-light.jpg"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63128" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map