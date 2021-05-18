/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-04-27 11:33:16
 * @LastEditTime: 2021-04-27 11:38:40
 */

/* 
    new 操作符做了以下四件事：
        1. 创建一个空对象
        2. 设置空对象的原型指向（构造函数的 prototype）
        3. 将空对象绑定到 this
        4. 如函数无返回值，则返回 this
*/

// #region algo
function myNew(constructorFn, ...args) {
    const obj = Object.create(constructorFn.prototype)
    const res = constructorFn.apply(obj, args)
    return res !== undefined ? res : obj
}
// #endregion algo

/* 测试 */
function Person(name, age) {
    // 构造函数方式（向 this 添加属性）
    this.name = name
    this.age = age

    // 动态原型模式
    if (typeof this.sayName !== 'function') {
        Person.prototype.sayName = function () {
            console.log('my name is ' + this.name);
        }
    }
}


let zyc = myNew(Person, 'zyc', 18)
zyc.sayName()
console.log(zyc);