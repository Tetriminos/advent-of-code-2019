const { compute } = require('./intcodeComputer');

const solve = inputArray => {
  const sequences = permutator([9, 8, 7, 6, 5]);

  const highest = Math.max(...sequences.map(sequence => {
    const computers = {};

    for (let i = 0; i < 5; i++) {
      computers[i] = {};
      computers[i].inputArr = [sequence[i]];
      computers[i].generator = compute([...inputArray], computers[i].inputArr)
    }

    let toInput = 0;
    let lastEOutput;
    for (let i = 0;; i++) {
      computers[i%5].inputArr.push(toInput);
      toInput = computers[i%5].generator.next().value;

      if (toInput === undefined) {
        break;
      }

      if (i%5 === 4) {
        lastEOutput = toInput;
      }
    }

    return lastEOutput;
  }));

  return highest;
};

const permutator = inputArr => {
  const results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

module.exports = { solve };
