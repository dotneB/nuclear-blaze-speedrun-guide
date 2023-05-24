const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    staticImage: true
  })
   
  module.exports = withNextra({
    i18n: {
      locales: ['en', 'jp'],
      defaultLocale: 'en',
      localeDetection: false,
    }
  })