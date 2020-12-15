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

const validate = {
  byr: str => {
    const num = parseInt(str, 10);
    return num >= 1920 && num <= 2002;
  },
  iyr: str => {
    const num = parseInt(str, 10);
    return num >= 2010 && num <= 2020;
  },
  eyr: str => {
    const num = parseInt(str, 10);
    return num >= 2020 && num <= 2030;
  },
  hgt: str => {
    const { value, unit } = str.match(/(?<value>[0-9]+)(?<unit>\w+)/).groups;
    const height = parseInt(value, 10);
    if (unit === 'cm') {
      return height >= 150 && height <= 193;
    } else if (unit === 'in') {
      return height >= 59 && height <= 76;
    } else {
      return false;
    }
  },
  hcl: str => /#[0-9a-z]/.test(str),
  ecl: str => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(str),
  pid: str => /^[0-9]{9}$/.test(str),
  cid: () => true,
};

const checkRequiredFields = passport => {
  const required = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt'];
  for (const key of required) {
    if (!(key in passport)) {
      return false;
    }
  }
  return true;
};

const validateValues = passport => {
  for (const key of Object.keys(passport)) {
    const value = passport[key];
    const result = validate[key](value);
    if (!result) {
      return false;
    }
  }
  return true;
};

const answer = passports.filter(checkRequiredFields).filter(validateValues).length;

console.log(answer);
