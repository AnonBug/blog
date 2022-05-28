(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{670:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-基础"}},[t._v("#")]),t._v(" js 基础")]),t._v(" "),a("h2",{attrs:{id:"_1-数据类型与类型检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据类型与类型检测"}},[t._v("#")]),t._v(" 1. 数据类型与类型检测")]),t._v(" "),a("h3",{attrs:{id:"_1-1-基础数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-基础数据类型"}},[t._v("#")]),t._v(" 1.1 基础数据类型")]),t._v(" "),a("ul",[a("li",[t._v("原始值：\n"),a("ul",[a("li",[t._v("Number\n"),a("ul",[a("li",[t._v("能表示的最大数字："),a("code",[t._v("-(2^53 - 1) ~ 2^53 - 1")])])])]),t._v(" "),a("li",[t._v("String")]),t._v(" "),a("li",[t._v("Boolean")]),t._v(" "),a("li",[t._v("Symbol")]),t._v(" "),a("li",[t._v("undefined")]),t._v(" "),a("li",[t._v("null")])])]),t._v(" "),a("li",[t._v("引用值\n"),a("ul",[a("li",[t._v("Object")])])])]),t._v(" "),a("h4",{attrs:{id:"falsy-值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#falsy-值"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy",target:"_blank",rel:"noopener noreferrer"}},[t._v("falsy 值"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("falsy 值 (虚值) 是在 Boolean 上下文中认定为 false 的值。")]),t._v(" "),a("p",[t._v("JavaScript 在需要用到布尔类型值的上下文中使用强制类型转换(Type Conversion )将值转换为布尔值，例如条件语句和循环语句。")]),t._v(" "),a("p",[t._v("js 中有以下八个虚值：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false 关键字")])]),t._v(" "),a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("数值 zero")])]),t._v(" "),a("tr",[a("td",[t._v("-0")]),t._v(" "),a("td",[t._v("数值 负 zero")])]),t._v(" "),a("tr",[a("td",[t._v("0n")]),t._v(" "),a("td",[t._v("当 BigInt 作为布尔值使用时, 遵从其作为数值的规则. 0n 是 falsy 值.")])]),t._v(" "),a("tr",[a("td",[t._v("\"\", '', ``")]),t._v(" "),a("td",[t._v("这是一个空字符串 (字符串的长度为零). JavaScript 中的字符串可用双引号 \"\", 单引号 '', 或 模板字面量 `` 定义。")])]),t._v(" "),a("tr",[a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null - 缺少值")])]),t._v(" "),a("tr",[a("td",[t._v("undefined")]),t._v(" "),a("td",[t._v("undefined - 原始值")])]),t._v(" "),a("tr",[a("td",[t._v("NaN")]),t._v(" "),a("td",[t._v("NaN - 非数值")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-2-typeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-typeof"}},[t._v("#")]),t._v(" 1.2 typeof")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_38722097/article/details/80717240",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈 instanceof 和 typeof 的实现原理"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("typeof")]),t._v(" 适合检测原始值（除了 null）和函数对象。")])]),t._v(" "),a("h4",{attrs:{id:"检测原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检测原理"}},[t._v("#")]),t._v(" 检测原理")]),t._v(" "),a("p",[a("code",[t._v("js")]),t._v(" 在底层存储变量的时候，会在变量的机器码的低位 "),a("code",[t._v("1-3")]),t._v(" 位存储其类型信息")]),t._v(" "),a("ul",[a("li",[t._v("对象：000")]),t._v(" "),a("li",[t._v("浮点数：010")]),t._v(" "),a("li",[t._v("字符串：100")]),t._v(" "),a("li",[t._v("布尔值：110")]),t._v(" "),a("li",[t._v("整数：1")]),t._v(" "),a("li",[t._v("null：所有机器码均为 0")]),t._v(" "),a("li",[t._v("undefined：用 −2^30 整数来表示")])]),t._v(" "),a("p",[t._v("由上可以看出，由于 null 的所有机器码均为 0 ，因此直接被当做了对象来看待。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ( Fn 是一个函数)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//（数组解析为 object ）")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"_1-3-instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-instanceof"}},[t._v("#")]),t._v(" 1.3 instanceof")]),t._v(" "),a("p",[a("code",[t._v("instanceof")]),t._v(" 运算符是通过"),a("strong",[t._v("判断该对象在原型链上是否存在一个构造函数的 "),a("code",[t._v("prototype")]),t._v(" 属性")]),t._v("，主要用来检测对象的具体类型。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用场景")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"_1-4-object-prototype-tostring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-object-prototype-tostring"}},[t._v("#")]),t._v(" 1.4 Object.prototype.toString()")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#using_tostring()_to_detect_object_class",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 toString 检测对象类型——MDN 文档"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("code",[t._v("Object")]),t._v(" 定义了一个实例方法"),a("code",[t._v("toString()")]),t._v(" 返回 "),a("code",[t._v('"[object type]"')]),t._v("，其中 type 是对象的类型，可以用来进行对象类型检测。")]),t._v(" "),a("p",[t._v("最好使用最原始的 "),a("code",[t._v("toString")]),t._v(" 进行检测，因为该方法可能被其子类重写。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Number]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object String]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Object]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Array]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Boolean]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Function]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Null]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Undefined]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Symbol]"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"_2-执行上下文与作用域链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行上下文与作用域链"}},[t._v("#")]),t._v(" 2. 执行上下文与作用域链")]),t._v(" "),a("p",[t._v("变量或函数的上下文决定了它可以访问哪些数据，上下文在其所有代码都执行完毕后会被销毁，包括定义其中的所有变量与函数。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("每个上下文都有与之关联的"),a("strong",[t._v("变量对象")]),t._v("，包含该上下文内部的所有变量与函数（如果上下文为函数对象，则函数的参数被认为是其变量的一部分），如浏览器的全局上下文为 "),a("code",[t._v("window")]),t._v(" 。")])]),t._v(" "),a("p",[t._v("上下文的代码在执行时，会创建"),a("strong",[t._v("作用域链")]),t._v("，该作用域链决定各级上下文中的代码在访问变量和函数时的顺序： "),a("code",[t._v("当前上下文 -> 外层上下文 -> ...... -> 全局上下文")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-如何确定使用哪个变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-如何确定使用哪个变量"}},[t._v("#")]),t._v(" 2.1 如何确定使用哪个变量？")]),t._v(" "),a("p",[t._v("代码执行时，沿着"),a("strong",[t._v("作用域链")]),t._v("逐级搜索变量名称。即内部上下文可以通过作用域链访问外部上下文的一切变量与函数，而外部上下文无法访问内部上下文的东西。")]),t._v(" "),a("p",[t._v("当执行到外部上下文时，外部上下文的"),a("strong",[t._v("变量对象")]),t._v("为其作用域链最前端，其内部上下文的变量对象根本不在其作用域链上。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-作用域增强与变量声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-作用域增强与变量声明"}},[t._v("#")]),t._v(" 2.2 作用域增强与变量声明")]),t._v(" "),a("p",[a("code",[t._v("try/catch")]),t._v(" 语句中的 "),a("code",[t._v("catch 块")]),t._v("、 "),a("code",[t._v("with 语句")]),t._v("、"),a("code",[t._v("块级作用域")]),t._v(" 会被添加到作用域链的最前端。")]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("var")]),t._v(" 声明变量时，其会被自动添加至"),a("strong",[t._v("最接近的上下文")]),t._v("（函数中最接近的上下文即是当前函数）。")]),t._v(" "),a("li",[a("code",[t._v("let")]),t._v(" 声明变量的作用域由最近的一对 "),a("code",[t._v("{}")]),t._v(" 界定，如 "),a("code",[t._v("if")]),t._v(" 块、 "),a("code",[t._v("while")]),t._v(" 块、 "),a("code",[t._v("function")]),t._v(" 块、甚至单独的 "),a("code",[t._v("{}")]),t._v(" 块都是 "),a("code",[t._v("let")]),t._v(" 变量的作用域。")]),t._v(" "),a("li",[a("code",[t._v("const")]),t._v(" 声明变量作用域与 "),a("code",[t._v("let")]),t._v(" 同，其区别在于 "),a("code",[t._v("const")]),t._v(" 声明时必须赋值，且不能再次赋值。"),a("strong",[t._v("这种限制只应用到原始值类型或对象的引用地址，而对象的属性则不受控制")]),t._v("，可通过 "),a("code",[t._v("Object.freeze({})")]),t._v(" 冻结对象。")])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.freeze() 方法"),a("OutboundLink")],1),t._v(" 可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删·除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。")]),t._v(" "),a("p",[a("code",[t._v("freeze()")]),t._v(" 返回和传入的参数相同的对象。")])]),t._v(" "),a("h3",{attrs:{id:"_2-3-暂时性死区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-暂时性死区"}},[t._v("#")]),t._v(" 2.3 暂时性死区")]),t._v(" "),a("p",[t._v("块级作用域中存在 "),a("code",[t._v("let")]),t._v(" 或 "),a("code",[t._v("const")]),t._v(" 命令时，其声明的变量就绑定了这个块级区域，不再受外部影响。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n        由于 tmp 变量在后面存在 let 声明，故自该块级作用域起就存在 tmp 的暂时性死区；\n        在到达声明之前使用 tmp ，就会报 ReferenceError ，\n        尽管外部已声明过 tmp 变量，由于暂时性死区不受外部影响，所以依旧报错。\n    */")]),t._v("\n    tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h3",{attrs:{id:"_2-4-变量提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-变量提升"}},[t._v("#")]),t._v(" 2.4 变量提升")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting",target:"_blank",rel:"noopener noreferrer"}},[t._v("变量提升 Hosting——MDN"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[t._v("函数提升的优势之一，可以在函数声明之前使用它。")]),t._v(" "),a("li",[a("strong",[t._v("函数比普通变量的优先级高，它会比普通变量提升到更靠前的位置！")])]),t._v(" "),a("li",[t._v("对于一般变量，只提升声明，不提升初始化。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("初始化之前使用变量，不会报变量引用错误 "),a("code",[t._v("ReferenceError")]),t._v(" ，但值为 "),a("code",[t._v("undefined")]),t._v(" 。")])]),t._v(" "),a("h2",{attrs:{id:"_3-this-与-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-this-与-arguments"}},[t._v("#")]),t._v(" 3. this 与 arguments")]),t._v(" "),a("p",[t._v("每个函数在被调用时，会自动创建两个特殊变量： "),a("code",[t._v("this")]),t._v(" 、 "),a("code",[t._v("arguments")]),t._v(" 。（箭头函数中没有这两个变量！）")]),t._v(" "),a("h3",{attrs:{id:"_3-1-this-指向问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-this-指向问题"}},[t._v("#")]),t._v(" 3.1 this 指向问题")]),t._v(" "),a("p",[t._v("this 指向函数的执行环境。 this 根据运行环境的改变而改变，只有在函数执行时才能最终确定其环境对象。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-arguments-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-arguments-问题"}},[t._v("#")]),t._v(" 3.2 arguments 问题")]),t._v(" "),a("p",[t._v("arguments 是一个类数组，不能使用数组方法，不过可以将其转为真正的数组。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES2015")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("blockquote",[a("p",[t._v("内部函数想要访问包含在其作用域链上的 this 或 arguments 对象，需要先将其引用保存到另一个对象。")])]),t._v(" "),a("h2",{attrs:{id:"_4-箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-箭头函数"}},[t._v("#")]),t._v(" 4. 箭头函数")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/Fundebug/article/details/89914502",target:"_blank",rel:"noopener noreferrer"}},[t._v("5种应该避免使用箭头函数的情况"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/42055084f817",target:"_blank",rel:"noopener noreferrer"}},[t._v("箭头函数的几个使用注意点"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("普通的函数里面的 this 是指向"),a("strong",[t._v("运行时")]),t._v("的作用域，箭头函数中的 this 是绑定"),a("strong",[t._v("定义时")]),t._v("所在的作用域的。")]),t._v(" "),a("ul",[a("li",[t._v("避免在定义对象方法时使用（不存在 "),a("code",[t._v("prototype")]),t._v(" 属性）")]),t._v(" "),a("li",[t._v("避免在动态上下文中的回调函数里使用")]),t._v(" "),a("li",[t._v("避免在需要 "),a("code",[t._v("arguments")]),t._v(" 上使用（可使用 "),a("code",[t._v("...rest")]),t._v("来收集参数）")]),t._v(" "),a("li",[t._v("不能作为构造函数使用（没有 "),a("code",[t._v("new.target")]),t._v(" ）")]),t._v(" "),a("li",[t._v("不能用作 "),a("code",[t._v("Generator")]),t._v(" 函数（也因此不能使用 "),a("code",[t._v("async/await")]),t._v(" 语法糖）")]),t._v(" "),a("li",[t._v("没有原型（不存在 "),a("code",[t._v("prototype")]),t._v(" 属性）")]),t._v(" "),a("li",[a("code",[t._v("call/apply/bind")]),t._v(" 方法无法改变箭头函数中 "),a("code",[t._v("this")]),t._v(" 的指向")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("new.target")]),t._v(" 是 ES6 新引入的属性，普通函数如果通过 new 调用， "),a("code",[t._v("new.target")]),t._v(" 会返回该函数的引用。")])]),t._v(" "),a("h2",{attrs:{id:"_5-call-、-apply-、-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-call-、-apply-、-bind"}},[t._v("#")]),t._v(" 5. call 、 apply 、 bind")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.runoob.com/w3cnote/js-call-apply-bind.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 中 call()、apply()、bind() 的用法——菜鸟教程"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Function 原型方法，作用是"),a("strong",[t._v("重新定义现有函数的执行环境")]),t._v("，即函数执行过程中的 "),a("code",[t._v("this")]),t._v(" 指向，以实现函数复用。")]),t._v(" "),a("ul",[a("li",[t._v("三个方法的第一个参数都是重新指定的函数调用对象。\n"),a("ul",[a("li",[t._v("如果未指定，非严格模式下指向 "),a("code",[t._v("window")])])])]),t._v(" "),a("li",[a("code",[t._v("call")]),t._v(" 方法和 "),a("code",[t._v("apply")]),t._v(" 方法都是立即执行，区别在于传参形式的不同：\n"),a("ul",[a("li",[a("code",[t._v("call")]),t._v(" 方法传入参数"),a("strong",[t._v("列表")])]),t._v(" "),a("li",[a("code",[t._v("apply")]),t._v(" 方法传入参数"),a("strong",[t._v("数组")])])])]),t._v(" "),a("li",[a("strong",[a("code",[t._v("bind")]),t._v(" 方法返回一个重新定义了执行环境的函数")]),t._v("，其传参方式与 "),a("code",[t._v("call")]),t._v(" 方法相同。")])]),t._v(" "),a("blockquote",[a("p",[t._v("bind 方法使用到了闭包，把定义时传入的 this 对象存在外包函数里，然后返回一个使用了该 this 对象的匿名函数。")])]),t._v(" "),a("h2",{attrs:{id:"_6-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-运算符"}},[t._v("#")]),t._v(" 6. 运算符")]),t._v(" "),a("h3",{attrs:{id:"_6-1-运算符的判定流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-运算符的判定流程"}},[t._v("#")]),t._v(" 6.1 === 运算符的判定流程")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型判断")]),t._v(" "),a("ul",[a("li",[t._v("类型不同为 false")])])]),t._v(" "),a("li",[a("strong",[t._v("null || undefined")]),t._v(" "),a("ul",[a("li",[t._v("true")])])]),t._v(" "),a("li",[a("strong",[t._v("boolean")]),t._v(" "),a("ul",[a("li",[t._v("两值同为 true 或者 false，它们相等")])])]),t._v(" "),a("li",[a("strong",[t._v("number")]),t._v(" "),a("ul",[a("li",[t._v("数值相等，他们相等")]),t._v(" "),a("li",[t._v("-0等于0")]),t._v(" "),a("li",[t._v("如果其中有一个是NaN，它们不相等")])])]),t._v(" "),a("li",[a("strong",[t._v("string")]),t._v(" "),a("ul",[a("li",[t._v("相同位置包含相同的16位值，他它们相等")]),t._v(" "),a("li",[t._v("如果在长度或者内容上不等，它们不相等")]),t._v(" "),a("li",[t._v("显示结果相同但是编码不同和，不相等")])])]),t._v(" "),a("li",[a("strong",[t._v("引用类型")]),t._v(" "),a("ul",[a("li",[t._v("指向相同对象、数组、函数，它们相等")]),t._v(" "),a("li",[t._v("如果指向不同对象，他们不相等")])])])]),t._v(" "),a("h3",{attrs:{id:"_6-2-0-1-0-2-0-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-0-1-0-2-0-3"}},[t._v("#")]),t._v(" 6.2 0.1 + 0.2 !== 0.3")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/camsong/blog/issues/9",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 浮点数陷阱及解法 #9"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.1 和 0.2 都转化成二进制后再进行运算")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00011001100110011001100110011001100110011001100110011010")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0011001100110011001100110011001100110011001100110011010")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0100110011001100110011001100110011001100110011001100111")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 转成十进制正好是 0.30000000000000004")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"_6-3-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-运算符"}},[t._v("#")]),t._v(" 6.3 == 运算符")]),t._v(" "),a("p",[t._v("等于运算符（==）检查其两个操作数是否相等，并返回布尔值。")]),t._v(" "),a("p",[t._v("与严格相等运算符（===）不同，它会尝试强制类型转换并且比较不同类型的操作数。")]),t._v(" "),a("p",[t._v("使用 "),a("a",{attrs:{href:"https://262.ecma-international.org/5.1/#sec-11.9.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("抽象相等比较算法"),a("OutboundLink")],1),t._v(" 来比较左右变量。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("如果两个操作数都是对象")]),t._v(" "),a("ul",[a("li",[t._v("仅当两个操作数都引用同一个对象时才返回 "),a("code",[t._v("true")])])])]),t._v(" "),a("li",[a("strong",[t._v("如果一个操作数是 "),a("code",[t._v("null")]),t._v("，另一个操作数是 "),a("code",[t._v("undefined")])]),t._v(" "),a("ul",[a("li",[t._v("返回 "),a("code",[t._v("true")])])])]),t._v(" "),a("li",[a("strong",[t._v("如果两个操作数是不同类型的")]),t._v(" "),a("ul",[a("li",[t._v("尝试在比较之前将它们转换为相同类型：")]),t._v(" "),a("li",[t._v("当数字与字符串进行比较时，会尝试将字符串转换为数字值。")]),t._v(" "),a("li",[t._v("如果操作数之一是 Boolean，则转换布尔值\n"),a("ul",[a("li",[t._v("如果是 true，则转换为1。")]),t._v(" "),a("li",[t._v("如果是 false，则转换为0。")])])]),t._v(" "),a("li",[t._v("如果操作数之一是对象，另一个是数字或字符串\n"),a("ul",[a("li",[t._v("尝试使用对象的 "),a("code",[t._v("valueOf()")]),t._v(" 和 "),a("code",[t._v("toString()")]),t._v(" 方法将对象转换为原始值。")])])])])]),t._v(" "),a("li",[a("strong",[t._v("操作数具有相同的类型")]),t._v(" "),a("ul",[a("li",[t._v("String\n"),a("ul",[a("li",[t._v("仅当两个操作数具有"),a("strong",[t._v("相同顺序的相同字符")]),t._v("时才返回 true")])])]),t._v(" "),a("li",[t._v("Number\n"),a("ul",[a("li",[t._v("仅当两个操作数具有"),a("strong",[t._v("相同的值")]),t._v("时才返回 true")]),t._v(" "),a("li",[t._v("+0 并被 -0 视为相同的值")]),t._v(" "),a("li",[t._v("如果"),a("strong",[t._v("任一操作数为NaN，则返回 false")]),t._v("。")])])]),t._v(" "),a("li",[t._v("Boolean\n"),a("ul",[a("li",[t._v("仅当操作数为两个 true 或两个 false 时才返回 true")])])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("当然，"),a("strong",[t._v("最好是使用严格等于")]),t._v("，以上这些就完全不用了解")])]),t._v(" "),a("h2",{attrs:{id:"_7-严格模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-严格模式"}},[t._v("#")]),t._v(" 7. 严格模式")]),t._v(" "),a("h3",{attrs:{id:"_7-1-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-设置"}},[t._v("#")]),t._v(" 7.1 设置")]),t._v(" "),a("p",[t._v("严格模式是为JavaScript 定义了一种不同的解析与执行模型。在严格模式下，ECMAScript 3 中的一些不确定的行为将得到处理，而且对某些不安全的操作也会抛出错误。要在整个脚本中启用严格模式，可以在顶部添加如下代码 "),a("code",[t._v("use strict;")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"_7-2-作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-作用"}},[t._v("#")]),t._v(" 7.2 作用")]),t._v(" "),a("ul",[a("li",[t._v("消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为")]),t._v(" "),a("li",[t._v("消除代码运行的一些不安全之处，保证代码运行的安全")]),t._v(" "),a("li",[t._v("提高编译器效率，增加运行速度；")]),t._v(" "),a("li",[t._v("为未来新版本的Javascript做好铺垫。")])]),t._v(" "),a("h3",{attrs:{id:"_7-3-严格选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-严格选项"}},[t._v("#")]),t._v(" 7.3 严格选项")]),t._v(" "),a("ul",[a("li",[t._v("没有声明就赋值的变量")]),t._v(" "),a("li",[t._v("this 不可以指向全局变量")]),t._v(" "),a("li",[t._v("报错")]),t._v(" "),a("li",[t._v("重名属性")]),t._v(" "),a("li",[t._v("函数的重名参数")])])])}),[],!1,null,null,null);s.default=e.exports}}]);