# TypeScript 基础

> [TypeScript 入门教程](https://ts.xcatliu.com/)
> 
> [「1.8W字」2020不可多得的 TS 学习指南——阿宝哥](https://mp.weixin.qq.com/s/3X9FIP0PgNLSEfzhSx_Srg)
>
> [Awesome TypeScript——阿宝哥](https://github.com/semlinker/awesome-typescript)

## 1. 基础类型

### 1.1 never

never 类型表示的是那些永不存在的值的类型，可以利用 never 类型的特性来实现全面性检查。

```ts
type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}
```

在 else 分支里面，我们把收窄为 never 的 foo 赋值给一个显示声明的 never 变量。因为 foo 的类型被定义为 string 或 number，永远不会走到 else 分支。

如果有一天，其它同事为 Foo 增加了 boolean 类型，且传入了 controlFlowAnalysisWithNever 函数，就会走到 else 分支，且把 boolean 类型的值赋值给了 never 类型，TypeScript 在编译时就会报错。通过这种方式，使函数总是确保覆盖了所有可能类型。

## 2. 高阶类型

### 2.1 联合类型

通过 `|` 运算符可以将现有的多种类型联合到一起成为一种类型，其示例包含了所有类型中的某一项。

#### 字面量类型

约束取值只能是某几个值中的一个。

```ts
let num: 1 | 2 = 1;
let event:'click' | 'scroll' | 'mousemove' = 'click';
```

#### 类型别名

可以为联合类型取一个别名：

```ts
type EventName = 'click' | 'scroll' | 'mousemove';
let event: EventName = 'scroll';
```

### 2.2 交叉类型

通过 `&` 运算符可以将现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。

```ts
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };
type Point = PartialPointX & PartialPointY;

let point: Point = {
  x: 1,
  y: 1
}
```

#### 同名属性的合并

在合并多个类型的过程中，刚好出现某些类型存在相同的成员，但对应的类型又不一致时，会分情况处理。

如果同名属性中某一个是基础类型，则合并后该属性类型为 never。

如果同名属性都是非基础数据类型，则该属性也会自动进行交叉合并。

### 2.3 使用接口定义类型

在面向对象语言中，**接口是对行为的抽象，而具体行动需要由类去实现**。

TypeScript 中很重要的用途是**定义对象的形状**。

```ts
interface Person {
  // 常规属性
  name: string;
  age: number;
  // 只读属性
  readonly id: string;
  // 可选属性
  age?: number;
  // 任意属性
  [propName: string]: any;
}
```

### 2.4 使用别名定义类型

类型别名用来给一个类型起个新名字。也可以用来定义对象的形状。

```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
type Person = {
  name: string;
  age: number;
}
```

### 2.5 type 与 interface 的区别

1. 接口可以定义多次，会被自动合并为单个接口

```ts
interface Point { x: number; }
interface Point { y: number; }

const point: Point = { x: 1, y: 2 };
```

2. 类可以实现 type 和 interface，但是不能实现 type 定义的联合类型

```ts
interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x = 1;
  y = 2;
}
```
3. 二者都可以被扩展，但方式不同
   - type 使用 & 扩展
   - interface 使用 extends 关键字
   - interface 可以扩展 type，type 不能扩展 interface

4. interface 只用来定义对象或函数签名，type 可定义基础类型、联合类型等

```ts
// 定义基础类型
type Name = string;

// 定义联合类型
type PartialPoint = PartialPointX | PartialPointY;

// 定义元组
type Data = [number, string];
```

## 3. 函数

### 3.1 函数重载

重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

比如，我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。

利用联合类型，我们可以这么实现：

```ts
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```
然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。

这时，我们可以使用重载定义多个 reverse 的函数类型：

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。

> TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。

## 4. 更多特性


### 4.1 类

```ts
class Greeter {
  // 静态属性
  static cname: string = "Greeter";
  // 成员属性
  greeting: string;
  // 私有属性
  #id: string;


  // 构造函数 - 执行初始化操作
  constructor(message: string) {
    this.greeting = message;
  }

  // 静态方法
  static getClassName() {
    return "Class name is Greeter";
  }

  // 成员方法
  greet() {
    return "Hello, " + this.greeting;
  }

  /* 访问器 */
  private _fullName: string; // 私有属性

  // getter 方法读取私有属性
  get fullName(): string {
    return this._fullName;
  }

  // setter 方法设置私有属性，可以添加拦截判断
  set fullName(newName: string) {
    if (passcode && passcode == "Hello TypeScript") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }

  /* 类中方法的重载（重载作用只有一个：提供 coding 过程中的代码提示） */
  getProducts(): void; // 方法签名 1
  getProducts(id: number): void; // 方法签名 2
  getProducts(id?: number) { // 方法的具体实现
    if(typeof id === 'number') {
        console.log(`获取id为 ${id} 的产品信息`);
    } else {
        console.log(`获取所有的产品信息`);
    }  
  }
}

let greeter = new Greeter("world");
```

### 4.2 断言

TypeScript 中有类型断言、非空断言、确定赋值断言。

**这些断言归根到底是为了保证一些不符合 TypeScript 类型规则的代码，能够正常通过编译，但并不能保证代码能够正确执行。**

```ts
function myFunc(maybeString: string | undefined | null) {
  // 传参为联合类型，调用时只使用某一种子类型的方法
  console.log(maybeString.length) // 编译报错
  console.log(maybeString!.length) // 编译通过
}
```

像上面这种情况，传参可能为 string、undefined、null 中的一个，函数体中调用只有 string 类型才有的 length 属性，TypeScript 检测到报错风险，编译报错。如果明确我们往这个函数传的参数就是 string 类型，就可以使用非空断言 `maybeString!` 过滤掉 undefined 和 null 类型。 

但是，这种操作只能保证编译通过，如果在执行中传入了 null，代码会直接报运行时错误。如果要避免运行出错，还是要这么做：

```ts
console.log(maybeString?.length);
```

### 4.3 类型守卫

类型守卫是在变量类型不明确时，需要执行一些明确针对某些类型的操作时，通过某些运行时语句判断变量类型。这种判断主要思想有检测属性、原型、数据类型等。

- in 关键字
- typeof 关键字
- instanceof 关键字
- is 关键字

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

### 4.4 声明文件
> [声明文件 —— TypeScript 入门教程](https://ts.xcatliu.com/basics/declaration-files.html)

声明文件是对所提供库函数的解释说明，通过它，ts 编译器才能可以实现对代码的补全、提示功能。

### 4.5 泛型

泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。

### 4.6 装饰器


### 4.7 关于 __esModule
> [stackflow 中的解释](https://stackoverflow.com/questions/50943704/whats-the-purpose-of-object-definepropertyexports-esmodule-value-0)
> [__esModule 的作用](https://toyobayashi.github.io/2020/06/29/ESModule/)

`__esModule` 是用来兼容 ES 模块导入 CommonJS 模块的`默认导出`方案。添加这个标识后，就能够使用 es 的模块化语法导入 CommonJS 模块。这种处理是由打包工具来实现的，如 webpack 或 typescript 编译器。

```js
// commonjs-module.js
Object.defineProperty(exports, '__esModule', { value: true })
// ...
exports['default'] = cm;
```

```js
// es.js
import cm from 'commonjs-module';
```

## 5. 工程化
### 5.1 tsconfig.json

### 5.2 工具集

> [TypeScript Playground](https://www.typescriptlang.org/play/)

> [ESLint](https://typescript-eslint.io/)

> [TypeDoc](https://typedoc.org/)

> [TypeScript to UML](https://tsuml-demo.firebaseapp.com/)
