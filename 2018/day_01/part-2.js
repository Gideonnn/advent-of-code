const input = require('./input');
const { benchmark } = require('../utils');

const getValue = (collection, index) => collection[index % collection.length];

const getAnswer = () => {
  const map = {};
  let current = 0;

  for (let i = 0; i < Infinity; i++) {
    current += getValue(input, i);
    if (map[current]) {
      return current;
    }
    map[current] = current;
  }
};

console.log('Answer: ', getAnswer());
console.log('Benchmark: ', benchmark(getAnswer, 1000));
