
/**
 * 第一思路是4个点4个点的交换
 */
const rotate = matrix => {
  let n = matrix.length
  let m = n / 2 >> 0
  let x = y = 0
  const axisIfy = (x, y) => {
    let cur = matrix[x][y]
    for (let k = 0; k < 4; k++) {
      let _ = x
      x = y
      y = n - 1 - _
      ;[matrix[x][y], cur] = [cur, matrix[x][y]]
    }
  }
  for (let i = 0; i < m; i++) {
    y = 0
    for (let j = 0; j < m + n % 2; j++) {
      axisIfy(x, y++)
    }
    x++
  }
  return matrix
}