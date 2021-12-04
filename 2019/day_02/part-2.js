const input = require('./input');

const intcode = listOfIntegers => {
  const memory = [...listOfIntegers];
  for (let ptr = 0; ptr < memory.length; ptr += 4) {
    const instruction = memory[ptr];
    const x = memory[ptr + 1];
    const y = memory[ptr + 2];
    const loc = memory[ptr + 3];

    switch (instruction) {
      case 1: // Addition
        memory[loc] = memory[x] + memory[y];
        break;

      case 2: // Multiplication
        memory[loc] = memory[x] * memory[y];
        break;

      case 99: // Exit program
        return memory[0];

      default:
        throw new Error('Unreachable');
    }
  }
};

const bruteForce = () => {
  const goal = 19690720;

  for (let x = 0; x <= 99; x++) {
    for (let y = 0; y <= 99; y++) {
      const listOfIntegers = [...input];

      listOfIntegers[1] = x; // noun
      listOfIntegers[2] = y; // verb

      const result = intcode(listOfIntegers);

      if (result === goal) {
        return [x, y];
      }
    }
  }
};

const [noun, verb] = bruteForce();
console.log(100 * noun + verb);
