
/**
 * 时间复杂度 2n
 * 第一次循环获取最大值
 * 第二次循环比较是否大于2倍
 */
const dominantIndex = arr => {
  let maxIndex = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[maxIndex] < arr[i]) maxIndex = i
  }
  let max = arr[maxIndex]
  arr.splice(maxIndex, 1)
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]*2) return -1
  }
  return maxIndex
}

/**
 * 时间复杂度 n
 * 只找到第一大和第二大的数字, 直接比较
 */
const dominantIndex = arr => {
  if (arr.length < 2) return 0
  let max1 = 0, max2 = 1
  if (arr[0] < arr[1]) {
    max1 = 1, max2 = 0
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[max2] < arr[i]) max2 = i
    if (arr[max1] < arr[i]) {
      max2 = max1
      max1 = i
    }
  }
  return arr[max1] >= arr[max2]*2 ? max1 : -1
}