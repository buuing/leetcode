
const isAnagram = (a, b) => {
  if (a.length !== b.length) return false
  let obj1 = {}, obj2 = {}
  for (let i = 0; i < a.length; i++) {
    obj1[a[i]] ? obj1[a[i]]++ : obj1[a[i]] = 1
    obj2[b[i]] ? obj2[b[i]]++ : obj2[b[i]] = 1
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false
  }
  return true
}
