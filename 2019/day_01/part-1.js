const input = require('./input');

const calcFuel = num => Math.floor(num / 3) - 2;

const answer = input.reduce((acc, cur) => acc + calcFuel(cur), 0);

console.log(answer);
