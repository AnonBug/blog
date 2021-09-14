# CSS 实战

## 1. 布局
> [静态布局、自适应布局、流式布局、响应式布局、弹性布局等的概念和区别](https://www.cnblogs.com/yanayana/p/7066948.html)


### 1.1 两栏布局
左宽度固定，右侧自适应
```html
<div class="one"></div>
<div class="two"></div>
```
#### 浮动布局
```css
.one{
    width:200px;
    height:200px;
    /* 左侧浮动 */
    float:left; 
}
.two{
    height:200px;
    /* 右侧留出 margin */
    margin-left:200px;
}
```

#### 绝对定位
```css
.one{
    width:200px;
    height:200px;
    position:absolute;
}
.two{
    height:200px;
    margin-left:200px;
}
```

#### flex 布局
> [flex 布局可视化](http://static.vgee.cn/static/index.html)
```css
.container{
    display:flex;
}
.one{
    width:200px;
    height:200px;
}
.two{
    height:200px;
    flex:auto;
}
```

### 1.2 三栏布局
圣杯布局/双飞翼布局

文档结构：

```html
<div class="container">
　　<div class="main">main</div>
　　<div class="left">left</div>
　　<div class="right">right</div>
</div>
```

#### flex 布局
```css
.container{
    display:flex;
}
.main{
    flex-grow:1;
}
.left{
    order:-1;
    flex-basis:200px;
}
.right{
    flex-basis:300px;
}
```

#### 绝对定位
```css
.container{
    position:relative;
}

.main{
    padding:0 300px 0 200px;
}
.left{
    position:absolute;
    top:0;
    left:0;
    width:200px;
}
.right{
    position:absolute;
    top:0;
    right:0;
}
```

#### 浮动（圣杯布局）
```css
.container{
    padding:0 300px 0 200px;
}
.main, .right, .left{
    float:left;
}
.main{
    width:100%;
}
.left{
    width:200px;
    margin-left:-100%;
    transform:translateX(-100%);
}
.right{
    width:300px;
    margin-left:-300px;
    transform:translateX(100%);
}
```

三列布局又分为两种，两列定宽一列自适应，以及两侧定宽中间自适应

两列定宽一列自适应：

1、使用float+margin：

给div设置float：left，left的div添加属性margin-right：left和center的间隔px,right的div添加属性margin-left：left和center的宽度之和加上间隔

2、使用float+overflow：

给div设置float：left，再给right的div设置overflow:hidden。这样子两个盒子浮动，另一个盒子触发bfc达到自适应

3、使用position：

父级div设置position：relative，三个子级div设置position：absolute，这个要计算好盒子的宽度和间隔去设置位置，兼容性比较好，

4、使用table实现：

父级div设置display：table，设置border-spacing：10px//设置间距，取值随意,子级div设置display:table-cell，这种方法兼容性好，适用于高度宽度未知的情况，但是margin失效，设计间隔比较麻烦，

5、flex实现：

parent的div设置display：flex；left和center的div设置margin-right；然后right 的div设置flex：1；这样子right自适应，但是flex的兼容性不好

6、grid实现：

parent的div设置display：grid，设置grid-template-columns属性，固定第一列第二列宽度，第三列auto，

对于两侧定宽中间自适应的布局，对于这种布局需要把center放在前面，可以采用双飞翼布局：圣杯布局，来实现，也可以使用上述方法中的grid，table，flex，position实现 

## 2. 水平和垂直居中
> [CSS各种水平与垂直居中](http://itakeo.com/blog/2015/09/17/csscenter/?none=121)
> 
> [margin:auto 的详细说明（看评论）](https://www.cnblogs.com/raind/p/10726591.html)

```css
/* 1. 文字类型 */
.wrap {
    text-align:center;
    height:100px;
    line-height:100px;
}

/* 2. translate */
.wrap {
    position:absolute;
}

.item{
    position:relative;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%)
}

/* 3. flex-1 */
.wrap{
    display:flex;
}
.item{
    margin:auto;
}

/* 4. flex-2 */
.wrap{
    display:flex;
    align-items:center;
    justify-content:center;
}
.item{}

/* 5. table-cell */
.wrap{
    display:table-cell;
    vertical-align:middle;
    text-align:center;
}
.item{
    display:inline-block;
}

/* 6. margin:auto */
/* 一个有特定宽度的元素，若左右边距为auto，浏览器会取它的容器和该容器的宽度之差，除以2，作为该元素的左边距和右边距 */
.wrap{
    position:relative;
}
.item{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
}
```

## 3. 切三角形
> [纯CSS绘制三角形（各种角度）](https://www.jb51.net/article/42513.htm)

```css
#triangle-up {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
}
```

## CSS 模块化
> [CSS Modules 详解及 React 中实践 #5](https://github.com/camsong/blog/issues/5)
