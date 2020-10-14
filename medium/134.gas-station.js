// 暴力解法
const canCompleteCircuit = (gas, cost) => {
  let start = -1, len = gas.length
  for (let i = 0; i < len; i++) {
    if (gas[i] < cost[i]) continue
    let oil = 0
    for (let j = 0; j < len; j++) {
      let index = i + j
      index = index >= len ? index % len : index
      oil += gas[index]
      oil -= cost[index]
      if (oil < 0) break
    }
    if (oil >= 0) {
      start = i
      break
    }
  }
  return start
}
