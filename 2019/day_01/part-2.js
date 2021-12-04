const input = require('./input');

const calcFuel = num => {
  const requiredFuel = Math.floor(num / 3) - 2;
  if (requiredFuel > 0) {
    return requiredFuel + calcFuel(requiredFuel);
  } else {
    return 0;
  }
};

const answer = input.reduce((acc, cur) => acc + calcFuel(cur), 0);

console.log(answer);
