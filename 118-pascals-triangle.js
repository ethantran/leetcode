/**
 * @param {number} numRows
 * @return {number[][]}
 */
// f(i,j)=f(i−1,j−1)+f(i−1,j)
// f(i,j)=1wherej=1orj=i
/**
[
[1],
[1,1],
[1,2,1],
[1,3,3,1],
[1,4,6,4,1]
]
 */
var generate = function(numRows) {
  return f(numRows);
};

function f(numRows, i = 0, j = 0, result = Array(numRows).fill()) {
  if (i > numRows - 1 || j > i + 1) return result;
  if (j === 0 && !result[i]) {
    result[i] = Array(i + 1).fill();
  }
  for (let x = j; x < i; x++) {
    result[i][x] = sum(result, i, x);
  }
  if (j === 0 || j === i) {
    result[i][j] = 1;
  }
  f(numRows, i, j + 1, result);
  if (j === 0) {
    f(numRows, i + 1, j, result);
  }
  return result;
}

function sum(result, i, j) {
  return (result[i - 1][j - 1] || 0) + (result[i - 1][j] || 0);
}

// let a = generate(5);
// a;
