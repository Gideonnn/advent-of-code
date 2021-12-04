const input = require('./input.json');

const countChars = str =>
  str.split('').reduce((acc, c) => {
    if (acc[c]) {
      acc[c]++;
    } else {
      acc[c] = 1;
    }
    return acc;
  }, {});

const containsTwo = obj => Object.values(obj).some(count => count === 2);
const containsThree = obj => Object.values(obj).some(count => count === 3);

let two = 0;
let three = 0;

input.forEach(str => {
  const result = countChars(str);
  if (containsTwo(result)) {
    two++;
  }
  if (containsThree(result)) {
    three++;
  }
});

console.log(`checksum = ${two} * ${three} = ${two * three}`);
