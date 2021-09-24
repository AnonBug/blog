let rotateRight = (head, k) => {
  let newHead = new TreeNode();

  let count = 0;
  let cur = head;
  while (cur) {
    count++;
    cur = cur.next;
  }

  k = k % count;
  if (!k) return head;

  let fast = slow = head;
  while (k) {
    fast = fast.next;
    k--;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  newHead.next = slow.next;
  slow.next = null;
  fast.next = head;
  return newHead.next;
}
