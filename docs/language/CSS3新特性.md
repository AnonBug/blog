# CSS3 新特性

## transition
过渡是一个属性样式从一种状态变化到另一种状态的中间环节。在 CSS3 引入过渡之前，这个中间环节是不存在的，如果让一个元素由屏幕左右变到右侧，或者从大盒子变为小盒子，都是`sou`得一下就完成了，看起来特别生硬。

过渡属性就是用来**软化这种视觉体验**的。它会根据变化前后的两种静态属性，生成具有一定时间轴的小动画，来消弭这种不适感。通过为元素样式添加过渡动画，可以给网站带来高级的**设计感**，用户体验更**顺滑**。

- 动画需要触发条件（例如 `hover`等）
- 动画只能在触发时执行一次
- 只能定义起始状态，不能定义中间状态（使用 `cubic-bezier` 函数只是改变其变化节奏，并不能控制其变化方向）

### transition 四大属性

过渡计算是由引擎内部完成的，对外提供了有限接口，让开发者可以决定动画的时间，起始，节奏，对象，即**让哪个属性在何时以何种节奏持续多久**。这就对应了它的以下四个属性。

- transition-duration 持续时间
- transition-property 属性对象
  - 参与动画的具体属性，默认是all
  - 当指定为 height 时，其 width 和 bgc 都会在瞬间跳到最终状态，高度则在指定持续时间内变化。
- transition-delay 延迟时间
- transition-timing-function 变化节奏
  - 其默认变化节奏并不是匀速的，而是有一定的动画节奏，看起来更高级一点。
  - 有几个常用的节奏，用户也可以通过 `cubic-bezier(0,0,0,0)`来自行定义，可以通过[可视化调参网站](http://cubic-bezier.com/)动态生成所需参数。
  - 另一个节奏函数是`steps(n)`，可以指定动画执行所需步骤。
- transition：
  - 以上四个属性的简写

## animation

animation 动画是为了解决 transition 的不足而生的。

animation 使用需要两个步骤：

1. **使用 keyframes 关键字定义一个动画**
```css
@keyframes rainbow {
    0% { background: red; }
    50% { background: orange; }
    100% { background: yellowgreen; }
}

```
keyframes 用来定义其动画状态。其写法规定如下：
- 0% 可以写为 from, 100% 可以写为 to。
- to 必须要写，from 可以不写。
- 如果样式相同，可以并列写在一行

2. **为所需元素指定 animation 属性**
```css
.wrapper:hover {
    animation: 1s rainbow;
}
```
当鼠标移过时，盒子便会在1s内，按照rainbow 中所指定的状态，先从红变橙，然后再从橙变黄绿。

同样的，可以为动画属性指定如下行为：
- animation-name: 在keyframes中设计好的动画名称
- animation-duration：持续时间
- animation-timing-function：动画节奏，与transition同
- animation-delay：延迟执行时间

以下是 animation 相较于 transition 高级的地方，它可以定义循环动画，动画方向，动画结束状态：
- animation-iteration-count：动画持续时间
    - n：指定循环次数
    - infinite：无限循环
- animation-direction：指定循环播放的方向，默认是跳回开头
    - normal：默认
    - reverse：后队变前队，循环时也是跳回开头
    - alternate：头尾交替
    - alternate-reverse：后队变前队的首位交替
- animation-fill-mode：动画结束后的停留状态
    - none：默认值，回到动画前的起始状态
    - forwards：停留在最终帧
    - backwards：停留在第一帧
    - both：根据 animation-direction 轮流执行 forwards 和 backwards
- animation-play-state：动画播放状态，当动画被打断时的处理行为
    - paused：指定暂停动画
    - running：指定正在运行的动画

## transform 变换

变换，即是对某元素进行旋转、缩放、平移、倾斜的操作。transform 即是在这几个维度上的，对元素进行一定的变形，以实现各种新奇的样式变化。

### 自有属性

- **旋转 rotate()**
  - 对元素进行一定的旋转。
  - 用户可以指定其旋转基点、旋转角度。
- **缩放 scale()**
  - 缩放元素，用户可以指定其XY方向上的缩放尺度、缩放基点。
- **平移 translate()**
  - 移动元素，用户可以指定其XY方向上的移动距离。
- **倾斜 skew()**
  - 对元素进行变形，用户可以指定其XY方向上的扭曲程度。
- **矩阵 martix()**
  - 指定六个值，直接定义元素的位置，而非在原来的基础上对其进行相对变化（像以上几个参数那样）。

### 并列属性

- **指定变化基点 transform-origin**
  - transform 的变换基点默认为元素中心，可以通过定义 transform-origin 来更改其变换形态
- **指定变换维度 transform-style**
  - 指定其变换发生在三维还是二维
