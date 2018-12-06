const fs = require('fs');
const input = require('./input.json');

const strToObj = claim => {
  const [str, id, x, y, w, h] = claim.match(
    /#(\d+)\s@\s(\d+),(\d+): (\d+)x(\d+)/
  );
  return {
    id: +id,
    x: +x,
    y: +y,
    w: +w,
    h: +h,
  };
};

const createCanvas = (width, height) =>
  new Array(height).fill([]).map(() => new Array(width).fill('.'));

const flatten = array => [].concat.apply([], array);

const claims = input.map(claim => strToObj(claim));
const canvas = createCanvas(1000, 1000);

claims.forEach(claim => {
  for (let y = claim.y; y < claim.y + claim.h; y++) {
    for (let x = claim.x; x < claim.x + claim.w; x++) {
      canvas[y][x] = canvas[y][x] === '.' ? 'x' : '#';
    }
  }
});

console.log('Answer: ', flatten(canvas).filter(x => x === '#').length);

const output = canvas.map(row => row.join('')).join('\n');

fs.writeFile('./canvas.txt', output, () =>
  console.log('Output saved to file.')
);
