const input = require('./input');

const diffByOne = (a, b) => {
  let index = -1;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (index !== -1) {
        return -1;
      }
      index = i;
    }
  }
  return index;
};

const rmChar = (str, index) => str.slice(0, index) + str.slice(index + 1);

for (let y = 0; y < input.length; y++) {
  for (let x = 0; x < input.length; x++) {
    const diffIndex = diffByOne(input[y], input[x]);

    if (diffIndex != -1) {
      return console.log('Answer: ', rmChar(input[y], diffIndex));
    }
  }
}
