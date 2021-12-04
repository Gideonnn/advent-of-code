const input = require('fs')
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const sorted = [...input].sort((a, b) => a - b);

const search = (arr, goal) => {
  let left = 0;
  let right = arr.length - 1;

  let sum = arr[left] + arr[right];

  while (sum !== goal) {
    if (left === right) {
      throw 'not found';
    } else if (sum < goal) {
      left++;
    } else {
      right--;
    }

    sum = arr[left] + arr[right];
  }

  return [arr[left], arr[right]];
};

const searchR = (arr, goal, start = 0, end = arr.length - 1) => {
  if (start === end) {
    throw 'start and end can not be the same index';
  }

  const sum = arr[start] + arr[end];

  if (sum === goal) {
    return [arr[start], arr[end]];
  } else if (sum < goal) {
    return searchR(arr, goal, start + 1, end);
  } else {
    return searchR(arr, goal, start, end - 1);
  }
};

const [i, j] = searchR(sorted, 2020);
const answer = i * j;
console.log(answer);
