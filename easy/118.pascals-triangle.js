
const generate = n => {
  if (n === 0) return []
  if (n === 1) return [[1]]
  const arr = [[1]]
  for (let i = 1; i < n; i++) {
    arr[i] = [1]
    for (let j = 1; j <= i; j++) {
      if (j !== i) {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
      } else {
        arr[i][j] = 1
      }
    }
  }
  return arr
}
