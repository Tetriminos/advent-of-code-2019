const solve = inputArray => {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      let input = inputArray[0].split(',').map(el => Number(el));
      // wtf
      input[1] = noun;
      input[2] = verb;
    
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
    
      if (input[0] === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
};

module.exports = { solve };
