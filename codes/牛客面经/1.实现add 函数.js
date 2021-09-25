// add 函数，接受任意数量的数字作为输入，返回一个函数
// 该函数接受任意数量的数字，输出为前后输入的所有数字之和

let add = (...args) => {
  return (...args2) => {
    return args.reduce((pre, cur) => pre + cur) + args2.reduce((pre, cur) => pre + cur);
  }
}

let fn = add(1, 2, 3)
let res = fn(4, 5, 6)
console.log(res);