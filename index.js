/**
 * @Author { String } ldq
 */
const spiralOrder = arr => {
  let m = arr.length, n = arr[0].length
  if (m === 0 || n === 0) return []
  if (m === 1) return arr[0]
  if (n === 1) return arr.map(item => item[0])
  let i = 0, j = 0, num = 0, type = 1, res = [], x = 0
  while (x < m*n) {
    res.push(arr[i + num][j + num]) && x++
    console.log(JSON.stringify(res))
    // if (i === (m/2>>0) && j === (n/2>>0)) return res
    if (type % 4 === 1) {
      j < n && j++
      j === n - 1 && type++
    } else if (type % 4 === 2) {
      i < m && i++
      i === m - 1 && type++
    } else if (type % 4 === 3) {
      j > num && j--
      j === num && type++
    } else if (type % 4 === 0) {
      i > num && i--
      i === num && num++ && type++
    }
  }
  return res
}

console.log(JSON.stringify(
  spiralOrder([
    [1, 2, 3, 4],
    [12,13,14,5],
    [11,16,15,6],
    [10,9 ,8 ,7],
  ])
))

// m = 3, n = 4



// i = 0, j = 0
// (0, 0)    (i, j++)
// (0, 1)
// (0, 2)
// (0, 3)

// (1, 3)    (i++, j)
// (2, 3)

// (2, 2)    (i, j--)
// (2, 1)
// (2, 0)

// (1, 0)    (i--, j)
