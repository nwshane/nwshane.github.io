webpackJsonp([0xd2a57dc1d883],{108:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(428),options:{plugins:[]}},{plugin:t(429),options:{plugins:[],trackingId:"UA-66298356-2"}}]},298:function(e,n,t){"use strict";n.components={"component---src-templates-project-js":t(411),"component---src-templates-blog-post-js":t(410),"component---src-pages-index-js":t(407),"component---src-pages-resume-js":t(409),"component---src-pages-blog-index-js":t(406),"component---src-pages-projects-index-js":t(408)},n.json={"projects-atoms.json":t(419),"projects-feradi-info.json":t(420),"projects-georgian-budget.json":t(421),"projects-gogocode.json":t(422),"projects-place-ge-scraper.json":t(423),"projects-prisoners-watch.json":t(424),"projects-scott-shane-net.json":t(425),"blog-why-im-starting-a-blog.json":t(416),"blog-squashing-gatsby-webpack-d-3-bug.json":t(415),"blog-babel-error-in-jest.json":t(413),"blog-lets-define-undefined.json":t(414),"index.json":t(417),"resume.json":t(426),"blog.json":t(412),"projects.json":t(418)},n.layouts={}},299:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=t(4),i=o(c),l=t(2),f=o(l),p=t(172),d=o(p),g=t(75),h=o(g),m=t(108),j=function(e){var n=e.children;return i.default.createElement("div",null,n())},v=function(e){function n(t){r(this,n);var o=a(this,e.call(this));return o.state={location:t.location,pageResources:d.default.getResourcesForPathname(t.location.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):d.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources})}),n=e[0];return this.props.page?this.state.pageResources?n||(0,c.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(i.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=v,e.exports=n.default},75:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(456),a=o(r),u=(0,a.default)();e.exports=u},300:function(e,n,t){"use strict";var o=t(107),r={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(n.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return s=e,r[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return s=e,r[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return s=e,r[u]=e,!0}return!1}),s}}},301:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(127),a=o(r),u=t(108),s=(0,u.apiRunner)("replaceHistory"),c=s[0],i=c||(0,a.default)();e.exports=i},413:function(e,n,t){t(11),e.exports=function(e){return t.e(1478269245095,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(439)})})}},414:function(e,n,t){t(11),e.exports=function(e){return t.e(20942050224866,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(440)})})}},415:function(e,n,t){t(11),e.exports=function(e){return t.e(33759698319820,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(441)})})}},416:function(e,n,t){t(11),e.exports=function(e){return t.e(0xee6836f977fd,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(442)})})}},412:function(e,n,t){t(11),e.exports=function(e){return t.e(49683490770531,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(443)})})}},417:function(e,n,t){t(11),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(444)})})}},419:function(e,n,t){t(11),e.exports=function(e){return t.e(0xf9513fa6dc12,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(445)})})}},420:function(e,n,t){t(11),e.exports=function(e){return t.e(0x75a5fd51b8e1,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(446)})})}},421:function(e,n,t){t(11),e.exports=function(e){return t.e(25809487285447,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(447)})})}},422:function(e,n,t){t(11),e.exports=function(e){return t.e(67578937172164,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(448)})})}},423:function(e,n,t){t(11),e.exports=function(e){return t.e(0x8de94f0bf13e,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(449)})})}},424:function(e,n,t){t(11),e.exports=function(e){return t.e(0xbc61a9088db5,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(450)})})}},425:function(e,n,t){t(11),e.exports=function(e){return t.e(80249059781645,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(451)})})}},418:function(e,n,t){t(11),e.exports=function(e){return t.e(97786326051841,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(452)})})}},426:function(e,n,t){t(11),e.exports=function(e){return t.e(0xc69833dc971c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(453)})})}},172:function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(4),a=(o(r),t(300)),u=o(a),s=t(75),c=o(s),i=void 0,l={},f={},p={},d={},g={},h=[],m=[],j={},v=[],R={},b=function(e){return e&&e.default||e},y=void 0,_=!0;y=t(302)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){x(e,function(){v=v.filter(function(n){return n!==e}),y.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){y.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){y.onPostLoadPageResources(e)});var w=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},P=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[e])n.nextTick(function(){t(null,d[e])});else{var o="component---"===e.slice(0,12)?f.components[e]||f.layouts[e]:f.json[e];o(function(n,o){d[e]=o,t(n,o)})}},N=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):x(e,function(n,o){if(n)t(n);else{var r=b(o());g[e]=r,t(n,r)}})},k=1,C={empty:function(){m=[],j={},R={},v=[],h=[]},addPagesArray:function(e){h=e;var n="";n="",i=(0,u.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return m.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/k;k+=1,j[e]?j[e]+=1:j[e]=1,C.has(e)||m.unshift(e),m.sort(P);var t=i(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+n:R[t.jsonName]=1+n,v.indexOf(t.jsonName)!==-1||d[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+n:R[t.componentChunkName]=1+n,v.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(w),y.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:R}},getPages:function(){return{pathArray:m,pathCount:j}},getPage:function(e){return i(e)},has:function(e){return m.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(i(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()})),_=!1;var o=i(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return n.nextTick(function(){t(p[e]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];c.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){p[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),c.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return N(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),r=n,s()}),N(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),a=n,s()}),void(o.layoutComponentChunkName&&N(o.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),u=n,s()}))},peek:function(e){return m.slice(-1)[0]},length:function(){return m.length},indexOf:function(e){return m.length-m.indexOf(e)-1}};e.exports=C}).call(n,t(84))},454:function(e,n){e.exports=[{componentChunkName:"component---src-templates-project-js",layout:null,jsonName:"projects-atoms.json",path:"/projects/atoms"},{componentChunkName:"component---src-templates-project-js",layout:null,jsonName:"projects-feradi-info.json",path:"/projects/feradi_info"},{componentChunkName:"component---src-templates-project-js",layout:null,jsonName:"projects-georgian-budget.json",path:"/projects/georgian_budget"},{componentChunkName:"component---src-templates-project-js",layout:null,jsonName:"projects-gogocode.json",path:"/projects/gogocode"},{componentChunkName:"component---src-templates-project-js",layout:null,jsonName:"projects-place-ge-scraper.json",path:"/projects/place_ge_scraper"},{componentChunkName:"component---src-templates-project-js",layout:null,jsonName:"projects-prisoners-watch.json",path:"/projects/prisoners_watch"},{componentChunkName:"component---src-templates-project-js",layout:null,jsonName:"projects-scott-shane-net.json",path:"/projects/scott_shane_net"},{componentChunkName:"component---src-templates-blog-post-js",layout:null,jsonName:"blog-why-im-starting-a-blog.json",path:"/blog/why-i'm-starting-a-blog"},{componentChunkName:"component---src-templates-blog-post-js",layout:null,jsonName:"blog-squashing-gatsby-webpack-d-3-bug.json",path:"/blog/squashing-gatsby-webpack-d3-bug"},{componentChunkName:"component---src-templates-blog-post-js",layout:null,jsonName:"blog-babel-error-in-jest.json",path:"/blog/babel-error-in-jest"},{componentChunkName:"component---src-templates-blog-post-js",layout:null,jsonName:"blog-lets-define-undefined.json",path:"/blog/let's-define-undefined"},{componentChunkName:"component---src-pages-index-js",layout:null,jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-resume-js",layout:null,jsonName:"resume.json",path:"/resume/"},{componentChunkName:"component---src-pages-blog-index-js",layout:null,jsonName:"blog.json",path:"/blog/"},{componentChunkName:"component---src-pages-projects-index-js",layout:null,jsonName:"projects.json",path:"/projects/"}]},302:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(108),u=t(4),s=o(u),c=t(261),i=o(c),l=t(107),f=t(433),p=t(390),d=o(p),g=t(301),h=o(g),m=t(75),j=o(m),v=t(454),R=o(v),b=t(455),y=o(b),_=t(299),w=o(_),P=t(298),x=o(P),N=t(172),k=o(N);t(380),window.___emitter=j.default,k.default.addPagesArray(R.default),k.default.addProdRequires(x.default),window.asyncRequires=x.default,window.___loader=k.default,window.matchPath=l.matchPath;var C=y.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),E=function(e){var n=C[e];return null!=n&&(h.default.replace(n.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){E(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(303);var o=function(e){function n(t){t.page.path===k.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=C[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){j.default.off("onPostLoadPageResources",n),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);k.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):j.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var c=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],p=function(e){var n=e.children;return s.default.createElement(l.Router,{history:h.default},n)},g=(0,l.withRouter)(w.default);k.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(c?c:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(g,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return k.default.getPage(o.location.pathname)?(0,u.createElement)(w.default,r({page:!0},o)):(0,u.createElement)(w.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return i.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},455:function(e,n){e.exports=[]},303:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(75),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},390:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},11:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,c=!0,i=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void i(!0):(r(o,function(){s||(s=!0,c?setTimeout(function(){i()}):i())}),void(s||(c=!1,e(function(){s||(s=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),i(!0))}))))}}o()},427:function(e,n){"use strict";e.exports=function(e,n){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var t=null,o=e.target;o.parentNode;o=o.parentNode)if("A"===o.nodeName){t=o;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.target.hash)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var a=document.createElement("a");return a.href=window.location.href,r.host!==a.host||(e.preventDefault(),n(t.getAttribute("href")),!1)})}},428:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(60),a=t(427),u=o(a);(0,u.default)(window,function(e){(0,r.navigateTo)(e)})},429:function(e,n,t){"use strict";n.onRouteUpdate=function(e){var n=e.location;"function"==typeof ga&&(window.ga("set","page",(n||{}).pathname),window.ga("send","pageview"))}},456:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},406:function(e,n,t){t(11),e.exports=function(e){return t.e(0x8a675b55feca,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(312)})})}},407:function(e,n,t){t(11),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(313)})})}},408:function(e,n,t){t(11),e.exports=function(e){return t.e(0xb851aee280d6,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(314)})})}},409:function(e,n,t){t(11),e.exports=function(e){return t.e(0x8eb291567e75,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(315)})})}},410:function(e,n,t){t(11),e.exports=function(e){return t.e(0x620f737b6699,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(316)})})}},411:function(e,n,t){t(11),e.exports=function(e){return t.e(0x645317542b3b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(317)})})}}});
//# sourceMappingURL=app-05ee3488c97ffebe52b3.js.map