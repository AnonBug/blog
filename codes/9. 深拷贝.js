/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-04-29 15:28:46
 * @LastEditTime: 2021-04-29 15:46:39
 */

const copyDepth = (target, map = new WeakMap()) => {
    // 对于不是对象的，直接返回
    if (typeof target !== 'object') return target;
    // 处理 null 这个漏网之鱼
    if (target === null) return null;

    // 处理循环引用的问题（如函数引用其自身）
    if (map.has(target)) return map.get(target);
    // 1. 使用变量保存待复制的值（判断是使用数组还是对象）
    const cloneTarget = Array.isArray(target) ? [] : {}
    // 2. 使用 weakmap 保存已拷贝的对象，以实现循环引用
    map.set(target, cloneTarget)
    // 3. 遍历键值，进行拷贝
    for (const [k, v] of Object.entries(target)) {
        // 递归调用
        cloneTarget[k] = copyDepth(v, map)
    }
    return cloneTarget
}

/* 
    测试
*/
let obj = {
    key: '我是重复对象',
    v: 'hhh'
}
let test = {
    a: '123',
    b: [1, 2, 3],
    c: {
        a: '123',
        b: obj
    },
    d: obj,
    e:() => {}
}
test.test = test

let res = copyDepth(test)
res.d.v = 'hehehe'
console.log(res)