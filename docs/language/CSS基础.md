# CSS 基础
## 1. 盒模型
CSS 中的盒子具有 width、height、padding、border、margin 等属性。顺序为 `content -> padding -> border -> margin`。

![](./imgs/css_box.jpg)

盒模型有两种，一种是**W3C标准盒模型**，一种是**IE 标准**。

两者的区别在于 width 和 height 的计算方式不同。

- `box-sizing: content-box` ：定义 W3C 标准，box = content
- `box-sizing: border-box` ：定义 IE 标准， box = content + padding + border

## 2. 选择器
> [CSS选择器优先级总结](https://www.cnblogs.com/zxjwlh/p/6213239.html)

### 2.1 分类

1. 标签选择器(如：body,div,p,ul,li)
2. 类选择器(如：class="head",class="head_logo")
3. ID选择器(如：id="name",id="name_txt")
4. 全局选择器(如：*号)
5. 组合选择器(如：.head .head_logo,注意两选择器用空格键分开)
6. 后代选择器 (如：#head .nav ul li 从父集到子孙集的选择器)
7. 群组选择器 div,span,img {color:Red} 即具有相同样式的标签分组显示
8. 继承选择器(如：div p,注意两选择器用空格键分开)
9. 伪类选择器(如：就是链接样式,a元素的伪类，4种不同的状态：link、visited、active、hover。)
10. 字符串匹配的属性选择符(^ $ *三种，分别对应开始、结尾、包含)
11. 子选择器 (如：div>p ,带大于号>)
12. CSS 相邻兄弟选择器器 (如：h1+p,带加号+)

### 2.2 优先级

`!important > 行内样式 > ID 选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性`

`!important` 优先级最高，没有时，就需要使用下面的计算公式了。


使用 0, 0, 0, 0 分别对应行内选择符、ID选择符、类别选择符、元素选择符。出现哪个，就在哪个位置上加一。然后自左向右比较数字大小。

选择器 | 行内选择符 | id | class | element | 优先级
--- | --- | --- | --- | --- | ---
`#id .class1` | 0 | 1 | 1 | 0  | 0110
`div#id .class1` | 0 | 1 | 1 | 1 | 0111

### 2.3 优化思路

1. 不在 ID 选择器前使用标签名
2. 尽量少使用层级关系
3. 使用类选择器代替层级关系

## 3. display
### 3.1 display:none 与其它几种方式的区别
- | 空间占据 | 重绘与回流 | 继承 | 事件绑定 | 过渡动画
--- | --- | --- |--- |--- | --- 
display:none | 无 | 影响布局，引起回流 | 不被继承，但它隐藏，子元素也会自然隐藏 | 不会触发 | transition无效
visibility:hidden | 有 | 仅重绘 | 会被继承，子元素可覆盖重写 | 不会触发 | transition 无效
opacity:0 | 有 | 仅重绘 | 会被继承 | 会触发 | transition有效

## 4. 文档流
文档流是相对于盒模型的排版而言的。元素排版布局过程中，元素会自动从左往右，从上往下地遵守这种流式排列方式。
当浏览器渲染html文档时，从顶部开始开始渲染，为元素分配所需要的空间，每一个块级元素单独占一行，行内元素则按照顺序被水平渲染直到在当前行遇到了边界，然后换到下一行的起点继续渲染。

有三种属性会让盒模型脱离文档流：
- float
- position:absolute;
- position:fixed;

:::warning 注意
元素浮动之后，会让它跳出文档流(但是依然在DOM树中存在)，也就是说当它后面还有元素时，其他元素会无视它所占据了的区域，直接在它身下布局。
:::

### 4.1 双边距重叠问题（外边距折叠）
多个相邻（兄弟或者父子关系）普通流的块元素垂直方向marigin会重叠

折叠的结果为：

两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
两个外边距一正一负时，折叠结果是两者的相加的和。 

### 4.2 BFC
> [MDN 文档](https://developer.mozilla.org/zh-cn/docs/Web/Guide/CSS/Block_formatting_context)

块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。这是一个独立的渲染区域，规定了内部如何布局，并且这个区域的子元素不会影响到外面的元素。

### 4.3 清除浮动
浮动是由于浮动元素设置了 float 属性，产生了 BFC，其父元素已经管不住它了。清除浮动的原理就是使其父元素产生 BFC ，以包裹住其浮动子元素的 BFC。

触发 BFC 的几种方式：

- 根元素（`<html>`）
- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- 行内块元素（元素的 display 为 inline-block）
- 表格单元格（元素的 display 为 table-cell，HTML表格单元格默认为该值）
- 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
- 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-grouptable-footer-group（分别是HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
- **overflow 计算值不为 visible 的块元素**
- **display 值为 flow-root 的元素**
- contain 值为 layout、content 或 paint 的元素
- 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
- 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
- 多列容器（元素的 column-count 或 column-width 不为 auto ，包括 column-count 为 1）
- column-span 为 all 的元素始终会创建一个新的 BFC ，即使该元素没有包裹在一个多列容器中

```html
<div class="wrap">
    <div class="item"></div>
</div>
```

```css
.wrap {
    width: 200px;
}
.item {
    width: 200px;
    height: 200px;
    float: left;
}
```

清除浮动的几种方式：

```css
/* 1. overflow */
.wrap {
    overflow: auto;
}

/* 2. 伪元素法 */
.wrap::after {
    content: '';
    /* 闭合开口 */
    clear: both;
    display: block;
}

/* 3. display 新属性 */
.wrap {
    display: flow-root;
}
```

## 5. flex
> [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

flex 布局是一维布局模型，它一次只能处理一个维度上的元素布局（一行或一列）。Grid 是一种二维布局，可以同时处理行和列的布局。

### 5.1 主容器属性

- flex-direction：主轴方向
- flex-wrap：元素在主轴方向可否换行
- justify-content : 元素在**主轴方向**的对齐方式。
- align-items：元素在**副轴方向**的对齐方式
- align-content : 副轴方向剩余空间布局的分配方式

### 5.2 子元素属性

- align-self : 与 align-items 类似，控制单个子元素的副轴对齐方式，可覆盖 flex 盒子的设置
- order : 子元素的排列顺序，默认按文档顺序排列

### 5.3 可用空间的分配

**可用空间**：假设在 1 个 500px 的容器中，我们有 3 个 100px 宽的元素，那么这 3 个元素需要占 300px 的宽，剩下 200px 的可用空间。在默认情况下， flexbox 的行为会把这 200px 的空间留在最后一个元素的后面。对于可用空间的分配，需要用到以下属性：

- flex-basis：默认值是 auto，采用元素当前具体确定的尺寸
- flex-grow：以 flex-basis 为基础，沿主轴方向增长尺寸，可以按比例分配空间
- flex-shrink：处理 flex 元素收缩的问题，可缩小到 flex-basi s以下
- flex：`flex-grow，flex-shrink，flex-basis` 简写
  - initial:把flex元素重置为Flexbox的初始值，它相当于 flex: 0 1 auto
  - auto: 1 1 auto
  - none: 0 0 auto
  - 数字（如1）：1 1 0. 元素可以在flex-basis为0的基础上伸缩

## 6. position

- **固定定位 fixed**
  - 相对于浏览器窗口定位，脱离文档流
- **相对定位 relative**
  - 初始位置在原文档流
  - 可以通过设置垂直或水平位置，让这个元素相对其初始位置移动
  - 元素只占据文档流的初始位置
- **绝对定位 absolute**
  - 相对于最近的**已定位**父元素，直到`<html>`
  - 元素脱离文档流
- **粘性定位 sticky**
  - 初始位置在原文档流
  - 相对于该元素在流中的flow root（BFC）和 containing block（最近的块级祖先元素）定位
  - 而后，元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。
- **默认定位 static** 
  - 默认值，正常文档流（**忽略top, bottom, left, right 或者 z-index 声明**）
- `inherit` : 规定应该从父元素继承 position 属性的值。 

## 7. 回流与重绘

### 7.4 性能优化

优化主要从减少回流下手。

- 先把待调整的元素绝对定位掉，等全部渲染完再加回去，减少重排的次数

## 8. 伪类与伪元素

### 8.1 伪类

伪类是选择器的一种，它**用于选择处于特定状态的元素**，比如当它们是这一类型的第一个元素时，或者是当鼠标指针悬浮在元素上面的时候。

它们**表现得会像是你向你的文档的某个部分应用了一个类一样**，帮你在你的标记文本中减少多余的类，让你的代码更灵活、更易于维护。  

#### 分类

- 简单伪类
  - :first-child
  - :only-child
- 用户行为伪类
  - :hover
  - :focus

### 8.2 伪元素

**伪元素表现得是像是往标记文本中加入全新的HTML元素一样**，而不是向现有的元素上应用类。伪元素开头为双冒号::。

- ::first-line

#### 特殊的伪元素

> [使用伪元素为 div 生成箭头](https://cssarrowplease.com/)

- ::before
- ::after

这两个伪元素有一个特殊的 `content` 属性，该属性中的内容会渲染进文档，就像真正的元素一样。`::before` 会把内容渲染到指定元素的前面，相应的，`::after` 会把内容渲染到指定元素后面。

:::TIPS 提示
从CSS插入文本字符串，我们并不会在Web浏览器上经常这么做，因为对于一些屏幕阅读器来说，文本是不可见的，而且对于未来别人的查找和编辑也不是很方便。

这些伪元素的更推荐的用法是插入一个图标，例如下面的示例加入的一个小箭头，作为一个视觉性的提示，而且我们并不希望屏幕阅读器读出它。
:::