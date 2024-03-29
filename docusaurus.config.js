// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Recorder.moe Docs',
  tagline:
    "Recorder.moe is a cool project that record Vtuber live streams on the fly. We're all about helping you capture those important moments in real time.",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://doc.recorder.moe',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Recorder-moe', // Usually your GitHub org/user name.
  projectName: '.github', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content:
            'Recorder.moe, recorder, recording, youtube-downloader, youtube-dl, yt-dlp, youtube, twitcasting, twitch, fc2',
        },
      ],
      image: 'img/preview.webp',
      navbar: {
        title: 'Recorder.moe Docs',
        logo: {
          alt: 'Recorder.moe Logo',
          src: 'img/logos/logo-color-big.webp',
        },
        items: [
          {
            href: 'https://demo.recorder.moe',
            label: 'Demo site',
            position: 'right',
          },
          {
            href: 'https://github.com/Recorder-moe',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Made with ❤ by Recorder.moe. Built with <a href="https://docusaurus.io" target="_black">Docusaurus</a>`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: lightCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'dev',
        content: 'This document is still being written.',
        backgroundColor: '#242526',
        textColor: '#c69026',
        isCloseable: false,
      },
    }),
};

module.exports = config;
