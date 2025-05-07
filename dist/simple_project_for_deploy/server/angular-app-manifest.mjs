
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ShubhamMayane.github.io/simple_app_for_deploy/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/simple_app_for_deploy"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 559, hash: '5bd5230b9ac0d9c4e7698b712aaf0e9d78f3a6e04c13cc199eb48045493870f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '7d353a5d87c90e866f62d63006928fc4fc4b6fbcce1f406a1831fcb9ea14bb24', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 704, hash: '2c39ec3c74e8068ba87760fb4cf8ac9851920eb6bb0f613b6512a7148038d430', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
