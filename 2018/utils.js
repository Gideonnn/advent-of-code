const benchmark = (fn, times) => {
  const time = process.hrtime();
  for (let i = 0; i < times; i++) {
    fn();
  }
  const duration = process.hrtime(time);
  return `${duration[0]},${Math.round(duration[1] / 1000000)} seconds`;
};

module.exports = {
  benchmark,
};
