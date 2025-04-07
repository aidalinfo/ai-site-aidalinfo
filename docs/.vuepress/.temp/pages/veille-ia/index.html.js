import comp from "/home/killian/Documents/dev-aidalinfo/ai-site-aidalinfo/docs/.vuepress/.temp/pages/veille-ia/index.html.vue"
const data = JSON.parse("{\"path\":\"/veille-ia/\",\"title\":\"Veille Technologique IA\",\"lang\":\"fr-FR\",\"frontmatter\":{\"description\":\"Veille Technologique IA Bienvenue sur notre blog de veille technologique dédié à l'intelligence artificielle. Chez Aidalinfo, nous suivons de près les évolutions dans ce domaine...\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"veille-ia/README.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
