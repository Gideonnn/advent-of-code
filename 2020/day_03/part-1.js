const grid = require('fs').readFileSync(`${__dirname}/input.txt`).toString().trim().split('\n');

const countThreesHit = (right, down, grid) => {
  let amountOfThreesHit = 0;

  for (let row = 0; row < grid.length; row += down) {
    const col = (right * row) % grid[0].length;

    if (grid[row][col] === '#') {
      amountOfThreesHit++;
    }
  }

  return amountOfThreesHit;
};

console.log(countThreesHit(3, 1, grid));
