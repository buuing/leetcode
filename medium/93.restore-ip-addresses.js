// 回溯算法 (数组)
const restoreIpAddresses = s => {
  const res = [], len = s.length
  const computeIp = (index, arr) => {
    if (arr.length === 4) {
      return res.push(arr.join('.'))
    }
    for (let i = 1; i <= 3 && i + index <= len; i++) {
      let nextIndex = i + index
      let curr = s.slice(index, nextIndex)
      if (curr > 255 || String(~~curr) !== curr) return false
      if (len - nextIndex <= 9 - arr.length * 3) {
        computeIp(i + index, [...arr, curr])
      }
    }
  }
  computeIp(0, [])
  return res
}

// 回溯算法 (字符串)
const restoreIpAddresses = s => {
  const res = [], len = s.length
  const computeIp = (index, str) => {
    let lev = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '.') lev++
    }
    if (index === len && lev === 3) {
      return res.push(str)
    }
    for (let i = 1; i <= 3 && i + index <= len; i++) {
      let nextIndex = i + index
      let curr = s.slice(index, nextIndex)
      if (curr > 255 || String(~~curr) !== curr) return false
      if (len - nextIndex <= 9 - lev * 3) {
        computeIp(nextIndex, str ? `${str}.${curr}` : curr)
      }
    }
  }
  computeIp(0, '')
  return res
}