
// 不清楚为什么效率这么低...
const findDiagonalOrder = arr => {
  if (arr.length === 0) return []
  const newArr = []
  let xlength = arr[0].length, ylength = arr.length
  for (let i = 1; i < xlength + ylength; i++) {
    let xMax = i % 2 === 0 ? ylength : xlength
    let yMax = i % 2 === 0 ? xlength : ylength
    for (let x = 0; x < i; x++) {
      let y = i - x - 1
      if (x >= xMax || y >= yMax) continue
      newArr.push(i % 2 === 0 ? arr[x][y] : arr[y][x])
    }
  }
  return newArr
}