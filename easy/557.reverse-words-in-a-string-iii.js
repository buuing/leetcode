
const reverseWords = str => {
  const words = str.split(' ')
  const newWords = words.map(item => {
    let word = ''
    for (let i = item.length - 1; i >= 0; i--) {
      word += item[i]
    }
    return word
  })
  return newWords.join(' ')
}
