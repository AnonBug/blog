(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{599:function(t,a,s){t.exports=s.p+"assets/img/训练集与测试集分布不同的例子1.85974b0c.png"},600:function(t,a,s){t.exports=s.p+"assets/img/训练集与测试集分布不同的例子2.08c7c450.png"},601:function(t,a,s){t.exports=s.p+"assets/img/training-dev数据集.07a2b450.png"},602:function(t,a,s){t.exports=s.p+"assets/img/不匹配数据下的误差分析.485b0715.png"},603:function(t,a,s){t.exports=s.p+"assets/img/不匹配数据下的误差分析2.16e35fad.png"},604:function(t,a,s){t.exports=s.p+"assets/img/合成数据与过拟合问题.c9778ae4.png"},752:function(t,a,s){"use strict";s.r(a);var r=s(26),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"不匹配的数据集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不匹配的数据集"}},[t._v("#")]),t._v(" 不匹配的数据集")]),t._v(" "),r("h2",{attrs:{id:"_1-训练集和测试集的不同分布"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-训练集和测试集的不同分布"}},[t._v("#")]),t._v(" 1. 训练集和测试集的不同分布")]),t._v(" "),r("h3",{attrs:{id:"_1-1-一个例子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-一个例子"}},[t._v("#")]),t._v(" 1.1 一个例子")]),t._v(" "),r("p",[r("img",{attrs:{src:s(599),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"_1-2-另一个例子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-另一个例子"}},[t._v("#")]),t._v(" 1.2 另一个例子")]),t._v(" "),r("p",[r("img",{attrs:{src:s(600),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"_2-不匹配数据下的误差分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-不匹配数据下的误差分析"}},[t._v("#")]),t._v(" 2. 不匹配数据下的误差分析")]),t._v(" "),r("p",[t._v("当数据不匹配时，training set 和 dev set 并不来自同一分布，这使得原来进行方差分析的方法变得不准确：无法确定误差是源于训练时的过拟合，还是源于数据分布问题。")]),t._v(" "),r("h3",{attrs:{id:"_2-1-training-dev-数据集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-training-dev-数据集"}},[t._v("#")]),t._v(" 2.1 training-dev 数据集")]),t._v(" "),r("p",[t._v("为了明晰上述问题，可以设立一个 train-dev 数据集，即从原 training set 中分一点出来做 dev set，以对模型进行方差分析。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(601),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"_2-2-误差分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-误差分析"}},[t._v("#")]),t._v(" 2.2 误差分析")]),t._v(" "),r("p",[t._v("通过 training-dev set 的加入，就可以判断数据的不匹配程度。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(602),alt:""}})]),t._v(" "),r("p",[t._v("有时会发现 dev error 比 training-dev error 表现还要好，有可能是因为目标任务中的数据比收集的 training set 更好识别。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(603),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"_3-处理数据不匹配问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-处理数据不匹配问题"}},[t._v("#")]),t._v(" 3. 处理数据不匹配问题")]),t._v(" "),r("p",[t._v("并没有系统处理数据不匹配的方案，但有些方法可以尝试下。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-数据分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-数据分析"}},[t._v("#")]),t._v(" 3.1 数据分析")]),t._v(" "),r("p",[t._v("第一步，做数据分析，尝试了解训练集与开发测试集的具体差异。")]),t._v(" "),r("p",[t._v("然后通过收集或制造数据，使训练数据更接近开发集。")]),t._v(" "),r("p",[t._v("但在模拟数据时，要注意避免过拟合。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(604),alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);