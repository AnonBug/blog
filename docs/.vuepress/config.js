/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-05-18 14:29:47
 * @LastEditTime: 2021-05-18 22:06:31
 */

const fs = require('fs')
const path = require('path')

// 根据配置，动态设置左侧导航栏

const dirsGroup = {
    "tech": ['语言基础', '数据结构与算法', '计算机基础', '手撕代码', '类库'],
    "loaf": ['无聊图']
}

const sidebar = {}

for (let [key, dirs] of Object.entries(dirsGroup)) {
    const childbar = dirs.map(item => ({
        title: item,
        children: []
    }))
    for (let [i, dir] of dirs.entries()) {
        let files = fs.readdirSync(path.join(__dirname, `../${key}/${dir}`))

        if (dir === '无聊图') {
            childbar[i].sidebarDepth = 2
        }
        console.log(files);
        for (let file of files) {
            if (file.includes('.')) {
                file = file.match(/(.*)\.md$/)[1]
                if (file === 'README') {
                    childbar[i].path = `/${key}/${dir}/`
                } else {
                    childbar[i].children.push(`/${key}/${dir}/${file}`)
                }
            }
        }
    }

    sidebar[`/${key}/`] = childbar
}

console.log(sidebar);

const config = {
    title: '',
    // description: '记录学习，生活',
    base: '/blog/', // github 中的仓库名称
    head: [
        ['link', {
            rel: 'icon',
            href: '/ico.ico'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
    ],
    themeConfig: {
        logo: "/logo.png",
        sidebar,
        lastUpdated: '最后更新时间',
        smoothScroll: true,
        nav: [{
                text: '技术',
                link: '/tech/'
            },
            {
                text: '摸鱼',
                link: '/loaf/'
            },
            {
                text: 'more',
                items: [{
                        text: 'Github',
                        link: 'https://github.com/AnonBug'
                    },
                    {
                        text: '摸鱼',
                        link: 'https://jandan.net/top-4h'
                    }
                ]
            }
        ]
    },
    plugins: [
        '@vuepress/medium-zoom', // 查看大图插件
        '@vuepress/nprogress', // 进度条插件
        '@vuepress/back-to-top', // 返回到顶部
        'vuepress-plugin-serve', // 本地静态服务器（测试build 结果）
        'vuepress-plugin-table-of-contents', // 目录组件
    ],
    markdown: {
        lineNumbers: true, // 显示行号
        toc: { // 目录
            // containerHeaderHtml:'<div class="toc-container-header">目录</div>',
        },
        extendMarkdown: md => {
            // 图片中文路径问题 https://segmentfault.com/a/1190000022275001
            md.use(require("markdown-it-disable-url-encode"));
        },
    }

}

module.exports = config