const solve = inputArray => {
  const input = inputArray[0].split('').map(Number);

  const layers = {};

  let layer = 0;
  let inputIterator = 0;
  yay_labels:
  while (true) {
    layers[layer] = [];
    for (let i = 0; i < 6; i++) {
      layers[layer].push([]);
      for (let j = 0; j < 25; j++) {
        layers[layer][i].push(input[inputIterator]);
        inputIterator++;
        if (input[inputIterator] === undefined) {
          break yay_labels;
        }
      }
    }
    layer++;
  }
  
  let leastZeroes = Infinity;
  let layerWithLeastZeroes;
  for (let layer in layers) {
    const numberOfZeroes = layers[layer].reduce((acc, val) => acc.concat(val), []).reduce((accumulator, value) => accumulator += value === 0 ? 1 : 0, 0);
    console.log(`layer ${layer} has ${numberOfZeroes} zeroes`);
    if (numberOfZeroes < leastZeroes) {
      leastZeroes = numberOfZeroes;
      layerWithLeastZeroes = layer;
    }
  }

  console.log(`layer with least zeroes is layer ${layerWithLeastZeroes}, with ${leastZeroes}`);
  const flattened = layers[layerWithLeastZeroes].reduce((acc, val) => acc.concat(val), []);

  let ones = 0;
  let twos = 0;
  for (let i = 0; i < flattened.length; i++) {
    if (flattened[i] === 1) {
      ones++;
    } else if (flattened[i] === 2) {
      twos++;
    }
  }

  return ones * twos;
};

module.exports = { solve };
