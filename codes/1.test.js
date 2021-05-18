/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-04-27 11:29:37
 * @LastEditTime: 2021-05-18 22:03:57
 */

/* 
    构造函数 + 动态原型模式
*/
// #region algo
function Person(name, age) {
    // 构造函数方式（向 this 添加属性）
    this.name = name
    this.age = age

    // 动态原型模式
    if (typeof this.sayName !== 'function') {
        Person.prototype.sayName = function (){
            console.log('my name is ' + this.name);
        }
    }
}
// #endregion algo

/* test */
let zyc = new Person('zyc', 18)
zyc.sayName()