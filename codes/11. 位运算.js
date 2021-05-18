/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-05-06 13:04:00
 * @LastEditTime: 2021-05-06 13:19:36
 */

// [深入研究js中的位运算及用法 ](https://www.cnblogs.com/mopagunda/p/11221928.html)
// [巧用JS位运算](https://blog.csdn.net/qq_39207948/article/details/80507613)

/* 
    按位或 |
*/

/**
 * @description: 使用 或运算 进行取整
 * @param {*} num
 * @return {*}
 */
const toInt = num => {
    return num | 0
}

/* 
    按位与
*/

/**
 * @description: 使用 与运算 判断是否奇偶
 * @param {*} num
 * @return {*}
 */
const isOdd = num => {
    return num & 1 === 1
}

/**
 * @description: 使用 异或运算 切换变量 0和1
 * @param {*} num
 * @return {*}
 */
const toggle = num => {
    return num ^ 1
}

// 交换两个变量的值
let a = 1, b = 2
a = a ^ b
b = a ^ b
a = a ^ b

/**
 * @description: 使用 非运算 取整
 * @param {*} num
 * @return {*}
 */
const toFloor = num => {
    return ~~num
}