
const reverseWords = str => {
  let arr = [], s = ''
  str += ' '
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      s !== '' && arr.unshift(s)
      s = ''
    } else {
      s += str[i]
    }
  }
  return arr.join(' ')
}
