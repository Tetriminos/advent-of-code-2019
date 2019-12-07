const solve = inputArray => {
  let totalFuel = 0;

  for (const input of inputArray) {
    totalFuel += Math.floor(Number(input) / 3) - 2;
  }

  return totalFuel;
};

module.exports = { solve };
