// 暴力解法
const countPrimes = n => {
  let arr = []
  for (let i = 2; i < n; i++) {
    let flag = true
    for (let num of arr) {
      if (i % num === 0) {
        flag = false
        break
      }
    }
    if (flag) arr.push(i)
  }
  console.log(arr)
  return arr.length
}

// 厄拉多塞筛法 ( 看了别人的思路, 真的牛皮 )
const countPrimes = n => {
  let arr = [], num = 0
  for (let i = 2; i < n; i++) {
    if (arr[i]) continue
    for (let j = i * i; j < n; j += i) {
      arr[j] = 1
    }
    num++
  }
  return num
}
