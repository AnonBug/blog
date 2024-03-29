# js 基础

## 1. 数据类型与类型检测

### 1.1 基础数据类型

- 原始值：
    - Number
        - 能表示的最大数字：`-(2^53 - 1) ~ 2^53 - 1`
    - String
    - Boolean
    - Symbol
    - undefined
    - null
- 引用值
    - Object

#### [falsy 值](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)

falsy 值 (虚值) 是在 Boolean 上下文中认定为 false 的值。

JavaScript 在需要用到布尔类型值的上下文中使用强制类型转换(Type Conversion )将值转换为布尔值，例如条件语句和循环语句。

js 中有以下八个虚值：

值 | 说明
--- | ---
false |	false 关键字
0 |	数值 zero 	
-0 |	数值 负 zero 	
0n |	当 BigInt 作为布尔值使用时, 遵从其作为数值的规则. 0n 是 falsy 值.
"", '', `` 	| 这是一个空字符串 (字符串的长度为零). JavaScript 中的字符串可用双引号 "", 单引号 '', 或 模板字面量 `` 定义。
null |	null - 缺少值
undefined |	undefined - 原始值
NaN | NaN - 非数值

### 1.2 typeof
> [浅谈 instanceof 和 typeof 的实现原理](https://blog.csdn.net/qq_38722097/article/details/80717240)

**`typeof` 适合检测原始值（除了 null）和函数对象。**

#### 检测原理
`js` 在底层存储变量的时候，会在变量的机器码的低位 `1-3` 位存储其类型信息

- 对象：000
- 浮点数：010
- 字符串：100
- 布尔值：110
- 整数：1
- null：所有机器码均为 0
- undefined：用 −2^30 整数来表示

由上可以看出，由于 null 的所有机器码均为 0 ，因此直接被当做了对象来看待。

```js
typeof null === 'object'
typeof Fn === 'function'// ( Fn 是一个函数)
typeof [] === 'object'//（数组解析为 object ）
```
### 1.3 instanceof
`instanceof` 运算符是通过**判断该对象在原型链上是否存在一个构造函数的 `prototype` 属性**，主要用来检测对象的具体类型。

```js
// 使用场景
let a = new Array(3)
a instanceof Array // true
```

### 1.4 Object.prototype.toString()
> [使用 toString 检测对象类型——MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#using_tostring()_to_detect_object_class)

`Object` 定义了一个实例方法`toString()` 返回 `"[object type]"`，其中 type 是对象的类型，可以用来进行对象类型检测。

最好使用最原始的 `toString` 进行检测，因为该方法可能被其子类重写。

```js
Object.prototype.toString.call(1) // "[object Number]"
Object.prototype.toString.call('hi') // "[object String]"
Object.prototype.toString.call({a:'hi'}) // "[object Object]"
Object.prototype.toString.call([1,'a']) // "[object Array]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(() => {}) // "[object Function]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(Symbol(1)) // "[object Symbol]"
```

## 2. 执行上下文与作用域链

变量或函数的上下文决定了它可以访问哪些数据，上下文在其所有代码都执行完毕后会被销毁，包括定义其中的所有变量与函数。

:::tip
每个上下文都有与之关联的**变量对象**，包含该上下文内部的所有变量与函数（如果上下文为函数对象，则函数的参数被认为是其变量的一部分），如浏览器的全局上下文为 `window` 。
:::

上下文的代码在执行时，会创建**作用域链**，该作用域链决定各级上下文中的代码在访问变量和函数时的顺序： `当前上下文 -> 外层上下文 -> ...... -> 全局上下文` 。

### 2.1 如何确定使用哪个变量？

代码执行时，沿着**作用域链**逐级搜索变量名称。即内部上下文可以通过作用域链访问外部上下文的一切变量与函数，而外部上下文无法访问内部上下文的东西。

当执行到外部上下文时，外部上下文的**变量对象**为其作用域链最前端，其内部上下文的变量对象根本不在其作用域链上。

### 2.2 作用域增强与变量声明
`try/catch` 语句中的 `catch 块`、 `with 语句`、`块级作用域` 会被添加到作用域链的最前端。

- 使用 `var` 声明变量时，其会被自动添加至**最接近的上下文**（函数中最接近的上下文即是当前函数）。
- `let` 声明变量的作用域由最近的一对 `{}` 界定，如 `if` 块、 `while` 块、 `function` 块、甚至单独的 `{}` 块都是 `let` 变量的作用域。
- `const` 声明变量作用域与 `let` 同，其区别在于 `const` 声明时必须赋值，且不能再次赋值。**这种限制只应用到原始值类型或对象的引用地址，而对象的属性则不受控制**，可通过 `Object.freeze({})` 冻结对象。

>  [Object.freeze() 方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删·除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。
> 
> `freeze()` 返回和传入的参数相同的对象。

### 2.3 暂时性死区
块级作用域中存在 `let` 或 `const` 命令时，其声明的变量就绑定了这个块级区域，不再受外部影响。

```js
var tmp = 123;
if (true) {
    /* 
        由于 tmp 变量在后面存在 let 声明，故自该块级作用域起就存在 tmp 的暂时性死区；
        在到达声明之前使用 tmp ，就会报 ReferenceError ，
        尽管外部已声明过 tmp 变量，由于暂时性死区不受外部影响，所以依旧报错。
    */
    tmp = 'abc'; // ReferenceError
    let tmp;
}
```

### 2.4 变量提升
> [变量提升 Hosting——MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)

- 函数提升的优势之一，可以在函数声明之前使用它。
- **函数比普通变量的优先级高，它会比普通变量提升到更靠前的位置！**
- 对于一般变量，只提升声明，不提升初始化。

:::warning
初始化之前使用变量，不会报变量引用错误 `ReferenceError` ，但值为 `undefined` 。
:::

## 3. this 与 arguments
每个函数在被调用时，会自动创建两个特殊变量： `this` 、 `arguments` 。（箭头函数中没有这两个变量！）

### 3.1 this 指向问题

this 指向函数的执行环境。 this 根据运行环境的改变而改变，只有在函数执行时才能最终确定其环境对象。

### 3.2 arguments 问题

arguments 是一个类数组，不能使用数组方法，不过可以将其转为真正的数组。

```js
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
const args = [...arguments];
```

> 内部函数想要访问包含在其作用域链上的 this 或 arguments 对象，需要先将其引用保存到另一个对象。

## 4. 箭头函数
> [5种应该避免使用箭头函数的情况](https://blog.csdn.net/Fundebug/article/details/89914502)
> 
> [箭头函数的几个使用注意点](https://www.jianshu.com/p/42055084f817)

普通的函数里面的 this 是指向**运行时**的作用域，箭头函数中的 this 是绑定**定义时**所在的作用域的。

- 避免在定义对象方法时使用（不存在 `prototype` 属性）
- 避免在动态上下文中的回调函数里使用
- 避免在需要 `arguments` 上使用（可使用 `...rest`来收集参数）
- 不能作为构造函数使用（没有 `new.target` ）
- 不能用作 `Generator` 函数（也因此不能使用 `async/await` 语法糖）
- 没有原型（不存在 `prototype` 属性）
- `call/apply/bind` 方法无法改变箭头函数中 `this` 的指向

> `new.target` 是 ES6 新引入的属性，普通函数如果通过 new 调用， `new.target` 会返回该函数的引用。

## 5. call 、 apply 、 bind
> [JavaScript 中 call()、apply()、bind() 的用法——菜鸟教程](https://www.runoob.com/w3cnote/js-call-apply-bind.html)

Function 原型方法，作用是**重新定义现有函数的执行环境**，即函数执行过程中的 `this` 指向，以实现函数复用。

- 三个方法的第一个参数都是重新指定的函数调用对象。
  - 如果未指定，非严格模式下指向 `window`
- `call` 方法和 `apply` 方法都是立即执行，区别在于传参形式的不同：
  -  `call` 方法传入参数**列表**
  -  `apply` 方法传入参数**数组**
- **`bind` 方法返回一个重新定义了执行环境的函数**，其传参方式与 `call` 方法相同。

> bind 方法使用到了闭包，把定义时传入的 this 对象存在外包函数里，然后返回一个使用了该 this 对象的匿名函数。

## 6. 运算符

### 6.1 === 运算符的判定流程

- **类型判断**
  - 类型不同为 false
- **null || undefined**
  - true
- **boolean**
  - 两值同为 true 或者 false，它们相等
- **number**
  - 数值相等，他们相等
  - -0等于0
  - 如果其中有一个是NaN，它们不相等
- **string**
  - 相同位置包含相同的16位值，他它们相等
  - 如果在长度或者内容上不等，它们不相等
  - 显示结果相同但是编码不同和，不相等
- **引用类型**
  - 指向相同对象、数组、函数，它们相等
  - 如果指向不同对象，他们不相等

### 6.2 0.1 + 0.2 !== 0.3
> [JavaScript 浮点数陷阱及解法 #9](https://github.com/camsong/blog/issues/9)

```js
// 0.1 和 0.2 都转化成二进制后再进行运算
0.00011001100110011001100110011001100110011001100110011010 +
0.0011001100110011001100110011001100110011001100110011010 =
0.0100110011001100110011001100110011001100110011001100111

// 转成十进制正好是 0.30000000000000004
```

### 6.3 == 运算符

等于运算符（==）检查其两个操作数是否相等，并返回布尔值。

与严格相等运算符（===）不同，它会尝试强制类型转换并且比较不同类型的操作数。

使用 [抽象相等比较算法](https://262.ecma-international.org/5.1/#sec-11.9.3) 来比较左右变量。

- **如果两个操作数都是对象**
  - 仅当两个操作数都引用同一个对象时才返回 `true`
- **如果一个操作数是 `null`，另一个操作数是 `undefined`**
  - 返回 `true`
- **如果两个操作数是不同类型的**
  - 尝试在比较之前将它们转换为相同类型：
  - 当数字与字符串进行比较时，会尝试将字符串转换为数字值。
  - 如果操作数之一是 Boolean，则转换布尔值
    - 如果是 true，则转换为1。
    - 如果是 false，则转换为0。
  - 如果操作数之一是对象，另一个是数字或字符串
    - 尝试使用对象的 `valueOf()` 和 `toString()` 方法将对象转换为原始值。
- **操作数具有相同的类型**
  - String
    - 仅当两个操作数具有**相同顺序的相同字符**时才返回 true
  - Number
    - 仅当两个操作数具有**相同的值**时才返回 true
    - +0 并被 -0 视为相同的值
    - 如果**任一操作数为NaN，则返回 false**。
  - Boolean
    - 仅当操作数为两个 true 或两个 false 时才返回 true

> 当然，**最好是使用严格等于**，以上这些就完全不用了解

## 7. 严格模式

### 7.1 设置

严格模式是为JavaScript 定义了一种不同的解析与执行模型。在严格模式下，ECMAScript 3 中的一些不确定的行为将得到处理，而且对某些不安全的操作也会抛出错误。要在整个脚本中启用严格模式，可以在顶部添加如下代码 `use strict;` 。

### 7.2 作用

- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
- 消除代码运行的一些不安全之处，保证代码运行的安全
- 提高编译器效率，增加运行速度；
- 为未来新版本的Javascript做好铺垫。

### 7.3 严格选项

- 没有声明就赋值的变量
- this 不可以指向全局变量
- 报错
- 重名属性
- 函数的重名参数
