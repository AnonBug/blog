(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{661:function(t,a,n){"use strict";n.r(a);var s=n(26),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"css3-新特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css3-新特性"}},[t._v("#")]),t._v(" CSS3 新特性")]),t._v(" "),n("h2",{attrs:{id:"transition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transition"}},[t._v("#")]),t._v(" transition")]),t._v(" "),n("p",[t._v("过渡是一个属性样式从一种状态变化到另一种状态的中间环节。在 CSS3 引入过渡之前，这个中间环节是不存在的，如果让一个元素由屏幕左右变到右侧，或者从大盒子变为小盒子，都是"),n("code",[t._v("sou")]),t._v("得一下就完成了，看起来特别生硬。")]),t._v(" "),n("p",[t._v("过渡属性就是用来"),n("strong",[t._v("软化这种视觉体验")]),t._v("的。它会根据变化前后的两种静态属性，生成具有一定时间轴的小动画，来消弭这种不适感。通过为元素样式添加过渡动画，可以给网站带来高级的"),n("strong",[t._v("设计感")]),t._v("，用户体验更"),n("strong",[t._v("顺滑")]),t._v("。")]),t._v(" "),n("ul",[n("li",[t._v("动画需要触发条件（例如 "),n("code",[t._v("hover")]),t._v("等）")]),t._v(" "),n("li",[t._v("动画只能在触发时执行一次")]),t._v(" "),n("li",[t._v("只能定义起始状态，不能定义中间状态（使用 "),n("code",[t._v("cubic-bezier")]),t._v(" 函数只是改变其变化节奏，并不能控制其变化方向）")])]),t._v(" "),n("h3",{attrs:{id:"transition-四大属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transition-四大属性"}},[t._v("#")]),t._v(" transition 四大属性")]),t._v(" "),n("p",[t._v("过渡计算是由引擎内部完成的，对外提供了有限接口，让开发者可以决定动画的时间，起始，节奏，对象，即"),n("strong",[t._v("让哪个属性在何时以何种节奏持续多久")]),t._v("。这就对应了它的以下四个属性。")]),t._v(" "),n("ul",[n("li",[t._v("transition-duration 持续时间")]),t._v(" "),n("li",[t._v("transition-property 属性对象\n"),n("ul",[n("li",[t._v("参与动画的具体属性，默认是all")]),t._v(" "),n("li",[t._v("当指定为 height 时，其 width 和 bgc 都会在瞬间跳到最终状态，高度则在指定持续时间内变化。")])])]),t._v(" "),n("li",[t._v("transition-delay 延迟时间")]),t._v(" "),n("li",[t._v("transition-timing-function 变化节奏\n"),n("ul",[n("li",[t._v("其默认变化节奏并不是匀速的，而是有一定的动画节奏，看起来更高级一点。")]),t._v(" "),n("li",[t._v("有几个常用的节奏，用户也可以通过 "),n("code",[t._v("cubic-bezier(0,0,0,0)")]),t._v("来自行定义，可以通过"),n("a",{attrs:{href:"http://cubic-bezier.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("可视化调参网站"),n("OutboundLink")],1),t._v("动态生成所需参数。")]),t._v(" "),n("li",[t._v("另一个节奏函数是"),n("code",[t._v("steps(n)")]),t._v("，可以指定动画执行所需步骤。")])])]),t._v(" "),n("li",[t._v("transition：\n"),n("ul",[n("li",[t._v("以上四个属性的简写")])])])]),t._v(" "),n("h2",{attrs:{id:"animation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" animation")]),t._v(" "),n("p",[t._v("animation 动画是为了解决 transition 的不足而生的。")]),t._v(" "),n("p",[t._v("animation 使用需要两个步骤：")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("使用 keyframes 关键字定义一个动画")])])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" rainbow")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellowgreen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("keyframes 用来定义其动画状态。其写法规定如下：")]),t._v(" "),n("ul",[n("li",[t._v("0% 可以写为 from, 100% 可以写为 to。")]),t._v(" "),n("li",[t._v("to 必须要写，from 可以不写。")]),t._v(" "),n("li",[t._v("如果样式相同，可以并列写在一行")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("strong",[t._v("为所需元素指定 animation 属性")])])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper:hover")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1s rainbow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("当鼠标移过时，盒子便会在1s内，按照rainbow 中所指定的状态，先从红变橙，然后再从橙变黄绿。")]),t._v(" "),n("p",[t._v("同样的，可以为动画属性指定如下行为：")]),t._v(" "),n("ul",[n("li",[t._v("animation-name: 在keyframes中设计好的动画名称")]),t._v(" "),n("li",[t._v("animation-duration：持续时间")]),t._v(" "),n("li",[t._v("animation-timing-function：动画节奏，与transition同")]),t._v(" "),n("li",[t._v("animation-delay：延迟执行时间")])]),t._v(" "),n("p",[t._v("以下是 animation 相较于 transition 高级的地方，它可以定义循环动画，动画方向，动画结束状态：")]),t._v(" "),n("ul",[n("li",[t._v("animation-iteration-count：动画持续时间\n"),n("ul",[n("li",[t._v("n：指定循环次数")]),t._v(" "),n("li",[t._v("infinite：无限循环")])])]),t._v(" "),n("li",[t._v("animation-direction：指定循环播放的方向，默认是跳回开头\n"),n("ul",[n("li",[t._v("normal：默认")]),t._v(" "),n("li",[t._v("reverse：后队变前队，循环时也是跳回开头")]),t._v(" "),n("li",[t._v("alternate：头尾交替")]),t._v(" "),n("li",[t._v("alternate-reverse：后队变前队的首位交替")])])]),t._v(" "),n("li",[t._v("animation-fill-mode：动画结束后的停留状态\n"),n("ul",[n("li",[t._v("none：默认值，回到动画前的起始状态")]),t._v(" "),n("li",[t._v("forwards：停留在最终帧")]),t._v(" "),n("li",[t._v("backwards：停留在第一帧")]),t._v(" "),n("li",[t._v("both：根据 animation-direction 轮流执行 forwards 和 backwards")])])]),t._v(" "),n("li",[t._v("animation-play-state：动画播放状态，当动画被打断时的处理行为\n"),n("ul",[n("li",[t._v("paused：指定暂停动画")]),t._v(" "),n("li",[t._v("running：指定正在运行的动画")])])])]),t._v(" "),n("h2",{attrs:{id:"transform-变换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transform-变换"}},[t._v("#")]),t._v(" transform 变换")]),t._v(" "),n("p",[t._v("变换，即是对某元素进行旋转、缩放、平移、倾斜的操作。transform 即是在这几个维度上的，对元素进行一定的变形，以实现各种新奇的样式变化。")]),t._v(" "),n("h3",{attrs:{id:"自有属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自有属性"}},[t._v("#")]),t._v(" 自有属性")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("旋转 rotate()")]),t._v(" "),n("ul",[n("li",[t._v("对元素进行一定的旋转。")]),t._v(" "),n("li",[t._v("用户可以指定其旋转基点、旋转角度。")])])]),t._v(" "),n("li",[n("strong",[t._v("缩放 scale()")]),t._v(" "),n("ul",[n("li",[t._v("缩放元素，用户可以指定其XY方向上的缩放尺度、缩放基点。")])])]),t._v(" "),n("li",[n("strong",[t._v("平移 translate()")]),t._v(" "),n("ul",[n("li",[t._v("移动元素，用户可以指定其XY方向上的移动距离。")])])]),t._v(" "),n("li",[n("strong",[t._v("倾斜 skew()")]),t._v(" "),n("ul",[n("li",[t._v("对元素进行变形，用户可以指定其XY方向上的扭曲程度。")])])]),t._v(" "),n("li",[n("strong",[t._v("矩阵 martix()")]),t._v(" "),n("ul",[n("li",[t._v("指定六个值，直接定义元素的位置，而非在原来的基础上对其进行相对变化（像以上几个参数那样）。")])])])]),t._v(" "),n("h3",{attrs:{id:"并列属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#并列属性"}},[t._v("#")]),t._v(" 并列属性")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("指定变化基点 transform-origin")]),t._v(" "),n("ul",[n("li",[t._v("transform 的变换基点默认为元素中心，可以通过定义 transform-origin 来更改其变换形态")])])]),t._v(" "),n("li",[n("strong",[t._v("指定变换维度 transform-style")]),t._v(" "),n("ul",[n("li",[t._v("指定其变换发生在三维还是二维")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);