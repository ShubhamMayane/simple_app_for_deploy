
export default {
  basePath: 'https://ShubhamMayane.github.io/simple_app_for_deploy',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
