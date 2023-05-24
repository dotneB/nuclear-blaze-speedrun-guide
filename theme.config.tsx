import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Nuclear Blaze Speedrun Guide</span>,
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Nuclear Blaze Speedrun Guide'
      }
    }
  },
  project: {
    link: 'https://github.com/dotneB/nuclear-blaze-speedrun-guide',
  },
  chat: {
    link: 'https://discord.gg/q6r7Z5Hmhx',
  },
  docsRepositoryBase: 'https://github.com/dotneB/nuclear-blaze-speedrun-guide/tree/main',
  footer: {
    text: 'Nuclear Blaze Speedrun Guide',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'jp', text: '日本語' },
  ],
  search: { placeholder: () => {
    const { locale } = useRouter()
    if (locale === 'jp') return 'ドキュメントの検索...'
    return 'Search documentation...'
  }}
}

export default config