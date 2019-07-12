/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  rec(s);
  s;
};

function rec(s, i = 0) {
  if (i >= Math.round(s.length / 2)) return;
  rec(s, i + 1);
  let c = s[i];
  let c2 = s[s.length - i - 1];
  s[i] = c2;
  s[s.length - i - 1] = c;
}

// let s = ["a", "b", "c", "d", "e"];
// let s = [
//   "A",
//   " ",
//   "m",
//   "a",
//   "n",
//   ",",
//   " ",
//   "a",
//   " ",
//   "p",
//   "l",
//   "a",
//   "n",
//   ",",
//   " ",
//   "a",
//   " ",
//   "c",
//   "a",
//   "n",
//   "a",
//   "l",
//   ":",
//   " ",
//   "P",
//   "a",
//   "n",
//   "a",
//   "m",
//   "a"
// ];
// reverseString(s);
// console.log(s);
