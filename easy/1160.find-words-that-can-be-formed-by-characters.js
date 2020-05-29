// 哈希表对比数量 (效率较低)
const countCharacters = (words, chars) => {
  let map = {}, n = 0
  for (let i = 0; i < chars.length; i++) {
    let curr = chars[i]
    if (map[curr]) map[curr]++
    else map[curr] = 1
  }
  for (let i = 0; i < words.length; i++) {
    let currMap = {}, word = words[i], flag = true
    for (let j = 0; j < word.length; j++) {
      let w = word[j]
      if (currMap[w]) currMap[w]++
      else currMap[w] = 1
      if (currMap[w] > map[w] || !map[w]) {
        flag = false
        break
      }
    }
    if (flag) n += word.length
  }
  return n
}

// 循环截取数组
const countCharacters = (words, chars) => {
  let sum = 0
  for (let i = 0; i < words.length; i++) {
    let word = words[i], map = chars.split(''), flag = true
    for (let j = 0; j < word.length; j++) {
      let index = map.indexOf(word[j])
      if (index > -1) {
        map.splice(index, 1)
      } else {
        flag = false
        break
      }
    }
    if (flag) sum += word.length
  }
  return sum
}