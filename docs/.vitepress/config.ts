import {defineConfig} from 'vitepress';
import * as info from './info';


export default defineConfig({
  title: info.TITLE,
  description: info.DESCRIPTION,
  lang: info.LANG,
  lastUpdated: info.LAST_UPDATED,
  ignoreDeadLinks: info.IGNORE_DEAD_LINKS,
  cleanUrls: info.CLEAN_URLS,

  themeConfig: {
    sidebar: [],

    editLink: {
      pattern: info.REPO,
      text: '去 GitHub 上看看',
    },

    nav: [
      {text: 'Code', link: '/code/index.md'},
      {text: 'Primer', link: '/primer/index.md'},
      {text: 'Changelog', link: 'https://github.com/...'},
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2023-present <a href="${info.AUTHOR}">Nafnix</a>`,
    },
  },
});
