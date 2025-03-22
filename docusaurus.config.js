const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "Fangyikun Jian Blog",
  titleDelimiter: "-",
  url: 'https://yikunblog.space', // 正确的配置，没有多余的 'url:'
  baseUrl: '/', 
  favicon: "img/icon.png",
  organizationName: "yikun1025",
  projectName: "PersonalBlog",

   // 部署相关配置
  deploymentBranch: 'gh-pages', // GitHub Pages 默认分支
  trailingSlash: false, // 可选，取决于你的具体需求
  
  themeConfig: {
    image: "img/icon.png",
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      title: "Fangyikun Jian",
      logo: {
        alt: "cuteBird",
        src: "img/icon.png",
        srcDark: "img/icon.png",
      },
      items: [
        {
          to: "/",
          label: "首页",
          position: "right",
          items: [
            {
              label: "随笔",
              to: "lifestyle",
            },
          ],
        },
        // {
        //   label: "学习",
        //   position: "right",
        //   items: [
        //     {
        //       label: "AI",
        //       to: "docs/course/computer-system/",
        //     },
        //     {
        //       label: "Psychology",
        //       to: "docs/Psychology",
        //     },
        //     {
        //       label: "Draw",
        //       to: "docs/draw/",
        //     },
        //   ],
        // },
        {
          label: "课程",
          position: "right",
          items: [
            {
              label: "COMPUTER SYSTEM",
              to: "/docs/course/computer-system/01-Hack-Computer-Introduction",
            },
            {
              label: "COMPUTER ALGORITHM",
              to: "/docs/course/computer-algorithm/1-Algorithm-basic",
            },
            {
              label: "ADVANCED CYBERSECURITY",
              to: "/docs/course/advanced-cybersecurity/Workshop-0x01",
            },
          ],
        },
      ],
    },
    algolia: {
      apiKey: "fabfb0e9997e101154ed85d64b7b6a3c",
      indexName: "ZXUQIANCN",
      appId: "LIJMO3C9C4",
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/oceanicNext"),
      defaultLanguage: "javascript",
    },
  },
  
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          blogSidebarTitle: "近期文章",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          feedOptions: {
            type: "all",
            title: "Fangyikun Jian",
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-6PSESJX0BM",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "secret-garden",
        routeBasePath: "lifestyle",
        path: "./lifestyle",
        remarkPlugins: [math],
        rehypePlugins: [katex],
        feedOptions: {
          type: "all",
          title: "个人博客",
        },
      },
    ],
  ],
  
  stylesheets: [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      type: "text/css",
    },
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.font.im/css?family=Raleway:500,700&display=swap",
      type: "text/css",
      rel: "stylesheet",
    },
  ],
  
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
  },

  onBrokenLinks: 'warn', 
};