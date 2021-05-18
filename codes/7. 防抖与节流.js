/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-04-29 11:37:16
 * @LastEditTime: 2021-04-29 12:20:54
 */

const debounce = (func, delay) => {
    // 设定一个定时器
    let clock
    return function () {
        /* 
            如果在 delay 时间内还没执行，就清空定时器，并重新设定
        */
        if (clock) clearTimeout(clock)

        clock = setTimeout(() => {
            // 在时间到了之后执行
            func.apply(this, arguments)
            // 置空定时器
            clock = null
        }, delay)
    }
}

const debounceImmediately = (func, delay) => {
    let clock
    return function () {
        if (clock) clearTimeout(clock)
        else func.apply(this, arguments)
        clock = setTimeout(() => {
            func.apply(this, arguments)
            clock = null
        }, delay)
    }
}


const throttle = (func, delay) => {
    let clock // 定时器
    return function () {
        // 如果定时器不为空，表示当前有任务待执行
        if (clock) return;
        // 设定定时器
        clock = setTimeout(() => {
            // 执行函数
            func.apply(this, arguments)
            // 置空定时器
            clock = null
        }, delay)
    }
}

/* 
    立即执行版节流函数，只能立即执行一次
*/
const throttleImmediately = (func, delay) => {
    let clock, startFlag = true
    return function () {
        if (startFlag) {
            func.apply(this, arguments)
            startFlag = false
        }
        if (clock) return;
        clock = setTimeout(() => {
            func.apply(this, arguments)
            clock = null
        }, delay)
    }
}
