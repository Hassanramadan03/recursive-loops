

const map = (arr, cb, i = 0) => {
    const isAsync = cb.constructor.name === 'AsyncFunction'
    arr[i] = cb(arr[i], i, arr); ++i;
    arr = isAsync ? Promise.all(arr) : arr
    return i < arr.length ? map(arr, cb, i) : arr
  }
  
  const forEach = (arr, cb, i = 0) => {
    const isAsync = cb.constructor.name === 'AsyncFunction'
    arr[i] = cb(arr[i], i, arr); ++i;
    arr = isAsync ? Promise.all(arr) : arr
    return i < arr.length ? forEach(arr, cb, i) : arr
  }
  exports.map = map
  exports.forEach = forEach
  
  
  