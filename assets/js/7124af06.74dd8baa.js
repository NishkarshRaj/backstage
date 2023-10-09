/*! For license information please see 7124af06.74dd8baa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[412625],{970680:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(824246),o=t(511151);const i={id:"add-auth-provider",title:"Contributing New Providers",description:"Documentation on adding new authentication providers"},a=void 0,s={id:"auth/add-auth-provider",title:"Contributing New Providers",description:"Documentation on adding new authentication providers",source:"@site/../docs/auth/add-auth-provider.md",sourceDirName:"auth",slug:"/auth/add-auth-provider",permalink:"/docs/auth/add-auth-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/add-auth-provider.md",tags:[],version:"current",frontMatter:{id:"add-auth-provider",title:"Contributing New Providers",description:"Documentation on adding new authentication providers"},sidebar:"docs",previous:{title:"OIDC provider from scratch",permalink:"/docs/auth/oidc"},next:{title:"Service to Service Auth",permalink:"/docs/auth/service-to-service-auth"}},d={},c=[{value:"How Does Authentication Work?",id:"how-does-authentication-work",level:2},{value:"Implementing Your Own Auth Wrapper",id:"implementing-your-own-auth-wrapper",level:2},{value:"Auth Environment Separation",id:"auth-environment-separation",level:3},{value:"Passport",id:"passport",level:2},{value:"How to add a new strategy provider",id:"how-to-add-a-new-strategy-provider",level:2},{value:"Quick guide",id:"quick-guide",level:3},{value:"Installing the dependencies:",id:"installing-the-dependencies",level:3},{value:"Create implementation",id:"create-implementation",level:3},{value:"Adding an OAuth based provider",id:"adding-an-oauth-based-provider",level:3},{value:"Adding an non-OAuth based provider",id:"adding-an-non-oauth-based-provider",level:3},{value:"Integration Wrapper",id:"integration-wrapper",level:4},{value:"Verify Callback",id:"verify-callback",level:4},{value:"Hook it up to the backend",id:"hook-it-up-to-the-backend",level:3},{value:"Test the new provider",id:"test-the-new-provider",level:3}];function l(e){const n=Object.assign({blockquote:"blockquote",p:"p",h2:"h2",code:"code",pre:"pre",ol:"ol",li:"li",a:"a",h3:"h3",strong:"strong",h4:"h4"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"NOTE: The primary audience for this documentation are contributors to the main\nBackstage project that want to add support for new authentication providers.\nWhile you can follow it to implement your own custom providers it is much\nmore advanced than using our built-in providers."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"how-does-authentication-work",children:"How Does Authentication Work?"}),"\n",(0,r.jsxs)(n.p,{children:["The Backstage application can use various external authentication providers for\nauthentication. An external provider is wrapped using an\n",(0,r.jsx)(n.code,{children:"AuthProviderRouteHandlers"})," interface for handling authentication. This\ninterface consists of four methods. Each of these methods is hosted at an\nendpoint (by default) ",(0,r.jsx)(n.code,{children:"/api/auth/[provider]/method"}),", where ",(0,r.jsx)(n.code,{children:"method"})," performs a\ncertain operation as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  /auth/[provider]/start -> Initiate a login from the web page\n  /auth/[provider]/handler/frame -> Handle a finished authentication operation\n  /auth/[provider]/refresh -> Refresh the validity of a login\n  /auth/[provider]/logout -> Log out a logged-in user\n"})}),"\n",(0,r.jsx)(n.p,{children:"The flow is as follows:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"A user attempts to sign in."}),"\n",(0,r.jsxs)(n.li,{children:["A popup window is opened, pointing to the ",(0,r.jsx)(n.code,{children:"auth"})," endpoint. That endpoint does\ninitial preparations and then re-directs the user to an external\nauthenticator, still inside the popup."]}),"\n",(0,r.jsxs)(n.li,{children:["The authenticator validates the user and returns the result of the validation\n(success OR failure), to the wrapper's endpoint (",(0,r.jsx)(n.code,{children:"handler/frame"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"handler/frame"})," rendered webpage will issue the appropriate response to\nthe webpage that opened the popup window, and the popup is closed."]}),"\n",(0,r.jsx)(n.li,{children:"The user signs out by clicking on a UI interface and the webpage makes a\nrequest to logout the user."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"implementing-your-own-auth-wrapper",children:"Implementing Your Own Auth Wrapper"}),"\n",(0,r.jsxs)(n.p,{children:["The core interface of any auth wrapper is the ",(0,r.jsx)(n.code,{children:"AuthProviderRouteHandlers"}),"\ninterface. This interface has four methods corresponding to the API described in\nthe initial section. Any auth wrapper will have to implement this interface."]}),"\n",(0,r.jsxs)(n.p,{children:["When initiating a login, a pop-up window is created by the frontend, to allow\nthe user to initiate a login. This login request is done to the ",(0,r.jsx)(n.code,{children:"/start"}),"\nendpoint which is handled by the ",(0,r.jsx)(n.code,{children:"start"})," method."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"start"})," method re-directs to the external auth provider who authenticates\nthe request and re-directs the request to the ",(0,r.jsx)(n.code,{children:"/handler/frame"})," endpoint, which\nis handled by the ",(0,r.jsx)(n.code,{children:"frameHandler"})," method."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"frameHandler"})," returns an HTML response, containing a script that does a\n",(0,r.jsx)(n.code,{children:"postMessage"})," to the frontend window, containing the result of the request.\nThe ",(0,r.jsx)(n.code,{children:"WebMessageResponse"})," type is the message sent by the ",(0,r.jsx)(n.code,{children:"postMessage"})," to the\nfrontend."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"postMessageResponse"})," utility function wraps the logic of generating a\n",(0,r.jsx)(n.code,{children:"postMessage"})," response that ensures that CORS is successfully handled. This\nfunction takes an ",(0,r.jsx)(n.code,{children:"express.Response"}),", a ",(0,r.jsx)(n.code,{children:"WebMessageResponse"})," and the URL of the\nfrontend (",(0,r.jsx)(n.code,{children:"appOrigin"}),") as parameters and return an HTML page with the script and\nthe message."]}),"\n",(0,r.jsxs)(n.p,{children:["There is a helper class for ",(0,r.jsx)(n.a,{href:"https://oauth.net/2/",children:"OAuth2"})," based authentication providers, ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.oauthadapter",children:"OAuthAdapter"}),". This class implements the ",(0,r.jsx)(n.code,{children:"AuthProviderRouteHandlers"})," interface\nfor you, and instead requires you to implement ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.oauthhandlers",children:"OAuthHandlers"}),", which\nis significantly easier."]}),"\n",(0,r.jsx)(n.h3,{id:"auth-environment-separation",children:"Auth Environment Separation"}),"\n",(0,r.jsxs)(n.p,{children:["The concept of an ",(0,r.jsx)(n.code,{children:"env"})," is core to the way the auth backend works. It uses an\n",(0,r.jsx)(n.code,{children:"env"})," query parameter to identify the environment in which the application is\nrunning (",(0,r.jsx)(n.code,{children:"development"}),", ",(0,r.jsx)(n.code,{children:"staging"}),", ",(0,r.jsx)(n.code,{children:"production"}),", etc). Each runtime can\nsimultaneously support multiple environments at the same time and the right\nhandler for each request is identified and dispatched to, based on the ",(0,r.jsx)(n.code,{children:"env"}),"\nparameter."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"OAuthEnvironmentHandler"})," is a utility wrapper for an ",(0,r.jsx)(n.code,{children:"OAuthHandlers"})," that\nimplements the ",(0,r.jsx)(n.code,{children:"AuthProviderRouteHandlers"})," interface while supporting multiple\n",(0,r.jsx)(n.code,{children:"env"}),"s."]}),"\n",(0,r.jsxs)(n.p,{children:["To instantiate OAuth providers (the same but for different environments), use\n",(0,r.jsx)(n.code,{children:"OAuthEnvironmentHandler.mapConfig"}),". It's a helper to iterate over a\nconfiguration object that is a map of environments to configurations. See one of\nthe existing OAuth providers for an example of how it is used."]}),"\n",(0,r.jsx)(n.p,{children:"Given the following configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"development:\n  clientId: abc\n  clientSecret: secret\nproduction:\n  clientId: xyz\n  clientSecret: supersecret\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"OAuthEnvironmentHandler.mapConfig(config, envConfig => ...)"})," call will\nsplit the config by the top level ",(0,r.jsx)(n.code,{children:"development"})," and ",(0,r.jsx)(n.code,{children:"production"})," keys, and pass\non each block as ",(0,r.jsx)(n.code,{children:"envConfig"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For convenience, the ",(0,r.jsx)(n.code,{children:"AuthProviderFactory"})," is a factory function that has to be\nimplemented which can then generate a ",(0,r.jsx)(n.code,{children:"AuthProviderRouteHandlers"})," for a given\nprovider."]}),"\n",(0,r.jsxs)(n.p,{children:["All of the supported providers provide an ",(0,r.jsx)(n.code,{children:"AuthProviderFactory"})," that returns an\n",(0,r.jsx)(n.code,{children:"OAuthEnvironmentHandler"}),", capable of handling authentication for multiple\nenvironments."]}),"\n",(0,r.jsx)(n.h2,{id:"passport",children:"Passport"}),"\n",(0,r.jsxs)(n.p,{children:["We chose ",(0,r.jsx)(n.a,{href:"http://www.passportjs.org/",children:"Passport"})," as our authentication platform\ndue to its comprehensive set of supported authentication\n",(0,r.jsx)(n.a,{href:"http://www.passportjs.org/packages/",children:"strategies"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"how-to-add-a-new-strategy-provider",children:"How to add a new strategy provider"}),"\n",(0,r.jsx)(n.h3,{id:"quick-guide",children:"Quick guide"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#installing-the-dependencies",children:"1."})," Install the passport-js based provider\npackage."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#create-implementation",children:"2."})," Create a new folder structure for the provider."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#adding-an-oauth-based-provider",children:"3."})," Implement the provider, extending the\nsuitable framework if needed."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#hook-it-up-to-the-backend",children:"4."})," Add the provider to the backend."]}),"\n",(0,r.jsx)(n.h3,{id:"installing-the-dependencies",children:"Installing the dependencies:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd plugins/auth-backend\nyarn add passport-provider-a\nyarn add @types/passport-provider-a\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-implementation",children:"Create implementation"}),"\n",(0,r.jsx)(n.p,{children:"Make a new folder with the name of the provider following the below file\nstructure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"plugins/auth-backend/src/providers/providerA\n\u251c\u2500\u2500 index.ts\n\u2514\u2500\u2500 provider.ts\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"plugins/auth-backend/src/providers/providerA/provider.ts"})})," defines the\nprovider class which implements a handler for the chosen framework."]}),"\n",(0,r.jsx)(n.h3,{id:"adding-an-oauth-based-provider",children:"Adding an OAuth based provider"}),"\n",(0,r.jsxs)(n.p,{children:["If we're adding an ",(0,r.jsx)(n.code,{children:"OAuth"})," based provider we would implement the\n",(0,r.jsx)(n.code,{children:"OAuthHandlers"})," interface. By implementing this\ninterface we can use the ",(0,r.jsx)(n.code,{children:"OAuthProvider"})," class provided by ",(0,r.jsx)(n.code,{children:"lib/oauth"}),", meaning\nwe don't need to implement the full\n",(0,r.jsx)(n.code,{children:"AuthProviderRouteHandlers"})," interface that providers\notherwise need to implement."]}),"\n",(0,r.jsxs)(n.p,{children:["The provider class takes the provider's options as a class parameter. It also\nimports the ",(0,r.jsx)(n.code,{children:"Strategy"})," from the passport package."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { Strategy as ProviderAStrategy } from 'passport-provider-a';\n\nexport type ProviderAProviderOptions = OAuthProviderOptions & {\n  // extra options here\n}\n\nexport class ProviderAAuthProvider implements OAuthHandlers {\n  private readonly _strategy: ProviderAStrategy;\n\n  constructor(options: ProviderAProviderOptions) {\n    this._strategy = new ProviderAStrategy(\n      {\n        clientID: options.clientId,\n        clientSecret: options.clientSecret,\n        callbackURL: options.callbackUrl,\n        passReqToCallback: false,\n        response_type: 'code',\n        /// ... etc\n      }\n      verifyFunction, // See the \"Verify Callback\" section\n    );\n  }\n\n  async start() {}\n  async handler() {}\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"adding-an-non-oauth-based-provider",children:"Adding an non-OAuth based provider"}),"\n",(0,r.jsxs)(n.p,{children:["An non-",(0,r.jsx)(n.code,{children:"OAuth"})," based provider could implement\n",(0,r.jsx)(n.code,{children:"AuthProviderRouteHandlers"})," instead."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'type ProviderAOptions = {\n  // ...\n};\n\nexport class ProviderAAuthProvider implements AuthProviderRouteHandlers {\n  private readonly _strategy: ProviderAStrategy;\n\n  constructor(options: ProviderAOptions) {\n    this._strategy = new ProviderAStrategy(\n      {\n        // ...\n      },\n      verifyFunction, // See the "Verify Callback" section\n    );\n  }\n\n  async start() {}\n  async frameHandler() {}\n  async logout() {}\n  async refresh() {} // If supported\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"integration-wrapper",children:"Integration Wrapper"}),"\n",(0,r.jsx)(n.p,{children:"Each provider exports an object that provides a way to create new instances\nof the provider, along with related utilities like predefined sign-in resolvers."}),"\n",(0,r.jsxs)(n.p,{children:["The object is created using ",(0,r.jsx)(n.code,{children:"createAuthProviderIntegration"}),", with the most\nimportant part being the ",(0,r.jsx)(n.code,{children:"create"})," method that acts as the factory function\nfor our provider."]}),"\n",(0,r.jsxs)(n.p,{children:["The factory should return an implementation of ",(0,r.jsx)(n.code,{children:"AuthProviderFactory"}),", which\npasses in a object with utilities for configuration, logging, token issuing,\netc. The factory should return an implementation of\n",(0,r.jsx)(n.code,{children:"AuthProviderRouteHandlers"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The factory is what decides the mapping from\n",(0,r.jsx)(n.a,{href:"/docs/conf/",children:"static configuration"})," to the creation of auth providers. For\nexample, OAuth providers use ",(0,r.jsx)(n.code,{children:"OAuthEnvironmentHandler"})," to allow for multiple\ndifferent configurations, one for each environment, which looks like this;"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export const okta = createAuthProviderIntegration({\n  create(options?: {\n    /**\n     * The profile transformation function used to verify and convert the auth response\n     * into the profile that will be presented to the user.\n     */\n    authHandler?: AuthHandler<OAuthResult>;\n\n    /**\n     * Configure sign-in for this provider, without it the provider can not be used to sign users in.\n     */\n    signIn?: {\n      /**\n       * Maps an auth result to a Backstage identity for the user.\n       */\n      resolver: SignInResolver<OAuthResult>;\n    };\n  }) {\n    return ({ providerId, globalConfig, config, resolverContext }) =>\n      OAuthEnvironmentHandler.mapConfig(config, envConfig => {\n        // read options from config\n        const clientId = envConfig.getString('clientId');\n        const clientSecret = envConfig.getString('clientSecret');\n\n        // Use provided auth handler, or create a default one\n        const authHandler: AuthHandler<OAuthResult> = options?.authHandler\n          ? options.authHandler\n          : async ({ fullProfile, params }) => ({\n              profile: makeProfileInfo(fullProfile, params.id_token),\n            });\n\n        // instantiate our OAuthHandlers implementation\n        const provider = new OktaAuthProvider({\n          audience,\n          clientId,\n          clientSecret,\n          callbackUrl,\n          authHandler,\n          signInResolver: options?.signIn?.resolver,\n          resolverContext,\n        });\n\n        // Wrap the OAuthHandlers with OAuthProvider, which implements AuthProviderRouteHandlers\n        return OAuthProvider.fromConfig(globalConfig, provider, {\n          providerId,\n          tokenIssuer,\n        });\n      });\n  },\n  resolvers: {\n    /**\n     * Looks up the user by matching their email local part to the entity name.\n     */\n    emailLocalPartMatchingUserEntityName: () => commonByEmailLocalPartResolver,\n\n    // ... additional predefined resolvers\n  },\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"The purpose of the different environments is to allow for a single auth-backend\nto serve as the authentication service for multiple different frontend\nenvironments, such as local development, staging, and production."}),"\n",(0,r.jsx)(n.h4,{id:"verify-callback",children:"Verify Callback"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Strategies require what is known as a verify callback. The purpose of a verify\ncallback is to find the user that possesses a set of credentials. When\nPassport authenticates a request, it parses the credentials contained in the\nrequest. It then invokes the verify callback with those credentials as\narguments [...]. If the credentials are valid, the verify callback invokes\ndone to supply Passport with the user that authenticated."}),"\n",(0,r.jsx)(n.p,{children:"If the credentials are not valid (for example, if the password is incorrect),\ndone should be invoked with false instead of a user to indicate an\nauthentication failure."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"http://www.passportjs.org/docs/configure/",children:"http://www.passportjs.org/docs/configure/"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"plugins/auth-backend/src/providers/providerA/index.ts"})})," is simply\nre-exporting the factory function to be used for hooking the provider up to the\nbackend."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export { createProviderAProvider } from './provider';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"hook-it-up-to-the-backend",children:"Hook it up to the backend"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"plugins/auth-backend/src/providers/factories.ts"})})," When the ",(0,r.jsx)(n.code,{children:"auth-backend"}),"\nstarts it sets up routing for all the available providers by calling\nthe factory function of each provider. You need to import the factory\nfunction from the provider and add it to the factory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { createProviderAProvider } from './providerA';\n\nconst factories: { [providerId: string]: AuthProviderFactory } = {\n  providerA: createProviderAProvider,\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By doing this ",(0,r.jsx)(n.code,{children:"auth-backend"})," automatically adds these endpoints:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"router.get('/auth/providerA/start');\nrouter.get('/auth/providerA/handler/frame');\nrouter.post('/auth/providerA/handler/frame');\nrouter.post('/auth/providerA/logout');\nrouter.get('/auth/providerA/refresh'); // if supported\nrouter.post('/auth/providerA/refresh'); // if supported\n"})}),"\n",(0,r.jsxs)(n.p,{children:["As you can see each endpoint is prefixed with both ",(0,r.jsx)(n.code,{children:"/auth"})," and its provider\nname."]}),"\n",(0,r.jsx)(n.h3,{id:"test-the-new-provider",children:"Test the new provider"}),"\n",(0,r.jsxs)(n.p,{children:["You can ",(0,r.jsx)(n.code,{children:"curl -i localhost:7007/api/auth/providerA/start"})," and which should\nprovide a ",(0,r.jsx)(n.code,{children:"302"})," redirect with a ",(0,r.jsx)(n.code,{children:"Location"})," header. Paste the URL from that\nheader into a web browser and you should be able to trigger the authorization\nflow."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),d=1;d<arguments.length;d++){for(var c in i=Object(arguments[d]))t.call(i,c)&&(s[c]=i[c]);if(n){a=n(i);for(var l=0;l<a.length;l++)r.call(i,a[l])&&(s[a[l]]=i[a[l]])}}return s}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:a.current}}n.jsx=c,n.jsxs=c},541535:(e,n,t)=>{var r=t(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,s=60110,d=60112;n.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;o=h("react.element"),i=h("react.portal"),n.Fragment=h("react.fragment"),n.StrictMode=h("react.strict_mode"),n.Profiler=h("react.profiler"),a=h("react.provider"),s=h("react.context"),d=h("react.forward_ref"),n.Suspense=h("react.suspense"),c=h("react.memo"),l=h("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function g(e,n,t){this.props=e,this.context=n,this.refs=v,this.updater=t||f}function m(){}function j(e,n,t){this.props=e,this.context=n,this.refs=v,this.updater=t||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var y=j.prototype=new m;y.constructor=j,r(y,g.prototype),y.isPureReactComponent=!0;var x={current:null},w=Object.prototype.hasOwnProperty,b={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,i={},a=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)w.call(n,r)&&!b.hasOwnProperty(r)&&(i[r]=n[r]);var d=arguments.length-2;if(1===d)i.children=t;else if(1<d){for(var c=Array(d),l=0;l<d;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(r in d=e.defaultProps)void 0===i[r]&&(i[r]=d[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:x.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function _(e,n,t,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var d=!1;if(null===e)d=!0;else switch(s){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case o:case i:d=!0}}if(d)return a=a(d=e),e=""===r?"."+P(d,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),_(a,n,t,"",(function(e){return e}))):null!=a&&(A(a)&&(a=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||d&&d.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),n.push(a)),1;if(d=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=r+P(s=e[c],c);d+=_(s,n,t,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(s=e.next()).done;)d+=_(s=s.value,n,t,l=r+P(s,c++),a);else if("object"===s)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return d}function S(e,n,t){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function C(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function I(){var e=R.current;if(null===e)throw Error(p(321));return e}var E={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:S,forEach:function(e,n,t){S(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error(p(143));return e}},n.Component=g,n.PureComponent=j,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var i=r({},e.props),a=e.key,s=e.ref,d=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,d=x.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)w.call(n,l)&&!b.hasOwnProperty(l)&&(i[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){c=Array(l);for(var h=0;h<l;h++)c[h]=arguments[h+2];i.children=c}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:d}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=A,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},n.memo=function(e,n){return{$$typeof:c,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return I().useCallback(e,n)},n.useContext=function(e,n){return I().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return I().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return I().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return I().useLayoutEffect(e,n)},n.useMemo=function(e,n){return I().useMemo(e,n)},n.useReducer=function(e,n,t){return I().useReducer(e,n,t)},n.useRef=function(e){return I().useRef(e)},n.useState=function(e){return I().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},n)}}}]);