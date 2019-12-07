const solve = inputArray => {
  const input = inputArray[0];
  const [beginning, end] = input.split('-').map(Number);

  let validPasswords = 0;

  for (let currentNum = beginning; currentNum <= end; currentNum++) {
    const current = String(currentNum);
    let increasingNumbers = true;
    let adjacent = false;
    for (let i = 0; i < current.length - 1; i++) {
      if (current[i] === current[i + 1]) {
        if (current[i] !== current[i + 2]) {
          if (current[i] !== current[i - 1]) {
            adjacent = true;
          }
        }
      }

      if (Number(current[i]) > Number(current[i + 1])) {
        increasingNumbers = false;
        break;
      }
    }

    if (adjacent && increasingNumbers) {
      validPasswords++;
    }
  }

  return validPasswords;
};

module.exports = { solve };
