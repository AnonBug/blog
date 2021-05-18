/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-04-27 12:35:31
 * @LastEditTime: 2021-04-27 16:12:08
 */

// 父类
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
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// 要实现继承的子类
function Student(name, age, otherProperty) {
    // 调用父类构造函数
    Person.call(this, name, age)
    this.otherProperty = otherProperty
}
// 实现原型链继承
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

let zyc = new Student('zyc', 18, 123)
console.log(zyc);
zyc.sayName()
console.log(zyc instanceof Person);