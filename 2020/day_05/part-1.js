// const input = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'].map(str => str.split(''));

const input = require('fs').readFileSync(`${__dirname}/input.txt`).toString().trim().split('\n');

const findSeat = (input, cols = 8, rows = 128) => {
  return input
    .map(instructions => {
      let lowerCol = 0;
      let upperCol = cols - 1;
      let lowerRow = 0;
      let upperRow = rows - 1;

      for (const instruction of instructions) {
        switch (instruction) {
          case 'F':
            upperRow -= Math.floor((upperRow - lowerRow) / 2);
            break;

          case 'B':
            lowerRow += Math.ceil((upperRow - lowerRow) / 2);
            break;

          case 'L':
            upperCol -= Math.floor((upperCol - lowerCol) / 2);
            break;

          case 'R':
            lowerCol += Math.ceil((upperCol - lowerCol) / 2);
            break;
        }
      }

      return { lowerCol, upperCol, lowerRow, upperRow };
    })
    .map(obj => obj.lowerRow * cols + obj.lowerCol);
};

const answer = Math.max(...findSeat(input));

console.log(answer);
