/*! For license information please see 48bfae7f.e43c46f8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[873841],{100319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(785893),o=a(511151);const s={title:"Software Templates is now in Beta",author:"Ben Lambert, Spotify",authorURL:"https://github.com/benjdlambert",authorImageURL:"https://avatars.githubusercontent.com/u/3645856?v=4"},i=void 0,r={permalink:"/blog/2021/07/26/software-templates-are-now-in-beta",source:"@site/blog/2021-07-26-software-templates-are-now-in-beta.mdx",title:"Software Templates is now in Beta",description:"Software Templates in Beta",date:"2021-07-26T00:00:00.000Z",formattedDate:"July 26, 2021",tags:[],readingTime:3.69,hasTruncateMarker:!0,authors:[{name:"Ben Lambert, Spotify",url:"https://github.com/benjdlambert",imageURL:"https://avatars.githubusercontent.com/u/3645856?v=4"}],frontMatter:{title:"Software Templates is now in Beta",author:"Ben Lambert, Spotify",authorURL:"https://github.com/benjdlambert",authorImageURL:"https://avatars.githubusercontent.com/u/3645856?v=4"},unlisted:!1,prevItem:{title:"The TechDocs Beta has landed",permalink:"/blog/2021/09/16/the-techdocs-beta-has-landed"},nextItem:{title:"Announcing the Backstage Search platform: a customizable search tool built just for you",permalink:"/blog/2021/06/24/announcing-backstage-search-platform"}},l={authorsImageUrls:[void 0]},c=[{value:"Anddddd\u2026 Action(s)! \ud83c\udfac",id:"anddddd-actions-",level:2},{value:"Template actions",id:"template-actions",level:3},{value:"Custom UI extensions",id:"custom-ui-extensions",level:3},{value:"Horizontal scalability",id:"horizontal-scalability",level:3},{value:"Try out the new templates",id:"try-out-the-new-templates",level:2}];function h(e){const t=Object.assign({p:"p",img:"img",strong:"strong",a:"a",code:"code",h2:"h2",h3:"h3",em:"em"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Software Templates in Beta",src:a(955252).Z+"",width:"960",height:"540"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"TLDR"}),"; At a high level, Backstage performs three main jobs: ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog/2021/05/20/adopting-backstage#three-jobs-create-manage-explore",children:"Create, Manage, and Explore"}),". Throughout the year, we\u2019ve been focussed on improving the stability and scalability of these areas while enhancing the feature sets based upon requests from the community. Software Templates \u2014 which enable push-button deployments with all your standards and best practices built-in \u2014 is our first feature-complete release candidate to graduate to beta. Read on to learn how this release improves template customization and flexibility, as well as performance."]}),"\n","\n",(0,n.jsx)(t.p,{children:"Let\u2019s rewind a little bit, around a year in fact. Backstage had been open sourced, and we released our first version of Software Templates and our Scaffolder plugin."}),"\n",(0,n.jsxs)(t.p,{children:["In case you missed it, ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog/2020/08/05/announcing-backstage-software-templates",children:"Software Templates"})," are part of the Create feature set, where you can set up Backstage to give your engineers the ability to spin up a new microservice, website, or any other software component with your organization\u2019s best practices built-in, right from the start."]}),"\n",(0,n.jsxs)(t.p,{children:["Back when we released the first version of these templates, with the ",(0,n.jsx)(t.code,{children:"apiVersion"})," ",(0,n.jsx)(t.code,{children:"backstage.io/v1alpha1"}),", they were a little restrictive in what they could do. The generated repository could only have one template source and it was restricted to only being ",(0,n.jsx)(t.a,{href:"https://github.com/cookiecutter/cookiecutter",children:"cookiecutter"})," templates. And it had to fit into the three stages of templating which was ",(0,n.jsx)(t.code,{children:"Prepare"}),", ",(0,n.jsx)(t.code,{children:"Template"}),", and ",(0,n.jsx)(t.code,{children:"Publish"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/2771",children:"opened up for feedback"})," from the community knowing that this wasn\u2019t going to be the final version, but something of a stepping stone to where we want to be in the future."]}),"\n",(0,n.jsx)(t.p,{children:"And now we come to today\u2026"}),"\n",(0,n.jsx)(t.h2,{id:"anddddd-actions-",children:"Anddddd\u2026 Action(s)! \ud83c\udfac"}),"\n",(0,n.jsxs)(t.p,{children:["Following the removal of the previously deprecated ",(0,n.jsx)(t.code,{children:"backstage.io/v1alpha1"})," templates, today we\u2019re officially announcing the beta version of Software Templates, or ",(0,n.jsx)(t.code,{children:"backstage.io/v1beta2"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"With it comes an entirely new architecture to the Software Templates functionality, and a load of new exciting features, which I\u2019ll dig into a little deeper."}),"\n",(0,n.jsx)(t.h3,{id:"template-actions",children:"Template actions"}),"\n",(0,n.jsx)(t.p,{children:"We\u2019ve totally opened up the ability to compose your own workflows for each Template that you have registered in Software Templates. This means no restrictions on where your template skeleton is kept, and no restrictions on what your workflow should look like."}),"\n",(0,n.jsx)(t.p,{children:"Template Actions are customizable JavaScript functions that allow you to extend the capabilities of the Software Templates by adding your own business logic or reusing some of our Built-In actions."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"New template syntax with actions",src:a(87308).Z+"",width:"1222",height:"2344"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"An example of the new template syntax with steps and parameters"})}),"\n",(0,n.jsx)(t.p,{children:"The workflow for Software Templates are now step-based, and each Software Template can have a customizable amount of steps which will in turn call these new actions."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"New steps being rendered in the frontend",src:a(347918).Z+"",width:"800",height:"449"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"An example of a Template with customizable steps"})}),"\n",(0,n.jsx)(t.p,{children:"These actions are very heavily inspired by GitHub Actions and GitHub Workflows, and we\u2019ve given back a lot of control to the template authors so they can build the boilerplate and push the code however they want."}),"\n",(0,n.jsx)(t.h3,{id:"custom-ui-extensions",children:"Custom UI extensions"}),"\n",(0,n.jsx)(t.p,{children:"A large part of the Software Templates feature is the form that we use to collect user input which is then passed on to these new actions. Sometimes, it makes sense that Template Authors want to provide their own React components which can be rendered in the frontend to maybe do some more complex things like calling internal APIs to provide autocomplete."}),"\n",(0,n.jsxs)(t.p,{children:["This is now possible with the new ",(0,n.jsx)(t.code,{children:"ScaffolderFieldExtensions"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Custom UI extensions",src:a(720001).Z+"",width:"600",height:"264"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["An example of ",(0,n.jsx)(t.code,{children:"ScaffolderFieldExtension"})," is the ",(0,n.jsx)(t.code,{children:"OwnerPicker"})," component which can automatically add options and suggest typeahead with data from an async API request"]})}),"\n",(0,n.jsxs)(t.p,{children:["Template Authors can create their own components to provide data to the custom actions in any way you see fit, and even override our own built in ones too like the ",(0,n.jsx)(t.code,{children:"RepoUrlPicker"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"horizontal-scalability",children:"Horizontal scalability"}),"\n",(0,n.jsxs)(t.p,{children:["The Scaffolder Service and Software Templates are now horizontally scalable, coordinating work between your deployed backend machines. This means now that the number of instances of the ",(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})," plugin you have, is the same amount of jobs that you can have in parallel. This ensures that your tasks are handled quickly and reliably, while providing great feedback in the process."]}),"\n",(0,n.jsx)(t.h2,{id:"try-out-the-new-templates",children:"Try out the new templates"}),"\n",(0,n.jsx)(t.p,{children:"We\u2019re still on the journey to making the Software Templates a great user experience for both authors and developers \u2014 but we\u2019re not done yet, so watch this space for new exciting features to come!"}),"\n",(0,n.jsxs)(t.p,{children:["In the meantime, make sure to visit the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/adding-templates",children:"building templates"})," or creating your own ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/writing-custom-actions",children:"custom actions"}),"."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},675251:(e,t,a)=>{a(727418);var n=a(667294),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,s={},c=null,h=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)r.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:h,props:s,_owner:i.current}}t.jsx=c,t.jsxs=c},785893:(e,t,a)=>{e.exports=a(675251)},955252:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backstage-software-templates-beta-e96cede6e6b3984bc58a51ec33f37b1c.gif"},720001:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom-components-521c107f29bb24a8940e0ea5251019a9.gif"},87308:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example-template-code-066dacd07a7b382230d0edaa0ea5ffdb.png"},347918:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/steps-running-b4ac03c38b16e1d6af751d029a525f50.gif"},511151:(e,t,a)=>{a.d(t,{Zo:()=>r,ah:()=>s});var n=a(667294);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function r({components:e,children:t,disableParentContext:a}){let r;return r=a?"function"==typeof e?e({}):e||i:s(e),n.createElement(o.Provider,{value:r},t)}}}]);