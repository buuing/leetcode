
const canCompleteCircuit = (gas, cost) => {
  let len = gas.length, gasSum = 0, costSum = 0
  for (let i = 0; i < len; i++) {
    gasSum += gas[i]
    costSum += cost[i]
  }
  if (costSum > gasSum) return -1
  for (let i = len - 1; i >= 0; i--) {
    let j = i + 1
    j = j < len ? j : j % len
    if (gas[i] < cost[i] ) {
      return j
    }
  }
}
[7,1,0,11,4]
[5,9,1,2, 5]