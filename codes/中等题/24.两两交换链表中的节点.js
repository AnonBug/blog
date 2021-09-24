let swapPairs = head => {
  const newHead = new ListNode();
  
  let curTail = newHead;
  curTail.next = head;

  let cur = head;
  while (cur && cur.next) {
    let tmp = cur.next.next;
    curTail.next = cur.next;
    curTail.next.next = cur;
    cur.next = tmp;
    curTail = cur;
    cur = tmp;
  }

  return newHead.next;
}

// 递归写法也很简洁
swapPairs = head => {
  if (!head || !head.next) return head;

  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;

  return newHead;
}
