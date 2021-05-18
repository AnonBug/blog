/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-04-29 12:23:23
 * @LastEditTime: 2021-04-29 12:25:59
 */

/* 
    惰性函数是只运行一次的函数，多用于判断环境等。
    在第一次判断后，后续再执行该函数，无需执行判断分支
*/

const lazyFn = () => {
    if (/* 分支一 */) {
        // 在进入分支后，函数本身被改变了
        lazyFn = fn1
    } else if (/* 分支二 */) {
        lazyFn = fn2
    } else {
        lazyFn = fn3
    }
}