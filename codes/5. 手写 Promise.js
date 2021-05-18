/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-04-27 16:12:49
 * @LastEditTime: 2021-04-29 15:10:59
 */

//#region algo

// 定义 Promise 的三种状态
const PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected'
class Promise {
    /**
     * @description: 
     * @param {Function} exe 初始执行函数，是同步的
     * @return {*}
     */
    constructor(exe) {
        // 初始化一些数据
        this.data = null
        this.callbacks = []
        this.status = PENDING

        const resolve = (value) => {
            if (this.status !== PENDING) return;
            this.status = FULFILLED
            this.data = value
            this.callbacks.forEach(cb => {
                setTimeout(() => cb.onFulfilled())
            })
        }

        const reject = (reason) => {
            if (this.status !== PENDING) return;
            this.status = REJECTED
            this.data = reason
            this.callbacks.forEach(cb => {
                setTimeout(() => cb.onRejected())
            })
        }

        try {
            exe(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    then(onFulfilled, onRejected) {
        // 如果没有传相应回调函数，则给其一个默认函数，使得 then 链能够往下传
        onFulfilled = typeof onFulfilled === 'function' ?
            onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ?
            onRejected : reason => {
                throw reason
            }

        return new Promise((resolve, reject) => {
            // 工具函数
            const handler = (cb) => {
                try {
                    // 获取回调结果
                    const res = cb(this.data)
                    // 如果返回值是 Promise ,则进行链式调用
                    if (res instanceof Promise) {
                        res.then(resolve, reject)
                    } else {
                        // 否则, 直接返回结果
                        resolve(res)
                    }
                } catch (e) {
                    reject(e)
                }
            }

            if (this.status === FULFILLED) {
                setTimeout(() => handler(onFulfilled))
            } else if (this.status === REJECTED) {
                setTimeout(() => handler(onRejected))
            } else {
                // 如果状态还未改变, 先把回调函数保存起来
                this.callbacks.push({
                    onFulfilled: () => {
                        handler(onFulfilled)
                    },
                    onRejected: () => {
                        handler(onRejected)
                    }
                })
            }
        })
    }

    // catch 是 then 的简版
    catch (onRejected) {
        return this.then(null, onRejected)
    }

    static resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(resolve, reject)
            } else {
                resolve(value)
            }
        })
    }

    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    /**
     * @description: 
     * @param {[Promise]} promises
     * @return {Promise}
     */
    static all(promises) {
        return new Promise((resolve, reject) => {
            const n = promises.length
            const res = new Array(n) // 存储结果
            let count = 0 // 计数器
            promises.forEach((promise, index) => {
                Promise.resolve(promise)
                    .then(
                        value => {
                            res[index] = value
                            count++
                            if (count === n) resolve(res)
                        },
                        reason => reject(reason)
                    )
            })

        })
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            promises.forEach(promise => {
                Promise.resolve(promise).then(resolve, reject)
            })
        })
    }
}
//#endregion algo

const test = () => {
    return new Promise((resolve, reject) => {
        console.log(1);
        // throw 7
        resolve(2)
        reject(3)
    })
}


const promise1 = test()
promise1.then(() => console.log(4))
    .then()
    .catch(e => console.log(e))
console.log(5);