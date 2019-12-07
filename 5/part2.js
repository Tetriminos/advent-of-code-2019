const solve = inputArray => {
  let input = inputArray[0].split(',').map(Number);
  const inputValue = 5;

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
      case 5:
        console.log(`5. jump-if-true - writes ${secondParam} to the instruction pointer if ${firstParam} is not 0`);
        if (firstParam !== 0) {
          i = secondParam;
        } else {
          i += 3;
        }
        break;
      case 6:
        console.log(`5. jump-if-false - writes ${secondParam} to the instruction pointer if ${firstParam} is 0`);
        if (firstParam === 0) {
          i = secondParam;
        } else {
          i += 3;
        }
        break;
      case 7:
        console.log(`5. less than - writes 1 into ${input[i + 3]} if ${firstParam} < ${secondParam}, otherwise 0`);
        input[input[i + 3]] = firstParam < secondParam ? 1 : 0;
        i += 4;
        break;
      case 8:
        console.log(`5. equals - writes 1 into ${input[i + 3]} if ${firstParam} == ${secondParam}, otherwise 0`);
        input[input[i + 3]] = firstParam === secondParam ? 1 : 0;
        i += 4;
        break;
    }
  }

  return input[0];
};

module.exports = { solve };
