function deepClone(target) {
  let result;
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      result = []
      for (let i in target) {
        result.push(deepClone(target[i]))
      }
    } else if (target === null) {
      result = null
    } else if (target.constructor === RegExp) {
      result = target
    } else {
      result = {}
      for (let i in target) {
        result[i] = deepClone(target[i])
      }
    }
  } else {
    result = target
  }
  return result
}

// 测试
let obj = { a: { b: 2 }, c: 8 }
let obj2 = deepClone(obj)
obj2.a.b = 6
console.log(obj, obj2) // { a: { b: 2 }, c: 8 } { a: { b: 6 }, c: 8 }
