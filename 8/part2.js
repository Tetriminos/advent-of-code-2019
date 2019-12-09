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
  
  const image = [];

  for (let i = 0; i < 6; i++) {
    image.push([]);
    for (let j = 0; j < 25; j++) {
      let visible;
      for (let k = 0; k < Object.keys(layers).length; k++) {
        if (layers[k][i][j] !== 2) {
          visible = layers[k][i][j];
          break;
        }
      }
      image[i].push(visible);
    }
  }

  console.log(image);
};

module.exports = { solve };
