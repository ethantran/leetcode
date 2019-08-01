/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return searchRec(nums, target, 0, nums.length - 1);
};

function searchRec(nums, target, left, right) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  let midNum = nums[mid];
  if (target > midNum) {
    if (target < nums[right]) {
      right = right - 1;
    }
    return searchRec(nums, target, mid + 1, right);
  } else if (target < midNum) {
    if (target > nums[left]) {
      left = left + 1;
    }
    return searchRec(nums, target, left, mid - 1);
  } else {
    return mid;
  }
}

let a;
a = search([-1, 0, 3, 5, 9, 12], 9);
a; // 4
a = search([-1, 0, 3, 5, 9, 12], 2);
a; // -1
