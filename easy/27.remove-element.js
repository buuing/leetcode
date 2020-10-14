
const removeElement = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1)
      i--
    }
  }
  return arr.length
}

