
const findMaxConsecutiveOnes = arr => {
  let max = 0
  for (let i = 0, x = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      x++
      max < x ? max = x : null
    } else {
      x = 0
    }
  }
  return max
}
