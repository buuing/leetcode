/**
 * @Author { String } ldq
 */
const spiralOrder = arr => {
  if (arr.length === 0 || arr[0].length === 0) return []
  let m = arr.length, n = arr[0].length
  if (m === 1) return arr[0]
  if (n === 1) return arr.map(item => item[0])
  let i = 0, j = 0, num = 0, type = 1, res = []
  while (res.length < m*n) {
    res.push(arr[i + num][j + num])
    if (type % 4 === 1) {
      j < n && j++
      j + num*2 >= n - 1 && type++
    } else if (type % 4 === 2) {
      i < m && i++
      i + num*2 >= m - 1 && type++
    } else if (type % 4 === 3) {
      j > 0 && j--
      j === 0 && type++
    } else if (type % 4 === 0) {
      i > 0 && i--
      if (i === 0) {
        num++
        n === 3 ? type +=2 : type++
      }
    }
  }
  return res
}

console.log(JSON.stringify(
  spiralOrder([
    [2,  3,  4], 
    [5,  6,  7], 
    [8,  9,  10], 
    [11, 12, 13]
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
