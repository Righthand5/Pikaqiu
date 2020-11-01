parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=".skin *{\n    box-sizing: border-box;\nmargin: 0;\npadding: 0;\n}/*并把边框和内边距放入框中*/\n.skin *::before, .skin *::after{box-sizing:border-box}\nbody{\n}\n.skin{\n    position: relative;\n    background: #fee433;\n    min-height: 50vh;\n    /*background: #fee600;*/\n    /*height: 100vh;*/\n}\n.nose{\n    border: 10px solid black;/*指的是厚度*/\n    border-color: black transparent;\n    border-bottom:none;\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    left: 50%;/*左边的边在中间位置所以margin-left: -5px;*/\n    top:145px;\n    margin-left: -10px;/*左右两边的宽度为10px所以这里为-10px而不是-5px*/\n    z-index:10;\n}\n@keyframes  wave {\n    0%{\n        transform: rotate(0deg);\n}\n    33%{\n        transform: rotate(5deg);\n}\n    66%{\n        transform: rotate(-5deg);\n}\n    100%{\n        transform: rotate(0deg);\n}\n}\n.nose:hover{\n    transform-origin:50% 100% ;\n    animation: wave 300ms infinite linear;/*无限的动*/\n}\n.circle{\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    border-radius:10px 10px 0 0;\n    background:black;\n    top:-16px;\n    left: -10px;\n}\n.eye{\n    border:2px solid #000000;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius:50%;\n}\n.eye::before{\n    content: '';\n    display: block;\n    border:2px solid #000000;\n    width: 25px;\n    height: 25px;\n    background: #fff;\n    position:relative;\n    border-radius:50%;\n    left: 8px;\n    top:2px;\n}\n.eye.left{\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translatex(100px);\n}\n.mouth{\n    /*border:1px solid red;*/\n    width: 200px;\n    height:200px;\n    position:absolute;\n    left:50%;\n    top:170px;\n    margin-left: -100px;\n}\n.mouth .up{\n    position: relative;\n    top:-20px;\n    z-index: 1;\n}\n/*省略代码的写法*/\n.mouth .up .lip{\n    border:3px solid black;\n    height: 30px;\n    width: 100px;\n    border-top-color:transparent;\n    border-right-color:transparent;\n    position: relative;\n    position:absolute;\n    left:50%;\n    margin-left: -50px;\n    background: #fee433;\n}\n.mouth .up .lip.left{\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right{\n    border-radius: 0 0 50px 0;\n    transform: rotate(15deg) translateX(53px);\n}\n/*省略代码的写法*/\n.mouth .up .lip::before{\n    content: '';\n    display: block;\n    width:7px;\n    height: 30px;\n    position: absolute;\n    right: -5px;\n    background: #fee433;\n    bottom: 0;\n}\n/*利用div遮住线条改出一个胡须的形状*/\n.mouth .up .lip.left::before{\n    right: -6px;\n}\n.mouth .up .lip.right::before{\n    left: -6px;\n}\n.mouth .down{\n    /*border:1px solid red;*/\n    height:180px;\n    position:absolute;\n    top: 5px;\n    width:100%;\n    overflow: hidden;\n}\n.mouth .down .circle1{\n    border: 3px solid black;\n    height: 1000px;\n    width:150px;\n    position: absolute;\n    left:50%;\n    margin-left: -75px;\n    bottom: 0;\n    border-radius:75px/300px;\n    background: #990513;\n    overflow: hidden;\n}\n.mouth .down .circle1 .circle2{\n    border:1px solid #fc4a62;\n    width:200px;\n    height:300px;\n    position: absolute;\n    background: #fc4a62;\n    bottom: -155px;\n    left:50%;\n    margin-left: -100px;\n    border-radius: 100px;\n\n}\n.face{\n    position: absolute;\n    width: 88px;\n    height: 88px;\n    border:3px solid black;\n    left:50%;\n    margin-left: -44px;\n    top:200px;\n    z-index: 3;\n}\n.face.left{\n    transform: translateX(-180px);\n    background: #fc0d1c;\n    border-radius: 50%;\n}\n.face.right{\n    transform: translateX(180px);\n    background: #fc0d1c;\n    border-radius: 50%;\n}\n.face>img{\n    /*border:1px solid red;*/\n    position: absolute;\n    top:50%;\n    left:50%\n}\n.face.left>img{\n    transform:rotateY(180deg);\n    transform-origin: 0 0;\n}\n",e=n;exports.default=e;
},{}],"HdJB":[function(require,module,exports) {
"use strict";var e=n(require("./css"));function n(e){return e&&e.__esModule?e:{default:e}}var t={n:1,time:100,id:void 0,events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},ui:{demo1:document.querySelector("#demo1"),demo2:document.querySelector("#demo2")},init:function(){t.ui.demo1.innerText=e.default.substr(0,t.n),t.ui.demo2.innerHTML=e.default.substr(0,t.n),t.play(),t.bindEvent()},bindEvent:function(){for(var e in t.events)if(t.events.hasOwnProperty(e)){var n=t.events[e];document.querySelector(e).onclick=t[n]}},run:function(){t.n+=1,t.n>e.default.length?window.clearInterval(t.id):(t.ui.demo1.innerText=e.default.substr(0,t.n),t.ui.demo2.innerHTML=e.default.substr(0,t.n),t.ui.demo1.scrollTop=t.ui.demo1.scrollHeight)},play:function(){t.id=setInterval(t.run,t.time)},pause:function(){window.clearInterval(t.id)},slow:function(){t.pause(),t.time=300,t.play()},normal:function(){t.pause(),t.time=100,t.play()},fast:function(){t.pause(),t.time=0,t.play()}};t.init();
},{"./css":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.ac6a00b8.js.map