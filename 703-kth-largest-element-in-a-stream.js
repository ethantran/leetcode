/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums = []) {
  this.k = k;
  this.root = null;
  nums.forEach(num => {
    this.root = this.insertIntoBST(this.root, num);
  });
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.root = this.insertIntoBST(this.root, val);
  return getKthLargest(this.k, this.root);
};

KthLargest.prototype.insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) {
    root.left = this.insertIntoBST(root.left, val);
    root.count++;
    return root;
  }
  root.right = this.insertIntoBST(root.right, val);
  root.count++;
  return root;
};

function getKthLargest(k, node) {
  if (!node) {
    return null;
  }
  if (node.count < k) {
    return null;
  }
  let right = getKthLargest(k, node.right);
  if (right === null) {
    let newk = k - (node.right ? node.right.count : 0) - 1;
    if (newk === 0) {
      return node.val;
    }
    return getKthLargest(newk, node.left);
  }
  return right;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
  this.count = 1;
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
let k;
let arr;
let kthLargest;
let a;

k = 3;
arr = [4, 5, 8, 2];
kthLargest = new KthLargest(k, arr);
console.log("---------------------------------------------------");
console.log(kthLargest.root);
a = kthLargest.add(3); // returns 4
a;
a = kthLargest.add(5); // returns 5
a;
a = kthLargest.add(10); // returns 5
a;
a = kthLargest.add(9); // returns 8
a;
a = kthLargest.add(4); // returns 8
a;

k = 4;
arr = [5, 2, 6, 1, 7, 4, 3];
kthLargest = new KthLargest(k, arr);
console.log("---------------------------------------------------");
// console.log(kthLargest.root)
console.log(getKthLargest(k, kthLargest.root));
