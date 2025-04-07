import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { viteBundler } from '@vuepress/bundler-vite'
import fs from 'fs'
import path from 'path'
// Import du plugin SEO
import { seoPlugin } from '@vuepress/plugin-seo'
// Import du plugin sitemap
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

// Fonction pour lire automatiquement les fichiers Markdown dans un répertoire
function getSidebarItems(dir) {
  const dirPath = path.resolve(__dirname, '..', dir)
  const files = fs.readdirSync(dirPath)
    .filter(file => file.endsWith('.md'))
    .filter(file => file !== 'README.md') // Exclure le README
    .map(file => `/${dir}/${file}`)
    .sort((a, b) => {
      // Trie par date décroissante en supposant que les noms de fichiers commencent par des dates
      // Format supposé: n-JJMMAAAA.md (exemple: 0-07042025.md)
      const dateA = a.match(/\/(\d+-\d+)\.md$/)
      const dateB = b.match(/\/(\d+-\d+)\.md$/)
      if (dateA && dateB) {
        return dateB[1].localeCompare(dateA[1])
      }
      return a.localeCompare(b)
    })
  
  // Ajouter README.md en premier s'il existe
  if (files.find(file => file === `/${dir}/README.md`)) {
    files.unshift(`/${dir}/README.md`)
  }
  
  return files
}

export default defineUserConfig({
  lang: 'fr-FR',
  title: 'Aidalinfo - Conseil en systèmes et logiciels informatiques',
  description: 'Aidalinfo est spécialisée dans le conseil en systèmes et logiciels informatiques, offrant des services d\'optimisation et de sécurisation des systèmes d\'information.',
  head: [
    // // Favicon
    // ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    // // Balises meta pour le SEO
    // ['meta', { name: 'author', content: 'Aidalinfo' }],
    // ['meta', { name: 'keywords', content: 'conseil informatique, systèmes d\'information, logiciels, IA, intelligence artificielle, développement d\'applications, audit informatique' }],
    // // Open Graph pour le partage sur les réseaux sociaux
    // ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:title', content: 'Aidalinfo - Conseil en systèmes et logiciels informatiques' }],
    // ['meta', { property: 'og:description', content: 'Aidalinfo est spécialisée dans le conseil en systèmes et logiciels informatiques, offrant des services d\'optimisation et de sécurisation des systèmes d\'information.' }],
    // ['meta', { property: 'og:image', content: 'https://aidalinfo.fr/images/og-image.jpg' }],
    // ['meta', { property: 'og:url', content: 'https://aidalinfo.fr' }],
    // // Twitter Card
    // ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // ['meta', { name: 'twitter:title', content: 'Aidalinfo - Conseil en systèmes et logiciels informatiques' }],
    // ['meta', { name: 'twitter:description', content: 'Aidalinfo est spécialisée dans le conseil en systèmes et logiciels informatiques, offrant des services d\'optimisation et de sécurisation des systèmes d\'information.' }],
    // ['meta', { name: 'twitter:image', content: 'https://aidalinfo.fr/images/twitter-image.jpg' }],
  ],
  base: '/ai-site-aidalinfo/', 
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      { text: 'Accueil', link: '/' },
      { text: 'Veille IA', link: '/veille-ia/' }
    ],
    sidebar: {
      '/veille-ia/': [
        {
          text: 'Veille IA',
          children: getSidebarItems('veille-ia'),
        },
      ],
    },
    repo: 'https://github.com/aidalinfo',
    editLink: false,
    lastUpdated: true,
    // Ajout de l'option contributors pour afficher les auteurs des articles
    contributors: true,
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Rechercher...',
        },
      },
    }),
    // Plugin SEO pour générer automatiquement les méta-balises
    seoPlugin({
      hostname: 'https://ai.aidalinfo.fr',
      author: {
        name: 'Aidalinfo',
        url: 'https://aidalinfo.fr',
      },
      canonical: (_, path) => `https://ai.aidalinfo.fr${path}`,
      fallBackImage: 'https://aidalinfo.fr/images/og-image.jpg',
    }),
    // Plugin Sitemap pour générer un sitemap.xml
    sitemapPlugin({
      hostname: 'https://ai.aidalinfo.fr',
      // Exclure certaines pages du sitemap si nécessaire
      excludeUrls: ['/404.html'],
      // Définir la priorité des pages dans le sitemap
      sitemapFilename: 'sitemap.xml',
    }),
  ],
  // Options pour optimiser la génération et le chargement des pages
  shouldPrefetch: false,
})