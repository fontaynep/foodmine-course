
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://fontaynep.github.io/foodmine-course/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/foodmine-course"
  },
  {
    "renderMode": 0,
    "route": "/foodmine-course/search/*"
  },
  {
    "renderMode": 0,
    "route": "/foodmine-course/tag/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1895, hash: '4a15160cb8aae87339c9ad646a1e111cd47e4b98e6be0199f763217e825dc2b6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '0bfe1834a1d8cc22f55f11cb1cbe22a43af7965d96e1ea614433af9f0e53dfde', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5GVBYAJL.css': {size: 1252, hash: 'nDLE9nV2Aok', text: () => import('./assets-chunks/styles-5GVBYAJL_css.mjs').then(m => m.default)}
  },
};
