// 回溯算法
const restoreIpAddresses = s => {
  const res = [], len = s.length
  const computeIp = (index, arr) => {
    if (arr.length === 4) return res.push(arr.join('.'))
    for (let i = 1; i <= 3 && i + index <= len; i++) {
      let nextIndex = i + index
      let curr = s.slice(index, nextIndex)
      if (String(~~curr) !== curr) return false
      if (curr > 255) return false
      if (len - nextIndex <= 9 - arr.length * 3) computeIp(i + index, [...arr, curr])
    }
  }
  computeIp(0, [])
  return res
}