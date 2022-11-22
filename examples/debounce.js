export function debounce(fn, delay) {
  let timer = null
  // 所以这个函数就可以使用...运算符收集js自动添加的参数到一个数组中
  return function _debounce(...arg) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // 通过apply绑定this和传递参数，apply第二个参数正好是传数组嘛
      fn.call(this, arg)
    }, delay)
  }
}