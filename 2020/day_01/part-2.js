const input = require('fs')
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const sorted = [...input].sort((a, b) => a - b);

require('fs').writeFileSync(`${__dirname}/inputSorted.txt`, sorted.join('\n'));

const searchTwo = (arr, goal, start = 0, end = arr.length - 1) => {
  if (start === end) {
    return [null, null];
  }

  const sum = arr[start] + arr[end];

  if (sum === goal) {
    return [arr[start], arr[end]];
  } else if (sum < goal) {
    return searchTwo(arr, goal, start + 1, end);
  } else {
    return searchTwo(arr, goal, start, end - 1);
  }
};

const searchThree = (arr, goal) => {
  const removeElement = (arr, index) => {
    const copy = [...arr];
    copy.splice(index, 1);
    return copy;
  };

  for (let current = 0; current < arr.length; current++) {
    const subgoal = goal - arr[current];

    const subarr = removeElement(arr, current);
    const [i, j] = searchTwo(arr, subgoal);
    if (i === null) {
      continue; // Not found
    } else {
      return [arr[current], i, j];
    }
  }

  throw 'this should be unreachable';
};

const [i, j, k] = searchThree(sorted, 2020);
const answer = i * j * k;
console.log(answer);
