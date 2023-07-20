/*! For license information please see 98ba4fbd.79b091ca.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[296368],{583396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(824246),a=n(511151);const i={id:"v1.13.0",title:"v1.13.0",description:"Backstage Release v1.13.0"},s=void 0,o={unversionedId:"releases/v1.13.0",id:"releases/v1.13.0",title:"v1.13.0",description:"Backstage Release v1.13.0",source:"@site/../docs/releases/v1.13.0.md",sourceDirName:"releases",slug:"/releases/v1.13.0",permalink:"/docs/releases/v1.13.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.13.0.md",tags:[],version:"current",frontMatter:{id:"v1.13.0",title:"v1.13.0",description:"Backstage Release v1.13.0"},sidebar:"releases",previous:{title:"v1.14.0",permalink:"/docs/releases/v1.14.0"},next:{title:"v1.12.0",permalink:"/docs/releases/v1.12.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"BREAKING: Removed the <code>Tabs</code> core component",id:"breaking-removed-the-tabs-core-component",level:3},{value:"BREAKING: <code>GitlabDiscoveryEntityProvider</code> branch handling",id:"breaking-gitlabdiscoveryentityprovider-branch-handling",level:3},{value:"BREAKING: Kubernetes backend",id:"breaking-kubernetes-backend",level:3},{value:"TypeScript 5",id:"typescript-5",level:3},{value:"Automated orphaned entity cleanup in the catalog",id:"automated-orphaned-entity-cleanup-in-the-catalog",level:3},{value:"Scaffolder Filters",id:"scaffolder-filters",level:3},{value:"Scaffolder Permissions",id:"scaffolder-permissions",level:3},{value:"Experimental CLI <code>onboard</code> command",id:"experimental-cli-onboard-command",level:3},{value:"OpenAPI utilities",id:"openapi-utilities",level:3},{value:"Experimental inline auth flows",id:"experimental-inline-auth-flows",level:3},{value:"New plugin: PuppetDB",id:"new-plugin-puppetdb",level:3},{value:"New catalog entity provider: <code>GithubMultiOrgEntityProvider</code>",id:"new-catalog-entity-provider-githubmultiorgentityprovider",level:3},{value:"New Scaffolder actions",id:"new-scaffolder-actions",level:3},{value:"Search now supports the new backend system!",id:"search-now-supports-the-new-backend-system",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",code:"code",em:"em",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["These are the release notes for the v1.13.0 release of ",(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for their hard work in getting this release developed and done."}),"\n",(0,r.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(t.p,{children:"This release has an important security fix, along with a lot of squashed bugs and exciting additions! Enjoy."}),"\n",(0,r.jsxs)(t.h3,{id:"breaking-removed-the-tabs-core-component",children:["BREAKING: Removed the ",(0,r.jsx)(t.code,{children:"Tabs"})," core component"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Tabs"})," component was removed from ",(0,r.jsx)(t.code,{children:"@backstage/core-components"}),". It was a thin shim that provided very little value and was considered confusing, when the ",(0,r.jsx)(t.a,{href:"https://v4.mui.com/components/tabs/",children:"native Material UI tabs"})," were already fully usable out of the box. Check out the pull request below for more details."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/tudi2d",children:"@tudi2d"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16587",children:"#16587"})]}),"\n",(0,r.jsxs)(t.h3,{id:"breaking-gitlabdiscoveryentityprovider-branch-handling",children:["BREAKING: ",(0,r.jsx)(t.code,{children:"GitlabDiscoveryEntityProvider"})," branch handling"]}),"\n",(0,r.jsxs)(t.p,{children:["The way that the ",(0,r.jsx)(t.code,{children:"GitlabDiscoveryEntityProvider"})," handles branches has changed, to remove the confusion of whether you want to ",(0,r.jsx)(t.em,{children:"force"})," the use of a certain branch name or whether you just want to provide a ",(0,r.jsx)(t.em,{children:"fallback"})," branch name. If you were passing in the ",(0,r.jsx)(t.code,{children:"branch"})," parameter intending it to be just a fallback, you may want to rename it to ",(0,r.jsx)(t.code,{children:"fallbackBranch"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/Andy2003",children:"@Andy2003"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16502",children:"#16502"})]}),"\n",(0,r.jsx)(t.h3,{id:"breaking-kubernetes-backend",children:"BREAKING: Kubernetes backend"}),"\n",(0,r.jsxs)(t.p,{children:["The Kubernetes backend is receiving some really nice overhauls to prepare it for the future and streamlining its interfaces. There are a few breaking changes in there, but not everyone is affected by them. Rather than listing each breaking change individually, check out ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/kubernetes-backend/CHANGELOG.md",children:"the package changelog"})," for more information if you see new type errors after upgrading."]}),"\n",(0,r.jsx)(t.h3,{id:"typescript-5",children:"TypeScript 5"}),"\n",(0,r.jsx)(t.p,{children:"The Backstage project is now built with the new v5 version of TypeScript! This meant making some small adjustments to types here and there, but we do not expect any end user impact besides having even better and clearer TypeScript support."}),"\n",(0,r.jsx)(t.p,{children:"You are now able to upgrade your own project to depend on version 5 of TypeScript, should you desire to - it\u2019s an optional upgrade on your end and our libraries should still work fine with version 4 of TypeScript as well."}),"\n",(0,r.jsxs)(t.p,{children:["Added in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17094",children:"#17094"})]}),"\n",(0,r.jsx)(t.h3,{id:"automated-orphaned-entity-cleanup-in-the-catalog",children:"Automated orphaned entity cleanup in the catalog"}),"\n",(0,r.jsxs)(t.p,{children:["There is a new ",(0,r.jsx)(t.code,{children:"catalog.orphanStrategy"})," app-config option for the catalog, allowing adopters to enable automatic cleanup of ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/life-of-an-entity#orphaning",children:'so-called "orphaned"'})," entities. This helps with common use cases where catalog-info files are moved around or renamed, or where entities within a single catalog-info file are partially removed."]}),"\n",(0,r.jsxs)(t.p,{children:["The default behavior is unchanged, i.e. if you do not explicitly set this new option to ",(0,r.jsx)(t.code,{children:"'delete'"}),", orphaned entities will still stay around and await manual deletion."]}),"\n",(0,r.jsxs)(t.p,{children:["Added in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17363",children:"#17363"})]}),"\n",(0,r.jsx)(t.h3,{id:"scaffolder-filters",children:"Scaffolder Filters"}),"\n",(0,r.jsx)(t.p,{children:"You can now use some new filters in your placeholder expressions in Scaffolder templates. This gives the ability to combine things like:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"${{ parameters.entity | parseEntityRef | pick('name') }}\n"})}),"\n",(0,r.jsx)(t.p,{children:"to get the name of a specific entity, or"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"${{ parameters.repoUrl | parseRepoUrl | pick('owner') }}`\n"})}),"\n",(0,r.jsx)(t.p,{children:"to get the owner of a repo."}),"\n",(0,r.jsxs)(t.p,{children:["Added in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17091",children:"#17091"})]}),"\n",(0,r.jsx)(t.h3,{id:"scaffolder-permissions",children:"Scaffolder Permissions"}),"\n",(0,r.jsx)(t.p,{children:"Support for template permissions has finally landed in the Scaffolder!"}),"\n",(0,r.jsxs)(t.p,{children:["This allows you to define a ",(0,r.jsx)(t.code,{children:"backstage:permissions"})," property to parameters and steps which is then used to authorize part of the template using the permissions framework. Docs for this feature ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17379",children:"is a work in progress"})," still, it\u2019s that fresh out of the oven!"]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/vinzscam",children:"@vinzscam"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/HHogg",children:"@HHogg"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/15798",children:"#15798"})]}),"\n",(0,r.jsxs)(t.h3,{id:"experimental-cli-onboard-command",children:["Experimental CLI ",(0,r.jsx)(t.code,{children:"onboard"})," command"]}),"\n",(0,r.jsxs)(t.p,{children:["We are experimenting with a new ",(0,r.jsx)(t.code,{children:"onboard"})," command for the Backstage CLI. It\u2019s still early days, but the intent is to help adopters with some common tasks in the early onboarding / evaluation phase."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/marcuseide",children:"@marcuseide"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16526",children:"#16526"})]}),"\n",(0,r.jsx)(t.h3,{id:"openapi-utilities",children:"OpenAPI utilities"}),"\n",(0,r.jsx)(t.p,{children:"Backstage now has experimental support for declaring OpenAPI schemas for your services, and automatically building type safe routers out of them. The Catalog plugin is the first user of these facilities."}),"\n",(0,r.jsxs)(t.p,{children:["This comes in the form of a ",(0,r.jsx)(t.code,{children:"@backstage/backend-openapi-utils"})," Node package assists with the type trickery, and the new ",(0,r.jsx)(t.code,{children:"schema:openapi:verify"})," and ",(0,r.jsx)(t.code,{children:"schema:openapi:generate"})," commands in the ",(0,r.jsx)(t.code,{children:"@backstage/repo-tools"})," CLI package."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/sennyeya",children:"@sennyeya"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/15667",children:"#15667"})]}),"\n",(0,r.jsx)(t.h3,{id:"experimental-inline-auth-flows",children:"Experimental inline auth flows"}),"\n",(0,r.jsxs)(t.p,{children:["There\u2019s new support for running auth flows inline in the current page instead of in a separate popup window, enabled via the ",(0,r.jsx)(t.code,{children:"enableExperimentalRedirectFlow"})," app-config parameter. This will allow the use of some providers that do not support popup flows. It\u2019s still an experimental feature, but do try it out if this applies to you!"]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/headphonejames",children:"@headphonejames"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/15841",children:"#15841"})]}),"\n",(0,r.jsx)(t.h3,{id:"new-plugin-puppetdb",children:"New plugin: PuppetDB"}),"\n",(0,r.jsx)(t.p,{children:"Visualize your data from PuppetDB!"}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/tdabasinskas",children:"@tdabasinskas"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17260",children:"#17260"})]}),"\n",(0,r.jsxs)(t.h3,{id:"new-catalog-entity-provider-githubmultiorgentityprovider",children:["New catalog entity provider: ",(0,r.jsx)(t.code,{children:"GithubMultiOrgEntityProvider"})]}),"\n",(0,r.jsx)(t.p,{children:"This provider lets you ingest org data (users and groups) into your catalog more easily from multiple orgs in one fell swoop. Give it a try!"}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/kuangp",children:"@kuangp"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17285",children:"#17285"})]}),"\n",(0,r.jsx)(t.h3,{id:"new-scaffolder-actions",children:"New Scaffolder actions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"confluence:transform:markdown"}),": This action converts Confluence doc pages to Markdown and can be found in the ",(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-confluence-to-markdown"})," package. Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/tradcliffe-expediagroup",children:"@tradcliffe-expediagroup"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16820",children:"#16820"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"fetch:plain:file"})," is the natural sibling to ",(0,r.jsx)(t.code,{children:"fetch:plain"}),", but fetching individual files instead of directories. Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/gavlyukovskiy",children:"@gavlyukovskiy"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16935",children:"#16935"})]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"search-now-supports-the-new-backend-system",children:"Search now supports the new backend system!"}),"\n",(0,r.jsxs)(t.p,{children:["Search is now available to use in the new backend system! The plugin itself has a new ",(0,r.jsx)(t.code,{children:"searchPlugin"})," alpha export, and most of the collators etc are available as modules for it. The following packages have been created or updated as part of this:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search-backend"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-explore"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-pg"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-explore"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-techdocs"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For documentation on how to migrate, check out the convenient ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/search/how-to-guides/#how-to-migrate-your-backend-installation-to-use-search-together-with-the-new-backend-system",children:"how-to guide"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/emmaindal",children:"@emmaindal"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/camilaibs",children:"@camilaibs"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/16710",children:"#16710"})]}),"\n",(0,r.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsxs)(t.a,{href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-29017",children:["security flaw in the ",(0,r.jsx)(t.code,{children:"vm2"})," package"]})," used by the Scaffolder plugin was patched by our automated security processes in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17296",children:"#17296"}),". The fixed version of ",(0,r.jsx)(t.code,{children:"vm2"})," was already covered by the required version range of the Scaffolder plugin, so adopters are able to address this vulnerability separately without upgrading Backstage itself, as part of their regular security processes."]}),"\n",(0,r.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,r.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage's ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.13.0-changelog.md",children:"Changelog"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage ",(0,r.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,r.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Sign up for our ",(0,r.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var i,s,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(o[l]=i[l]);if(t){s=t(i);for(var d=0;d<s.length;d++)r.call(i,s[d])&&(o[s[d]]=i[s[d]])}}return o}},371426:(e,t,n)=>{n(862525);var r=n(827378),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;a=i("react.element"),t.Fragment=i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:d,props:i,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),a=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,o=60110,c=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;a=h("react.element"),i=h("react.portal"),t.Fragment=h("react.fragment"),t.StrictMode=h("react.strict_mode"),t.Profiler=h("react.profiler"),s=h("react.provider"),o=h("react.context"),c=h("react.forward_ref"),t.Suspense=h("react.suspense"),l=h("react.memo"),d=h("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function m(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=y.prototype=new m;v.constructor=y,r(v,b.prototype),v.isPureReactComponent=!0;var x={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:a,type:e,key:s,ref:o,props:i,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return s=s(c=e),e=""===r?"."+C(c,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),E(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=r+C(o=e[l],l);c+=E(o,t,n,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(o=e.next()).done;)c+=E(o=o.value,t,n,d=r+C(o,l++),s);else if("object"===o)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function O(e,t,n){if(null==e)return e;var r=[],a=0;return E(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function P(){var e=T.current;if(null===e)throw Error(p(321));return e}var B={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=b,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var i=r({},e.props),s=e.key,o=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,c=x.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)j.call(t,d)&&!k.hasOwnProperty(d)&&(i[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)i.children=n;else if(1<d){l=Array(d);for(var h=0;h<d;h++)l[h]=arguments[h+2];i.children=l}return{$$typeof:a,type:e.type,key:s,ref:o,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:o,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>i});var r=n(667294);const a=r.createContext({});function i(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(a.Provider,{value:o},t)}}}]);