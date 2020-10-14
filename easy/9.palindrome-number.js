// 转字符串+双指针
const isPalindrome = x => {
  x += ''
  if (x[0] === '-') return false
  for (let i = 0; i < x.length / 2; i++) {
    if (x[i] !== x[x.length - i - 1]) return false
  }
  return true
}

// 数学方法
const isPalindrome = x => {
  if (x < 0) return false
  let tmp = x, num = 0
  while (tmp > 0) {
    num = num * 10 + tmp % 10
    tmp = tmp / 10 >> 0
  }
  return x === num
}

// 数字首尾判断
const isPalindrome = x => {
  if (x < 0) return false
  let len = (Math.log10(x) >> 0) + 1
  const getNum = n => {
    n = len - n
    return x / 10 ** n % 10 >> 0
  }
  for (let i = 1; i < len / 2 + 1; i++) {
    if (getNum(i) !== getNum(len - i + 1)) return false
  }
  return true
}
