(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{633:function(t,r,v){"use strict";v.r(r);var _=v(26),e=Object(_.a)({},(function(){var t=this,r=t.$createElement,v=t._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"常用-易混-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用-易混-api"}},[t._v("#")]),t._v(" 常用/易混 API")]),t._v(" "),v("h2",{attrs:{id:"array"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[t._v("#")]),t._v(" Array")]),t._v(" "),v("h3",{attrs:{id:"迭代方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迭代方法"}},[t._v("#")]),t._v(" 迭代方法")]),t._v(" "),v("p",[t._v("下述遍历中，有些方法需要指定回调函数，参数通常是 "),v("code",[t._v("element, index, array")]),t._v(" 。在执行回调前，数组 "),v("code",[t._v("length")]),t._v(" 属性会被缓存，此后新增的元素不会遍历，如果遍历过程中对数组进行了修改，随后的操作可能发生未知影响。")]),t._v(" "),v("p",[v("strong",[t._v("所以，不要尝试在遍历过程中对原数组进行修改。")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("method")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Array.prototype.forEach()")]),t._v(" "),v("td",[t._v("为数组中的每个元素执行一次回调函数。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Array.prototype.entries()")])]),t._v(" "),v("td",[v("strong",[t._v("返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。")])])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.every()")]),t._v(" "),v("td",[t._v("如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.some()")]),t._v(" "),v("td",[t._v("如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Array.prototype.filter()")])]),t._v(" "),v("td",[t._v("将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.find()")]),t._v(" "),v("td",[t._v("找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Array.prototype.findIndex()")])]),t._v(" "),v("td",[t._v("找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.keys()")]),t._v(" "),v("td",[t._v("返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.map()")]),t._v(" "),v("td",[t._v("返回一个由回调函数的返回值组成的新数组。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Array.prototype.reduce()")])]),t._v(" "),v("td",[t._v("从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.reduceRight()")]),t._v(" "),v("td",[t._v("从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.values()")]),t._v(" "),v("td",[t._v("返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype"),v("a",{attrs:{href:""}},[t._v("@@iterator")])]),t._v(" "),v("td",[t._v("和上面的 values() 方法是同一个函数。")])])])]),t._v(" "),v("h3",{attrs:{id:"访问方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#访问方法"}},[t._v("#")]),t._v(" 访问方法")]),t._v(" "),v("p",[t._v("下面的这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("method")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Array.prototype.concat()")]),t._v(" "),v("td",[t._v("返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Array.prototype.includes()")])]),t._v(" "),v("td",[t._v("判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.join()")]),t._v(" "),v("td",[t._v("连接所有数组元素组成一个字符串。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Array.prototype.slice()")])]),t._v(" "),v("td",[v("strong",[t._v("抽取当前数组中的一段元素组合成一个新数组。")])])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.toSource()")]),t._v(" "),v("td",[t._v("返回一个表示当前数组字面量的字符串。遮蔽了原型链上的 Object.prototype.toSource() 方法。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.toString()")]),t._v(" "),v("td",[t._v("返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 Object.prototype.toString() 方法。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.toLocaleString()")]),t._v(" "),v("td",[t._v("返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 Object.prototype.toLocaleString() 方法。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.indexOf()")]),t._v(" "),v("td",[t._v("返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.lastIndexOf()")]),t._v(" "),v("td",[t._v("返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。")])])])]),t._v(" "),v("h3",{attrs:{id:"修改器方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#修改器方法"}},[t._v("#")]),t._v(" "),v("strong",[t._v("修改器方法")])]),t._v(" "),v("p",[t._v("下面的这些方法会改变调用它们的对象自身的值：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("method")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Array.prototype.copyWithin()")]),t._v(" "),v("td",[t._v("在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.fill()")]),t._v(" "),v("td",[t._v("将数组中指定区间的所有元素的值，都替换成某个固定的值。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.pop()")]),t._v(" "),v("td",[t._v("删除数组的最后一个元素，并返回这个元素。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.push()")]),t._v(" "),v("td",[t._v("在数组的末尾增加一个或多个元素，并返回数组的新长度。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.reverse()")]),t._v(" "),v("td",[t._v("颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.shift()")]),t._v(" "),v("td",[t._v("删除数组的第一个元素，并返回这个元素。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.prototype.sort()")]),t._v(" "),v("td",[t._v("对数组元素进行排序，并返回当前数组。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Array.prototype.splice()")])]),t._v(" "),v("td",[v("strong",[t._v("在任意的位置给数组添加或删除任意个元素。")])])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Array.prototype.unshift()")])]),t._v(" "),v("td",[t._v("在数组的开头增加一个或多个元素，并返回数组的新长度。")])])])]),t._v(" "),v("h3",{attrs:{id:"静态方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#静态方法"}},[t._v("#")]),t._v(" 静态方法")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("method")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("Array.from()")])]),t._v(" "),v("td",[v("strong",[t._v("从类数组对象或者可迭代对象中创建一个新的数组实例。")])])]),t._v(" "),v("tr",[v("td",[t._v("Array.isArray()")]),t._v(" "),v("td",[t._v("用来判断某个变量是否是一个数组对象。")])]),t._v(" "),v("tr",[v("td",[t._v("Array.of()")]),t._v(" "),v("td",[t._v("根据一组参数来创建新的数组实例，支持任意的参数数量和类型。")])])])]),t._v(" "),v("h2",{attrs:{id:"object"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),v("h3",{attrs:{id:"静态方法-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#静态方法-2"}},[t._v("#")]),t._v(" 静态方法")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("method")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Object.assign()")]),t._v(" "),v("td",[v("strong",[t._v("通过复制一个或多个对象来创建一个新的对象。")])])]),t._v(" "),v("tr",[v("td",[t._v("Object.create()")]),t._v(" "),v("td",[v("strong",[t._v("使用指定的原型对象和属性创建一个新对象。")])])]),t._v(" "),v("tr",[v("td",[t._v("Object.defineProperty()")]),t._v(" "),v("td",[v("strong",[t._v("给对象添加一个属性并指定该属性的配置。")])])]),t._v(" "),v("tr",[v("td",[t._v("Object.defineProperties()")]),t._v(" "),v("td",[t._v("给对象添加多个属性并分别指定它们的配置。")])]),t._v(" "),v("tr",[v("td",[t._v("Object.entries()")]),t._v(" "),v("td",[v("strong",[t._v("返回给定对象自身可枚举属性的 [key, value] 数组。")])])]),t._v(" "),v("tr",[v("td",[t._v("Object.freeze()")]),t._v(" "),v("td",[t._v("冻结对象：其他代码不能删除或更改任何属性。")])]),t._v(" "),v("tr",[v("td",[t._v("Object.getOwnPropertyDescriptor()")]),t._v(" "),v("td",[t._v("返回对象指定的属性配置。")])]),t._v(" "),v("tr",[v("td",[t._v("Object.getOwnPropertyNames()")]),t._v(" "),v("td",[t._v("返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。")])]),t._v(" "),v("tr",[v("td",[t._v("Object.getOwnPropertySymbols()")]),t._v(" "),v("td",[t._v("返回一个数组，它包含了指定对象自身所有的符号属性。")])]),t._v(" "),v("tr",[v("td",[t._v("Object.getPrototypeOf()")]),t._v(" "),v("td",[v("strong",[t._v("返回指定对象的原型对象。")])])]),t._v(" "),v("tr",[v("td",[t._v("Object.is()")]),t._v(" "),v("td",[t._v("比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。")])]),t._v(" "),v("tr",[v("td",[t._v("Object.isExtensible()")]),t._v(" "),v("td",[t._v("判断对象是否可扩展。")])]),t._v(" "),v("tr",[v("td",[t._v("Object.isFrozen()")]),t._v(" "),v("td",[t._v("判断对象是否已经冻结。")])]),t._v(" "),v("tr",[v("td",[t._v("Object.isSealed()")]),t._v(" "),v("td",[t._v("判断对象是否已经密封。")])]),t._v(" "),v("tr",[v("td",[t._v("Object.keys()")]),t._v(" "),v("td",[v("strong",[t._v("返回一个包含所有给定对象自身可枚举属性名称的数组。")])])]),t._v(" "),v("tr",[v("td",[t._v("Object.preventExtensions()")]),t._v(" "),v("td",[t._v("防止对象的任何扩展。")])]),t._v(" "),v("tr",[v("td",[t._v("Object.seal()")]),t._v(" "),v("td",[t._v("防止其他代码删除对象的属性。")])]),t._v(" "),v("tr",[v("td",[t._v("Object.setPrototypeOf()")]),t._v(" "),v("td",[v("strong",[t._v("设置对象的原型（即内部 [[Prototype]] 属性）。")])])]),t._v(" "),v("tr",[v("td",[t._v("Object.values()")]),t._v(" "),v("td",[t._v("返回给定对象自身可枚举值的数组。")])])])]),t._v(" "),v("h2",{attrs:{id:"string"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),v("h3",{attrs:{id:"静态方法-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#静态方法-3"}},[t._v("#")]),t._v(" "),v("strong",[t._v("静态方法")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("method")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("String.fromCharCode()")]),t._v(" "),v("td",[t._v("通过一串 Unicode 创建字符串。")])])])]),t._v(" "),v("h3",{attrs:{id:"实例方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[t._v("#")]),t._v(" 实例方法")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("method")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("String.prototype.charAt()")]),t._v(" "),v("td",[t._v("返回特定位置的字符。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.charCodeAt()")]),t._v(" "),v("td",[v("strong",[t._v("返回表示给定索引的字符的Unicode的值。")])])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.codePointAt()")]),t._v(" "),v("td",[t._v("返回使用UTF-16编码的给定位置的值的非负整数。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.concat()")]),t._v(" "),v("td",[t._v("连接两个字符串文本，并返回一个新的字符串。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.includes()")]),t._v(" "),v("td",[t._v("判断一个字符串里是否包含其他字符串。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.endsWith()")]),t._v(" "),v("td",[t._v("判断一个字符串的是否以给定字符串结尾，结果返回布尔值。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.indexOf()")]),t._v(" "),v("td",[t._v("从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.lastIndexOf()")]),t._v(" "),v("td",[t._v("从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.localeCompare()")]),t._v(" "),v("td",[t._v("返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.match()")]),t._v(" "),v("td",[v("strong",[t._v("使用正则表达式与字符串相比较。")])])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.normalize()")]),t._v(" "),v("td",[t._v("返回调用字符串值的Unicode标准化形式。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.padEnd()")]),t._v(" "),v("td",[t._v("在当前字符串尾部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.padStart()")]),t._v(" "),v("td",[t._v("在当前字符串头部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.quote()")]),t._v(" "),v("td",[t._v("设置嵌入引用的引号类型。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.repeat()")]),t._v(" "),v("td",[v("strong",[t._v("返回指定重复次数的由元素组成的字符串对象。")])])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.replace()")]),t._v(" "),v("td",[v("strong",[t._v("被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。")])])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.search()")]),t._v(" "),v("td",[v("strong",[t._v("对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。")])])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.slice()")]),t._v(" "),v("td",[t._v("摘取一个字符串区域，返回一个新的字符串。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.split()")]),t._v(" "),v("td",[t._v("通过分离字符串成字串，将字符串对象分割成字符串数组。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.startsWith()")]),t._v(" "),v("td",[t._v("判断字符串的起始位置是否匹配其他字符串中的字符。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.substr()")]),t._v(" "),v("td",[t._v("通过指定字符数返回在指定位置开始的字符串中的字符。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.substring()")]),t._v(" "),v("td",[v("strong",[t._v("返回在字符串中指定两个下标之间的字符。")])])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.toLocaleLowerCase()")]),t._v(" "),v("td",[t._v("根据当前区域设置，将符串中的字符转换成小写。对于大多数语言来说，toLowerCase的返回值是一致的。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.toLocaleUpperCase()")]),t._v(" "),v("td",[t._v("根据当前区域设置，将字符串中的字符转换成大写，对于大多数语言来说，toUpperCase的返回值是一致的。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.toLowerCase()")]),t._v(" "),v("td",[t._v("将字符串转换成小写并返回。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.toSource()")]),t._v(" "),v("td",[t._v("返回一个对象文字代表着特定的对象。你可以使用这个返回值来创建新的对象。重写 Object.prototype.toSource 方法。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.toString()")]),t._v(" "),v("td",[t._v("返回用字符串表示的特定对象。重写 Object.prototype.toString 方法。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.toUpperCase()")]),t._v(" "),v("td",[t._v("将字符串转换成大写并返回。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.trim()")]),t._v(" "),v("td",[t._v("从字符串的开始和结尾去除空格。参照部分 ECMAScript 5 标准。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.trimStart()")]),t._v(" "),v("td",[t._v("String.prototype.trimLeft()")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.trimEnd()")]),t._v(" "),v("td",[t._v("String.prototype.trimRight()")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype.valueOf()")]),t._v(" "),v("td",[t._v("返回特定对象的原始值。重写 Object.prototype.valueOf 方法。")])]),t._v(" "),v("tr",[v("td",[t._v("String.prototype"),v("a",{attrs:{href:""}},[t._v("@@iterator")])]),t._v(" "),v("td",[t._v("返回一个新的迭代器对象，该对象遍历字符串值的索引位置，将每个索引值作为字符串值返回。")])])])])])}),[],!1,null,null,null);r.default=e.exports}}]);