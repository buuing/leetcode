
const reverseString = a => {
  let length = a.length
  for (let i = 0; i < length / 2 >> 0; i++) {
    [a[i], a[length - i - 1]] = [a[length - i - 1], a[i]]
  }
  return a
}