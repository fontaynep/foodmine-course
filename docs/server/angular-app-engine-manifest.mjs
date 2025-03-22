
export default {
  basePath: 'https://fontaynep.github.io/foodmine-course',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
