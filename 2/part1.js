const solve = inputArray => {
  let input = inputArray[0].split(',').map(el => Number(el));
  // wtf
  input[1] = 12;
  input[2] = 2;

  yay_label:
  for (let i = 0; i < input.length; i += 4) {
    const [opcode, first, second, dest] = input.slice(i, i + 4);
    switch (opcode) {
      case 1:
        input[dest] = input[first] + input[second];
        break;
      case 2:
        input[dest] = input[first] * input[second];
        break;
      case 99:
        break yay_label;
    }
  }

  console.log(input);
  return input[0];
};

module.exports = { solve };
