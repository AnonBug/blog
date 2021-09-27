const {levelOrder} = require('./102.二叉树的层序遍历')

let buildTree = (preorder, inorder) => {
  const fn = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd) return null;

    const root = new TreeNode(preorder[preStart]);

    // 找中序遍历中，根节点的位置
    let len = 0;
    for (let inMid = inStart; inMid <= inEnd; inMid++) {
      if (inorder[inMid] === preorder[preStart]) break;
      len++;
    }

    root.left = fn(preStart + 1, preStart + len, inStart, inStart + len);
    root.right = fn(preStart + len + 1, preEnd, inStart + len + 1, inEnd);

    return root;
  }

  return fn(0, preorder.length - 1, 0, inorder.length - 1);
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

let res = buildTree([1, 2, 3], [3, 2, 1]);
console.log(levelOrder(res));