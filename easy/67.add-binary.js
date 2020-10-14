
// 我的解法比较暴力
const addBinary = (a, b) => {
  let str = '', n = 0
  let alen = a.length, blen = b.length
  if (alen > blen) {
    b = '0'.repeat(alen - blen) + b
    blen = alen
  } else {
    a = '0'.repeat(blen - alen) + a
    alen = blen
  }
  for (let i = alen - 1; i >= 0; i--) {
    let sum = +a[i] + +b[i]
    if (sum === 1) {
      if (n === 0) {
        str = '1' + str
      } else {
        str = '0' + str
      }
    } else {
      if (n === 0) {
        str = '0' + str
      } else {
        str = '1' + str
        n--
      }
      sum === 2 && n++
    }
  }
  str = '1'.repeat(n) + str
  return str
}

// 我同时看到了别人的优秀解法
const addBinary = (a, b) => {
  let str = ''
  let i = a.length -1, j = b.length -1
  let dight = 0, cary = 0, sum = 0
  while (i >= 0 || j >= 0) {
    sum = ~~a[i] + ~~b[j] + cary
    dight = sum % 2
    cary = (sum - dight) / 2
    str = dight + str
    i--
    j--
  }
  return cary ? cary + str : str
}
