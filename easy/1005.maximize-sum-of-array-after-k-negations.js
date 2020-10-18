// 贪心算法
const largestSumAfterKNegations = (A, K) => {
  A.sort((a, b) => a - b)
  let i = 0
  for (; i < K; i++) {
    let curr = A[i]
    if (curr >= 0) break
    A[i] = -curr
  }
  K -= i
  if (K > 0 && K % 2 === 1) {
    A.sort((a, b) => a - b)
    A[0] = -A[0]
  }
  return A.reduce((s, n) => s += n, 0)
}