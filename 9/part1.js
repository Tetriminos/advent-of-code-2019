const { compute } = require('./intcodeComputer');

const solve = inputArray => {
  const generator = compute([...inputArray], [1]);
  const value = [];
  while (true) {
    const genResult = generator.next();
    if (genResult.value !== undefined) {
      value.push(genResult.value);
    }
    if (genResult.done) {
      break;
    }
  }

  return value;
};

module.exports = { solve };
