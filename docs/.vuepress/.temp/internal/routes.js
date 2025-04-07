export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/killian/Documents/dev-aidalinfo/ai-site-aidalinfo/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Bienvenue chez Aidalinfo"} }],
  ["/veille-ia/0-07042025.html", { loader: () => import(/* webpackChunkName: "veille-ia_0-07042025.html" */"/home/killian/Documents/dev-aidalinfo/ai-site-aidalinfo/docs/.vuepress/.temp/pages/veille-ia/0-07042025.html.js"), meta: {"title":"6 avril 2025"} }],
  ["/veille-ia/", { loader: () => import(/* webpackChunkName: "veille-ia_index.html" */"/home/killian/Documents/dev-aidalinfo/ai-site-aidalinfo/docs/.vuepress/.temp/pages/veille-ia/index.html.js"), meta: {"title":"Veille Technologique IA"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/killian/Documents/dev-aidalinfo/ai-site-aidalinfo/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
