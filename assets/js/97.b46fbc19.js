(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{686:function(t,s,a){"use strict";a.r(s);var e=a(26),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-全家桶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-全家桶"}},[t._v("#")]),t._v(" vue 全家桶")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#vuex"}},[t._v("vuex")]),a("ul",[a("li",[a("a",{attrs:{href:"#基本属性"}},[t._v("基本属性")])])])]),a("li",[a("a",{attrs:{href:"#axios"}},[t._v("axios")]),a("ul",[a("li",[a("a",{attrs:{href:"#axios-拦截"}},[t._v("axios 拦截")])]),a("li",[a("a",{attrs:{href:"#相比-ajax-的优势"}},[t._v("相比 ajax 的优势")])])])]),a("li",[a("a",{attrs:{href:"#vue-router"}},[t._v("vue-router")]),a("ul",[a("li",[a("a",{attrs:{href:"#hash-路由与-history-路由"}},[t._v("hash 路由与 history 路由")])]),a("li",[a("a",{attrs:{href:"#路由懒加载"}},[t._v("路由懒加载")])]),a("li",[a("a",{attrs:{href:"#route-和-router-的区别是什么"}},[t._v("$route 和 $router 的区别是什么？")])]),a("li",[a("a",{attrs:{href:"#导航钩子"}},[t._v("导航钩子")])]),a("li",[a("a",{attrs:{href:"#路由传参"}},[t._v("路由传参")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" vuex")]),t._v(" "),a("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的组件状态，并以相应的规则保证状态以一种可预测的方式发生变化。简单来说就是：应用遇到多个组件共享状态时，使用 vuex 。")]),t._v(" "),a("p",[t._v("场景")]),t._v(" "),a("ul",[a("li",[t._v("多个组件共享数据")]),t._v(" "),a("li",[t._v("跨组件传递数据")])]),t._v(" "),a("h3",{attrs:{id:"基本属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本属性"}},[t._v("#")]),t._v(" 基本属性")]),t._v(" "),a("ol",[a("li",[t._v("state：vuex的基本数据，用来存储变量")]),t._v(" "),a("li",[t._v("getter：从基本数据(state)派生的数据，相当于state的计算属性")]),t._v(" "),a("li",[t._v("mutation：提交更新数据的方法，必须同步\n"),a("ul",[a("li",[t._v("每个 mutation 都有一个事件类型 (type) 和一个回调函数 (handler)")]),t._v(" "),a("li",[t._v("回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数，提交载荷作为第二个参数")])])]),t._v(" "),a("li",[t._v("action：和mutation的功能大致相同，不同之处在于\n"),a("ul",[a("li",[t._v("Action 可以包含异步操作")]),t._v(" "),a("li",[t._v("Action 提交的是 mutation ，而不是直接变更状态")])])]),t._v(" "),a("li",[t._v("modules：模块化vuex，可以让每一个模块拥有自己的 state、mutation、action、getters,使得结构非常清晰，方便管理。")])]),t._v(" "),a("h2",{attrs:{id:"axios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[t._v("#")]),t._v(" axios")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/73f6362889c8",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios原理及面试题"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("axios 是一个基于 promise 的 HTTP 库，前端流行的 ajax 请求库， vue 官方都推荐使用 axios 发送请求。")]),t._v(" "),a("p",[t._v("浏览器端， axios 封装了 XMLHttpRequest 对象发送 ajax 请求。")]),t._v(" "),a("p",[a("strong",[t._v("特点")])]),t._v(" "),a("ul",[a("li",[t._v("基于 Promise")]),t._v(" "),a("li",[t._v("支持请求和响应的拦截")]),t._v(" "),a("li",[t._v("可以转换请求数据和响应数据，并对响应回来的内容自动转换成 JSON 类型的数据")]),t._v(" "),a("li",[t._v("安全性更高，客户端支持防御 XSRF")])]),t._v(" "),a("h3",{attrs:{id:"axios-拦截"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios-拦截"}},[t._v("#")]),t._v(" axios 拦截")]),t._v(" "),a("p",[t._v("axios 拦截分为请求拦截跟响应拦截。")]),t._v(" "),a("h3",{attrs:{id:"相比-ajax-的优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相比-ajax-的优势"}},[t._v("#")]),t._v(" 相比 ajax 的优势")]),t._v(" "),a("p",[t._v("ajax 的请求步骤")]),t._v(" "),a("ol",[a("li",[t._v("创建异步XMLHttpRequest对象")]),t._v(" "),a("li",[t._v("设置请求参数，包括请求的方法和URL等")]),t._v(" "),a("li",[t._v("发送请求")]),t._v(" "),a("li",[t._v("注册事件，事件状态变更会及时响应监听")]),t._v(" "),a("li",[t._v("在监听里面获取并处理返回数据")])]),t._v(" "),a("ul",[a("li",[t._v("单纯使用 ajax 却需要引用整个 jQuery ，不合理")]),t._v(" "),a("li",[t._v("基于事件的异步模型，不友好")])]),t._v(" "),a("h2",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" vue-router")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/93d3ed7fcda6",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue面试题之二：路由 vue-router 面试题"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"hash-路由与-history-路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-路由与-history-路由"}},[t._v("#")]),t._v(" hash 路由与 history 路由")]),t._v(" "),a("p",[t._v("hash 路由原理是 onhashchage 事件，可以在 window 对象上监听这个事件。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onhashchange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oldURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("location.hash 的值实际就是 URL 中 # 后面的东西。")]),t._v(" "),a("p",[t._v("history 实际采用了 HTML5 中提供的 API 来实现，主要有 history.pushState() 和 history.replaceState() 。")]),t._v(" "),a("blockquote",[a("p",[t._v("history 模式需要后台配置支持。如果刷新时，服务器没有响应响应的资源，会刷出 404 。")])]),t._v(" "),a("h3",{attrs:{id:"路由懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由懒加载"}},[t._v("#")]),t._v(" 路由懒加载")]),t._v(" "),a("p",[t._v("把不同路由对应的组件分割成不同的代码块，然后当路由被访问时才加载对应的组件即为路由的懒加载，可以加快项目的加载速度，提高效率。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Home'")]),t._v("，\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 动态加载组件")]),t._v("\n        component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../views/home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"route-和-router-的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route-和-router-的区别是什么"}},[t._v("#")]),t._v(" "),a("code",[t._v("$route")]),t._v(" 和 "),a("code",[t._v("$router")]),t._v(" 的区别是什么？")]),t._v(" "),a("p",[a("code",[t._v("router")]),t._v(" 为 "),a("code",[t._v("VueRouter")]),t._v(" 的实例，是一个"),a("strong",[t._v("全局路由对象")]),t._v("，包含了路由跳转的方法、钩子函数等。")]),t._v(" "),a("p",[a("code",[t._v("route")]),t._v(" 是"),a("strong",[t._v("路由信息对象")]),t._v("（跳转的路由对象），每一个路由都会有一个 "),a("code",[t._v("route")]),t._v(" 对象，是一个局部对象，包含 "),a("code",[t._v("path")]),t._v(" 、 "),a("code",[t._v("params")]),t._v(" 、 "),a("code",[t._v("hash")]),t._v(" 、 "),a("code",[t._v("query")]),t._v(" 、 "),a("code",[t._v("fullPath")]),t._v(" 、 "),a("code",[t._v("matched")]),t._v(" 、 "),a("code",[t._v("name")]),t._v(" 等路由信息参数。")]),t._v(" "),a("h3",{attrs:{id:"导航钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导航钩子"}},[t._v("#")]),t._v(" 导航钩子")]),t._v(" "),a("ul",[a("li",[t._v("全局前置守卫： "),a("code",[t._v("beforeEach")])]),t._v(" "),a("li",[t._v("全局后置钩子： "),a("code",[t._v("afterEach")])]),t._v(" "),a("li",[t._v("路由独享钩子： "),a("code",[t._v("beforeEnter")])]),t._v(" "),a("li",[t._v("组件内导航钩子： "),a("code",[t._v("beforeRouteEnter")]),t._v(" 、 "),a("code",[t._v("beforeRouteUpdate")]),t._v(" 、 "),a("code",[t._v("beforeRouteLeave")])])]),t._v(" "),a("h3",{attrs:{id:"路由传参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由传参"}},[t._v("#")]),t._v(" 路由传参")]),t._v(" "),a("h4",{attrs:{id:"params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" Params")]),t._v(" "),a("ul",[a("li",[t._v("只能使用 name ，不能使用 path")]),t._v(" "),a("li",[t._v("参数不会显示在路径上")]),t._v(" "),a("li",[t._v("浏览器强制刷新参数会被清空")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递参数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Home，\n    params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        number"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'999'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收参数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h4",{attrs:{id:"query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" query")]),t._v(" "),a("ul",[a("li",[t._v("参数会显示在路径上，刷新不会被清空")]),t._v(" "),a("li",[t._v("name 可以使用path路径")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递参数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Home，\n    query"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        number"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'999'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收参数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);