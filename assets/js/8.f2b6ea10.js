(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{527:function(t,s,a){t.exports=a.p+"assets/img/多层网络-符号约定.1d95409a.png"},528:function(t,s,a){t.exports=a.p+"assets/img/深层网络的简图.c6dc8e90.png"},529:function(t,s,a){t.exports=a.p+"assets/img/深层网络-矩阵维度1.20464df8.png"},530:function(t,s,a){t.exports=a.p+"assets/img/深层网络-矩阵维度2.d246f789.png"},531:function(t,s,a){t.exports=a.p+"assets/img/深层网络-正向传播与向量化.f48e6d00.png"},532:function(t,s,a){t.exports=a.p+"assets/img/深层网络-前向与后向公式.f1b02ab7.png"},533:function(t,s,a){t.exports=a.p+"assets/img/深层网络反向传播的流程.7894e13e.png"},534:function(t,s,a){t.exports=a.p+"assets/img/超参的尝试.0637143e.png"},535:function(t,s,a){t.exports=a.p+"assets/img/深层网络的直观理解.c8603672.png"},536:function(t,s,a){t.exports=a.p+"assets/img/深层网络-为什么需要深层网络.4514dd50.png"},738:function(t,s,a){"use strict";a.r(s);var m=a(26),c=Object(m.a)({},(function(){var t=this,s=t.$createElement,m=t._self._c||s;return m("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[m("h1",{attrs:{id:"深层神经网络"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#深层神经网络"}},[t._v("#")]),t._v(" 深层神经网络")]),t._v(" "),m("h2",{attrs:{id:"_1-概述"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[t._v("#")]),t._v(" 1. 概述")]),t._v(" "),m("h3",{attrs:{id:"_1-1-符号定义"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-符号定义"}},[t._v("#")]),t._v(" 1.1 符号定义")]),t._v(" "),m("p",[m("img",{attrs:{src:a(527),alt:""}})]),t._v(" "),m("h2",{attrs:{id:"_2-深层网络的计算"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_2-深层网络的计算"}},[t._v("#")]),t._v(" 2. 深层网络的计算")]),t._v(" "),m("h3",{attrs:{id:"_2-1-核对各层矩阵的维数"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-核对各层矩阵的维数"}},[t._v("#")]),t._v(" 2.1 核对各层矩阵的维数")]),t._v(" "),m("p",[t._v("一种比较有效减少模型 bug 的方法，就是拿张纸过一遍算法中矩阵的维数。基本方法就是根据当前层所需结果反推参数矩阵的维数。")]),t._v(" "),m("p",[m("img",{attrs:{src:a(528),alt:""}})]),t._v(" "),m("p",[t._v("以 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"n"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1)],1)],1),t._v(" 表示第 L 层的节点个数。")],1),t._v(" "),m("p",[t._v("举例 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"z"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"="}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"("}})],1),m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"n"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("，而输入 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"A"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"0"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"="}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"("}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("，根据计算公式，"),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"W"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em","margin-left":"0.071em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1)],1)],1),t._v(" 的维度需要等于 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"("}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"3"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"2"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" 才能保证 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"z"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1)],1)],1),t._v(" 的维度准确。")],1),t._v(" "),m("p",[t._v("归纳可得，"),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"W"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em","margin-left":"0.071em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1)],1)],1),t._v(" 的维度等于 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"("}})],1),m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"n"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-msup",{attrs:{space:"2"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"n"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2212"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"s"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("，"),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"b"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1)],1)],1),t._v(" 的维度等于 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"("}})],1),m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"n"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("。")],1),t._v(" "),m("p",[t._v("且 dW 的维度同 W，db 的维度同 b。")]),t._v(" "),m("p",[m("img",{attrs:{src:a(529),alt:""}})]),t._v(" "),m("p",[t._v("对于多个样本，向量化之后，"),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"Z"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1)],1)],1),t._v(" 的维度变为 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"("}})],1),m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"n"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"m"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("，其中 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"m"}})],1)],1)],1),t._v(" 为样本个数。而 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"Z"}})],1)],1)],1),t._v("、"),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"A"}})],1)],1)],1),t._v(" 与其相同。")],1),t._v(" "),m("p",[m("img",{attrs:{src:a(530),alt:""}})]),t._v(" "),m("h3",{attrs:{id:"_2-2-前向传播"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-前向传播"}},[t._v("#")]),t._v(" 2.2 前向传播")]),t._v(" "),m("p",[t._v("对于正向传播，其输入输出如下：")]),t._v(" "),m("ul",[m("li",[t._v("Input: "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"A"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2212"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),m("li",[t._v("Output: "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"A"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),m("li",[t._v("cache: "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"Z"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1)],1)],1),t._v(" （将中间结果缓存下来，以便反向传播时使用）")],1)]),t._v(" "),m("p",[t._v("按照顺序，先计算前一层，然后再计算下一层。这里可以（大概也只能）使用显式的 for 循环。")]),t._v(" "),m("p",[m("img",{attrs:{src:a(531),alt:""}})]),t._v(" "),m("h3",{attrs:{id:"_2-3-反向传播"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-反向传播"}},[t._v("#")]),t._v(" 2.3 反向传播")]),t._v(" "),m("p",[t._v("其输入输出如下：")]),t._v(" "),m("ul",[m("li",[t._v("Input: "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"A"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),m("li",[t._v("Output: "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"A"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2212"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"W"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em","margin-left":"0.071em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-msup",[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"b"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"L"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1)],1)],1)],1)]),t._v(" "),m("p",[t._v("传播公式如下：")]),t._v(" "),m("p",[m("img",{attrs:{src:a(532),alt:""}})]),t._v(" "),m("h3",{attrs:{id:"_2-4-一次学习迭代的完整流程"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-一次学习迭代的完整流程"}},[t._v("#")]),t._v(" 2.4 一次学习迭代的完整流程")]),t._v(" "),m("p",[t._v("一次完整的学习迭代是对数据集进行一次正向传播与反向传播，更新一次模型参数。其中所需的计算如下：")]),t._v(" "),m("p",[m("img",{attrs:{src:a(533),alt:""}})]),t._v(" "),m("h2",{attrs:{id:"_3-深度学习中的参数与超参数"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_3-深度学习中的参数与超参数"}},[t._v("#")]),t._v(" 3. 深度学习中的参数与超参数")]),t._v(" "),m("h3",{attrs:{id:"_3-1-超参"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-超参"}},[t._v("#")]),t._v(" 3.1 超参")]),t._v(" "),m("p",[t._v("深度学习模型中，除了训练所需的参数 W,b ，还有一些参数也需要输入模型之中：")]),t._v(" "),m("ul",[m("li",[t._v("learning rate:")]),t._v(" "),m("li",[t._v("iterations")]),t._v(" "),m("li",[t._v("hidden layers")]),t._v(" "),m("li",[t._v("hidden units")]),t._v(" "),m("li",[t._v("choice of activation function")])]),t._v(" "),m("p",[t._v("这些数据被称为超参数，因为这些数据如何设置，最终决定了参数 W 和 b 的学习结果。")]),t._v(" "),m("h3",{attrs:{id:"_3-2-超参的设置"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-超参的设置"}},[t._v("#")]),t._v(" 3.2 超参的设置")]),t._v(" "),m("p",[t._v("当你自己着手于训练自己的深度神经网络时，你可能发现超参的选择上有很多可能性，所以你需要多做尝试。")]),t._v(" "),m("p",[t._v("今天的深度学习应用领域还是很经验性的过程。通常你有一个想法，比如可能大概知道一个较好的学习率是 0.01，然后你尝试一下。然后基于尝试的结果发现学习率的调整方向。")]),t._v(" "),m("p",[m("img",{attrs:{src:a(534),alt:""}})]),t._v(" "),m("h2",{attrs:{id:"_3-为什么需要深层网络"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么需要深层网络"}},[t._v("#")]),t._v(" 3. 为什么需要深层网络")]),t._v(" "),m("p",[t._v("其实深度学习的网络并不需要很大（即节点数不需要特别多），但是其中隐藏层最好多一些。")]),t._v(" "),m("h3",{attrs:{id:"_3-1-深层网络在构建什么"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-深层网络在构建什么"}},[t._v("#")]),t._v(" 3.1 深层网络在构建什么")]),t._v(" "),m("p",[t._v("直觉上，可以把其浅层看作是探测一些低层级的简单特征，之后把它们在深层结合起来，以学习更复杂的特征，类似下面这种：")]),t._v(" "),m("p",[m("img",{attrs:{src:a(535),alt:""}})]),t._v(" "),m("p",[t._v("浅层可能学习一些图像的基本特征，如边缘。渐渐地组合出人脸的局部特征，如眼睛、鼻子等，进而识别出整张人脸。")]),t._v(" "),m("h3",{attrs:{id:"_3-2-用电路理论来解释深层网络存在的意义"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-用电路理论来解释深层网络存在的意义"}},[t._v("#")]),t._v(" 3.2 用电路理论来解释深层网络存在的意义")]),t._v(" "),m("p",[t._v("如果不扩展深度，而是增加单个层级的神经节点，那么最终会使得节点数成指数级增加。")]),t._v(" "),m("p",[m("img",{attrs:{src:a(536),alt:""}})]),t._v(" "),m("h2",{attrs:{id:"_4-大佬的只言片语"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_4-大佬的只言片语"}},[t._v("#")]),t._v(" 4. 大佬的只言片语")]),t._v(" "),m("p",[m("strong",[t._v("我必须要说，即使到现在我在实现一个算法的时候，有时候我也会惊讶怎么莫名其妙就成功了。那是因为机器学习里的复杂性是来源于数据，而不是那一行行代码。")])]),t._v(" "),m("p",[t._v("所以有时候你会感觉，你实现了几行代码，但是不太确定它具体做了什么，但是奇迹般地成功了。那其实是因为真正神奇的不是你写的程序，通常情况下你的代码段不会很长，虽然也不太简单，但至少不需要一万行代码。但有时当你喂入超多数据之后，就算我已经搞了好多年机器学习，有时还是会在算法管用的时候惊讶一下下。因为实际上你的算法的复杂性来源于数据，而不是你写的代码。")]),t._v(" "),m("p",[m("strong",[t._v("神经网络与大脑毫无关系。")])])])}),[],!1,null,null,null);s.default=c.exports}}]);