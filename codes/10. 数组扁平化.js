/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-04-29 15:45:19
 * @LastEditTime: 2021-04-29 16:19:16
 */

/**
 * @description: 
 * @param {Number} depth 指定要提取嵌套数组的结构深度，默认值为 1;
 *                  可传 Infinity ，表示任意深度
 * @return {[]}
 */
Array.prototype.myFlat = function (depth = 1) {
    // 如果传参不是数字，默认打平一层
    if (typeof depth !== 'number') depth = 1;
    // 递归出口
    if (depth <= 0) return this;
    // 1. 存储结果
    let arr = []
    // 2. 遍历元素
    this.forEach(item => {
        if (Array.isArray(item)) {
            // 2.1 如果是数组，接上去
            arr = arr.concat(item.myFlat(depth - 1))
        } else {
            // 2.2 否则，直接加入数组
            arr.push(item)
        }
    })
    return arr
}

const test = [1,2, 3,[4, 5, 6], [7,[8,[9]]]]
let res = test.myFlat('hhhhhhheheheeh')
console.log(res);
