
// 定义一个翻转字符串的方法
const reverse = _ => {
  let n = ''
  for (let i = _.length - 1; i >= 0; i--) {
    n += _[i]
  }
  return n
}

const reverseStr = (str, k) => {
  let arr = [], s = ''
  // 以2k为单位分割数组
  for (let i = 0; i < str.length; i++) {
    s += str[i]
    if ((i + 1) % (k * 2) !== 0) continue
    arr.push(s)
    s = ''
  }
  // 对剩余字符串进行处理
  if (s.length > k) {
    s = reverse(s.slice(0, k)) + s.slice(k - s.length)
  } else {
    s = reverse(s)
  }
  return arr.map(item => reverse(item.slice(0, k)) + item.slice(-k)).join('') + s
}
