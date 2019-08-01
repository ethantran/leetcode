function mergeSort(nums) {
  return mergeSortRec(nums, Array(nums.length).fill(), 0, nums.length - 1);
}

function mergeSortRec(nums, helper, low, high) {
  if (low >= high) return nums;
  let middle = Math.floor((low + high) / 2);
  mergeSortRec(nums, helper, low, middle);
  mergeSortRec(nums, helper, middle + 1, high);
  merge(nums, helper, low, middle, high);
  return nums;
}

function merge(nums, helper, low, middle, high) {
  for (let i = low; i < high + 1; i++) {
    helper[i] = nums[i];
  }
  let leftIndex = low;
  let rightIndex = middle + 1;
  let i = low;
  while (leftIndex <= middle && rightIndex <= high) {
    let leftNum = helper[leftIndex];
    let rightNum = helper[rightIndex];
    if (leftNum <= rightNum) {
      nums[i] = leftNum;
      leftIndex++;
    } else {
      nums[i] = rightNum;
      rightIndex++;
    }
    i++;
  }
  // middle-leftIndex > 0 means there are items still not added from the left side
  // middle-leftIndex = 0 when leftIndex = 0 means no left items were added and still need to be added and that means rightIndex = high so all right items were added
  // middle-leftIndex = 0 when leftIndex = middle means all left items were added and that means rightIndex = 0 so no right items were added
  // the remaining left items will be added
  // we dont need to add the right items because they already are sorted and in the original array nums
  for (let j = 0; j <= middle - leftIndex; j++) {
    // i+j means continue to add items from that position
    // leftIndex+j means continue to take items from that position
    nums[i + j] = helper[leftIndex + j];
  }
}

console.log(mergeSort([]));
console.log(mergeSort([1]));
console.log(mergeSort([2, 1]));
console.log(mergeSort([8, 4, 2, 1, 5, 3, 7]));
