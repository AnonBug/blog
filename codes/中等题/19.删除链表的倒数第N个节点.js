let removeNthFromEnd = (head, n) => {
  let fast = slow = head;
  
  let r = 0;
  while (r < n) {
    fast = fast.next;
    r++;
  }

  let pre = null;
  while (fast) {
    fast = fast.next;
    pre = slow;
    slow = slow.next;
  }

  if (slow === head) return head.next;

  pre.next = slow.next;
  return head;
}
