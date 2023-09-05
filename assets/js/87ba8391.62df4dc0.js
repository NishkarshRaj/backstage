/*! For license information please see 87ba8391.62df4dc0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[540752],{117305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=t(824246),o=t(511151);const c={id:"plugin-splunk-on-call.splunkoncallclient.getincidents",title:"SplunkOnCallClient.getIncidents()",description:"API reference for SplunkOnCallClient.getIncidents()"},l=void 0,i={unversionedId:"reference/plugin-splunk-on-call.splunkoncallclient.getincidents",id:"reference/plugin-splunk-on-call.splunkoncallclient.getincidents",title:"SplunkOnCallClient.getIncidents()",description:"API reference for SplunkOnCallClient.getIncidents()",source:"@site/../docs/reference/plugin-splunk-on-call.splunkoncallclient.getincidents.md",sourceDirName:"reference",slug:"/reference/plugin-splunk-on-call.splunkoncallclient.getincidents",permalink:"/docs/reference/plugin-splunk-on-call.splunkoncallclient.getincidents",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-splunk-on-call.splunkoncallclient.getincidents.md",tags:[],version:"current",frontMatter:{id:"plugin-splunk-on-call.splunkoncallclient.getincidents",title:"SplunkOnCallClient.getIncidents()",description:"API reference for SplunkOnCallClient.getIncidents()"}},u={},s=[];function a(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-splunk-on-call"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call.splunkoncallclient",children:(0,r.jsx)(n.code,{children:"SplunkOnCallClient"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call.splunkoncallclient.getincidents",children:(0,r.jsx)(n.code,{children:"getIncidents"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"getIncidents(): Promise<Incident[]>;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call.incident",children:"Incident"}),"[]>"]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,l,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in c=Object(arguments[u]))t.call(c,s)&&(i[s]=c[s]);if(n){l=n(c);for(var a=0;a<l.length;a++)r.call(c,l[a])&&(i[l[a]]=c[l[a]])}}return i}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),n.Fragment=c("react.fragment")}var l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,c={},s=null,a=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,r)&&!u.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:a,props:c,_owner:l.current}}n.jsx=s,n.jsxs=s},541535:(e,n,t)=>{var r=t(862525),o=60103,c=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var l=60109,i=60110,u=60112;n.Suspense=60113;var s=60115,a=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),n.Fragment=f("react.fragment"),n.StrictMode=f("react.strict_mode"),n.Profiler=f("react.profiler"),l=f("react.provider"),i=f("react.context"),u=f("react.forward_ref"),n.Suspense=f("react.suspense"),s=f("react.memo"),a=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}function v(){}function m(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var k=m.prototype=new v;k.constructor=m,r(k,g.prototype),k.isPureReactComponent=!0;var _={current:null},b=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,n,t){var r,c={},l=null,i=null;if(null!=n)for(r in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(l=""+n.key),n)b.call(n,r)&&!j.hasOwnProperty(r)&&(c[r]=n[r]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];c.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===c[r]&&(c[r]=u[r]);return{$$typeof:o,type:e,key:l,ref:i,props:c,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function x(e,n,t,r,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return l=l(u=e),e=""===r?"."+w(u,0):r,Array.isArray(l)?(t="",null!=e&&(t=e.replace(S,"$&/")+"/"),x(l,n,t,"",(function(e){return e}))):null!=l&&(C(l)&&(l=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(l,t+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(S,"$&/")+"/")+e)),n.push(l)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var a=r+w(i=e[s],s);u+=x(i,n,t,a,l)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),s=0;!(i=e.next()).done;)u+=x(i=i.value,n,t,a=r+w(i,s++),l);else if("object"===i)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function E(e,n,t){if(null==e)return e;var r=[],o=0;return x(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function R(){var e=I.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:E,forEach:function(e,n,t){E(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return E(e,(function(){n++})),n},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(d(143));return e}},n.Component=g,n.PureComponent=m,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,t){if(null==e)throw Error(d(267,e));var c=r({},e.props),l=e.key,i=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,u=_.current),void 0!==n.key&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)b.call(n,a)&&!j.hasOwnProperty(a)&&(c[a]=void 0===n[a]&&void 0!==s?s[a]:n[a])}var a=arguments.length-2;if(1===a)c.children=t;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];c.children=s}return{$$typeof:o,type:e.type,key:l,ref:i,props:c,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:i,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},n.createElement=O,n.createFactory=function(e){var n=O.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:a,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:s,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return R().useCallback(e,n)},n.useContext=function(e,n){return R().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return R().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return R().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return R().useLayoutEffect(e,n)},n.useMemo=function(e,n){return R().useMemo(e,n)},n.useReducer=function(e,n,t){return R().useReducer(e,n,t)},n.useRef=function(e){return R().useRef(e)},n.useState=function(e){return R().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>c});var r=t(667294);const o=r.createContext({});function c(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||l:c(e),r.createElement(o.Provider,{value:i},n)}}}]);