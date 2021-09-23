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

  }
}
