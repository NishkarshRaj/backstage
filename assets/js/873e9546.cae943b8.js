/*! For license information please see 873e9546.cae943b8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[106424],{515620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"discovery",title:"Bitbucket Server Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Server"},a=void 0,s={id:"integrations/bitbucketServer/discovery",title:"Bitbucket Server Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Server",source:"@site/../docs/integrations/bitbucketServer/discovery.md",sourceDirName:"integrations/bitbucketServer",slug:"/integrations/bitbucketServer/discovery",permalink:"/docs/integrations/bitbucketServer/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/bitbucketServer/discovery.md",tags:[],version:"current",frontMatter:{id:"discovery",title:"Bitbucket Server Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in Bitbucket Server"},sidebar:"docs",previous:{title:"Locations",permalink:"/docs/integrations/bitbucketServer/locations"},next:{title:"Installation",permalink:"/docs/integrations/datadog-rum/installation"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Custom location processing",id:"custom-location-processing",level:2}];function u(e){const t=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",a:"a",ul:"ul",li:"li",strong:"strong",em:"em"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Bitbucket Server integration has a special entity provider for discovering\ncatalog files located in Bitbucket Server.\nThe provider will search your Bitbucket Server account and register catalog files matching the configured path\nas Location entity and via following processing steps add all contained catalog entities.\nThis can be useful as an alternative to static locations or manually adding things to the catalog."}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.p,{children:["You will have to add the entity provider in the catalog initialization code of your\nbackend. The provider is not installed by default, therefore you have to add a\ndependency to ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-server"})," to your backend\npackage."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-catalog-backend-module-bitbucket-server\n"})}),"\n",(0,r.jsx)(t.p,{children:"And then add the entity provider to your catalog builder:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"/* highlight-add-next-line */\nimport { BitbucketServerEntityProvider } from '@backstage/plugin-catalog-backend-module-bitbucket-server';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-start */\n  builder.addEntityProvider(\n    BitbucketServerEntityProvider.fromConfig(env.config, {\n      logger: env.logger,\n      // optional: alternatively, use scheduler with schedule defined in app-config.yaml\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { minutes: 30 },\n        timeout: { minutes: 3 },\n      }),\n      // optional: alternatively, use schedule\n      scheduler: env.scheduler,\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["To use the entity provider, you'll need a ",(0,r.jsx)(t.a,{href:"/docs/integrations/bitbucketServer/locations",children:"Bitbucket Server integration set up"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Additionally, you need to configure your entity provider instance(s):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"catalog:\n  providers:\n    bitbucketServer:\n      yourProviderId: # identifies your ingested dataset\n        host: 'bitbucket.mycompany.com'\n        catalogPath: /catalog-info.yaml # default value\n        filters: # optional\n          projectKey: '^apis-.*$' # optional; RegExp\n          repoSlug: '^service-.*$' # optional; RegExp\n        schedule: # optional; same options as in TaskScheduleDefinition\n          # supports cron, ISO duration, \"human duration\" as used in code\n          frequency: { minutes: 30 }\n          # supports ISO duration, \"human duration\" as used in code\n          timeout: { minutes: 3 }\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"host"})}),":\nThe host of the Bitbucket Server instance, ",(0,r.jsx)(t.strong,{children:"note"}),": the host needs to registered as an integration as well, see ",(0,r.jsx)(t.a,{href:"/docs/integrations/bitbucketServer/locations",children:"location"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"catalogPath"})})," ",(0,r.jsx)(t.em,{children:"(optional)"}),":\nDefault: ",(0,r.jsx)(t.code,{children:"/catalog-info.yaml"}),".\nPath where to look for ",(0,r.jsx)(t.code,{children:"catalog-info.yaml"})," files.\nWhen started with ",(0,r.jsx)(t.code,{children:"/"}),", it is an absolute path from the repo root."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"filters"})})," ",(0,r.jsx)(t.em,{children:"(optional)"}),":\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"projectKey"})})," ",(0,r.jsx)(t.em,{children:"(optional)"}),":\nRegular expression used to filter results based on the project key."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"repoSlug"})})," ",(0,r.jsx)(t.em,{children:"(optional)"}),":\nRegular expression used to filter results based on the repo slug."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"schedule"})})," ",(0,r.jsx)(t.em,{children:"(optional)"}),":\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"frequency"})}),":\nHow often you want the task to run. The system does its best to avoid overlapping invocations."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"timeout"})}),":\nThe maximum amount of time that a single task invocation can take."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"initialDelay"})})," ",(0,r.jsx)(t.em,{children:"(optional)"}),":\nThe amount of time that should pass before the first invocation happens."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"scope"})})," ",(0,r.jsx)(t.em,{children:"(optional)"}),":\n",(0,r.jsx)(t.code,{children:"'global'"})," or ",(0,r.jsx)(t.code,{children:"'local'"}),". Sets the scope of concurrency control."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"custom-location-processing",children:"Custom location processing"}),"\n",(0,r.jsx)(t.p,{children:"The Bitbucket Server Entity Provider will by default emit a location for each\nmatching repository. However, it is possible to override this functionality and take full control of how each\nmatching repository is processed."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"BitbucketServerEntityProvider.fromConfig"})," takes an optional parameter\n",(0,r.jsx)(t.code,{children:"options.parser"})," where you can set your own parser to be used for each matched\nrepository."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const provider = BitbucketServerEntityProvider.fromConfig(env.config, {\n  logger: env.logger,\n  schedule: env.scheduler,\n  parser: async function* customLocationParser(options: {\n    location: LocationSpec;\n    client: BitbucketServerClient;\n  }) {\n    // Custom logic for interpreting the matching repository\n    // See defaultBitbucketServerLocationParser for an example\n  },\n});\n"})})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(s[l]=i[l]);if(t){a=t(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(s[a[u]]=i[a[u]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:a.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),a=d("react.provider"),s=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function v(){}function m(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var b=m.prototype=new v;b.constructor=m,r(b,g.prototype),b.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===r?"."+O(c,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),C(a,t,n,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+O(s=e[l],l);c+=C(s,t,n,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=C(s=s.value,t,n,u=r+O(s,l++),a);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(p(321));return e}var B={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=g,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var i=r({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)x.call(t,u)&&!k.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},t)}}}]);