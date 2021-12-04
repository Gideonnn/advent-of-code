const input = require('fs').readFileSync(`${__dirname}/input.txt`).toString().trim().split('\n');

const countChar = (char, str) => str.split('').filter(c => c === char).length;

const passwords = input
  .map(line => /^(?<min>\d+)-(?<max>\d+)\s(?<char>\w):\s(?<pass>\w+)$/.exec(line).groups)
  .map(({ min, max, char, pass }) => ({
    min: +min,
    max: +max,
    char,
    pass,
  }));

const validPasswords = passwords.filter(({ min, max, char, pass }) => {
  const count = countChar(char, pass);
  return count >= min && count <= max;
});

console.log(validPasswords.length);
