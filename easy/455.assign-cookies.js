// 贪心算法
const findContentChildren = (children, cookie) => {
  children.sort((a, b) => b - a)
  cookie.sort((a, b) => b - a)
  let res = 0
  for (let i = 0; i < cookie.length; i++) {
    let curr = cookie[i]
    while (true) {
      const child = children.shift()
      if (child === undefined) return res
      if (curr >= child) {
        res++
        break
      }
    }
  }
  return res
}
