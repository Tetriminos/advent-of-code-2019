const solve = inputArray => {
  let input = inputArray[0].split(',').map(Number);
  const inputValue = 1;

  let i = 0;
  while (true) {
    const opcodeWithParams = input[i];
    console.log(`for index ${i} opcode with params: ${opcodeWithParams}`);
    const opcode = opcodeWithParams % 100;
    if (opcode === 99) {
      break;
    }
    const isFirstParamImmediate = Math.floor((opcodeWithParams / 100) % 10) === 1 ? true : false;
    const isSecondParamImmediate = Math.floor((opcodeWithParams / 1000) % 10) === 1 ? true : false;

    const firstParam = isFirstParamImmediate ? input[i + 1] : input[input[i + 1]];
    const secondParam = isSecondParamImmediate ? input[i + 2] : input[input[i + 2]];

    switch(opcode) {
      case 1:
        input[input[i + 3]] = firstParam + secondParam;
        console.log(`1. addition - writes ${firstParam} + ${secondParam} into index ${input[i + 3]}`);
        i += 4;
        break;
      case 2:
        input[input[i + 3]] = firstParam * secondParam;
        console.log(`2. multiplication - writes ${firstParam} * ${secondParam} into index ${input[i + 3]}`);
        i += 4;
        break;
      case 3:
        input[input[i + 1]] = inputValue;
        console.log(`3. input - writes ${inputValue} into index ${input[i + 1]}`);
        i += 2;
        break;
      case 4:
        console.log('################# OUTPUT:', firstParam);
        i += 2;
        break;
    }
  }

  return input[0];
};

module.exports = { solve };
