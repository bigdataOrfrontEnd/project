(()=>{var n={615:function(n){n.exports=function(n){function r(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}var e={};return r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},r.p="",r(r.s=1)}([function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function n(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(r,e,t){return e&&n(r.prototype,e),t&&n(r,t),r}}(),a=e(6),i=e(7),o=function(){function n(r){(function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this.matcher=r.matcher,this._matchedCount=0}return t(n,[{key:"_fireHandlers",value:function(n,r){for(var e=0;e<n.length;e++){var t=n[e],a=this._getCache(t),o={body:r||a,query:t.query,params:t.params};(0,i.def)(o,"route",t.path),(0,i.def)(o,"url",t.url),!r&&a&&(o._id=t._id),t.handler(o),this._cacheBody(r,t)}}},{key:"_getCache",value:function(n){return(0,a.getCache)(n._id)}},{key:"_cacheBody",value:function(n,r){n&&(0,a.setCache)(r._id,n)}},{key:"getMatchedCount",value:function(){return this._matchedCount}},{key:"go",value:function(n,r){}},{key:"redirect",value:function(n,r){}},{key:"back",value:function(){}},{key:"stop",value:function(){}}]),n}();r.default=o},function(n,r,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function n(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(r,e,t){return e&&n(r.prototype,e),t&&n(r,t),r}}(),i=t(e(2)),o=t(e(5)),s=t(e(8)),l=function(){function n(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hash";if(function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this._mount=document.getElementById(r),!this._mount)throw new Error("Can not get mount point document.getElementById(#"+r+")...");this._subRouteView='<div id="__sub-route-view"></div>',this._subMount=null,this._isPassing=!1,this._cache={},this._middlewares=[],this._matcher=new i.default,this._history="hash"===e?new s.default({matcher:this._matcher}):new o.default({matcher:this._matcher})}return a(n,[{key:"render",value:function(n){this._isPassing?this._subMount.innerHTML=n:this._mount.innerHTML=n}},{key:"next",value:function(n){this._mount.innerHTML=n,this._isPassing=this._history.getMatchedCount()>1,this._subMount=document.querySelector("#__sub-route-view")}},{key:"subRoute",value:function(){return this._subRouteView}},{key:"use",value:function(n){this._middlewares.push(n)}},{key:"route",value:function(n,r){var e=this;this._matcher.add(n,(function(t){if("*"!==n&&!t._id)for(var a=0;a<e._middlewares.length;a++)e._middlewares[a](t);r(t,e,e.next.bind(e))}))}},{key:"go",value:function(n,r){this._isPassing=!1,this._history.go(n,r)}},{key:"redirect",value:function(n,r){this._isPassing=!1,this._history.redirect(n,r)}},{key:"back",value:function(){this._isPassing=!1,this._history.back()}},{key:"stop",value:function(){this._history.stop()}}]),n}();r.default=l},function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function n(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(r,e,t){return e&&n(r.prototype,e),t&&n(r,t),r}}(),a=function(n){return n&&n.__esModule?n:{default:n}}(e(3)),i=e(4),o=function(){function n(){(function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")})(this,n),this._routes=[],this._id=0}return t(n,[{key:"match",value:function(n){var r=[],e="",t=n.indexOf("?"),a=!0;t>-1&&(e=n.substr(t),n=n.slice(0,t));for(var o=0;o<this._routes.length;o++){var s=this._routes[o],l=s.reg.exec(n);if(l){if("*"!==s.path&&(a=!1),!a&&"*"===s.path)continue;r.push({_id:s._id,path:s.path,url:n+e,params:this._getParams(s.params,l),query:(0,i.parseQuery)(e),handler:s.handler})}}return r}},{key:"add",value:function(n,r){var e=this._toReg({path:n,handler:r});e._id=++this._id,this._routes.push(e)}},{key:"_toReg",value:function(n){return n.params=[],n.reg="*"===n.path?/[\w\W]*/i:(0,a.default)(n.path,n.params,{end:!1}),n}},{key:"_getParams",value:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments[1],e={},t=0;t<n.length;t++)e[n[t].name]=r[t+1];return e}}]),n}();r.default=o},function(n,r){function e(n,r){for(var e,t=[],o=0,s=0,l="",c=r&&r.delimiter||d,f=r&&r.delimiters||u,p=!1;null!==(e=v.exec(n));){var h=e[0],b=e[1],m=e.index;if(l+=n.slice(s,m),s=m+h.length,b)l+=b[1],p=!0;else{var x="",g=n[s],y=e[2],_=e[3],w=e[4],k=e[5];if(!p&&l.length){var O=l.length-1;f.indexOf(l[O])>-1&&(x=l[O],l=l.slice(0,O))}l&&(t.push(l),l="",p=!1);var P=""!==x&&void 0!==g&&g!==x,E="+"===k||"*"===k,j="?"===k||"*"===k,M=x||c,C=_||w;t.push({name:y||o++,prefix:x,delimiter:M,optional:j,repeat:E,partial:P,pattern:C?i(C):"[^"+a(M)+"]+?"})}}return(l||s<n.length)&&t.push(l+n.substr(s)),t}function t(n){for(var r=new Array(n.length),e=0;e<n.length;e++)"object"==typeof n[e]&&(r[e]=new RegExp("^(?:"+n[e].pattern+")$"));return function(e,t){for(var a="",i=t&&t.encode||encodeURIComponent,o=0;o<n.length;o++){var s=n[o];if("string"!=typeof s){var l,c=e?e[s.name]:void 0;if(Array.isArray(c)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===c.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(l=i(c[d]),!r[o].test(l))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');a+=(0===d?s.prefix:s.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"));s.partial&&(a+=s.prefix)}else{if(l=i(String(c)),!r[o].test(l))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+l+'"');a+=s.prefix+l}}else a+=s}return a}}function a(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function o(n){return n&&n.sensitive?"":"i"}function s(n,r,t){return l(e(n,t),r,t)}function l(n,r,e){for(var t=(e=e||{}).strict,i=!1!==e.end,s=a(e.delimiter||d),l=e.delimiters||u,c=[].concat(e.endsWith||[]).map(a).concat("$").join("|"),v="",f=!1,p=0;p<n.length;p++){var h=n[p];if("string"==typeof h)v+=a(h),f=p===n.length-1&&l.indexOf(h[h.length-1])>-1;else{var b=a(h.prefix),m=h.repeat?"(?:"+h.pattern+")(?:"+b+"(?:"+h.pattern+"))*":h.pattern;r&&r.push(h),h.optional?h.partial?v+=b+"("+m+")?":v+="(?:"+b+"("+m+"))?":v+=b+"("+m+")"}}return i?(t||(v+="(?:"+s+")?"),v+="$"===c?"$":"(?="+c+")"):(t||(v+="(?:"+s+"(?="+c+"))?"),f||(v+="(?="+s+"|"+c+")")),new RegExp("^"+v,o(e))}function c(n,r,e){return n instanceof RegExp?function(n,r){if(!r)return n;var e=n.source.match(/\((?!\?)/g);if(e)for(var t=0;t<e.length;t++)r.push({name:t,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return n}(n,r):Array.isArray(n)?function(n,r,e){for(var t=[],a=0;a<n.length;a++)t.push(c(n[a],r,e).source);return new RegExp("(?:"+t.join("|")+")",o(e))}(n,r,e):s(n,r,e)}n.exports=c,n.exports.parse=e,n.exports.compile=function(n,r){return t(e(n,r))},n.exports.tokensToFunction=t,n.exports.tokensToRegExp=l;var d="/",u="./",v=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g")},function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=function(n,r){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,r){var e=[],t=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(t=(o=s.next()).done)&&(e.push(o.value),!r||e.length!==r);t=!0);}catch(n){a=!0,i=n}finally{try{!t&&s.return&&s.return()}finally{if(a)throw i}}return e}(n,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")};r.parseQuery=function(n){var r={};return(n=n.trim().replace(/^(\?|#|&)/,""))?(n.split("&").forEach((function(n){var e=n.split("="),a=t(e,2),i=a[0],o=a[1],s=[decodeURIComponent(i),o?decodeURIComponent(o):null],l=s[1];r[s[0]]=l})),r):null}},function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function n(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(r,e,t){return e&&n(r.prototype,e),t&&n(r,t),r}}(),a=function(n){return n&&n.__esModule?n:{default:n}}(e(0)),i=function(n){function r(n){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);var e=function(n,r){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?n:r}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,n));return e._init(),window.addEventListener("load",e._listen),window.addEventListener("popstate",e._listen),e}return function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r)}(r,n),t(r,[{key:"_init",value:function(){var n=this;this._listen=function(r){var e=""+location.pathname+location.search,t=n.matcher.match(e);n._matchedCount=t.length,n._fireHandlers(t,r.state)}}},{key:"_routeTo",value:function(n,r){var e=this.matcher.match(n);this._matchedCount=e.length,this._fireHandlers(e,r)}},{key:"go",value:function(n,r){history.pushState(r,"",n),this._routeTo(n,r)}},{key:"redirect",value:function(n,r){history.replaceState(r,"",n),this._routeTo(n,r)}},{key:"back",value:function(){history.go(-1)}},{key:"stop",value:function(){window.removeEventListener("load",this._listen),window.removeEventListener("popstate",this._listen)}}]),r}(a.default);r.default=i},function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.setCache=function(n,r){r&&t.setItem(""+a+n,JSON.stringify(r))},r.getCache=function(n){try{var r=t.getItem(""+a+n);return r?JSON.parse(r):null}catch(n){throw new Error("parse body err")}};var t=sessionStorage,a="smer"},function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.def=function(n,r,e){Object.defineProperty(n,r,{writable:!1,enumerable:!0,value:e})}},function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function n(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(r,e,t){return e&&n(r.prototype,e),t&&n(r,t),r}}(),a=function(n){return n&&n.__esModule?n:{default:n}}(e(0)),i=function(n){function r(n){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);var e=function(n,r){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?n:r}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,n));return e._cache={},e._init(),window.addEventListener("load",e._listen),window.addEventListener("hashchange",e._listen),e}return function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r)}(r,n),t(r,[{key:"_getHash",value:function(){return location.hash.slice(1)}},{key:"_init",value:function(){var n=this;this._listen=function(r){var e=n._getHash(),t=n.matcher.match(e);n._matchedCount=t.length,n._fireHandlers(t,n._cache[e])}}},{key:"go",value:function(n,r){this._cache[n]=r,location.hash=""+n}},{key:"redirect",value:function(n,r){var e=location.href,t=e.indexOf("#");n=t>0?e.slice(0,t)+"#"+n:e.slice(0,0)+"#"+n,this._cache[n]=r,location.replace(n)}},{key:"back",value:function(){history.go(-1)}},{key:"stop",value:function(){window.removeEventListener("load",this._listen),window.removeEventListener("hashchange",this._listen)}}]),r}(a.default);r.default=i}])}},r={};function e(t){var a=r[t];if(void 0!==a)return a.exports;var i=r[t]={exports:{}};return n[t].call(i.exports,i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{"use strict";var n=e(615);const r=new(e.n(n)())("app");r.route("/index",((n,r,e)=>{var t;e('<div class="wrapper">\r\n  \x3c!-- 顶部导航 --\x3e\r\n  <nav class="main-header navbar navbar-expand navbar-white navbar-light">\r\n    \x3c!-- Left navbar links --\x3e\r\n    <ul class="navbar-nav">\r\n      <li class="nav-item">\r\n        <a class="nav-link" data-widget="pushmenu" href="#" role="button"\r\n          ><i class="fas fa-bars"></i\r\n        ></a>\r\n      </li>\r\n    </ul>\r\n    \x3c!-- Right navbar links --\x3e\r\n    <ul class="navbar-nav ml-auto">\r\n      <li class="nav-item">\r\n        <a\r\n          class="nav-link"\r\n          data-widget="control-sidebar"\r\n          data-slide="true"\r\n          href="#"\r\n          role="button"\r\n        >\r\n          <button type="button" class="btn btn-block btn-danger btn-sm">\r\n            退出登陆\r\n          </button>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n  \x3c!-- 侧边栏 --\x3e\r\n  <aside class="main-sidebar sidebar-dark-primary elevation-4">\r\n    \x3c!-- Brand Logo --\x3e\r\n    <a href="index3.html" class="brand-link">\r\n      <img\r\n        src="img/logo.png"\r\n        alt="广告管理LOGO"\r\n        class="brand-image img-circle elevation-3"\r\n        style="opacity: 0.8"\r\n      />\r\n      <span class="brand-text font-weight-light">硅谷后台管理系统</span>\r\n    </a>\r\n\r\n    \x3c!-- Sidebar --\x3e\r\n    <div class="sidebar">\r\n      \x3c!-- Sidebar user panel (optional) --\x3e\r\n      <div class="user-panel mt-3 pb-3 mb-3 d-flex">\r\n        <div class="info">\r\n          <a href="#" class="d-block">欢迎您：xxxxx</a>\r\n        </div>\r\n      </div>\r\n\r\n      \x3c!-- Sidebar Menu --\x3e\r\n      <nav class="mt-2">\r\n        <ul\r\n          class="nav nav-pills nav-sidebar flex-column"\r\n          data-widget="treeview"\r\n          role="menu"\r\n          data-accordion="false"\r\n        >\r\n          \x3c!-- 菜单列表 --\x3e\r\n          <li class="nav-item menu-open">\r\n            <a href="#" class="nav-link active">\r\n              <i class="nav-icon fas fa-tachometer-alt"></i>\r\n              <p>控制台</p>\r\n            </a>\r\n          </li>\r\n          <li class="nav-item menu-open">\r\n            <a href="#" class="nav-link">\r\n              <i class="nav-icon fas fa-user"></i>\r\n              <p>管理员列表页</p>\r\n            </a>\r\n          </li>\r\n          <li class="nav-item menu-open">\r\n            <a href="#" class="nav-link">\r\n              <i class="nav-icon fas fa-audio-description"></i>\r\n              <p>广告管理列表</p>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      \x3c!-- /.sidebar-menu --\x3e\r\n    </div>\r\n    \x3c!-- /.sidebar --\x3e\r\n  </aside>\r\n\r\n  \x3c!-- 主要内容 --\x3e\r\n  <div class="content-wrapper">\r\n    \x3c!-- Content Header (Page header) --\x3e\r\n    <div class="content-header">\r\n      <div class="container-fluid">\r\n        <div class="row mb-2">\r\n          <div class="col-sm-6">\r\n            <h1 class="m-0">页面标题</h1>\r\n          </div>\r\n        </div>\r\n        \x3c!-- /.row --\x3e\r\n      </div>\r\n      \x3c!-- /.container-fluid --\x3e\r\n    </div>\r\n    \x3c!-- /.content-header --\x3e\r\n\r\n    \x3c!-- Main content --\x3e\r\n    <div class="content">\r\n      <div class="container-fluid">'+(null==(t={subRouteContent:r.subRoute()}.subRouteContent)?"":t)+'</div>\r\n      \x3c!-- /.container-fluid --\x3e\r\n    </div>\r\n    \x3c!-- /.content --\x3e\r\n  </div>\r\n\r\n  \x3c!-- Main Footer --\x3e\r\n  <footer class="main-footer">\r\n    \x3c!-- To the right --\x3e\r\n    <div class="float-right d-none d-sm-inline">Anything you want</div>\r\n    \x3c!-- Default to the left --\x3e\r\n    <strong\r\n      >Copyright © 2023-2024\r\n      <a href="http://learn.fuming.site">尚硅谷</a>.</strong\r\n    >\r\n    All rights reserved.\r\n  </footer>\r\n</div>\r\n')})),r.route("/index/admin",((n,r)=>{r.render('<div class="wrapper">\r\n  \x3c!-- 顶部导航 --\x3e\r\n  <nav class="main-header navbar navbar-expand navbar-white navbar-light">\r\n    \x3c!-- Left navbar links --\x3e\r\n    <ul class="navbar-nav">\r\n      <li class="nav-item">\r\n        <a class="nav-link" data-widget="pushmenu" href="#" role="button"\r\n          ><i class="fas fa-bars"></i\r\n        ></a>\r\n      </li>\r\n    </ul>\r\n    \x3c!-- Right navbar links --\x3e\r\n    <ul class="navbar-nav ml-auto">\r\n      <li class="nav-item">\r\n        <a\r\n          class="nav-link"\r\n          data-widget="control-sidebar"\r\n          data-slide="true"\r\n          href="#"\r\n          role="button"\r\n        >\r\n          <button type="button" class="btn btn-block btn-danger btn-sm">\r\n            退出登陆\r\n          </button>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n  \x3c!-- 侧边栏 --\x3e\r\n  <aside class="main-sidebar sidebar-dark-primary elevation-4">\r\n    \x3c!-- Brand Logo --\x3e\r\n    <a href="index3.html" class="brand-link">\r\n      <img\r\n        src="img/logo.png"\r\n        alt="广告管理LOGO"\r\n        class="brand-image img-circle elevation-3"\r\n        style="opacity: 0.8"\r\n      />\r\n      <span class="brand-text font-weight-light">硅谷后台管理系统</span>\r\n    </a>\r\n\r\n    \x3c!-- Sidebar --\x3e\r\n    <div class="sidebar">\r\n      \x3c!-- Sidebar user panel (optional) --\x3e\r\n      <div class="user-panel mt-3 pb-3 mb-3 d-flex">\r\n        <div class="info">\r\n          <a href="#" class="d-block">欢迎您：xxxxx</a>\r\n        </div>\r\n      </div>\r\n\r\n      \x3c!-- Sidebar Menu --\x3e\r\n      <nav class="mt-2">\r\n        <ul\r\n          class="nav nav-pills nav-sidebar flex-column"\r\n          data-widget="treeview"\r\n          role="menu"\r\n          data-accordion="false"\r\n        >\r\n          \x3c!-- 菜单列表 --\x3e\r\n          <li class="nav-item menu-open">\r\n            <a href="#" class="nav-link">\r\n              <i class="nav-icon fas fa-tachometer-alt"></i>\r\n              <p>控制台</p>\r\n            </a>\r\n          </li>\r\n          <li class="nav-item menu-open active">\r\n            <a href="#" class="nav-link">\r\n              <i class="nav-icon fas fa-user"></i>\r\n              <p>管理员列表页</p>\r\n            </a>\r\n          </li>\r\n          <li class="nav-item menu-open">\r\n            <a href="#" class="nav-link">\r\n              <i class="nav-icon fas fa-audio-description"></i>\r\n              <p>广告管理列表</p>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      \x3c!-- /.sidebar-menu --\x3e\r\n    </div>\r\n    \x3c!-- /.sidebar --\x3e\r\n  </aside>\r\n\r\n  \x3c!-- 主要内容 --\x3e\r\n  <div class="content-wrapper">\r\n    \x3c!-- Content Header (Page header) --\x3e\r\n    <div class="content-header">\r\n      <div class="container-fluid">\r\n        <div class="row mb-2">\r\n          <div class="col-sm-6">\r\n            <h1 class="m-0">管理员列表</h1>\r\n          </div>\r\n        </div>\r\n        \x3c!-- /.row --\x3e\r\n      </div>\r\n      \x3c!-- /.container-fluid --\x3e\r\n    </div>\r\n    \x3c!-- /.content-header --\x3e\r\n\r\n    \x3c!-- Main content --\x3e\r\n    <div class="content">\r\n      <div class="container-fluid">\r\n        <div id="__sub-route-view">\r\n          <div class="card adminlist">\r\n            <div class="card-header">\r\n              <button\r\n                type="button"\r\n                class="btn btn-primary btn-sm"\r\n                data-toggle="modal"\r\n                data-target="#addAdminModal"\r\n              >\r\n                添加管理员\r\n              </button>\r\n            </div>\r\n            \x3c!-- /.card-header --\x3e\r\n            <div class="card-body" id="amdinListBox">\r\n              <table class="table table-bordered">\r\n                <thead>\r\n                  <tr>\r\n                    <th style="width: 10px">ID</th>\r\n                    <th>用户名</th>\r\n                    <th>最后登录时间</th>\r\n                    <th>注册时间</th>\r\n                    <th>操作</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>648d3b13dbeadd55199ab0a7</td>\r\n                    <td>admin</td>\r\n                    <td>2023-06-17 12:50:22</td>\r\n                    <td>2023-06-17 12:48:19</td>\r\n                    <td>\r\n                      <button\r\n                        type="button"\r\n                        class="btn btn-danger"\r\n                        data-id="648d3b13dbeadd55199ab0a7"\r\n                      >\r\n                        删除\r\n                      </button>\r\n                      <button type="button" class="btn btn-success">\r\n                        修改密码\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \x3c!-- /.container-fluid --\x3e\r\n    </div>\r\n    \x3c!-- /.content --\x3e\r\n  </div>\r\n\r\n  \x3c!-- Main Footer --\x3e\r\n  <footer class="main-footer">\r\n    \x3c!-- To the right --\x3e\r\n    <div class="float-right d-none d-sm-inline">Anything you want</div>\r\n    \x3c!-- Default to the left --\x3e\r\n    <strong\r\n      >Copyright © 2023-2024\r\n      <a href="http://learn.fuming.site">尚硅谷</a>.</strong\r\n    >\r\n    All rights reserved.\r\n  </footer>\r\n</div>\r\n\x3c!-- ./wrapper --\x3e\r\n\r\n\x3c!-- 模态框 --\x3e\r\n<div\r\n  class="modal fade"\r\n  id="addAdminModal"\r\n  style="display: none"\r\n  aria-hidden="true"\r\n>\r\n  <div class="modal-dialog">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <h4 class="modal-title">添加管理员</h4>\r\n        <button\r\n          type="button"\r\n          class="close"\r\n          data-dismiss="modal"\r\n          aria-label="Close"\r\n        >\r\n          <span aria-hidden="true">×</span>\r\n        </button>\r\n      </div>\r\n      <div class="modal-body">\r\n        <form name="adminForm" id="addAdminForm">\r\n          <div class="form-group">\r\n            <label for="exampleInputEmail1">管理员账号</label>\r\n            <input\r\n              type="text"\r\n              class="form-control"\r\n              id="exampleInputEmail1"\r\n              placeholder="请输入管理员账号"\r\n            />\r\n          </div>\r\n          <div class="form-group">\r\n            <label for="exampleInputPassword1">管理员密码</label>\r\n            <input\r\n              type="password"\r\n              class="form-control"\r\n              id="exampleInputPassword1"\r\n              placeholder="请输入管理员密码"\r\n            />\r\n          </div>\r\n          <div class="form-group">\r\n            <label for="exampleInputPassword2">重复密码</label>\r\n            <input\r\n              type="password"\r\n              class="form-control"\r\n              id="exampleInputPassword2"\r\n              placeholder="请输入管理员密码"\r\n            />\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class="modal-footer justify-content-between">\r\n        <button type="button" class="btn btn-default" data-dismiss="modal">\r\n          取消\r\n        </button>\r\n        <button type="button" id="addAdminBtn" class="btn btn-primary">\r\n          添加\r\n        </button>\r\n      </div>\r\n    </div>\r\n    \x3c!-- /.modal-content --\x3e\r\n  </div>\r\n  \x3c!-- /.modal-dialog --\x3e\r\n</div>\r\n')})),r.route("/index/adv",((n,r)=>{r.render('<div class="wrapper">\r\n  \x3c!-- 顶部导航 --\x3e\r\n  <nav class="main-header navbar navbar-expand navbar-white navbar-light">\r\n    \x3c!-- Left navbar links --\x3e\r\n    <ul class="navbar-nav">\r\n      <li class="nav-item">\r\n        <a class="nav-link" data-widget="pushmenu" href="#" role="button"\r\n          ><i class="fas fa-bars"></i\r\n        ></a>\r\n      </li>\r\n    </ul>\r\n    \x3c!-- Right navbar links --\x3e\r\n    <ul class="navbar-nav ml-auto">\r\n      <li class="nav-item">\r\n        <a\r\n          class="nav-link"\r\n          data-widget="control-sidebar"\r\n          data-slide="true"\r\n          href="#"\r\n          role="button"\r\n        >\r\n          <button type="button" class="btn btn-block btn-danger btn-sm">\r\n            退出登陆\r\n          </button>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n  \x3c!-- 侧边栏 --\x3e\r\n  <aside class="main-sidebar sidebar-dark-primary elevation-4">\r\n    \x3c!-- Brand Logo --\x3e\r\n    <a href="index3.html" class="brand-link">\r\n      <img\r\n        src="img/logo.png"\r\n        alt="广告管理LOGO"\r\n        class="brand-image img-circle elevation-3"\r\n        style="opacity: 0.8"\r\n      />\r\n      <span class="brand-text font-weight-light">硅谷后台管理系统</span>\r\n    </a>\r\n\r\n    \x3c!-- Sidebar --\x3e\r\n    <div class="sidebar">\r\n      \x3c!-- Sidebar user panel (optional) --\x3e\r\n      <div class="user-panel mt-3 pb-3 mb-3 d-flex">\r\n        <div class="info">\r\n          <a href="#" class="d-block">欢迎您：xxxxx</a>\r\n        </div>\r\n      </div>\r\n\r\n      \x3c!-- Sidebar Menu --\x3e\r\n      <nav class="mt-2">\r\n        <ul\r\n          class="nav nav-pills nav-sidebar flex-column"\r\n          data-widget="treeview"\r\n          role="menu"\r\n          data-accordion="false"\r\n        >\r\n          \x3c!-- 菜单列表 --\x3e\r\n          <li class="nav-item menu-open">\r\n            <a href="#" class="nav-link">\r\n              <i class="nav-icon fas fa-tachometer-alt"></i>\r\n              <p>控制台</p>\r\n            </a>\r\n          </li>\r\n          <li class="nav-item menu-open">\r\n            <a href="#" class="nav-link">\r\n              <i class="nav-icon fas fa-user"></i>\r\n              <p>管理员列表页</p>\r\n            </a>\r\n          </li>\r\n          <li class="nav-item menu-open">\r\n            <a href="#" class="nav-link active">\r\n              <i class="nav-icon fas fa-audio-description"></i>\r\n              <p>广告管理列表</p>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      \x3c!-- /.sidebar-menu --\x3e\r\n    </div>\r\n    \x3c!-- /.sidebar --\x3e\r\n  </aside>\r\n\r\n  \x3c!-- 主要内容 --\x3e\r\n  <div class="content-wrapper">\r\n    \x3c!-- Content Header (Page header) --\x3e\r\n    <div class="content-header">\r\n      <div class="container-fluid">\r\n        <div class="row mb-2">\r\n          <div class="col-sm-6">\r\n            <h1 class="m-0">页面标题</h1>\r\n          </div>\r\n        </div>\r\n        \x3c!-- /.row --\x3e\r\n      </div>\r\n      \x3c!-- /.container-fluid --\x3e\r\n    </div>\r\n    \x3c!-- /.content-header --\x3e\r\n\r\n    \x3c!-- Main content --\x3e\r\n    <div class="content">\r\n      <div class="container-fluid">\r\n        <div id="__sub-route-view">\r\n          <div class="card">\r\n            <div class="card-header">\r\n              <button\r\n                type="button"\r\n                id="addAdvBtn"\r\n                class="btn btn-primary"\r\n                data-toggle="modal"\r\n                data-target="#advModal"\r\n              >\r\n                添加广告\r\n              </button>\r\n              <div class="card-tools">\r\n                <div class="input-group input-group-md">\r\n                  <input\r\n                    type="text"\r\n                    class="form-control"\r\n                    id="keyword"\r\n                    placeholder="搜索关键字"\r\n                  />\r\n                  <div class="input-group-append">\r\n                    <div class="btn btn-primary" id="searchAdv">\r\n                      <i class="fas fa-search"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \x3c!-- /.card-header --\x3e\r\n            <div id="advTable" class="card-body">\r\n              <table id="" class="table table-bordered">\r\n                <thead>\r\n                  <tr>\r\n                    <th>id</th>\r\n                    <th>标题</th>\r\n                    <th>图片</th>\r\n                    <th>类别</th>\r\n                    <th>链接</th>\r\n                    <th>排序</th>\r\n                    <th>添加时间</th>\r\n                    <th>修改时间</th>\r\n                    <th>操作</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>648d1fcd73eabdb6ee308067</td>\r\n                    <td>小米13广告</td>\r\n                    <td>\r\n                      <img\r\n                        height="80"\r\n                        src="http://api.fuming.site:54254/2023/06/17/db0e9ef8b55471c83cbcbcc01.jpg"\r\n                        alt=""\r\n                      />\r\n                    </td>\r\n                    <td>轮播图</td>\r\n                    <td>http://learn.fuming.site</td>\r\n                    <td>1</td>\r\n                    <td>2023-06-17 10:51:57</td>\r\n                    <td>2023-06-17 10:51:57</td>\r\n                    <td>\r\n                      <button type="button" class="btn btn-danger btn-sm">\r\n                        删除\r\n                      </button>\r\n                      <button\r\n                        type="button"\r\n                        data-id="648d1fcd73eabdb6ee308067"\r\n                        class="btn btn-success btn-sm btn-edit"\r\n                      >\r\n                        修改\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n\r\n              \x3c!-- /.card-body --\x3e\r\n              <div class="card-footer clearfix" id="pageDiv">\r\n                <ul class="pagination pagination-sm m-0 float-right">\r\n                  <li class="page-item">\r\n                    <a href="javascript:;" data-i="0" class="page-link">«</a>\r\n                  </li>\r\n\r\n                  <li class="page-item active">\r\n                    <a class="page-link" data-i="1" href="javascript:;">1</a>\r\n                  </li>\r\n\r\n                  <li class="page-item">\r\n                    <a href="javascript:;" data-i="2" class="page-link">»</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div\r\n            class="modal fade show"\r\n            id="advModal"\r\n            style="padding-right: 17px"\r\n            aria-modal="true"\r\n            role="dialog"\r\n          >\r\n            <div class="modal-dialog">\r\n              <div class="modal-content">\r\n                <div class="modal-header">\r\n                  <h4 class="modal-title">添加广告</h4>\r\n                  <button\r\n                    type="button"\r\n                    class="close"\r\n                    data-dismiss="modal"\r\n                    aria-label="Close"\r\n                  >\r\n                    <span aria-hidden="true">×</span>\r\n                  </button>\r\n                </div>\r\n                <form name="addAdvForm" class="form-horizontal" id="addAdvForm">\r\n                  <div class="card-body">\r\n                    <div class="form-group row">\r\n                      <label class="col-sm-2 col-form-label" for="advTitle"\r\n                        >标题：</label\r\n                      >\r\n                      <div class="col-sm-10">\r\n                        <input\r\n                          id="advTitle"\r\n                          name=""\r\n                          type="text"\r\n                          class="form-control"\r\n                          placeholder="请输入广告标题"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group row">\r\n                      <label class="col-sm-2 col-form-label" for="advType"\r\n                        >类别:</label\r\n                      >\r\n                      <div class="col-sm-10">\r\n                        <select name="" id="advType" class="form-control">\r\n                          <option value="1">轮播图广告</option>\r\n                          <option value="2">轮播图底部广告</option>\r\n                          <option value="3">热门回收广告</option>\r\n                          <option value="4">优品精选广告</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group row">\r\n                      <label class="col-sm-2 col-form-label" for="advHref"\r\n                        >链接：</label\r\n                      >\r\n                      <div class="col-sm-10">\r\n                        <input\r\n                          id="advHref"\r\n                          name=""\r\n                          type="text"\r\n                          class="form-control"\r\n                          placeholder="请输入广告链接"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class="form-group row">\r\n                      <label class="col-sm-2 col-form-label" for="orderNum"\r\n                        >排序：</label\r\n                      >\r\n                      <div class="col-sm-10">\r\n                        <input\r\n                          id="orderNum"\r\n                          name=""\r\n                          type="text"\r\n                          class="form-control"\r\n                          placeholder="请输入广告排序，数字越大越靠前"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group row">\r\n                      <label class="col-sm-2 col-form-label" for="advPic"\r\n                        >图片：</label\r\n                      >\r\n                      <div class="col-sm-10 custom-file">\r\n                        \x3c!--  可以选择多个文件上传                          --\x3e\r\n                        \x3c!--                            <input multiple type="file" class="form-control" name="advPic" id="advPic">--\x3e\r\n                        \x3c!--  可以选择一个文件上传                          --\x3e\r\n                        <input\r\n                          type="file"\r\n                          class="form-control"\r\n                          name="advPic"\r\n                          id="advPic"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div>\r\n                      <img style="display: none" id="preImg" height="100" />\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n                <div class="modal-footer justify-content-between">\r\n                  <button\r\n                    type="button"\r\n                    class="btn btn-default"\r\n                    id="adv-cancel"\r\n                    data-dismiss="modal"\r\n                  >\r\n                    取消\r\n                  </button>\r\n                  <button\r\n                    type="submit"\r\n                    class="btn btn-primary"\r\n                    id="adv-save"\r\n                    form="addAdvForm"\r\n                  >\r\n                    提交\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              \x3c!-- /.modal-content --\x3e\r\n            </div>\r\n            \x3c!-- /.modal-dialog --\x3e\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \x3c!-- /.container-fluid --\x3e\r\n    </div>\r\n    \x3c!-- /.content --\x3e\r\n  </div>\r\n\r\n  \x3c!-- Main Footer --\x3e\r\n  <footer class="main-footer">\r\n    \x3c!-- To the right --\x3e\r\n    <div class="float-right d-none d-sm-inline">Anything you want</div>\r\n    \x3c!-- Default to the left --\x3e\r\n    <strong\r\n      >Copyright © 2023-2024\r\n      <a href="http://learn.fuming.site">尚硅谷</a>.</strong\r\n    >\r\n    All rights reserved.\r\n  </footer>\r\n</div>\r\n')})),r.route("/login",((n,r)=>{r.render('<div class="wrapper">\r\n  <div class="login-page">\r\n    <div class="login-box">\r\n      \x3c!-- /.login-logo --\x3e\r\n      <div class="card">\r\n        <div class="card-body login-card-body">\r\n          <p class="login-box-msg">尚硅谷广告后台管理系统</p>\r\n\r\n          <form name="loginForm">\r\n            <div class="input-group mb-3">\r\n              <input\r\n                name=""\r\n                type="text"\r\n                class="form-control"\r\n                placeholder="管理员账号"\r\n              />\r\n              <div class="input-group-append">\r\n                <div class="input-group-text">\r\n                  <span class="fas fa-user"></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="input-group mb-3">\r\n              <input\r\n                name=""\r\n                type="password"\r\n                class="form-control"\r\n                placeholder="请输入密码"\r\n              />\r\n              <div class="input-group-append">\r\n                <div class="input-group-text">\r\n                  <span class="fas fa-lock"></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row">\r\n              \x3c!-- /.col --\x3e\r\n              <div class="col-12">\r\n                <button\r\n                  type="submit"\r\n                  id="loginBtn"\r\n                  class="btn btn-primary btn-block"\r\n                >\r\n                  登陆\r\n                </button>\r\n              </div>\r\n              \x3c!-- /.col --\x3e\r\n            </div>\r\n          </form>\r\n        </div>\r\n        \x3c!-- /.login-card-body --\x3e\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n')})),r.route("*",((n,r)=>{r.redirect("/index")}))})()})();