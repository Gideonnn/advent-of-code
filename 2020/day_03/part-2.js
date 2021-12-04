const grid = require('fs').readFileSync(`${__dirname}/input.txt`).toString().trim().split('\n');

const countThreesHit = (right, down, grid) => {
  let amountOfThreesHit = 0;
  let col = 0;

  for (let row = 0; row < grid.length; row += down) {
    if (grid[row][col] === '#') {
      amountOfThreesHit++;
    }

    col = (col + right) % grid[0].length;
  }

  return amountOfThreesHit;
};

const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const answer = slopes
  .map(([right, down]) => countThreesHit(right, down, grid))
  .reduce((cur, acc) => acc * cur);

console.log(answer);
