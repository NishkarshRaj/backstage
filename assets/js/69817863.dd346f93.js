/*! For license information please see 69817863.dd346f93.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[621489],{783908:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var n=t(824246),o=t(511151);const s={id:"errors.consumedresponse",title:"ConsumedResponse",description:"API reference for ConsumedResponse"},u=void 0,a={id:"reference/errors.consumedresponse",title:"ConsumedResponse",description:"API reference for ConsumedResponse",source:"@site/../docs/reference/errors.consumedresponse.md",sourceDirName:"reference",slug:"/reference/errors.consumedresponse",permalink:"/docs/reference/errors.consumedresponse",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/errors.consumedresponse.md",tags:[],version:"current",frontMatter:{id:"errors.consumedresponse",title:"ConsumedResponse",description:"API reference for ConsumedResponse"}},c={},i=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/errors",children:(0,n.jsx)(r.code,{children:"@backstage/errors"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/errors.consumedresponse",children:(0,n.jsx)(r.code,{children:"ConsumedResponse"})})]}),"\n",(0,n.jsx)(r.p,{children:"ConsumedResponse represents a Response that is known to have been consumed. The methods and properties used to read the body contents are therefore omitted."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type ConsumedResponse = {\n    readonly headers: {\n        append(name: string, value: string): void;\n        delete(name: string): void;\n        get(name: string): string | null;\n        has(name: string): boolean;\n        set(name: string, value: string): void;\n        forEach(callback: (value: string, name: string) => void): void;\n        entries(): IterableIterator<[string, string]>;\n        keys(): IterableIterator<string>;\n        values(): IterableIterator<string>;\n        [Symbol.iterator](): Iterator<[string, string]>;\n    };\n    readonly ok: boolean;\n    readonly redirected: boolean;\n    readonly status: number;\n    readonly statusText: string;\n    readonly type: ResponseType;\n    readonly url: string;\n};\n"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,u,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var i in s=Object(arguments[c]))t.call(s,i)&&(a[i]=s[i]);if(r){u=r(s);for(var f=0;f<u.length;f++)n.call(s,u[f])&&(a[u[f]]=s[u[f]])}}return a}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),r.Fragment=s("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,s={},i=null,f=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,n)&&!c.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:f,props:s,_owner:u.current}}r.jsx=i,r.jsxs=i},541535:(e,r,t)=>{var n=t(862525),o=60103,s=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,a=60110,c=60112;r.Suspense=60113;var i=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),s=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),u=l("react.provider"),a=l("react.context"),c=l("react.forward_ref"),r.Suspense=l("react.suspense"),i=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function v(){}function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=g.prototype=new v;b.constructor=g,n(b,h.prototype),b.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,s={},u=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(u=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(s[n]=r[n]);var c=arguments.length-2;if(1===c)s.children=t;else if(1<c){for(var i=Array(c),f=0;f<c;f++)i[f]=arguments[f+2];s.children=i}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===s[n]&&(s[n]=c[n]);return{$$typeof:o,type:e,key:u,ref:a,props:s,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case s:c=!0}}if(c)return u=u(c=e),e=""===n?"."+R(c,0):n,Array.isArray(u)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),S(u,r,t,"",(function(e){return e}))):null!=u&&(C(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,t+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(O,"$&/")+"/")+e)),r.push(u)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=n+R(a=e[i],i);c+=S(a,r,t,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(a=e.next()).done;)c+=S(a=a.value,r,t,f=n+R(a,i++),u);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function x(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:x,forEach:function(e,r,t){x(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var s=n({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,c=_.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in r)j.call(r,f)&&!k.hasOwnProperty(f)&&(s[f]=void 0===r[f]&&void 0!==i?i[f]:r[f])}var f=arguments.length-2;if(1===f)s.children=t;else if(1<f){i=Array(f);for(var l=0;l<f;l++)i[l]=arguments[l+2];s.children=i}return{$$typeof:o,type:e.type,key:u,ref:a,props:s,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=C,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>s});var n=t(667294);const o=n.createContext({});function s(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||u:s(e),n.createElement(o.Provider,{value:a},r)}}}]);