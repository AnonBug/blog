/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-04-27 11:42:02
 * @LastEditTime: 2021-04-27 12:03:19
 */

/* 
    三者是函数的实例方法。都是改变原函数中 this 的指向，以达到函数复用的目的。
    - call 和 apply 是立即执行， bind 是返回一个改变了 this 指向的可执行函数
    - call 的传参是 列表 ， apply 传参是数组
    - bind 传参是列表

    如果未定义 this 指向，则指向 window
*/

// #region algo
Function.prototype.myCall = function (context, ...args) {
    /* 
        手写思路就是给待绑定的环境添加一个独一无二的属性，指向当前的函数实例；
        然后在该环境下调用函数实例，则函数内部的 this 指向就变成了该环境
        注意使用完毕后要将其删除，以免造成内存泄漏
    */
    if (typeof context === 'undefined' || context === null) {
        context = window
    }
    const fnSymbol = Symbol()
    // 这里的 this 是这个函数实例对象
    context[fnSymbol] = this
    
    const res = context[fnSymbol](...args)
    delete context[fnSymbol]
    return res
}

/* 
    myApply 与 myCall 写法基本相同，唯一不同在传参差异
*/
Function.prototype.myApply = function (context, ...args) {
    if (typeof context === 'undefined' || context === null) {
        context = window
    }
    const fnSymbol = Symbol()
    context[fnSymbol] = this
    const res = context[fnSymbol](args)
    delete context[fnSymbol]
    return res
}

/* 
    bind 函数不直接执行，而是返回一个可执行的函数
    (这里取个巧，直接调用前面写好的 apply / call 函数)
*/
Function.prototype.myBind = function(context, ...args) {
    return () => {
        return this.apply(context, args)
    }
}
// #endregion algo


let zyc = {
    'name': 'zyc',
    'sayName': function () {
        console.log(this.name);
    }
}
zyc.sayName()
let zs = {
    name:'zs'
}
let res = zyc.sayName.myBind(zs)
console.log(res());

