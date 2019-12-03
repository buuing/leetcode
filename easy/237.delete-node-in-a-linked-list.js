
/**
 * 这道题真无聊, 而且题目描述模棱两可
 * 这也叫算法题? 建议删除
 */
const deleteNode = node => {
  node.val = node.next.val
  node.next = node.next.next
}