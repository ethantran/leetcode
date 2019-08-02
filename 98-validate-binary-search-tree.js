/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return isValidBSTRec(root);
};

// when you go right, the vals must be greater than node, therefore update min
// when you go left, the vals must be less than node, therefore update max
function isValidBSTRec(node, min = null, max = null) {
  if (!node) {
    return true;
  }
  let { left, right, val } = node;
  if ((min !== null && val <= min) || (max !== null && val >= max))
    return false;
  return isValidBSTRec(left, min, val) && isValidBSTRec(right, val, max);
}

let TreeNode = {
  init(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
};

let n1 = Object.create(TreeNode);
let n2 = Object.create(TreeNode);
let n3 = Object.create(TreeNode);
let n4 = Object.create(TreeNode);
let n5 = Object.create(TreeNode);
let n6 = Object.create(TreeNode);
n5.init(5, n1, n4);
n1.init(1);
n4.init(4, n3, n6);
n3.init(3);
n6.init(6);

let a;
a = isValidBST(n5);
a; // false

n2.init(2, n1, n3);
n1.init(1);
n3.init(3);

a = isValidBST(n2);
a; // true

a = isValidBST(null);
a; // true

let n10 = Object.create(TreeNode);
let n15 = Object.create(TreeNode);
let n20 = Object.create(TreeNode);
n10.init(10, n5, n15);
n5.init(5);
n15.init(15, n6, n20);
n6.init(6);
n20.init(20);

a = isValidBST(n10);
a; // false

let n0 = Object.create(TreeNode);
n3.init(3, n1, n5);
n1.init(1, n0, n2);
n0.init(0);
n2.init(2);
n5.init(5, n4, n6);
n4.init(4);
n6.init(6);

a = isValidBST(n3);
a; // true
