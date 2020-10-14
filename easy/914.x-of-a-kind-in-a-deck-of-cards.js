
const hasGroupsSizeX = arr => {
  if (arr.length < 2) return false
  let obj = {}
  arr.forEach(item => obj[item] ? obj[item]++ : (obj[item] = 1))
  let vals = Object.values(obj)
  let min = Math.min(...vals)
  if (min < 2) return false
  for (let i = min; i > 1; i--) {
    if (vals.every(item => item % i === 0)) return true
  }
  return false
}
