/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-05-18 14:29:47
 * @LastEditTime: 2021-05-18 22:06:31
 */

const fs = require("fs");
const path = require("path");

const { getSidebar, getSidebarWithoutNest } = require("./utils/prehandle");

// 根据配置，动态设置左侧导航栏
const dirsGroup = {
  // tech: ["语言基础", "数据结构与算法", "计算机网络", "手撕代码", "类库"],
  // life: ["实习日记"],
};

const menu = {
  language: '语言基础',
  network: '计算机网络',
  algo: '算法',
  codes: '寿司代码',
  libs: '类库',
}

const navs = []
for (let [link, text] of Object.entries(menu)) {
  navs.push({ text, link: `/${link}/` })
}


// generatorMd(dirsGroup.loaf);

// 带嵌套的侧边栏：life/实习日记/xx.md
const sidebar1 = getSidebar(dirsGroup);

// 不带嵌套的侧边栏：algo/xx.md
// const sidebar2 = getSidebarWithoutNest(menu)

// console.log(sidebar2);

const config = {
  title: "",
  // description: '记录学习，生活',
  base: "/blog/", // github 中的仓库名称
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/ico.ico",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#3eaf7c",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    // sidebar: {
    //   ...sidebar1, 
    //   // ...sidebar2,
    //   // '/network/5.网络安全'
    // },
    sidebar: 'auto',
    lastUpdated: "最后更新时间",
    smoothScroll: true,
    nav: [
      ...navs,
      // {
      //   text: "实习生活",
      //   link: "/life/",
      // },
      {
        text: "深度学习",
        link: "/study/",
      },
      {
        text: "more",
        items: [
          {
            text: "仓库地址",
            link: "https://github.com/AnonBug/blog",
          },
          {
            text: "摸鱼实录",
            link: "https://anonbug.github.io/jandan",
          },
          {
            text: "煎蛋",
            link: "https://jandan.net/top-4h",
          },
        ],
      },
    ],
  },
  plugins: [
    "@vuepress/medium-zoom", // 查看大图插件
    "@vuepress/nprogress", // 进度条插件
    "@vuepress/back-to-top", // 返回到顶部
    "vuepress-plugin-serve", // 本地静态服务器（测试build 结果）
    "vuepress-plugin-table-of-contents", // 目录组件
  ],
  markdown: {
    lineNumbers: true, // 显示行号
    toc: {
      // 目录
      // containerHeaderHtml:'<div class="toc-container-header">目录</div>',
    },
    extendMarkdown: (md) => {
      // 图片中文路径问题 https://segmentfault.com/a/1190000022275001
      md.use(require("markdown-it-disable-url-encode"));
      md.use(require("markdown-it-katex"));
    },
  },
};

module.exports = config;
