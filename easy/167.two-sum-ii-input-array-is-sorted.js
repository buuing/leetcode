
// 利用对象的键值来解题
const twoSum = (arr, target) => {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i
  }
  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]]) return [i + 1, obj[target - arr[i]] + 1]
  }
  return []
}