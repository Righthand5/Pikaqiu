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
})({"test.e98b79dd.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = function (modules, cache, entry, globalName) {
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
        } // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.


        if (previousRequire) {
          return previousRequire(name, true);
        } // Try the node require function if it exists.


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

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
      module.exports = mainExports; // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      }); // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  } // Override the current require with this new one


  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
}({
  "css.js": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var string = ".skin *{\n    box-sizing: border-box;\nmargin: 0;\npadding: 0;\n}/*\u5E76\u628A\u8FB9\u6846\u548C\u5185\u8FB9\u8DDD\u653E\u5165\u6846\u4E2D*/\n.skin *::before, .skin *::after{box-sizing:border-box}\nbody{\n}\n.skin{\n    position: relative;\n    background: #fee433;\n    min-height: 50vh;\n    /*background: #fee600;*/\n    /*height: 100vh;*/\n}\n.nose{\n    border: 10px solid black;/*\u6307\u7684\u662F\u539A\u5EA6*/\n    border-color: black transparent;\n    border-bottom:none;\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    left: 50%;/*\u5DE6\u8FB9\u7684\u8FB9\u5728\u4E2D\u95F4\u4F4D\u7F6E\u6240\u4EE5margin-left: -5px;*/\n    top:145px;\n    margin-left: -10px;/*\u5DE6\u53F3\u4E24\u8FB9\u7684\u5BBD\u5EA6\u4E3A10px\u6240\u4EE5\u8FD9\u91CC\u4E3A-10px\u800C\u4E0D\u662F-5px*/\n    z-index:10;\n}\n@keyframes  wave {\n    0%{\n        transform: rotate(0deg);\n}\n    33%{\n        transform: rotate(5deg);\n}\n    66%{\n        transform: rotate(-5deg);\n}\n    100%{\n        transform: rotate(0deg);\n}\n}\n.nose:hover{\n    transform-origin:50% 100% ;\n    animation: wave 300ms infinite linear;/*\u65E0\u9650\u7684\u52A8*/\n}\n.circle{\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    border-radius:10px 10px 0 0;\n    background:black;\n    top:-16px;\n    left: -10px;\n}\n.eye{\n    border:2px solid #000000;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius:50%;\n}\n.eye::before{\n    content: '';\n    display: block;\n    border:2px solid #000000;\n    width: 25px;\n    height: 25px;\n    background: #fff;\n    position:relative;\n    border-radius:50%;\n    left: 8px;\n    top:2px;\n}\n.eye.left{\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translatex(100px);\n}\n.mouth{\n    /*border:1px solid red;*/\n    width: 200px;\n    height:200px;\n    position:absolute;\n    left:50%;\n    top:170px;\n    margin-left: -100px;\n}\n.mouth .up{\n    position: relative;\n    top:-20px;\n    z-index: 1;\n}\n/*\u7701\u7565\u4EE3\u7801\u7684\u5199\u6CD5*/\n.mouth .up .lip{\n    border:3px solid black;\n    height: 30px;\n    width: 100px;\n    border-top-color:transparent;\n    border-right-color:transparent;\n    position: relative;\n    position:absolute;\n    left:50%;\n    margin-left: -50px;\n    background: #fee433;\n}\n.mouth .up .lip.left{\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right{\n    border-radius: 0 0 50px 0;\n    transform: rotate(15deg) translateX(53px);\n}\n/*\u7701\u7565\u4EE3\u7801\u7684\u5199\u6CD5*/\n.mouth .up .lip::before{\n    content: '';\n    display: block;\n    width:7px;\n    height: 30px;\n    position: absolute;\n    right: -5px;\n    background: #fee433;\n    bottom: 0;\n}\n/*\u5229\u7528div\u906E\u4F4F\u7EBF\u6761\u6539\u51FA\u4E00\u4E2A\u80E1\u987B\u7684\u5F62\u72B6*/\n.mouth .up .lip.left::before{\n    right: -6px;\n}\n.mouth .up .lip.right::before{\n    left: -6px;\n}\n.mouth .down{\n    /*border:1px solid red;*/\n    height:180px;\n    position:absolute;\n    top: 5px;\n    width:100%;\n    overflow: hidden;\n}\n.mouth .down .circle1{\n    border: 3px solid black;\n    height: 1000px;\n    width:150px;\n    position: absolute;\n    left:50%;\n    margin-left: -75px;\n    bottom: 0;\n    border-radius:75px/300px;\n    background: #990513;\n    overflow: hidden;\n}\n.mouth .down .circle1 .circle2{\n    border:1px solid #fc4a62;\n    width:200px;\n    height:300px;\n    position: absolute;\n    background: #fc4a62;\n    bottom: -155px;\n    left:50%;\n    margin-left: -100px;\n    border-radius: 100px;\n\n}\n.face{\n    position: absolute;\n    width: 88px;\n    height: 88px;\n    border:3px solid black;\n    left:50%;\n    margin-left: -44px;\n    top:200px;\n    z-index: 3;\n}\n.face.left{\n    transform: translateX(-180px);\n    background: #fc0d1c;\n    border-radius: 50%;\n}\n.face.right{\n    transform: translateX(180px);\n    background: #fc0d1c;\n    border-radius: 50%;\n}\n.face>img{\n    /*border:1px solid red;*/\n    position: absolute;\n    top:50%;\n    left:50%\n}\n.face.left>img{\n    transform:rotateY(180deg);\n    transform-origin: 0 0;\n}\n";
    var _default = string;
    exports.default = _default;
  }, {}],
  "test.js": [function (require, module, exports) {
    "use strict";

    var _css = _interopRequireDefault(require("./css"));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    } // let n = 1->添加到属性
    // const demo1 = document.querySelector('#demo1');
    // const demo2 = document.querySelector('#demo2');
    // let n = 1
    // demo1.innerText = string.substr(0,n)
    // demo2.innerHTML = string.substr(0,n)
    // let time = 100
    // let id
    // let id = player.play();不可以先用后声明所以放到后面
    // const run = () =>{
    //     n+=1
    //     if(n>string.length){
    //         pause()
    //         return
    //     }
    //     demo1.innerText = string.substr(0,n)
    //     demo2.innerHTML = string.substr(0,n)
    //     demo1.scrollTop = demo1.scrollHeight
    // }
    //为什么用箭头函数，because不喜欢用this


    var player = {
      n: 1,
      time: 100,
      id: undefined,
      events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
      },
      ui: {
        demo1: document.querySelector('#demo1'),
        demo2: document.querySelector('#demo2')
      },
      init: function init() {
        //初始化代码
        player.ui.demo1.innerText = _css.default.substr(0, player.n);
        player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
        player.play(); //简化代码内置

        player.bindEvent();
      },
      bindEvent: function bindEvent() {
        for (var key in player.events) {
          if (player.events.hasOwnProperty(key)) {
            var value = player.events[key];
            document.querySelector(key).onclick = player[value];
          } //Object.prototype.x=1
          //有可能会遍历到从原型链继承下来的属性
          // const value = player.events[key]
          // document.querySelector(key).onclick = player[value]

        }
      },
      run: function run() {
        player.n += 1;

        if (player.n > _css.default.length) {
          window.clearInterval(player.id);
          return;
        }

        player.ui.demo1.innerText = _css.default.substr(0, player.n);
        player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
        player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight;
      },
      play: function play() {
        player.id = setInterval(player.run, player.time);
      },
      pause: function pause() {
        window.clearInterval(player.id);
      },
      slow: function slow() {
        player.pause();
        player.time = 300; // id = player.play();

        player.play();
      },
      normal: function normal() {
        player.pause();
        player.time = 100; // id = player.play();

        player.play();
      },
      fast: function fast() {
        player.pause();
        player.time = 0; // id = player.play();

        player.play();
      }
    }; // let id = player.play();

    player.init(); // const play =()=>{
    //     return setInterval(run,time)
    // }
    // const pause =()=>{
    //     window.clearInterval(id)
    // }
    // let id = play();
    // const slow =()=>{
    //     pause()
    //     time=300
    //     id = play();
    // }
    // const normal =()=>{
    //     pause()
    //     time=100
    //     id = play();
    // }
    // const fast = ()=>{
    //     pause()
    //     time=0
    //     id = play();
    // }
    // document.querySelector('#btnPause').onclick = player.pause
    // document.querySelector('#btnPlay').onclick = player.play
    // document.querySelector('#btnSlow').onclick=player.slow
    // document.querySelector('#btnNormal').onclick=player.normal
    // document.querySelector('#btnFast').onclick=player.fast
  }, {
    "./css": "css.js"
  }],
  "../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js": [function (require, module, exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';
    var OldModule = module.bundle.Module;

    function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
          this._acceptCallbacks.push(fn || function () {});
        },
        dispose: function dispose(fn) {
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
      var ws = new WebSocket(protocol + '://' + hostname + ':' + "61183" + '/');

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
  }, {}]
}, {}, ["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js", "test.js"], null);
},{}]