# BOM

## 事件监听
为元素的某个事件指定事件处理程序有以下几种方式。

### HTML 方式
内联的方式，在元素标签上添加属性和事件处理程序。

```html
<button onclick='handler();' id='btn'></button>
<script>
    function handler() {
        // do sth
    }
</script>
```

以这种方式指定的事件处理程序，解析时会创建一个函数来封装 `onclick` 属性的值，该函数有两个局部变量， `event` 表示事件对象， `this` 表示事件的目标元素。另外，该函数的作用域链被扩展了， `document` 和元素自身的成员都可以被当作局部变量来访问，如果该元素为表单输入框，则作用域链中还包含表单元素。这意味着事件处理程序可以更方便地访问自己的属性。

上述定义事件处理程序的方式，在触发时，实际执行以下函数：

```js
// 自动创建的事件处理函数
function() {
    // 自动创建的局部变量
    console.log(event) // 事件对象
    console.log(this) // 目标元素

    // 扩展的作用域链
    with (document) {
        with (this.form) {/* 如果有表单 */
            with (this) {
                // 由于作用域链的扩展，这里可以直接使用上述元素的相关成员
                console.log(id) // btn: 元素的 id 名

                // 执行属性值
                handler()
            }
        }
    }
}
```
缺点：

- **时差问题**：事件定义后于页面渲染，当用户在页面解析出事件处理函数之前点击按钮，就会引发错误
- **浏览器解析差异**：不同 JavaScript 引擎对事件处理程序的作用域链扩展策略可能不一致
- **紧耦合**

### DOM0 级
获取元素指针，为元素的**事件处理属性**赋值。

```js
// 1. 获取元素指针
const btn = document.getElementById('myBtn')
// 2. 为元素数据处理属性赋值
btn.onclick = function(e) {
    // do sth

    console.log(this) // 该元素
}

// 移除事件处理程序
btn.onclick = null
```
缺点

- 只支持给同一个事件添加一个处理程序
- 后续赋值会覆盖前一个事件监听

### DOM2 级
获取元素，**调用元素的事件方法**添加监听。
```js
// 1. 获取元素
const btn = document.getElementById('myBtn')

function handler(e) {
    // do sth
}

// 2. 调用元素的方法
btn.addEventListener('click', handler, false)

// 移除事件处理程序
btn.removeEventListener('click', handler, false)
```
优点

- 可以添加多个事件处理程序。

注意事项

- 使用匿名函数作为事件处理程序时，无法移除
- 第三个参数为是否在捕获阶段调用， `false` 为在冒泡阶段调用，通常建议添加到冒泡阶段
- 把第三个参数设为 `true` 可以在事件到达目标对象之前进行拦截


### 冒泡与捕获
一个事件触发的阶段分为 `捕获阶段 -> 目标阶段 -> 冒泡阶段`。

捕获阶段可以进行事件的拦截，冒泡阶段可以进行事件的委托。

> 随着 Chrome 的版本迭代，这个事件触发的顺序可能发生变化，详见 [这篇文章](https://juejin.cn/post/6965682915141386254)。

#### 事件委托

利用事件冒泡，只指定一个事件处理程序，即可<mark>管理某一类型的所有事件</mark>。如为整个页面指定一个 `click` 事件处理程序，则页面中任意元素的点击事件都会通过冒泡触发到这个事件处理程序。

只需要在处理程序中对事件对象的目标对象 `event.target` 的相关属性进行判断，即可为各元素实现个性化监听。

**mouseover/mouseout 与 mouseenter/mouseleave**

- mouseover/mouseout 是冒泡事件，mouseenter/mouseleave 是非冒泡事件
- 需要为多个元素添加鼠标事件时，建议 mouseover/mouseout ，可使用事件委托


## 存储方案

### cookie 与 session
因为 http 协议是无状态的，两者用来确认用户身份，前者保存在浏览器端，后者在服务端。

- `cookie` 一般随浏览器关闭而清除，设置过期时间的除外
- 单个 `cookie` 不能超过 `4kb`（每次请求都需要携带 cookie ）

### sessionStorage与 localStorage
> [sessionStorage —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)
> 
> [sessionstorage：本地临时存储 ——讲的两个应用场景挺有意思](https://www.cnblogs.com/zhangceblogs/p/8980957.html)

两者类似，区别在于，前者会在页面会话结束后清除，后者没有过期时间设置，除非主动删除。

**`sessionStorage` 将数据保存在 `session` 对象中**。所谓 `session` ，是指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间，也就是用户浏览这个网站所花费的时间。 session 对象可以用来保存在这段时间内所要求保存的任何数据

**`localStorage` 将数据保存在客户端本地的硬件设备**(通常指硬盘，也可以是其他硬件设备)中，即使浏览器被关闭了，该数据仍然存在，下次打开浏览器访问网站时仍然可以继续使用。

- 一般为 `5MB`
- 键值对以**字符串的形式**存储

同源文档可访问 localStorage，sessionStorage 只允许同一窗口下的文档访问。

:::tip 什么时候算同一会话
> [实际中使用 Javascript 中 sessionStorage 的注意事项](https://blog.csdn.net/weixin_43459866/article/details/111312868)


- 页面会话在浏览器打开期间一直保持，重新加载或恢复页面仍会保持原来的页面会话
- 同一链接，打开多次，sessionStorage 不同
- 
- 关闭对应浏览器窗口（Window）/tab，会清除对应的 sessionStorage

:::

### IndexedDB
> [浏览器数据库 IndexedDB 入门教程——阮一峰](http://www.ruanyifeng.com/blog/2018/07/indexeddb.html)

IndexedDB 是一种在用户浏览器中持久存储数据的方法，对于存储大量数据的应用程序（例如借阅库中的 DVD 目录）和不需要持久 Internet 连接的应用程序（例如邮件客户端、待办事项列表或记事本）很有用。

**IndexedDB 是一种底层 API ，用于在客户端存储大量的结构化数据**。该 API 使用索引实现对数据的高性能搜索。

- 能够存储大量、结构化数据
- key-value ，是面向对象的

### 对比

![](./imgs/web01.png)

## 发起请求
### Ajax

### Fetch
> [传统 Ajax 已死，Fetch 永生 #2](https://github.com/camsong/blog/issues/2)
