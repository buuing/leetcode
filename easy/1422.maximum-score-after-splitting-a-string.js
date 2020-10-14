// 暴力双循环
const maxScore = s => {
  let len = s.length, max = 0
  for (let i = 1; i < len; i++) {
    let left = s.slice(0, i), right = s.slice(i, len)
    let n = 0
    for (let j = 0; j < left.length; j++) {
      if (left[j] === '0') n++
    }
    for (let j = 0; j < right.length; j++) {
      if (right[j] === '1') n++
    }
    if (max < n) max = n
  }
  return max
}

// 寻找最合适的分割点
const maxScore = s => {
  let n = 0, max = -Infinity, index = 0
  for (let i = 1; i < s.length; i++) {
    if (s[i-1] === '0') n++
    let curr = 2 * n - i
    if (max < curr) {
      max = curr
      index = i
    }
  }
  let left = [].filter.call(s.slice(0, index), v => v === '0').length
  let right = [].filter.call(s.slice(index,), v => v === '1').length
  return left + right
}

// 先拿到1的总量, 再循环比对大小
const maxScore = s => {
  let num0 = 0, num1 = 0, max = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') num1++
  }
  for (let i = 0; i < s.length - 1; i++) {
    s[i] === '0' ? num0++ : num1--
    max = Math.max(max, num0 + num1)
  }
  return max
}
