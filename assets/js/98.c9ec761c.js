(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{687:function(s,t,n){"use strict";n.r(t);var a=n(26),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"npm-yarn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-yarn"}},[s._v("#")]),s._v(" npm/yarn")]),s._v(" "),n("p",[s._v("npm 是 nodejs 的包管理工具，提供给 js 开发者第三方库的注册平台。")]),s._v(" "),n("p",[s._v("Yarn是由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具，为了"),n("strong",[s._v("弥补 npm 的一些缺陷")]),s._v("：")]),s._v(" "),n("ul",[n("li",[s._v("npm install 安装速度慢")]),s._v(" "),n("li",[s._v("同一项目的安装版本很难保持一致性")])]),s._v(" "),n("h2",{attrs:{id:"调试本地库-yarn-link"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调试本地库-yarn-link"}},[s._v("#")]),s._v(" 调试本地库 "),n("a",{attrs:{href:"https://cloud.tencent.com/developer/section/1477733",target:"_blank",rel:"noopener noreferrer"}},[s._v("yarn link"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("当开发一个第三方库，需要在本地测试时，可以使用该命令，为本地 "),n("code",[s._v("yarn")]),s._v(" 建立一个指向该库文件的软链接。")]),s._v(" "),n("p",[s._v("如有这么一个第三方库，位置在 "),n("code",[s._v("C://desktop/my-custom-lib")]),s._v(" ，文档结构如下：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./package.json")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my-custom-lib"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"license"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIT"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./index.js")]),s._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 。。。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("在该文件夹下，使用命令 "),n("code",[s._v("yarn link")]),s._v(" ，将为 "),n("code",[s._v("yarn")]),s._v(" 成功注册一个 "),n("code",[s._v("my-custom-lib")]),s._v(" 包。")]),s._v(" "),n("p",[s._v("在需要引用测试该包的项目中，只需要使用命令 "),n("code",[s._v("yarn link my-custom-lib")]),s._v(" ，即可像使用正常安装的包一样使用：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" myCustomLib "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my-custom-lib'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("而且这种链接是软性的，当修改库文件时，项目中的执行也会随之变化。")])])}),[],!1,null,null,null);t.default=e.exports}}]);