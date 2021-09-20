const mergeTwoLists = (l1, l2) => {
  const newHead = new ListNode()
  let current = newHead;

  while (l1 || l2) {
    if (!l1) {
      current.next = l2;
      l2 = l2.next;
    } else if (!l2) {
      current.next = l1;
      l1 = l1.next;
    } else {
      if (l1.val <= l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
    }

    current = current.next;
  }

  return newHead.next;
}