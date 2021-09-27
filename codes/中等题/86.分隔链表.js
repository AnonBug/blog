let partition = (head, x) => {
  const newHead = new ListNode();
  const newTail = new ListNode();

  let pre = newHead;
  let tail = newTail;

  let cur = head;
  while (cur) {
    if (cur.val < x) {
      pre.next = cur;
      pre = cur;
    } else {
      tail.next = cur;
      tail = cur;
    }

    cur = cur.next;
  }

  tail.next = null;
  pre.next = newTail.next;
  
  return newHead.next;
}
