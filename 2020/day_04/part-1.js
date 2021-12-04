const passports = require('fs')
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .trim()
  .replace(/\s/g, '\n')
  .split('\n\n')
  .map(line => line.split('\n'))
  .map(pairs =>
    pairs.reduce((acc, pair) => {
      const [key, val] = pair.split(':');
      return { ...acc, [key]: val };
    }, {}),
  );

const required = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt'];

const answer = passports.filter(passport => {
  for (const key of required) {
    if (!(key in passport)) {
      return false;
    }
  }
  return true;
}).length;

console.log(answer);
