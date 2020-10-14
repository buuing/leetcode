// 暴力双循环
const letterCombinations = str => {
  const opt = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  if (str.length < 1) return []
  if (str.length == 1 ) return opt[str]
  return str.split('').reduce((a1, a2) => {
    if (typeof a1 === 'string') a1 = opt[a1]
    if (typeof a2 === 'string') a2 = opt[a2]
    let arr = []
    for (let i = 0; i < a1.length; i++) {
      for (let j = 0; j < a2.length; j++) {
        arr.push(a1[i] + a2[j])
      }
    }
    return arr
  })
}

// 暴力回溯
const letterCombinations = digits => {
  if (!digits) return []
  let res = [],
    map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const compute = (index, s) => {
    if (index === digits.length) return res.push(s)
    const curr = map[digits[index]]
    for (let i = 0; i < curr.length; i++) {
      compute(index + 1, s + curr[i])
    }
  }
  compute(0, '')
  return res
}
