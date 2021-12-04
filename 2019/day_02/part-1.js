const input = require('./input');

// Restore the gravity assist program
input[1] = 12;
input[2] = 2;

const intcode = input => {
  const program = [...input];
  for (let i = 0; i < program.length; i += 4) {
    const op = program[i];
    const x = program[i + 1];
    const y = program[i + 2];
    const loc = program[i + 3];

    switch (op) {
      case 1: // Addition
        program[loc] = program[x] + program[y];
        break;

      case 2: // Multiplication
        program[loc] = program[x] * program[y];
        break;

      case 99: // Exit program
        return program[0];

      default:
        throw new Error('Unreachable');
    }
  }
};

console.log(intcode(input));
