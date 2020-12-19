// 暴力双循环
const minDeletionSize = A => {
  if (!A.length) return 0
  let count = 0
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j][i] > A[j + 1][i]) {
        count++
        break
      }
    }
  }
  return count
}
