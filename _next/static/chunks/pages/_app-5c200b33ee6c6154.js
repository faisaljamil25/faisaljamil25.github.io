(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),s=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},425:function(e,t,r){"use strict";r.d(t,{f:function(){return i},F:function(){return s}});var n=r(7294),o=r(9008);const a=(0,n.createContext)({setTheme:e=>{},themes:[]}),s=()=>(0,n.useContext)(a),c=["light","dark"],u="(prefers-color-scheme: dark)",i=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:o=!0,storageKey:s="theme",themes:i=["light","dark"],defaultTheme:m=(r?"system":"light"),attribute:h="data-theme",value:y,children:v})=>{const[b,g]=(0,n.useState)((()=>d(s,m))),[O,w]=(0,n.useState)((()=>d(s))),_=y?Object.values(y):i,j=(0,n.useCallback)((t=>{const r=p(t);w(r),"system"!==b||e||P(r,!1)}),[b,e]),x=(0,n.useRef)(j);x.current=j;const P=(0,n.useCallback)(((e,n=!0,o=!0)=>{let a=(null==y?void 0:y[e])||e;const c=t&&o?f():null;if(n)try{localStorage.setItem(s,e)}catch(e){}if("system"===e&&r){const e=p();a=(null==y?void 0:y[e])||e}if(o){const e=document.documentElement;"class"===h?(e.classList.remove(..._),e.classList.add(a)):e.setAttribute(h,a),null==c||c()}}),[]);(0,n.useEffect)((()=>{const e=function(){return x.current(...[].slice.call(arguments))},t=window.matchMedia(u);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const M=(0,n.useCallback)((t=>{e?P(t,!0,!1):P(t),g(t)}),[e]);return(0,n.useEffect)((()=>{const e=e=>{e.key===s&&M(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[M]),(0,n.useEffect)((()=>{if(!o)return;let t=e&&c.includes(e)?e:b&&c.includes(b)?b:"system"===b&&O||null;document.documentElement.style.setProperty("color-scheme",t)}),[o,b,O,e]),n.createElement(a.Provider,{value:{theme:b,setTheme:M,forcedTheme:e,resolvedTheme:"system"===b?O:b,themes:r?[...i,"system"]:i,systemTheme:r?O:void 0}},n.createElement(l,{forcedTheme:e,storageKey:s,attribute:h,value:y,enableSystem:r,defaultTheme:m,attrs:_}),v)},l=(0,n.memo)((({forcedTheme:e,storageKey:t,attribute:r,enableSystem:a,defaultTheme:s,value:c,attrs:i})=>{const l="class"===r?`var d=document.documentElement.classList;d.remove(${i.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",d=(e,t)=>{e=(null==c?void 0:c[e])||e;const n=t?e:`'${e}'`;return"class"===r?`d.add(${n})`:`d.setAttribute('${r}', ${n})`},f="system"===s;return n.createElement(o.default,null,n.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${l}${d(e)}}()`}}:a?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${l}var e=localStorage.getItem('${t}');${f?"":d(s)+";"}if("system"===e||(!e&&${f})){var t="${u}",m=window.matchMedia(t);m.media!==t||m.matches?${d("dark")}:${d("light")}}else if(e) ${c?`var x=${JSON.stringify(c)};`:""}${d(c?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${l}var e=localStorage.getItem("${t}");if(e){${c?`var x=${JSON.stringify(c)};`:""}${d(c?"x[e]":"e",!0)}}else{${d(s)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),d=(e,t)=>{if("undefined"==typeof window)return;let r;try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t},f=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},p=e=>(e||(e=window.matchMedia(u)),e.matches?"dark":"light")},8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(8e3);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,s=void 0!==a&&a;return r||o&&s}},2717:function(e,t,r){"use strict";var n=r(9713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var a,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),c=(a=r(1585))&&a.__esModule?a:{default:a},u=r(8e3),i=r(5850),l=r(5646);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=s.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,i=p.length;u<i;u++){var l=p[u];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var d=o.props[l],f=n[l]||new Set;"name"===l&&s||!f.has(d)?(f.add(d),n[l]=f):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,s.default.cloneElement(e,c)}return s.default.cloneElement(e,{key:a})}))}var h=function(e){var t=e.children,r=s.useContext(u.AmpStateContext),n=s.useContext(i.HeadManagerContext);return s.default.createElement(c.default,{reduceComponentsToState:m,headManager:n,inAmpMode:l.isInAmpMode(r)},t)};t.default=h},1585:function(e,t,r){"use strict";var n=r(319),o=r(4575),a=r(3913),s=(r(1506),r(2205)),c=r(8585),u=r(9754);function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var d=function(e){s(r,e);var t=i(r);function r(e){var a;return o(this,r),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=d},7600:function(e,t,r){"use strict";r.r(t);var n=r(4942),o=r(425),a=(r(3456),r(5893));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return(0,a.jsx)(o.f,{attribute:"class",children:(0,a.jsx)(t,c({},r))})}},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7600)}])},3456:function(){},9008:function(e,t,r){e.exports=r(2717)},4942:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(9898)}));var r=e.O();_N_E=r}]);