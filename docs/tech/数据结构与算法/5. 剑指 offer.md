# 剑指 offer
### replace 与正则匹配
> [replace——mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E4%BD%BF%E7%94%A8%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0)

`replace(pattern, replacement)` 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。

#### 模式
模式可以是纯字符串，也可以是正则。

正则的一些规则：
- /正则/g : 全局匹配
- /正则/i: 忽略大小写

#### 替换值
替换值可以是纯字符串，其中可以有一些特殊的变量：

- $$ : $ 字符
- $& : 匹配到的字符串
- $` ：匹配字符串前面的部分
- $' ：匹配字符串后面的部分
- $n ：正则表达式中 括号分组匹配到的内容，从 1 开始计数

```js
// 交换两个单词
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1"); // Smith, John
```

替换值也可以是一个函数 `fn($&, $1, $2, ...)` 。

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%
```


