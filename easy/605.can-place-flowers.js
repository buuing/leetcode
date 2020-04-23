
const canPlaceFlowers = (arr, n) => {
  let num = 0
  arr = [0, ...arr, 0, 1]
  console.log(JSON.stringify(arr))
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      num++
    } else {
      if (num > 2) n -= (num - 1) / 2 >> 0
      if (n <= 0) return true
      num = 0
    }
  }
  return false
}