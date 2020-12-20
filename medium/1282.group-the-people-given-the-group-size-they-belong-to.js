// 哈希表存储, 满足条件就添加
const groupThePeople = groupSizes => {
  const map = {}, res = []
  for (let i = 0; i < groupSizes.length; i++) {
    let curr = groupSizes[i]
    if (map[curr]) {
      map[curr].push(i)
    } else {
      map[curr] = [i]
    }
    if (curr === map[curr].length) {
      res.push(map[curr])
      map[curr] = []
    }
  }
  return res
}
