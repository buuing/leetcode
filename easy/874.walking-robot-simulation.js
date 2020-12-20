// 模拟行走
const robotSim = (commands, obstacles) => {
  let direction = 10000, x = 0, y = 0
  let xMap = {}, yMap = {}, max = 0
  const findSmallestNumber = (start, end, set, flag) => {
    if (!set) return end
    while (start - end) {
      start += flag
      if (set.has(start)) {
        return start - flag
      }
    }
    return end
  }
  for (let obstacle of obstacles) {
    let [x, y] = obstacle
    if (xMap[x]) {
      xMap[x].add(y)
    } else {
      xMap[x] = new Set([y])
    }
    if (yMap[y]) {
      yMap[y].add(x)
    } else {
      yMap[y] = new Set([x])
    }
  }
  for (let curr of commands) {
    if (curr === -2) direction -= 1
    else if (curr === -1) direction += 1
    else {
      switch (direction % 4) {
        case 0:
          y = findSmallestNumber(y, y + curr, xMap[x], 1)
          break
        case 1:
          x = findSmallestNumber(x, x + curr, yMap[y], 1)
          break
        case 2:
          y = findSmallestNumber(y, y - curr, xMap[x], -1)
          break
        case 3:
          x = findSmallestNumber(x, x - curr, yMap[y], -1)
          break
      }
      max = Math.max(x ** 2 + y ** 2, max)
    }
  }
  return max
}
