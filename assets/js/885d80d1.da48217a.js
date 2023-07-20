/*! For license information please see 885d80d1.da48217a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[911612],{246936:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(824246),i=r(511151);const s={id:"index",title:"Core Backend Service APIs",sidebar_label:"Overview",description:"Core backend service APIs"},o=void 0,c={unversionedId:"backend-system/core-services/index",id:"backend-system/core-services/index",title:"Core Backend Service APIs",description:"Core backend service APIs",source:"@site/../docs/backend-system/core-services/01-index.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/index",permalink:"/docs/backend-system/core-services/index",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/core-services/01-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",title:"Core Backend Service APIs",sidebar_label:"Overview",description:"Core backend service APIs"},sidebar:"docs",previous:{title:"Migration Guide",permalink:"/docs/backend-system/building-plugins-and-modules/migrating"},next:{title:"Backstage Accessibility",permalink:"/docs/accessibility/"}},a={},l=[{value:"HTTP Router Service",id:"http-router-service",level:2},{value:"Using the service",id:"using-the-service",level:3},{value:"Configuring the service",id:"configuring-the-service",level:3},{value:"Root HTTP Router",id:"root-http-router",level:2},{value:"Using the service",id:"using-the-service-1",level:3},{value:"Configuring the service",id:"configuring-the-service-1",level:3},{value:"Config",id:"config",level:2},{value:"Using the service",id:"using-the-service-2",level:3},{value:"Configuring the service",id:"configuring-the-service-2",level:3},{value:"Logging",id:"logging",level:2},{value:"Using the service",id:"using-the-service-3",level:3},{value:"Root Logger",id:"root-logger",level:3},{value:"Configuring the service",id:"configuring-the-service-3",level:3},{value:"Cache",id:"cache",level:2},{value:"Using the service",id:"using-the-service-4",level:3},{value:"Database",id:"database",level:2},{value:"Using the service",id:"using-the-service-5",level:3},{value:"Discovery",id:"discovery",level:2},{value:"Using the service",id:"using-the-service-6",level:3},{value:"Identity",id:"identity",level:2},{value:"Using the service",id:"using-the-service-7",level:3},{value:"Configuring the service",id:"configuring-the-service-4",level:3},{value:"Lifecycle",id:"lifecycle",level:2},{value:"Using the service",id:"using-the-service-8",level:3},{value:"Root Lifecycle",id:"root-lifecycle",level:2},{value:"Configure the service",id:"configure-the-service",level:3},{value:"Permissions",id:"permissions",level:2},{value:"Using the service",id:"using-the-service-9",level:3},{value:"Scheduler",id:"scheduler",level:2},{value:"Using the service",id:"using-the-service-10",level:3},{value:"URL Readers",id:"url-readers",level:2},{value:"Using the service",id:"using-the-service-11",level:3}];function d(e){const n=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",code:"code",pre:"pre",h2:"h2",h3:"h3",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"DISCLAIMER: The new backend system is in alpha, and still under active development. While we have reviewed the interfaces carefully, they may still be iterated on before the stable release."})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The default backend provides several ",(0,t.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/packages/backend-plugin-api/src/services/definitions/coreServices.ts",children:"core services"})," out of the box which includes access to configuration, logging, URL Readers, databases and more."]}),"\n",(0,t.jsxs)(n.p,{children:["All core services are available through the ",(0,t.jsx)(n.code,{children:"coreServices"})," namespace in the ",(0,t.jsx)(n.code,{children:"@backstage/backend-plugin-api"})," package."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { coreServices } from '@backstage/backend-plugin-api';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"http-router-service",children:"HTTP Router Service"}),"\n",(0,t.jsx)(n.p,{children:"One of the most common services is the HTTP router service which is used to expose HTTP endpoints for other plugins to consume."}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service",children:"Using the service"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to register a HTTP router for the ",(0,t.jsx)(n.code,{children:"example"})," plugin.\nThis single route will be available at the ",(0,t.jsx)(n.code,{children:"/api/example/hello"})," path."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { Router } from 'express';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: { http: coreServices.httpRouter },\n      async init({ http }) {\n        const router = Router();\n        router.get('/hello', (_req, res) => {\n          res.status(200).json({ hello: 'world' });\n        });\n        // Registers the router at the /api/example path\n        http.use(router);\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-the-service",children:"Configuring the service"}),"\n",(0,t.jsxs)(n.p,{children:["There's additional configuration that you can optionally pass to setup the ",(0,t.jsx)(n.code,{children:"httpRouter"})," core service."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getPath"})," - Can be used to generate a path for each plugin. Currently defaults to ",(0,t.jsx)(n.code,{children:"/api/${pluginId}"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can configure these additional options by adding an override for the core service when calling ",(0,t.jsx)(n.code,{children:"createBackend"})," like follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { httpRouterServiceFactory } from '@backstage/backend-app-api';\n\nconst backend = createBackend({\n  services: [\n    httpRouterServiceFactory({\n      getPath: (pluginId: string) => `/plugins/${pluginId}`,\n    }),\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"root-http-router",children:"Root HTTP Router"}),"\n",(0,t.jsxs)(n.p,{children:["The root HTTP router is a service that allows you to register routes on the root of the backend service. This is useful for things like health checks, or other routes that you want to expose on the root of the backend service. It is used as the base router that backs the ",(0,t.jsx)(n.code,{children:"httpRouter"})," service. Most likely you won't need to use this service directly, but rather use the ",(0,t.jsx)(n.code,{children:"httpRouter"})," service."]}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service-1",children:"Using the service"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to get the root HTTP router service in your ",(0,t.jsx)(n.code,{children:"example"})," backend plugin to register a health check route."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { Router } from 'express';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        rootHttpRouter: coreServices.rootHttpRouter,\n      },\n      async init({ rootHttpRouter }) {\n        const router = Router();\n        router.get('/health', (request, response) => {\n          response.send('OK');\n        });\n\n        rootHttpRouter.use(router);\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-the-service-1",children:"Configuring the service"}),"\n",(0,t.jsxs)(n.p,{children:["There's additional options that you can pass to configure the root HTTP Router service. These options are passed when you call ",(0,t.jsx)(n.code,{children:"createBackend"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"indexPath"})," - optional path to forward all unmatched requests to. Defaults to ",(0,t.jsx)(n.code,{children:"/api/app"})," which is the ",(0,t.jsx)(n.code,{children:"app-backend"})," plugin responsible for serving the frontend application through the backend."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"configure"})," - this is an optional function that you can use to configure the ",(0,t.jsx)(n.code,{children:"express"})," instance. This is useful if you want to add your own middleware to the root router, such as logging, or other things that you want to do before the request is handled by the backend. It's also useful to override the order in which middleware is applied."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can configure the root HTTP Router service by passing the options to the ",(0,t.jsx)(n.code,{children:"createBackend"})," function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { rootHttpRouterServiceFactory } from '@backstage/backend-app-api';\n\nconst backend = createBackend({\n  services: [\n    rootHttpRouterServiceFactory({\n      configure: ({ app, middleware, routes, config, logger, lifecycle }) => {\n        // the built in middleware is provided through an option in the configure function\n        app.use(middleware.helmet());\n        app.use(middleware.cors());\n        app.use(middleware.compression());\n\n        // you can add you your own middleware in here\n        app.use(custom.logging());\n\n        // here the routes that are registered by other plugins\n        app.use(routes);\n\n        // some other middleware that comes after the other routes\n        app.use(middleware.notFound());\n        app.use(middleware.error());\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,t.jsxs)(n.p,{children:["This service allows you to read configuration values out of your ",(0,t.jsx)(n.code,{children:"app-config"})," YAML files."]}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service-2",children:"Using the service"}),"\n",(0,t.jsx)(n.p,{children:"The following example shows how you can use the default config service to be able to get a config value, and then log it to the console."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        log: coreServices.logger,\n        config: coreServices.config,\n      },\n      async init({ log, config }) {\n        const baseUrl = config.getString('backend.baseUrl');\n        log.warn(`The backend is running at ${baseUrl}`);\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-the-service-2",children:"Configuring the service"}),"\n",(0,t.jsxs)(n.p,{children:["There's additional configuration that you can optionally pass to setup the ",(0,t.jsx)(n.code,{children:"config"})," core service."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"argv"})," - Override the arguments that are passed to the config loader, instead of using ",(0,t.jsx)(n.code,{children:"process.argv"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"remote"})," - Configure remote configuration loading"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can configure these additional options by adding an override for the core service when calling ",(0,t.jsx)(n.code,{children:"createBackend"})," like follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { configServiceFactory } from '@backstage/backend-app-api';\n\nconst backend = createBackend({\n  services: [\n    configServiceFactory({\n      argv: [\n        '--config',\n        '/backstage/app-config.development.yaml',\n        '--config',\n        '/backstage/app-config.yaml',\n      ],\n      remote: { reloadIntervalSeconds: 60 },\n    }),\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,t.jsx)(n.p,{children:"This service allows plugins to output logging information. There are actually two logger services: a root logger, and a plugin logger which is bound to individual plugins, so that you will get nice messages with the plugin ID referenced in the log lines."}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service-3",children:"Using the service"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to get the logger in your ",(0,t.jsx)(n.code,{children:"example"})," backend plugin and create a warning message that will be printed nicely to the console."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        log: coreServices.logger,\n      },\n      async init({ log }) {\n        log.warn(\"Here's a nice log line that's a warning!\");\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"root-logger",children:"Root Logger"}),"\n",(0,t.jsx)(n.p,{children:"The root logger is the logger that is used by other root services. It's where the implementation lies for creating child loggers around the backstage ecosystem including child loggers for plugins with the correct metadata and annotations."}),"\n",(0,t.jsx)(n.p,{children:"If you want to override the implementation for logging across all of the backend, this is the service that you should override."}),"\n",(0,t.jsx)(n.h3,{id:"configuring-the-service-3",children:"Configuring the service"}),"\n",(0,t.jsx)(n.p,{children:"The following example is how you can override the root logger service to add additional metadata to all log lines."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { coreServices } from '@backstage/backend-plugin-api';\nimport { WinstonLogger } from '@backstage/backend-app-api';\n\nconst backend = createBackend({\n  services: [\n    createServiceFactory({\n      service: coreServices.rootLogger,\n      deps: {\n        config: coreServices.config,\n      },\n      async factory({ config }) {\n        const logger = WinstonLogger.create({\n          meta: {\n            service: 'backstage',\n            // here's some additional information that is not part of the\n            // original implementation\n            podName: 'myk8spod',\n          },\n          level: process.env.LOG_LEVEL || 'info',\n          format:\n            process.env.NODE_ENV === 'production'\n              ? format.json()\n              : WinstonLogger.colorFormat(),\n          transports: [new transports.Console()],\n        });\n\n        return logger;\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"cache",children:"Cache"}),"\n",(0,t.jsx)(n.p,{children:"This service lets your plugin interact with a cache. It is bound to your plugin too, so that you will only set and get values in your plugin's private namespace."}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service-4",children:"Using the service"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to get a cache client in your ",(0,t.jsx)(n.code,{children:"example"})," backend plugin and setting and getting values from the cache."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        cache: coreServices.cache,\n      },\n      async init({ cache }) {\n        const { key, value } = { key: 'test:key', value: 'bob' };\n        await cache.set(key, value, { ttl: 1000 });\n\n        // .. some other stuff.\n\n        await cache.get(key); // 'bob'\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,t.jsxs)(n.p,{children:["This service lets your plugins get a ",(0,t.jsx)(n.code,{children:"knex"})," client hooked up to a database which is configured in your ",(0,t.jsx)(n.code,{children:"app-config"})," YAML files, for your persistence needs."]}),"\n",(0,t.jsxs)(n.p,{children:["If there's no config provided in ",(0,t.jsx)(n.code,{children:"backend.database"})," then you will automatically get a simple in-memory SQLite 3 database for your plugin whose contents will be lost when the service restarts."]}),"\n",(0,t.jsx)(n.p,{children:"This service is scoped per plugin too, so that table names do not conflict across plugins."}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service-5",children:"Using the service"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to get access to the database service in your ",(0,t.jsx)(n.code,{children:"example"})," backend plugin and getting a client for interacting with the database. It also runs some migrations from a certain directory for your plugin."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { resolvePackagePath } from '@backstage/backend-common';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        database: coreServices.database,\n      },\n      async init({ database }) {\n        const client = await database.getClient();\n        const migrationsDir = resolvePackagePath(\n          '@internal/my-plugin',\n          'migrations',\n        );\n        if (!database.migrations?.skip) {\n          await client.migrate.latest({\n            directory: migrationsDir,\n          });\n        }\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"discovery",children:"Discovery"}),"\n",(0,t.jsxs)(n.p,{children:["When building plugins, you might find that you will need to look up another plugin's base URL to be able to communicate with it. This could be for example an HTTP route or some ",(0,t.jsx)(n.code,{children:"ws"})," protocol URL. For this we have a discovery service which can provide both internal and external base URLs for a given a plugin ID."]}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service-6",children:"Using the service"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to get the discovery service in your ",(0,t.jsx)(n.code,{children:"example"})," backend plugin and making a request to both the internal and external base URLs for the ",(0,t.jsx)(n.code,{children:"derp"})," plugin."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { fetch } from 'node-fetch';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        discovery: coreServices.discovery,\n      },\n      async init({ discovery }) {\n        const url = await discoverty.getBaseUrl('derp'); // can also use discovery.getBaseUrl to retrieve external URL\n        const response = await fetch(`${url}/hello`);\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"identity",children:"Identity"}),"\n",(0,t.jsxs)(n.p,{children:["When working with backend plugins, you might find that you will need to interact with the ",(0,t.jsx)(n.code,{children:"auth-backend"})," plugin to both authenticate backstage tokens, and to deconstruct them to get the user's entity ref and/or ownership claims out of them."]}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service-7",children:"Using the service"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to get the identity service in your ",(0,t.jsx)(n.code,{children:"example"})," backend plugin and retrieve the user's entity ref and ownership claims for the incoming request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { Router } from 'express';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        identity: coreServices.identity,\n        http: coreServices.httpRouter,\n      },\n      async init({ http, identity }) {\n        const router = Router();\n        router.get('/test-me', (request, response) => {\n          // use the identity service to pull out the header from the request and get the user\n          const {\n            identity: { userEntityRef, ownershipEntityRefs },\n          } = await identity.getIdentity({\n            request,\n          });\n\n          // send the decoded and validated things back to the user\n          response.json({\n            userEntityRef,\n            ownershipEntityRefs,\n          });\n        });\n\n        http.use(router);\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-the-service-4",children:"Configuring the service"}),"\n",(0,t.jsxs)(n.p,{children:["There's additional configuration that you can optionally pass to setup the ",(0,t.jsx)(n.code,{children:"identity"})," core service."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"issuer"})," - Set an optional issuer for validation of the JWT token"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"algorithms"})," - ",(0,t.jsx)(n.code,{children:"alg"})," header for validation of the JWT token, defaults to ",(0,t.jsx)(n.code,{children:"ES256"}),". More info on supported algorithms can be found in the ",(0,t.jsxs)(n.a,{href:"https://github.com/panva/jose",children:[(0,t.jsx)(n.code,{children:"jose"})," library documentation"]})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can configure these additional options by adding an override for the core service when calling ",(0,t.jsx)(n.code,{children:"createBackend"})," like follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { identityServiceFactory } from '@backstage/backend-app-api';\n\nconst backend = createBackend({\n  services: [\n    identityServiceFactory({\n      issuer: 'backstage',\n      algorithms: ['ES256', 'RS256'],\n    }),\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"lifecycle",children:"Lifecycle"}),"\n",(0,t.jsxs)(n.p,{children:["This service allows your plugins to register hooks for cleaning up resources as the service is shutting down (e.g. when a pod is being torn down, or when pressing ",(0,t.jsx)(n.code,{children:"Ctrl+C"})," during local development). Other core services also leverage this same mechanism internally to stop themselves cleanly."]}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service-8",children:"Using the service"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to get the lifecycle service in your ",(0,t.jsx)(n.code,{children:"example"})," backend plugin to clean up a long running interval when the service is shutting down."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        lifecycle: coreServices.lifecycle,\n        logger: coreServices.logger,\n      },\n      async init({ lifecycle, logger }) {\n        // some example work that we want to stop when shutting down\n        const interval = setInterval(async () => {\n          await fetch('http://google.com/keepalive').then(r => r.json());\n          // do some other stuff.\n        }, 1000);\n\n        lifecycle.addShutdownHook(() => clearInterval(interval));\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"root-lifecycle",children:"Root Lifecycle"}),"\n",(0,t.jsx)(n.p,{children:"This service is the same as the lifecycle service, but should only be used by the root services. This is also where the implementation for the actual lifecycle hooks are collected and executed, so if you want to override the implementation of how those are processed, you should override this service."}),"\n",(0,t.jsx)(n.h3,{id:"configure-the-service",children:"Configure the service"}),"\n",(0,t.jsx)(n.p,{children:"The following example shows how to override the default implementation of the lifecycle service with something that listens on different process events to the original."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyCustomLifecycleService implements RootLifecycleService {\n  constructor(private readonly logger: LoggerService) {}\n\n  #isCalled = false;\n  #shutdownTasks: Array<{\n    hook: LifecycleServiceShutdownHook;\n    options?: LifecycleServiceShutdownOptions;\n  }> = [];\n\n  addShutdownHook(\n    hook: LifecycleServiceShutdownHook,\n    options?: LifecycleServiceShutdownOptions,\n  ): void {\n    this.#shutdownTasks.push({ hook, options });\n  }\n\n  async shutdown(): Promise<void> {\n    if (this.#isCalled) {\n      return;\n    }\n    this.#isCalled = true;\n\n    this.logger.info(`Running ${this.#shutdownTasks.length} shutdown tasks...`);\n    await Promise.all(\n      this.#shutdownTasks.map(async ({ hook, options }) => {\n        const logger = options?.logger ?? this.logger;\n        try {\n          await hook();\n          logger.info(`Shutdown hook succeeded`);\n        } catch (error) {\n          logger.error(`Shutdown hook failed, ${error}`);\n        }\n      }),\n    );\n  }\n}\n\nconst backend = createBackend({\n  services: [\n    createServiceFactory({\n      service: coreServices.rootLifecycle,\n      deps: {\n        logger: coreServices.rootLogger,\n      },\n      async factory({ logger }) {\n        return new MyCustomLifecycleService(logger);\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,t.jsxs)(n.p,{children:["This service allows your plugins to ask ",(0,t.jsx)(n.a,{href:"https://backstage.io/docs/permissions/overview",children:"the permissions framework"})," for authorization of user actions."]}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service-9",children:"Using the service"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to get the permissions service in your ",(0,t.jsx)(n.code,{children:"example"})," backend to check to see if the user is allowed to perform a certain action with a custom permission rule."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { Router } from 'express';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        permissions: coreServices.permissions,\n        http: coreServices.httpRouter,\n      },\n      async init({ permissions, http }) {\n        const router = Router();\n        router.get('/test-me', (request, response) => {\n          // use the identity service to pull out the token from request headers\n          const { token } = await identity.getIdentity({\n            request,\n          });\n\n          // ask the permissions framework what the decision is for the permission\n          const permissionResponse = await permissions.authorize(\n            [\n              {\n                permission: myCustomPermission,\n              },\n            ],\n            { token },\n          );\n        });\n\n        http.use(router);\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"scheduler",children:"Scheduler"}),"\n",(0,t.jsx)(n.p,{children:"When writing plugins, you sometimes want to have things running on a schedule, or something similar to cron jobs that are distributed through instances that your backend plugin is running on. We supply a task scheduler for this purpose that is scoped per plugin so that you can create these tasks and orchestrate their execution."}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service-10",children:"Using the service"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to get the scheduler service in your ",(0,t.jsx)(n.code,{children:"example"})," backend to issue a scheduled task that runs across your instances at a given interval."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { fetch } from 'node-fetch';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        scheduler: coreServices.scheduler,\n      },\n      async init({ scheduler }) {\n        await scheduler.scheduleTask({\n          frequency: { minutes: 10 },\n          timeout: { seconds: 30 },\n          id: 'ping-google',\n          fn: async () => {\n            await fetch('http://google.com/ping');\n          },\n        });\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"url-readers",children:"URL Readers"}),"\n",(0,t.jsxs)(n.p,{children:["Plugins will require communication with certain integrations that users have configured. Popular integrations are things like Version Control Systems (VSC), such as GitHub, BitBucket GitLab etc. These integrations are configured in the ",(0,t.jsx)(n.code,{children:"integrations"})," section of the ",(0,t.jsx)(n.code,{children:"app-config.yaml"})," file."]}),"\n",(0,t.jsx)(n.p,{children:"These URL readers are basically wrappers with authentication for files and folders that could be stored in these VCS repositories."}),"\n",(0,t.jsx)(n.h3,{id:"using-the-service-11",children:"Using the service"}),"\n",(0,t.jsxs)(n.p,{children:["The following example shows how to get the URL Reader service in your ",(0,t.jsx)(n.code,{children:"example"})," backend plugin to read a file and a directory from a GitHub repository."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport os from 'os';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        urlReader: coreServices.urlReader,\n      },\n      async init({ urlReader }) {\n        const buffer = await urlReader\n          .read('https://github.com/backstage/backstage/blob/master/README.md')\n          .then(r => r.buffer());\n\n        const tmpDir = os.tmpdir();\n        const directory = await urlReader\n          .readTree(\n            'https://github.com/backstage/backstage/tree/master/packages/backend',\n          )\n          .then(tree => tree.dir({ targetDir: tmpDir }));\n      },\n    });\n  },\n});\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var s,o,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in s=Object(arguments[a]))r.call(s,l)&&(c[l]=s[l]);if(n){o=n(s);for(var d=0;d<o.length;d++)t.call(s,o[d])&&(c[o[d]]=s[o[d]])}}return c}},371426:(e,n,r)=>{r(862525);var t=r(827378),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;i=s("react.element"),n.Fragment=s("react.fragment")}var o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,s={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:o.current}}n.jsx=l,n.jsxs=l},541535:(e,n,r)=>{var t=r(862525),i=60103,s=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var o=60109,c=60110,a=60112;n.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;i=u("react.element"),s=u("react.portal"),n.Fragment=u("react.fragment"),n.StrictMode=u("react.strict_mode"),n.Profiler=u("react.profiler"),o=u("react.provider"),c=u("react.context"),a=u("react.forward_ref"),n.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function v(e,n,r){this.props=e,this.context=n,this.refs=f,this.updater=r||p}function m(){}function y(e,n,r){this.props=e,this.context=n,this.refs=f,this.updater=r||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,n,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var x=y.prototype=new m;x.constructor=y,t(x,v.prototype),x.isPureReactComponent=!0;var b={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,r){var t,s={},o=null,c=null;if(null!=n)for(t in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(o=""+n.key),n)k.call(n,t)&&!j.hasOwnProperty(t)&&(s[t]=n[t]);var a=arguments.length-2;if(1===a)s.children=r;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===s[t]&&(s[t]=a[t]);return{$$typeof:i,type:e,key:o,ref:c,props:s,_owner:b.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var R=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function T(e,n,r,t,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case s:a=!0}}if(a)return o=o(a=e),e=""===t?"."+P(a,0):t,Array.isArray(o)?(r="",null!=e&&(r=e.replace(R,"$&/")+"/"),T(o,n,r,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(R,"$&/")+"/")+e)),n.push(o)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=t+P(c=e[l],l);a+=T(c,n,r,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(c=e.next()).done;)a+=T(c=c.value,n,r,d=t+P(c,l++),o);else if("object"===c)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return a}function C(e,n,r){if(null==e)return e;var t=[],i=0;return T(e,t,"","",(function(e){return n.call(r,e,i++)})),t}function _(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function U(){var e=I.current;if(null===e)throw Error(g(321));return e}var L={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:C,forEach:function(e,n,r){C(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(g(143));return e}},n.Component=v,n.PureComponent=y,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,n.cloneElement=function(e,n,r){if(null==e)throw Error(g(267,e));var s=t({},e.props),o=e.key,c=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,a=b.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)k.call(n,d)&&!j.hasOwnProperty(d)&&(s[d]=void 0===n[d]&&void 0!==l?l[d]:n[d])}var d=arguments.length-2;if(1===d)s.children=r;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:i,type:e.type,key:o,ref:c,props:s,_owner:a}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:c,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},n.createElement=w,n.createFactory=function(e){var n=w.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:_}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return U().useCallback(e,n)},n.useContext=function(e,n){return U().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return U().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return U().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return U().useLayoutEffect(e,n)},n.useMemo=function(e,n){return U().useMemo(e,n)},n.useReducer=function(e,n,r){return U().useReducer(e,n,r)},n.useRef=function(e){return U().useRef(e)},n.useState=function(e){return U().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>s});var t=r(667294);const i=t.createContext({});function s(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||o:s(e),t.createElement(i.Provider,{value:c},n)}}}]);