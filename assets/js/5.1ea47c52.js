(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{345:function(t,a,s){t.exports=s.p+"assets/img/rmsprop实现.b2190c71.png"},561:function(t,a,s){t.exports=s.p+"assets/img/将数据集切分为minibatch.7aff0905.png"},562:function(t,a,s){t.exports=s.p+"assets/img/minibatch的训练过程.6d05f94b.png"},563:function(t,a,s){t.exports=s.p+"assets/img/minibatch的成本下降曲线.48c04301.png"},564:function(t,a,s){t.exports=s.p+"assets/img/minibatch的大小选择.907d0b84.png"},565:function(t,a,s){t.exports=s.p+"assets/img/指数加权平均法的原理.5ddb0d2b.png"},566:function(t,a,s){t.exports=s.p+"assets/img/指数加权平均法的代码实现.b189a962.png"},567:function(t,a,s){t.exports=s.p+"assets/img/指数加权平均法的偏差修正.8ddbf18d.png"},568:function(t,a,s){t.exports=s.p+"assets/img/momentum的直观理解.52fdeb66.png"},569:function(t,a,s){t.exports=s.p+"assets/img/momentum公式实现.bc28cc07.png"},570:function(t,a,s){t.exports=s.p+"assets/img/adam超参.62198f95.png"},571:function(t,a,s){t.exports=s.p+"assets/img/学习率衰减.99354e71.png"},572:function(t,a,s){t.exports=s.p+"assets/img/学习率衰减公式.d7f64518.png"},573:function(t,a,s){t.exports=s.p+"assets/img/学习率衰减的其它方法.973d0ae9.png"},574:function(t,a,s){t.exports=s.p+"assets/img/局部最优的示意图.24d62a3c.png"},575:function(t,a,s){t.exports=s.p+"assets/img/寻求高维最优解的过程.b2806555.png"},744:function(t,a,s){"use strict";s.r(a);var m=s(26),r=Object(m.a)({},(function(){var t=this,a=t.$createElement,m=t._self._c||a;return m("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[m("h1",{attrs:{id:"优化算法"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#优化算法"}},[t._v("#")]),t._v(" 优化算法")]),t._v(" "),m("p",[t._v("优化算法能够让模型训练得更快。")]),t._v(" "),m("h2",{attrs:{id:"_1-mini-batch-梯度下降法"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_1-mini-batch-梯度下降法"}},[t._v("#")]),t._v(" 1. Mini-batch 梯度下降法")]),t._v(" "),m("p",[t._v("向量化使得模型计算的速度更快，但是如果样本量特别大的时候，执行一次学习迭代需要计算所有样本一次，代价仍然太大。")]),t._v(" "),m("p",[t._v("Mini-batch 的思想就是在训练整个数据集之前，先使用部分数据集让梯度下降一些，以提高训练速度。")]),t._v(" "),m("h3",{attrs:{id:"_1-1-切分数据集"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-切分数据集"}},[t._v("#")]),t._v(" 1.1 切分数据集")]),t._v(" "),m("p",[m("img",{attrs:{src:s(561),alt:""}})]),t._v(" "),m("h3",{attrs:{id:"_1-2-训练过程"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-训练过程"}},[t._v("#")]),t._v(" 1.2 训练过程")]),t._v(" "),m("p",[m("img",{attrs:{src:s(562),alt:""}})]),t._v(" "),m("h3",{attrs:{id:"_1-3-对-mini-batch-算法的理解"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-对-mini-batch-算法的理解"}},[t._v("#")]),t._v(" 1.3 对 Mini-batch 算法的理解")]),t._v(" "),m("p",[t._v("在使用 Mini-batch 进行训练时，相邻的两步梯度下降都是在不同的数据集上进行的，所以它的下降曲线并不是平滑的：")]),t._v(" "),m("p",[m("img",{attrs:{src:s(563),alt:""}})]),t._v(" "),m("h3",{attrs:{id:"_1-4-mini-batch-的分包大小选择问题"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-mini-batch-的分包大小选择问题"}},[t._v("#")]),t._v(" 1.4 Mini-batch 的分包大小选择问题")]),t._v(" "),m("p",[t._v("一个 batch 中包含的样本数量 m 是一个超参，它对训练的影响如下：")]),t._v(" "),m("p",[m("img",{attrs:{src:s(564),alt:""}})]),t._v(" "),m("p",[t._v("当 m 等于整个数据集的大小时，它实际上就等同于普通的 Batch 算法，还是会面临迭代一次就要计算整个数据集一次的成本问题。")]),t._v(" "),m("p",[t._v("当 m 等于 1 时，它是随机梯度下降法，随机梯度下降法永远不会收敛到最小值，而是在最小值附近波动。它失去了向量化带来的多个样本计算加速优势。")]),t._v(" "),m("p",[t._v("所以，m 的取值通常介于 1 和 max 之间，既能够加快梯度下降速度，又有向量化的加成。")]),t._v(" "),m("h2",{attrs:{id:"_2-指数加权平均"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_2-指数加权平均"}},[t._v("#")]),t._v(" 2. 指数加权平均")]),t._v(" "),m("p",[t._v("指数加权平均是使用其他优化算法的基础。")]),t._v(" "),m("h3",{attrs:{id:"_2-1-指数加权平均法的原理"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-指数加权平均法的原理"}},[t._v("#")]),t._v(" 2.1 指数加权平均法的原理")]),t._v(" "),m("p",[t._v("关键公式：")]),t._v(" "),m("p"),m("p",[m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[m("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[m("mjx-msub",[m("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[m("mjx-c",{attrs:{c:"v"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[m("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[m("mjx-c",{attrs:{c:"t"}})],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"="}})],1),m("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"3B2"}})],1),m("mjx-msub",[m("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[m("mjx-c",{attrs:{c:"v"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"t"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2212"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"+"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"("}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"2212"}})],1),m("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"3B2"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:")"}})],1),m("mjx-msub",[m("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[m("mjx-c",{attrs:{c:"3B8"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[m("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[m("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1)],1),m("p"),t._v(" "),m("p",[m("img",{attrs:{src:s(565),alt:""}})]),t._v(" "),m("h3",{attrs:{id:"_2-2-理解指数加权平均法"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-理解指数加权平均法"}},[t._v("#")]),t._v(" 2.2 理解指数加权平均法")]),t._v(" "),m("p",[t._v("指数加权平均法的关键参数是 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"3B2"}})],1)],1)],1),t._v("，它的取值决定了当前数据会受到之前多久数据的影响。")],1),t._v(" "),m("p",[t._v("实现：")]),t._v(" "),m("p",[m("img",{attrs:{src:s(566),alt:""}})]),t._v(" "),m("p",[t._v("其与一般平均法的优势在于：")]),t._v(" "),m("ol",[m("li",[t._v("代码量小，只需要一行代码")]),t._v(" "),m("li",[t._v("内存占用小：它只需要存储前一天的数据即可")])]),t._v(" "),m("h3",{attrs:{id:"_2-3-指数加权平均法的偏差修正"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-指数加权平均法的偏差修正"}},[t._v("#")]),t._v(" 2.3 指数加权平均法的偏差修正")]),t._v(" "),m("p",[t._v("因为指数加权平均法在实现时，首先把第零天初始化为 0，所以前几天的数据会出现偏差：本应是绿线，但实际为紫线：")]),t._v(" "),m("p",[m("img",{attrs:{src:s(567),alt:""}})]),t._v(" "),m("p",[t._v("通过加入偏差修正，能够矫正初期的数据偏差，但是在深度学习中，很多人并不在意这个修正。")]),t._v(" "),m("h2",{attrs:{id:"_3-momentum-动量梯度下降法"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_3-momentum-动量梯度下降法"}},[t._v("#")]),t._v(" 3. Momentum 动量梯度下降法")]),t._v(" "),m("p",[t._v("其基本思想是计算梯度的指数加权平均数，然后用计算后的梯度来更新权重。")]),t._v(" "),m("h3",{attrs:{id:"_3-1-momentum-解决的问题"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-momentum-解决的问题"}},[t._v("#")]),t._v(" 3.1 momentum 解决的问题")]),t._v(" "),m("p",[t._v("在使用 Mini-batch 方法时，由于它是波动式地接近最小值，所以无法使用较大的学习率训练，速度很低。因为使用较大的学习率，其波动幅度更大，结果可能会偏离函数的范围。")]),t._v(" "),m("p",[t._v("目标就是减少纵向的震荡，加快横向的移动。")]),t._v(" "),m("p",[m("img",{attrs:{src:s(568),alt:""}})]),t._v(" "),m("h3",{attrs:{id:"_3-2-它是如何解决的-从碗中滚下的球"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-它是如何解决的-从碗中滚下的球"}},[t._v("#")]),t._v(" 3.2 它是如何解决的：从碗中滚下的球")]),t._v(" "),m("p",[t._v("通过使用指数加权平均法，每次迭代对权重参数更新时，不再是与之前的迭代相独立，而是加权了前 n 次迭代的影响。n 的大小取决于超参 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"3B2"}})],1)],1)],1),t._v(" 的选取。")],1),t._v(" "),m("p",[t._v("其实现如下：")]),t._v(" "),m("p",[m("img",{attrs:{src:s(569),alt:""}})]),t._v(" "),m("p",[t._v("ps：深度学习中不关注偏差修正，是因为在迭代十次（估值）以后，移动平均过了初始阶段，就不再是一个具有偏差的预测。")]),t._v(" "),m("h2",{attrs:{id:"_4-rmsprop-root-mean-square-prop-算法"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_4-rmsprop-root-mean-square-prop-算法"}},[t._v("#")]),t._v(" 4. RMSprop （root mean square prop 算法）")]),t._v(" "),m("p",[t._v("另一个能够加快梯度下降的方法。")]),t._v(" "),m("p",[t._v("对该方法的直观理解是，对于 W 的更新幅度要大，所以在最后除了一个较小的值 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msqrt",[m("mjx-sqrt",[m("mjx-surd",[m("mjx-mo",{staticClass:"mjx-sop"},[m("mjx-c",{attrs:{c:"221A"}})],1)],1),m("mjx-box",{staticStyle:{"padding-top":"0.127em"}},[m("mjx-msub",[m("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[m("mjx-c",{attrs:{c:"S"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"W"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v("，而对于 b 的更新幅度要小，所以在最后除了一个较大值 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msqrt",[m("mjx-sqrt",[m("mjx-surd",[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"221A"}})],1)],1),m("mjx-box",{staticStyle:{"padding-top":"0.031em"}},[m("mjx-msub",[m("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[m("mjx-c",{attrs:{c:"S"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"b"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v("。")],1),t._v(" "),m("p",[m("img",{attrs:{src:s(345),alt:""}})]),t._v(" "),m("p",[t._v("ps：一个细节点上为了避免在分母位置出现近乎 0 的可能，会在分母位置添加一个常数 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"3B5"}})],1)],1)],1),t._v("，取值通常为 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msup",[m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}}),m("mjx-c",{attrs:{c:"0"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.393em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2212"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"8"}})],1)],1)],1)],1)],1)],1),t._v("。")],1),t._v(" "),m("p",[t._v("可以消除梯度下降时的摆动，以允许在训练时使用更大的学习率，从而加快算法的学习速度。")]),t._v(" "),m("h2",{attrs:{id:"_5-adam-adaptive-moment-estimation-优化算法"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_5-adam-adaptive-moment-estimation-优化算法"}},[t._v("#")]),t._v(" 5. Adam （Adaptive Moment Estimation）优化算法")]),t._v(" "),m("h3",{attrs:{id:"_5-1-adam-实现"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-adam-实现"}},[t._v("#")]),t._v(" 5.1 adam 实现")]),t._v(" "),m("p",[t._v("Adam 算法把 Momentum 和 RMSprop 结合使用。其实现如下：")]),t._v(" "),m("p",[m("img",{attrs:{src:s(345),alt:""}})]),t._v(" "),m("h3",{attrs:{id:"_5-2-adam-中的超参"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-adam-中的超参"}},[t._v("#")]),t._v(" 5.2 adam 中的超参")]),t._v(" "),m("p",[m("img",{attrs:{src:s(570),alt:""}})]),t._v(" "),m("p",[t._v("关于超参值的选择上，"),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msub",[m("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[m("mjx-c",{attrs:{c:"3B2"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[m("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[m("mjx-c",{attrs:{c:"1"}})],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-msub",{attrs:{space:"2"}},[m("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[m("mjx-c",{attrs:{c:"3B2"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[m("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[m("mjx-c",{attrs:{c:"2"}})],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"3B5"}})],1)],1)],1),t._v(" 通常选用上述推荐缺省值（业内大佬不会去调参它们），通过训练去调整学习率 "),m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"3B1"}})],1)],1)],1),t._v(" 的值。")],1),t._v(" "),m("h2",{attrs:{id:"_6-关于学习率衰减"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_6-关于学习率衰减"}},[t._v("#")]),t._v(" 6. 关于学习率衰减")]),t._v(" "),m("h3",{attrs:{id:"_6-1-为什么要减小学习率"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-为什么要减小学习率"}},[t._v("#")]),t._v(" 6.1 为什么要减小学习率")]),t._v(" "),m("p",[t._v("慢慢减少学习率的本质在于，在学习初期，可以接受较大的步伐。但是当收敛开始之后，较小的学习率能让步进小一些：")]),t._v(" "),m("p",[m("img",{attrs:{src:s(571),alt:""}})]),t._v(" "),m("h3",{attrs:{id:"_6-2-实现"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-实现"}},[t._v("#")]),t._v(" 6.2 实现")]),t._v(" "),m("p",[m("img",{attrs:{src:s(572),alt:""}})]),t._v(" "),m("h3",{attrs:{id:"_6-3-其他衰减方法"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-其他衰减方法"}},[t._v("#")]),t._v(" 6.3 其他衰减方法")]),t._v(" "),m("p",[m("img",{attrs:{src:s(573),alt:""}})]),t._v(" "),m("h2",{attrs:{id:"_7-局部最优的问题"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#_7-局部最优的问题"}},[t._v("#")]),t._v(" 7. 局部最优的问题")]),t._v(" "),m("p",[t._v("我们在低维空间的大部分直觉，并不能用在高维空间。")]),t._v(" "),m("p",[t._v("在低维想象中，损失函数可能会有很多局部最优解，像下图左边所示。而在高维中更可能的情况是像右边的马鞍形")]),t._v(" "),m("p",[m("img",{attrs:{src:s(574),alt:""}})]),t._v(" "),m("p",[t._v("寻求高维最优解的过程，更可能是首先在平稳段达到马鞍点，然后再往下走。平稳段的梯度下降会很慢，这也就是前述的一些优化措施起作用的地方：")]),t._v(" "),m("p",[m("img",{attrs:{src:s(575),alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);