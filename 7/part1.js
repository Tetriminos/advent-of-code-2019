const { compute } = require('./intcodeComputer');

const solve = inputArray => {
  const sequences = permutator([0, 1, 2, 3, 4]);

  const highest = Math.max(...sequences.map(sequence => {
    let toInput = 0;
    for (let i = 0; i < 5; i++) {
      toInput = compute([...inputArray], [sequence[i], toInput])
      // console.log('lololol', i, toInput);
    }
    return toInput;
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
