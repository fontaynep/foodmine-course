
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/foodmine-course/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/foodmine-course"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4640, hash: 'f74393de6bc745f75b85eb7dc819df62527da20bca96ecd7e3d04ddb1028b41e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2579, hash: 'bef361f62a6bc779aff70f838aafae745d971c64db8cba75323451fff6a23094', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5GVBYAJL.css': {size: 1252, hash: 'nDLE9nV2Aok', text: () => import('./assets-chunks/styles-5GVBYAJL_css.mjs').then(m => m.default)}
  },
};
