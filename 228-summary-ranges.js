/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let output = [];
  let i = 0;
  while (i < nums.length) {
    let start = nums[i];
    let end = start;
    let j = i + 1;
    while (j < nums.length) {
      let next = nums[j];
      if (next === end + 1) {
        end++;
        j++;
      } else {
        break;
      }
    }
    if (start === end || start === nums[nums.length - 1]) {
      output.push(start.toString());
      i = j;
    } else {
      output.push(start + "->" + end);
      i = j;
    }
  }
  return output;
};

let a;
a = summaryRanges([0, 1, 2, 4, 5, 7]);
a; // [ '0->2', '4->5', '7' ]
a = summaryRanges([0, 2, 3, 4, 6, 8, 9]);
a; // ["0","2->4","6","8->9"]
