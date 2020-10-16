
// 常规思路找钱
const lemonadeChange = bills => {
  let money = {}, value = [5, 10, 20]
  for (let v of value) {
    money[v] = 0
  }
  while (bills.length) {
    let bill = bills.shift()
    money[bill] += 1
    if (bill === 5) {
      continue
    }
    let i = value.findIndex(v => v === bill) - 1
    bill -= 5
    while (bill > 0 && i >= 0) {
      let v = value[i]
      if (money[v] > 0 && bill >= v) {
        money[v]--
        bill -= v
      } else i--
    }
    if (bill > 0) return false
  }
  return true
}
