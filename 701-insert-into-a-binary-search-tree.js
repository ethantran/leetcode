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
var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
    return root;
  }
  root.right = insertIntoBST(root.right, val);
  return root;
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

insertIntoBST(n4, 5);
console.log(n7);

let n61 = new TreeNode(61);
let n46 = new TreeNode(46);
let n66 = new TreeNode(66);
let n43 = new TreeNode(43);
let n39 = new TreeNode(39);
n61.left = n46;
n61.right = n66;
n46.left = n43;
n43.left = n39;
insertIntoBST(n61, 88);
console.log(n66);
