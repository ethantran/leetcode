/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let grid = Array(n)
    .fill()
    .map(_ => Array(m).fill(1));
  for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[row].length; col++) {
      grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
    }
  }
  return grid[grid.length - 1][grid[grid.length - 1].length - 1];
};

let a;
a = uniquePaths(3, 2);
a;

a = uniquePaths(7, 3);
a;
