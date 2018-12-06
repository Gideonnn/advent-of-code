const input = require('./input');

const getValue = (collection, index) => collection[index % collection.length];

const map = {};
let current = 0;

for (let i = 0; i < Infinity; i++) {
  current += getValue(input, i);
  if (map[current]) {
    return console.log('Answer: ', current);
  }
  map[current] = current;
}
