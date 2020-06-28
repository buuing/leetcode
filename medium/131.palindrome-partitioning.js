// 暴力回溯
const partition = s => {
  let res = [], len = s.length
  const isPal = str => {
    let l = str.length
    if (l === 1) return true
    for (let i = 0; i < l / 2; i++) {
      if (str[i] !== str[l - i - 1]) return false
    }
    return true
  }
  const deep = (index, arr) => {
    if (index === len) return res.push(arr)
    arr = JSON.parse(JSON.stringify(arr))
    for (let i = index; i < len; i++) {
      let curr = s.slice(index, i + 1)
      if (isPal(curr)) {
        deep(i + 1, [...arr, curr])
      }
    }
  }
  deep(0, [])
  return res
}