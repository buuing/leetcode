/**
 * 双for循环对比交换
 */
const merge = (nums1, m, nums2, n) => {
  for (let i = 0; i < n; i++) {
    let num2 = nums2[i]
    for (let j = i; j < nums1.length; j++) {
      let num1 = nums1[j]
      if (num2 < num1 || j > m-1+i) {
        let tmp = nums1[j]
        nums1[j] = num2
        num2 = tmp
      }
    }
  }
}
