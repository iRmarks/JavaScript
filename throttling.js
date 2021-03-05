// 节流
function throttling(fn, wait = 500, isImmediate = false) {
  var flag = true;
  var timer = null;
  if (isImmediate) {
    return function () {
      if (flag) {
        fn.apply(this, arguments);
        flag = false;
        timer = setTimeout(() => {
          flag = true
        }, wait)
      }
    }
  }
  return function () {
    if (flag == true) {
      flag = false
      var timer = setTimeout(() => {
        fn.apply(this, arguments)
        flag = true
      }, wait)
    }
  }
}
