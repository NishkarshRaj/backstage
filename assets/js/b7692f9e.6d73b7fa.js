/*! For license information please see b7692f9e.6d73b7fa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[308434],{988658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"index",title:"Getting Started",description:"Documentation on How to get started with Backstage"},s=void 0,i={id:"getting-started/index",title:"Getting Started",description:"Documentation on How to get started with Backstage",source:"@site/../docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/docs/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Getting Started",description:"Documentation on How to get started with Backstage"},sidebar:"docs",previous:{title:"Logo assets",permalink:"/docs/overview/logos"},next:{title:"Getting Started, configuring Backstage",permalink:"/docs/getting-started/configuration"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create your Backstage App",id:"create-your-backstage-app",level:3},{value:"Run the Backstage app",id:"run-the-backstage-app",level:3}];function u(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h3:"h3",code:"code",pre:"pre",blockquote:"blockquote",img:"img"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"For most Backstage installations, installing the standalone app will bring you\nthe best and most streamlined experience. In this guide you will:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Deploy Backstage Standalone with npm packages"}),"\n",(0,r.jsx)(t.li,{children:"Run Backstage Standalone with a SQLite in-memory database and demo content"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This guide assumes a basic understanding of working on a Linux based operating\nsystem using tools like apt-get, npm, yarn, curl. Docker knowledge is also\nhelpful for making the best use of your Backstage installation."}),"\n",(0,r.jsxs)(t.p,{children:["If you are planning to contribute plugins or to the project in general, we advise\nyou to use the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md",children:"Contributors"})," guide to do a repository-based installation."]}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Access to a Unix-based operating system, such as Linux, MacOS or\n",(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/",children:"Windows Subsystem for Linux"})]}),"\n",(0,r.jsxs)(t.li,{children:["A GNU-like build environment available at the command line.\nFor example, on Debian/Ubuntu you will want to have the ",(0,r.jsx)(t.code,{children:"make"})," and ",(0,r.jsx)(t.code,{children:"build-essential"})," packages installed.\nOn MacOS, you will want to have run ",(0,r.jsx)(t.code,{children:"xcode-select --install"})," to get the XCode command line build tooling in place."]}),"\n",(0,r.jsx)(t.li,{children:"An account with elevated rights to install the dependencies"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"curl"})," or ",(0,r.jsx)(t.code,{children:"wget"})," installed"]}),"\n",(0,r.jsxs)(t.li,{children:["Node.js ",(0,r.jsx)(t.a,{href:"https://nodejs.org/en/blog/release/",children:"Active LTS Release"})," installed using one of these\nmethods:\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Using ",(0,r.jsx)(t.code,{children:"nvm"})," (recommended)\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/nvm-sh/nvm#install--update-script",children:"Installing nvm"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://nodejs.org/en/download/package-manager/#nvm",children:"Install and change Node version with nvm"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"Binary Download"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://nodejs.org/en/download/package-manager/",children:"Package manager"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/nodesource/distributions/blob/master/README.md",children:"Using NodeSource packages"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"yarn"})," ",(0,r.jsx)(t.a,{href:"https://classic.yarnpkg.com/en/docs/install",children:"Installation"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["You will need to use Yarn classic to create a new project, but it can then be ",(0,r.jsx)(t.a,{href:"/docs/tutorials/yarn-migration",children:"migrated to Yarn 3"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"docker"})," ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"installation"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"git"})," ",(0,r.jsx)(t.a,{href:"https://github.com/git-guides/install-git",children:"installation"})]}),"\n",(0,r.jsx)(t.li,{children:"If the system is not directly accessible over your network the following ports\nneed to be opened: 3000, 7007. This is quite uncommon, unless when you're\ninstalling in a container, VM or remote system."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"create-your-backstage-app",children:"Create your Backstage App"}),"\n",(0,r.jsxs)(t.p,{children:["To install the Backstage Standalone app, we make use of ",(0,r.jsx)(t.code,{children:"npx"}),", a tool to run\nNode executables straight from the registry. This tool is part of your Node.js\ninstallation. Running the command below will install Backstage. The wizard will\ncreate a subdirectory inside your current working directory."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx @backstage/create-app@latest\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: If this fails on the ",(0,r.jsx)(t.code,{children:"yarn install"})," step, it's likely that you will need to install some additional dependencies which are used to configure ",(0,r.jsx)(t.code,{children:"isolated-vm"}),". You can find out more in their ",(0,r.jsx)(t.a,{href:"https://github.com/laverdet/isolated-vm#requirements",children:"requirements section"}),", and then run ",(0,r.jsx)(t.code,{children:"yarn install"})," manually again after you've completed those steps."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The wizard will ask you for the name of the app, which will also be the name of the directory"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Screenshot of the wizard asking for a name for the app.",src:n(158557).Z+"",width:"984",height:"204"})}),"\n",(0,r.jsx)(t.h3,{id:"run-the-backstage-app",children:"Run the Backstage app"}),"\n",(0,r.jsxs)(t.p,{children:["When the installation is complete you can go to the application directory and\nstart the app. The ",(0,r.jsx)(t.code,{children:"yarn dev"})," command will run both the frontend and backend as\nseparate processes (named ",(0,r.jsx)(t.code,{children:"[0]"})," and ",(0,r.jsx)(t.code,{children:"[1]"}),") in the same window."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd my-backstage-app\nyarn dev\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Screenshot of the command output, with the message web pack compiled successfully",src:n(115575).Z+"",width:"1029",height:"197"})}),"\n",(0,r.jsxs)(t.p,{children:["It might take a little while, but as soon as the message\n",(0,r.jsx)(t.code,{children:"[0] webpack compiled successfully"})," appears, you can open a browser and directly\nnavigate to your freshly installed Backstage portal at ",(0,r.jsx)(t.code,{children:"http://localhost:3000"}),".\nYou can start exploring the demo immediately. Please note that the in-memory\ndatabase will be cleared when you restart the app, so you'll most likely want to\ncarry on with the database steps."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Screenshot of the Backstage portal.",src:n(391744).Z+"",width:"1910",height:"1058"})}),"\n",(0,r.jsxs)(t.p,{children:["In the next part of this tutorial, you'll learn how to change to a persistent\ndatabase, configure authentication, and add your first integration. Continue\nwith ",(0,r.jsx)(t.a,{href:"/docs/getting-started/configuration",children:"getting started: Configuring Backstage"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Share your experiences, comments, or suggestions with us:\n",(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"on discord"}),", file issues for any\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?labels=help+wanted&template=feature_template.md",children:"feature"}),"\nor\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?labels=plugin&template=plugin_template.md&title=%5BPlugin%5D+THE+PLUGIN+NAME",children:"plugin suggestions"}),",\nor\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?labels=bug&template=bug_template.md",children:"bugs"}),"\nyou have, and feel free to\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md",children:"contribute"}),"!"]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},391744:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/portal-b6d936acea71e18b0f5a39d78b9c0195.png"},115575:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/startup-a67006576cf7f5099d36c8660cf6017a.png"},158557:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-13cbb72e2015264fda3c57b1577b1494.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,s,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))n.call(a,l)&&(i[l]=a[l]);if(t){s=t(a);for(var u=0;u<s.length;u++)r.call(a,s[u])&&(i[s[u]]=a[s[u]])}}return i}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,i=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),a=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),s=d("react.provider"),i=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var j=b.prototype=new y;j.constructor=b,r(j,m.prototype),j.isPureReactComponent=!0;var x={current:null},w=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function v(e,t,n){var r,a={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,r)&&!k.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return s=s(c=e),e=""===r?"."+O(c,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),C(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+O(i=e[l],l);c+=C(i,t,n,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=C(i=i.value,t,n,u=r+O(i,l++),s);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function B(){var e=P.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var a=r({},e.props),s=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=x.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)w.call(t,u)&&!k.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:o,type:e.type,key:s,ref:i,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=v,t.createFactory=function(e){var t=v.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return B().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,n){return B().useReducer(e,t,n)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:a(e),r.createElement(o.Provider,{value:i},t)}}}]);