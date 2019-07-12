/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  return inorderTraversalRec(root);
};

function inorderTraversalRec(node, result = []) {
  if (!node) return result;
  inorderTraversalRec(node.left, result);
  result.push(node.val);
  inorderTraversalRec(node.right, result);
  return result;
}

// let n1 = { val: 1 };
// let n2 = { val: 2 };
// let n3 = { val: 3 };
// n1.right = n2;
// n2.left = n3;
// let a = inorderTraversal(n1);
// a;
