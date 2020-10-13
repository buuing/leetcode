// 数组模拟优先队列
const lastStoneWeight = stones => {
  const arr = stones.sort((a, b) => a - b)
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr.length === 1) return arr[0]
    let res = arr.pop() - arr.pop()
    if (!res) continue
    let len = arr.length
    if (!len) {
      arr.push(res)
      continue
    }
    for (let j = 0; j < len; j++) {
      if (res <= arr[j]) {
        arr.splice(j, 0, res)
        break
      }
      if (j === len - 1) arr.push(res)
    }
  }
  return arr.length ? arr[0] : 0
}
