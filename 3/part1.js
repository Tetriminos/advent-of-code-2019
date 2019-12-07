const solve = inputArray => {
  const map = new Map();

  for (let w = 0; w < inputArray.length; w++) {
    const instructions = inputArray[w].split(',');
    let steps = 0;
    let x = 0;
    let y = 0;
    for (const instruction of instructions) {
      const direction = instruction[0];
      const distance = Number(instruction.substring(1));
      for (let i = 0; i < distance; i++) {
        steps++;
        switch (direction) {
          case 'R':
            x++;
            break;
          case 'U':
            y++;
            break;
          case 'L':
            x--;
            break;
          case 'D':
            y--;
            break;
        }
        const got = map.get(`${x},${y}`);
        if (got === undefined) {
          map.set(`${x},${y}`, [w, steps]);
        } else if (got[0] !== w) {
          map.set(`${x},${y}`, [3, steps + got[1]]);
        }
      }
    }
  }

  let smallest = Infinity;
  let leastSteps = Infinity;
  map.forEach((val, key) => {
    if (val[0] === 3) {
      const [x, y] = key.split(',');
      const manhattan = Math.abs(x - 0) + Math.abs(y - 0);
      if (manhattan < smallest) {
        smallest = manhattan;
      }
      if (val[1] < leastSteps) {
        leastSteps = val[1];
      }
    }
  });

  return { smallest, leastSteps };
};

module.exports = { solve };
