/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  return levelOrderRec(root, root ? [[root.val]] : []);
};

function levelOrderRec(node, result = [], i = 1) {
  if (node) {
    let n2 = result[i];
    if (!n2) {
      n2 = [];
    }
    if (node.left) {
      n2.push(node.left.val);
    }
    if (node.right) {
      n2.push(node.right.val);
    }
    if (!result[i] && n2.length) {
      result.push(n2);
    }
    levelOrderRec(node.left, result, i + 1);
    levelOrderRec(node.right, result, i + 1);
  }
  return result;
}

// let n3 = { val: 3 };
// let n9 = { val: 9 };
// let n20 = { val: 20 };
// let n15 = { val: 15 };
// let n7 = { val: 7 };
// n3.left = n9;
// n3.right = n20;
// n20.left = n15;
// n20.right = n7;
// let a = levelOrder(n3);

// let n1 = { val: 1 };
// let n2 = { val: 2 };
// let n3 = { val: 3 };
// let n4 = { val: 4 };
// let n5 = { val: 5 };
// n1.left = n2;
// n1.right = n3;
// n2.left = n4;
// n3.right = n5;
// let a = levelOrder(n1);

// a;
