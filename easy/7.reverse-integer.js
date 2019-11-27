
/**
 * 我做这道题的时候, 他的分类在字符串下面, 所以我转换字符串来做
 */
const reverse = x => {
  x += ''
  let flag = !x.indexOf('-'), res = ''
  for (let i = x.length - 1; i >= ~~flag; i--) {
    let curr = x[i];
    (~~curr || res) && (res += curr)
  }
  res *= (flag ? -1 : 1)
  return res > Math.pow(2, 31) - 1 || res < - Math.pow(2, 31) ? 0 : res
}