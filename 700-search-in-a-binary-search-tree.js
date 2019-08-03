/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null;
  if (val === root.val) return root;
  if (val < root.val) return searchBST(root.left, val);
  if (val > root.val) return searchBST(root.right, val);
  throw new Error("this should not happen");
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let n1 = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n7 = new TreeNode(7);
n4.left = n2;
n4.right = n7;
n2.left = n1;
n2.right = n3;

console.log(searchBST(n4, 2) === n2);
console.log(searchBST(n5, 5) === null);
console.log(searchBST(null, 1) === null);
