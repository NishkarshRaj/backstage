/*! For license information please see 25aa5c7a.34535d7e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[620734],{567089:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=n(824246),o=n(511151);const a={id:"backend-plugin-manager.backenddynamicplugin.installer",title:"BackendDynamicPlugin.installer",description:"API reference for BackendDynamicPlugin.installer"},c=void 0,i={id:"reference/backend-plugin-manager.backenddynamicplugin.installer",title:"BackendDynamicPlugin.installer",description:"API reference for BackendDynamicPlugin.installer",source:"@site/../docs/reference/backend-plugin-manager.backenddynamicplugin.installer.md",sourceDirName:"reference",slug:"/reference/backend-plugin-manager.backenddynamicplugin.installer",permalink:"/docs/reference/backend-plugin-manager.backenddynamicplugin.installer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-manager.backenddynamicplugin.installer.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-manager.backenddynamicplugin.installer",title:"BackendDynamicPlugin.installer",description:"API reference for BackendDynamicPlugin.installer"}},u={},l=[];function s(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-manager",children:(0,t.jsx)(r.code,{children:"@backstage/backend-plugin-manager"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-manager.backenddynamicplugin",children:(0,t.jsx)(r.code,{children:"BackendDynamicPlugin"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-manager.backenddynamicplugin.installer",children:(0,t.jsx)(r.code,{children:"installer"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"installer: BackendDynamicPluginInstaller;\n"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in a=Object(arguments[u]))n.call(a,l)&&(i[l]=a[l]);if(r){c=r(a);for(var s=0;s<c.length;s++)t.call(a,c[s])&&(i[c[s]]=a[c[s]])}}return i}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,a={},l=null,s=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(s=r.ref),r)i.call(r,t)&&!u.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:s,props:a,_owner:c.current}}r.jsx=l,r.jsxs=l},541535:(e,r,n)=>{var t=n(862525),o=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,i=60110,u=60112;r.Suspense=60113;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),c=f("react.provider"),i=f("react.context"),u=f("react.forward_ref"),r.Suspense=f("react.suspense"),l=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}function h(){}function b(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var v=b.prototype=new h;v.constructor=b,t(v,g.prototype),v.isPureReactComponent=!0;var k={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,n){var t,a={},c=null,i=null;if(null!=r)for(t in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)_.call(r,t)&&!j.hasOwnProperty(t)&&(a[t]=r[t]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(t in u=e.defaultProps)void 0===a[t]&&(a[t]=u[t]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,n,t,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return c=c(u=e),e=""===t?"."+S(u,0):t,Array.isArray(c)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),x(c,r,n,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+e)),r.push(c)),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=t+S(i=e[l],l);u+=x(i,r,n,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(i=e.next()).done;)u+=x(i=i.value,r,n,s=t+S(i,l++),c);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function C(e,r,n){if(null==e)return e;var t=[],o=0;return x(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var D={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:C,forEach:function(e,r,n){C(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=g,r.PureComponent=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var a=t({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in r)_.call(r,s)&&!j.hasOwnProperty(s)&&(a[s]=void 0===r[s]&&void 0!==l?l[s]:r[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];a.children=l}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return R().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,n){return R().useReducer(e,r,n)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>i,ah:()=>a});var t=n(667294);const o=t.createContext({});function a(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:a(e),t.createElement(o.Provider,{value:i},r)}}}]);