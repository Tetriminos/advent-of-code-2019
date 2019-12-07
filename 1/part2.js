const solve = inputArray => {
  let totalFuel = 0;

  for (const input of inputArray) {
    totalFuel += totalFuelWithFuelMass(Number(input), 0);
  }

  return totalFuel;
};

const totalFuelWithFuelMass = (mass, totalFuel) => {
  const fuelMass = Math.floor(mass / 3) - 2;
  if (fuelMass <= 0) {
    return totalFuel;
  }

  totalFuel += fuelMass

  return totalFuelWithFuelMass(fuelMass, totalFuel);
}

module.exports = { solve };
