const input = require('fs').readFileSync(`${__dirname}/input.txt`).toString().trim().split('\n');

const passwords = input
  .map(line => /^(?<posOne>\d+)-(?<posTwo>\d+)\s(?<char>\w):\s(?<pass>\w+)$/.exec(line).groups)
  .map(({ posOne, posTwo, char, pass }) => ({
    posOne: posOne - 1,
    posTwo: posTwo - 1,
    char,
    pass,
  }));

const validPasswords = passwords.filter(
  ({ posOne, posTwo, char, pass }) => (pass[posOne] === char) ^ (pass[posTwo] === char),
);

console.log(validPasswords.length);
