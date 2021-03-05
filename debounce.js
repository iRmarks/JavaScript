// 防抖
function debounce(fn, wait = 500, isImmediate = false) {
  var timerId = null;
  var flag = true;
  if (isImmediate) {
    return function () {
      clearTimeout(timerId);
      if (flag) {
        fn.apply(this, arguments);
        flag = false
      }
      timerId = setTimeout(() => {
        flag = true
      }, wait)
    }
  }
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}
