(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{323:function(s,a,t){s.exports=t.p+"assets/img/webpack01.a482ab80.jpg"},324:function(s,a,t){s.exports=t.p+"assets/img/webpack02.de51baab.jpg"},325:function(s,a,t){s.exports=t.p+"assets/img/webpack03.bd5028ab.jpg"},697:function(s,a,t){"use strict";t.r(a);var n=t(26),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"webpack-入门"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-入门"}},[s._v("#")]),s._v(" webpack 入门")]),s._v(" "),n("div",{staticClass:"diy-menu"},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1-认识"}},[s._v("1. 认识")]),n("ul",[n("li",[n("a",{attrs:{href:"#webpack-构建流程"}},[s._v("webpack 构建流程")])]),n("li",[n("a",{attrs:{href:"#webpack-热更新原理"}},[s._v("webpack 热更新原理")])])])]),n("li",[n("a",{attrs:{href:"#_2-配置"}},[s._v("2. 配置")]),n("ul",[n("li",[n("a",{attrs:{href:"#_2-1-入口"}},[s._v("2.1 入口")])]),n("li",[n("a",{attrs:{href:"#_2-2-出口"}},[s._v("2.2 出口")])]),n("li",[n("a",{attrs:{href:"#_2-3-加载器"}},[s._v("2.3 加载器")])]),n("li",[n("a",{attrs:{href:"#_2-4-插件"}},[s._v("2.4 插件")])])])])])]),n("p")]),s._v(" "),n("p",[s._v("本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.webpackjs.com/concepts/",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack"),n("OutboundLink")],1),s._v("的配置浩如烟海，听说有的单位甚至有 webpack 配置工程师专门负责这块内容。")]),s._v(" "),n("p",[s._v("本着把工具看作黑盒，只学习如何配置、如何使用的原则，记录初始使用 webpack 的情况如下。")]),s._v(" "),n("blockquote",[n("p",[s._v("本文内容大部分出自 《vue.js实战》第10章：使用 webpack。")])]),s._v(" "),n("h2",{attrs:{id:"_1-认识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-认识"}},[s._v("#")]),s._v(" 1. 认识")]),s._v(" "),n("p",[s._v("用 webpack 官网的宣传图，其作用就是打包：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(323),alt:""}})]),s._v(" "),n("p",[s._v("webpack 世界里，一张图片、一个 css 、一个 js 、一个 font 等等所有东西都是模块（Module），其中存在着互相引用的依赖关系。 webpack 就是处理这些模块间的依赖关系，并将其打包。对于不同的模块，webpack 使用不同的"),n("strong",[s._v("加载器")]),s._v("进行处理。")]),s._v(" "),n("p",[s._v("其主要适用场景是当下流行的单页面应用（SPA），由一个 html 文件 和一堆按需加载的 js 、css 等组成。")]),s._v(" "),n("h3",{attrs:{id:"webpack-构建流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-构建流程"}},[s._v("#")]),s._v(" webpack 构建流程")]),s._v(" "),n("p",[n("img",{attrs:{src:t(324),alt:""}})]),s._v(" "),n("ol",[n("li",[s._v("初始化：读取配置，加载插件，实例化编译器")]),s._v(" "),n("li",[s._v("从 entry 出发，针对每个 module 调用对应的 Loader 编译内容，对 module 依赖的 module 进行递归处理；")]),s._v(" "),n("li",[s._v("将编译后的 module 组装成 Chunk ，将 chunk 转换为文件，输出到指定位置")]),s._v(" "),n("li",[s._v("在以上过程中， webpack 在特定时间节点抛出特定事件， plugins 在监听到相应事件后执行逻辑，改变 webpack 的运行结果。")])]),s._v(" "),n("h3",{attrs:{id:"webpack-热更新原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-热更新原理"}},[s._v("#")]),s._v(" webpack 热更新原理")]),s._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/30669007",target:"_blank",rel:"noopener noreferrer"}},[s._v("Webpack HMR 原理解析"),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://juejin.im/post/6844904094281236487",target:"_blank",rel:"noopener noreferrer"}},[s._v("再来一打Webpack面试题"),n("OutboundLink")],1)])]),s._v(" "),n("p",[n("img",{attrs:{src:t(325),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"_2-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置"}},[s._v("#")]),s._v(" 2. 配置")]),s._v(" "),n("p",[n("strong",[s._v("归根到底， webpack 就是一个 .js 配置文件。")])]),s._v(" "),n("p",[s._v("随着需求的出现，工程配置逐渐完善。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./build/webpack.config.js")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在这里书写配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./package.json")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"script"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack-dev-server --config build/webpack.config.js"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("以上配置之后，当执行 "),n("code",[s._v("npm run dev")]),s._v(" 时，就会开始打包构建，其配置文件就是 "),n("code",[s._v("--config")]),s._v("后面提供的 js 地址。")]),s._v(" "),n("p",[s._v("webpack-dev-server 的其他命令")]),s._v(" "),n("ul",[n("li",[s._v("--open：自动在浏览器打开页面，默认地址是 127.0.0.1:8080")])]),s._v(" "),n("p",[n("strong",[s._v("webpack-dev-server 同时提供一项热更新功能，通过建立一个 websocket 连接来实时响应代码的修改")]),s._v("。")]),s._v(" "),n("h3",{attrs:{id:"_2-1-入口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-入口"}},[s._v("#")]),s._v(" 2.1 "),n("strong",[s._v("入口")])]),s._v(" "),n("p",[s._v("入口的作用是告诉 webpack 从哪里开始寻找依赖。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    entry"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 寻找根目录下的 main.js 作为依赖入口")]),s._v("\n        main"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./main'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_2-2-出口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-出口"}},[s._v("#")]),s._v(" 2.2 "),n("strong",[s._v("出口")])]),s._v(" "),n("p",[s._v("出口用来配置编译后的文件存储位置及文件名。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    output"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// __dirname 是当前模块所在的目录（来自 nodejs api）")]),s._v("\n        path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./dist'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// publicPath 指定资源文件引用的目录")]),s._v("\n        publicPath"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/dist/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定输出文件的名称")]),s._v("\n        filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main.js'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("按照以上配置，打包后的文件会存储为 build/dist/main.js 。")]),s._v(" "),n("h3",{attrs:{id:"_2-3-加载器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-加载器"}},[s._v("#")]),s._v(" 2.3 "),n("strong",[s._v("加载器")])]),s._v(" "),n("blockquote",[n("p",[s._v('loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！')])]),s._v(" "),n("p",[s._v("loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。")]),s._v(" "),n("p",[s._v("Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。")]),s._v(" "),n("p",[n("strong",[s._v("遇到非js结尾的模块，webpack会去module中找相应的规则，匹配到了对于的规则，然后去求助于对应的 loader 。")])]),s._v(" "),n("p",[s._v("以打包 css 样式为例：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装加载器")]),s._v("\nnpm i css"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("loader "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev\nnpm i style"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("loader "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./build/webpack.config.js")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                test"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.css$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("在 module.rules 中指定 loader ，每个 loader 都必须包括 test 和 use 选项。 test 使用正则表达式判断该文件类型是否需要使用 use 配置的 loaders 处理。")]),s._v(" "),n("p",[s._v("如果 use 配置了多个 loader （例如以上情况），则处理顺序为自右向左，即先由 css-loader 处理完后，再交给 style-loader 处理。")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.webpackjs.com/loaders/",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),n("OutboundLink")],1),s._v("官方提供了一些加载器列表和相关用法。")]),s._v(" "),n("h3",{attrs:{id:"_2-4-插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-插件"}},[s._v("#")]),s._v(" 2.4 "),n("strong",[s._v("插件")])]),s._v(" "),n("blockquote",[n("p",[s._v("插件是 webpack 的支柱功能。webpack 自身也是构建于，你在 webpack 配置中用到的相同的插件系统之上！")]),s._v(" "),n("p",[s._v("插件目的在于解决 loader 无法实现的其他事。")])]),s._v(" "),n("p",[s._v("loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。")]),s._v(" "),n("p",[s._v("Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。")]),s._v(" "),n("p",[s._v("譬如，项目希望把所有的 css 提取出来，生成一个总的 main.css 文件，需要如下实现：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装 extract-text-webpack-plugin 插件")]),s._v("\nnpm i extract"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webpack"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin@next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./build/webpack.config.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ExtractTextPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'extract-text-webpack-plugin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            test"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.css$")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用插件改写 use")]),s._v("\n            use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ExtractTextPlugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("extract")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                use"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                fallback"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 重命名提取后的 css 文件")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExtractTextPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main.css'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);