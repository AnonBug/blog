let addTwoNumbers = (l1, l2) => {
  let p1 = l1, p2 = l2;
  let decade = 0;
  let newHead = newL = new ListNode(null);

  while (p1 || p2) {
    let num = decade;

    if (!p1) {
      num += p2.val;
      p2 = p2.next;
    } else if (!p2) {
      num += p1.val;
      p1 = p1.next;
    } else {
      num += p2.val + p1.val;
      p1 = p1.next;
      p2 = p2.next;
    }

    newL.next = new ListNode(num % 10);
    newL = newL.next;

    decade = num > 9 ? 1 : 0;
  }

  if (decade) newL.next = new ListNode(1);

  return newHead.next;
}
