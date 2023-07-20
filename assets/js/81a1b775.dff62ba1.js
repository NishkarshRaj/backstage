/*! For license information please see 81a1b775.dff62ba1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[677145],{406759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(824246),a=n(511151);const s={},o="Creating the Catalog Graph",i={unversionedId:"features/software-catalog/creating-the-catalog-graph",id:"features/software-catalog/creating-the-catalog-graph",title:"Creating the Catalog Graph",description:"Overview",source:"@site/../docs/features/software-catalog/creating-the-catalog-graph.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/creating-the-catalog-graph",permalink:"/docs/features/software-catalog/creating-the-catalog-graph",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/creating-the-catalog-graph.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"API",permalink:"/docs/features/software-catalog/software-catalog-api"},next:{title:"Overview",permalink:"/docs/features/kubernetes/"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Descriptor Components used to build the Catalog Graph",id:"descriptor-components-used-to-build-the-catalog-graph",level:3},{value:"Use cases out of the box",id:"use-cases-out-of-the-box",level:2},{value:"Tracking Assets",id:"tracking-assets",level:2},{value:"Well-known trackable assets",id:"well-known-trackable-assets",level:3},{value:"Reference models",id:"reference-models",level:2}];function h(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",h3:"h3",strong:"strong",img:"img",ul:"ul",li:"li",div:"div"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"creating-the-catalog-graph",children:"Creating the Catalog Graph"}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:['The Software Catalog in Backstage is intended to capture human mental models using entities and their relationships rather than an exhaustive inventory of all possible things. The focus is on attaching functionality and views centered around these entities. Determining the "edge" where the catalog ends and the external world begins is crucial to ensure that the catalog\'s scope is appropriate.\nThe Backstage software catalog serves as a centralized hub for organizing and discovering software components and services. While it excels at providing a high-level overview of these concepts, it may not be the ideal solution for tracking dynamic relationships between components and services in real-time. You can achieve real time views by attaching appropriate tooling to the nodes in the graph through ',(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/well-known-annotations",children:"annotations"})," and developing custom front-end ",(0,r.jsx)(t.a,{href:"http://localhost:3000/docs/plugins/",children:"plugins"})," that display deployment information and other real-time data.\nIt is worth noting that the Backstage Software Catalog should not be considered the ultimate source of truth, instead, it is advisable to use the Backstage Catalog as a caching mechanism that utilizes a REST API to convey information to the catalog UI and other Backstage plugins. Adopting a GitOps approach is recommended to modify YAML files in Backstage, treating YAML files in repositories as the primary source of truth and using Scaffolder to make changes via the UI and generate a pull request in the repository with the updated changes."]}),"\n",(0,r.jsx)(t.h3,{id:"descriptor-components-used-to-build-the-catalog-graph",children:"Descriptor Components used to build the Catalog Graph"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/system-model",children:(0,r.jsx)(t.strong,{children:"Entities:"})})," An entity refers to a node in the graph that represents a distinct object, concept, or thing. Nodes are the fundamental building blocks of a graph database and are used to represent entities and their properties."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(494421).Z+"",width:"671",height:"671"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format#contents",children:(0,r.jsx)(t.strong,{children:"Kinds:"})}),' These are broad categories used to group related entities. Kinds are used to provide a high-level categorization of entities, such as "service", "database", or "team". Kinds are often used to provide a way to filter entities in the catalog and to provide a high-level overview of the types of entities that are being managed.']}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format#common-to-all-kinds-relations",children:(0,r.jsx)(t.strong,{children:"Relations:"})})," These are links between different entities in the catalog. Relations express the relationships between different entities, such as dependencies or ownership. Adopters can use relations to help users navigate the catalog and understand the relationships between different entities."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format#spec-varies",children:(0,r.jsx)(t.strong,{children:"Spec:"})}),' A specification or "spec" is a schema that outlines the data structure of an entity in the Backstage catalog. It defines the properties, relationships, data types, and constraints for an entity, ensuring consistency and accuracy of data while allowing for easy sharing and consumption of data across components and plugins. Specs are useful when creating or extending entities and can help make data more reusable and interoperable. The spec section is fully customizable, and users can create their own components and plugins to render the information.']}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/system-model#type",children:(0,r.jsx)(t.strong,{children:"Types:"})}),' These are more specific categories used to classify entities within a given Kind. Types provide a more granular categorization of entities, such as "frontend-service" or "backend-service.". Types are often used to provide additional context and information about an entity and to help users understand the role and function of the entity within the broader system.']}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/well-known-annotations",children:(0,r.jsx)(t.strong,{children:"Annotations:"})})," These key-value pairs can be attached to an entity in the catalog. They are typically used to add additional information or metadata to an entity. Annotations are often used to provide information that is used by automated tools or scripts and to provide further context to humans working with the entity or refer plugins to the external world."]}),"\n",(0,r.jsx)(t.h2,{id:"use-cases-out-of-the-box",children:"Use cases out of the box"}),"\n",(0,r.jsxs)(t.p,{children:["The catalog builds a graph using ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format",children:"descriptors"})," as nodes and ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format#common-to-all-kinds-relations",children:"relations"})," as edges. Out of the box you get the following use cases:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Ownership tracking"}),"\n",(0,r.jsx)(t.li,{children:"Inventory"}),"\n",(0,r.jsx)(t.li,{children:"Search"}),"\n",(0,r.jsx)(t.li,{children:"Lifecycle tracking"}),"\n",(0,r.jsx)(t.li,{children:"Tracking of real-time information sources"}),"\n",(0,r.jsx)(t.li,{children:"Dependency mapping"}),"\n",(0,r.jsx)(t.li,{children:"API exposure"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"tracking-assets",children:"Tracking Assets"}),"\n",(0,r.jsx)(t.p,{children:"The recommended approach would be to represent information in catalog-info files, which the users themselves can manage. While automated classification based on repository contents can be helpful, it is recommended to use it only to generate the initial file and then allow humans to maintain it manually. The reason is that automation can sometimes fail, and it is essential to ensure the accuracy and reliability of this metadata. In short, humans should govern this piece of metadata to maintain its integrity."}),"\n",(0,r.jsx)(t.h3,{id:"well-known-trackable-assets",children:"Well-known trackable assets"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Components"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Services"}),"\n",(0,r.jsx)(t.li,{children:"Websites"}),"\n",(0,r.jsx)(t.li,{children:"Libraries"}),"\n",(0,r.jsx)(t.li,{children:"Data Pipelines"}),"\n",(0,r.jsx)(t.li,{children:"Machine Learning Models"}),"\n",(0,r.jsx)(t.li,{children:"Third-party software components: It is recommended to have a separate repo for all 3d party catalog-info files."}),"\n",(0,r.jsx)(t.li,{children:"Jira installation"}),"\n",(0,r.jsx)(t.li,{children:"Pagerduty"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Resources"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Physical resources: This is probably more useful for longer-lived ones (For example servers)."}),"\n",(0,r.jsx)(t.li,{children:"Cloud Infrastructure services"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Ownership - users - groups by"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Business units"}),"\n",(0,r.jsx)(t.li,{children:"Team"}),"\n",(0,r.jsx)(t.li,{children:"Product area"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Naming strategies:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Ldap: Internal ldap usernames as entity names. e.g., owner: user",(0,r.jsx)(t.div,{})," or user: my-team-name."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Ownership strategies:"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Ownership based on teams:"}),' The concept of ownership in the system is team-centric; hence, the "owner" field must reference the LDAP name of a squad according to a prescribed set of regulations. While there may be instances where the ownership is attributed to an individual, such deviations might create challenges. In such cases, the user could receive a notification through the web interface, highlighting that this departure is an exception and needs rectification. To ensure adherence to this system, every entity in the model should have a designated owner, preferably a valid team within the LDAP hierarchy.']}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Ownership of features:"})," To track the ownership of specific features within your products and their interrelationships, two options are available: introducing a new component ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/system-model/#type",children:"type"}),', such as "feature," or creating a new ',(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format/#contents",children:"Kind"}),' altogether. Nonetheless, it is advisable to choose the former approach and introduce a new type, like "feature," is advisable as it is less complicated and poses a lower risk.']}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"LDAP doesn\u2019t reflect the organization structure:"})," If Workday or a similar system serves as the source of truth, and LDAP is utilized for user attributes, it is advisable to develop a layer on top of various systems to establish a unified API that the entire organization can query, rather than only Backstage."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"APIs"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"OpenApi"}),"\n",(0,r.jsx)(t.li,{children:"AsyncApi"}),"\n",(0,r.jsx)(t.li,{children:"graphQL"}),"\n",(0,r.jsx)(t.li,{children:"gRPC"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"APIs Could list networked services or libraries and it\u2019s particularly useful to identify APIs that form boundaries between systems. There are some considerations to keep in mind:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"API versions:"})," Major API versions can be treated as distinct APIs, and it is possible to create separate entity instances for each (e.g., metadata.name: my-api-v1 and metadata.name: my-api-v2). However, this approach is not recommended for minor or patch-level variations"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Detail:"})," It\u2019s not recommended going too granular because the catalog in its current form won't perhaps be a great platform to express it."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Relationships between APIs:"})," The idea is that you have a service component that exposes an api and then, it's not the api that consumes the other api, it's the component that consumes the other api."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Backend for front end API (BFF):"}),' The suggestion is to create separate components for the frontend and backend services, with the frontend component having a type of "website" and the backend component having a type of "service". This is because the BFF API is tailored for a specific UI and is not meant to be used by others, making it unnecessary to include in the catalog.']}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"API registry:"})," The exploration of all APIs within an organization is a typical use case for an API registry."]}),"\n",(0,r.jsx)(t.h2,{id:"reference-models",children:"Reference models"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"C4 model:"})," For inspiration, you could review the ",(0,r.jsx)(t.a,{href:"https://c4model.com/",children:"C4 model"}),", which defines a pattern for visualizing software architecture."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},494421:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/entity.drawio-2b857e4b13c486fd284e4064f6ab9e25.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var s,o,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in s=Object(arguments[c]))n.call(s,l)&&(i[l]=s[l]);if(t){o=t(s);for(var h=0;h<o.length;h++)r.call(s,o[h])&&(i[o[h]]=s[o[h]])}}return i}},371426:(e,t,n)=>{n(862525);var r=n(827378),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),t.Fragment=s("react.fragment")}var o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,h=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:h,props:s,_owner:o.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),a=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,i=60110,c=60112;t.Suspense=60113;var l=60115,h=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),s=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),o=d("react.provider"),i=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),h=d("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var b=v.prototype=new y;b.constructor=v,r(b,m.prototype),b.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,s={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)x.call(t,r)&&!w.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),h=0;h<c;h++)l[h]=arguments[h+2];s.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===s[r]&&(s[r]=c[r]);return{$$typeof:a,type:e,key:o,ref:i,props:s,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var O=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case s:c=!0}}if(c)return o=o(c=e),e=""===r?"."+C(c,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),P(o,t,n,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(O,"$&/")+"/")+e)),t.push(o)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var h=r+C(i=e[l],l);c+=P(i,t,n,h,o)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),l=0;!(i=e.next()).done;)c+=P(i=i.value,t,n,h=r+C(i,l++),o);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function A(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function T(){var e=S.current;if(null===e)throw Error(f(321));return e}var R={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(f(143));return e}},t.Component=m,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var s=r({},e.props),o=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(h in t)x.call(t,h)&&!w.hasOwnProperty(h)&&(s[h]=void 0===t[h]&&void 0!==l?l[h]:t[h])}var h=arguments.length-2;if(1===h)s.children=n;else if(1<h){l=Array(h);for(var d=0;d<h;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:a,type:e.type,key:o,ref:i,props:s,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return T().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,n){return T().useReducer(e,t,n)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>s});var r=n(667294);const a=r.createContext({});function s(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:s(e),r.createElement(a.Provider,{value:i},t)}}}]);