
const getRow = index => {
  if (index === 0) return [1]
  let curr = [], prev = getRow(index - 1)
  for (let i = 0; i < index + 1; i++) {
    curr[i] = ~~prev[i] + ~~prev[i - 1]
  }
  return curr
}