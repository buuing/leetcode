
// 我用排序做这道题时触发了lettcode的隐藏提示, 希望我使用双指针
// 可能这就是为什么耗时两千多毫秒的原因
const arrayPairSum = arr => {
  let maxI = 0, res = 0
  for (let i = 0; i < arr.length; i++) {
    maxI = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[maxI] < arr[j]) maxI = j
    }
    [arr[maxI], arr[i]] = [arr[i], arr[maxI]];
    if (i % 2 === 1) res += arr[i]
  }
  return res
}
