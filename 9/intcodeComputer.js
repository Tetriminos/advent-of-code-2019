function* compute(inputArray, inputValues) {
  let preInput = inputArray[0].split(',').map(Number);
  const input = new Array(100000).fill(0);
  for (let i = 0; i < preInput.length; i++) {
    input[i] = preInput[i];
  }
  // console.log(input);
  let inputValueCounter = 0;

  let i = 0;
  let relativeBase = 0;
  while (true) {
    const opcodeWithParams = input[i];
    // console.log(`for index ${i} opcode with params: ${opcodeWithParams}`);
    const opcode = opcodeWithParams % 100;
    if (opcode === 99) {
      return;
    }
    const isFirstParamImmediate = Math.floor((opcodeWithParams / 100) % 10) === 1 ? true : false;
    const isSecondParamImmediate = Math.floor((opcodeWithParams / 1000) % 10) === 1 ? true : false;
    const isFirstParamRelative = Math.floor((opcodeWithParams / 100) % 10) === 2 ? true : false;
    const isSecondParamRelative = Math.floor((opcodeWithParams / 1000) % 10) === 2 ? true : false;
    const isDestinationRelative = Math.floor((opcodeWithParams / 10000) % 10) === 2 ? true : false;

    const firstParam = isFirstParamImmediate ? input[i + 1] : isFirstParamRelative ? input[relativeBase + input[i + 1]] : input[input[i + 1]];
    const secondParam = isSecondParamImmediate ? input[i + 2] : isSecondParamRelative ? input[relativeBase + input[i + 2]] : input[input[i + 2]];

    // if (isFirstParamRelative) {
    //   relativeBase += input[i + 1]
    // }

    // if (isSecondParamRelative) {
    //   relativeBase +=  input[i + 2]
    // }

    let output = isDestinationRelative ? relativeBase + input[i + 3] : input[i + 3];

    switch (opcode) {
      case 1:
        input[output] = firstParam + secondParam;
        // console.log(`1. addition - writes ${firstParam} + ${secondParam} into index ${input[i + 3]}`);
        i += 4;
        break;
      case 2:
        input[output] = firstParam * secondParam;
        // console.log(`2. multiplication - writes ${firstParam} * ${secondParam} into index ${input[i + 3]}`);
        i += 4;
        break;
      case 3:
        let outputForThisOne = isFirstParamRelative ? relativeBase + input[i + 1] : i + 1;
        input[outputForThisOne] = inputValues[inputValueCounter];
        // console.log(`3. input - writes ${inputValues[inputValueCounter]} into index ${input[i + 1]}`);
        inputValueCounter++;
        i += 2;
        break;
      case 4:
        // console.log('################# OUTPUT:', firstParam);
        yield firstParam;
        i += 2;
        break;
      case 5:
        // console.log(`5. jump-if-true - writes ${secondParam} to the instruction pointer if ${firstParam} is not 0`);
        if (firstParam !== 0) {
          i = secondParam;
        } else {
          i += 3;
        }
        break;
      case 6:
        // console.log(`5. jump-if-false - writes ${secondParam} to the instruction pointer if ${firstParam} is 0`);
        if (firstParam === 0) {
          i = secondParam;
        } else {
          i += 3;
        }
        break;
      case 7:
        // console.log(`5. less than - writes 1 into ${input[i + 3]} if ${firstParam} < ${secondParam}, otherwise 0`);
        input[output] = firstParam < secondParam ? 1 : 0;
        i += 4;
        break;
      case 8:
        // console.log(`5. equals - writes 1 into ${input[i + 3]} if ${firstParam} == ${secondParam}, otherwise 0`);
        input[output] = firstParam === secondParam ? 1 : 0;
        i += 4;
        break;
      case 9:
        relativeBase = relativeBase + firstParam;
        i += 2;
        break;
    }
  }
}

module.exports = { compute };
