const input = require('./input.json');

const extractGuard = str => str.match(/#(\d+)/)[1];

const extractTime = str => parseInt(str.match(/:(\d\d)/)[1], 10);

const addSleepMinutes = (id, start, end, schedule) => {
  if (!schedule[id]) {
    schedule[id] = new Array(60).fill(0);
  }

  for (let i = start; i < end; i++) {
    schedule[id][i]++;
  }
};

const sumSleepMinutes = arr => arr.reduce((sum, mins) => sum + mins);

const sumGuardsSleep = schedule =>
  Object.keys(schedule).reduce(
    (summed, id) => [...summed, [id, sumSleepMinutes(schedule[id])]],
    []
  );

const findSleepiestGuard = schedule =>
  sumGuardsSleep(schedule).sort((a, b) => b[1] - a[1])[0][0];

const findSleepiestMinute = arr =>
  arr.reduce((max, cur) => (arr[cur] > arr[max] ? cur : max), 0);

const createScoreboard = input => {
  const schedule = {};
  let index = 0;
  let id = null;
  let start = null;
  let end = null;

  while (index < input.length) {
    if (input[index].includes('begins shift')) {
      id = extractGuard(input[index++]);
    }

    if (input[index].includes('falls asleep')) {
      start = extractTime(input[index++]);
      end = extractTime(input[index++]);
      addSleepMinutes(id, start, end, schedule);
    }
  }

  return schedule;
};

const schedule = createScoreboard([...input].sort());
const sleepiestGuard = findSleepiestGuard(schedule);
const sleepiestMinute = findSleepiestMinute(schedule[sleepiestGuard]);

console.log('guard: ', sleepiestGuard, ' minute: ', sleepiestMinute);

const output = Object.keys(schedule).map(
  id => `#${id}: ${schedule[id].map(x => (x === 0 ? '.' : '#')).join(' ')}`
);
