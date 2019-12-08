const solve = inputArray => {
  const orbitMap = {};

  for (const input of inputArray) {
    const [parent, satellite] = input.split(')');

    if (orbitMap[parent]) {
      orbitMap[parent].satellites.push(satellite);
    } else {
      orbitMap[parent] = {
        parent: null,
        satellites: [satellite]
      }
    }

    orbitMap[satellite] = {
      parent,
      satellites: []
    };
  }

  console.log(orbitMap);

  let directOrbits = 0;
  let indirectOrbits = 0;
  for (let orbit in orbitMap) {
    const parent = orbitMap[orbit].parent;
    if (parent !== null) {
      directOrbits++;
    } else {
      continue;
    }

    let curParent = parent;
    console.log(curParent);
    while (orbitMap[curParent].parent !== null) {
      indirectOrbits++;
      curParent = orbitMap[curParent].parent;
    }
  }

  return directOrbits + indirectOrbits;
};

module.exports = { solve };
