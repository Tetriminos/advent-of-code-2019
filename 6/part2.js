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

  const youParents = getAllParents(orbitMap, 'YOU');
  const sanParents = getAllParents(orbitMap, 'SAN');

  for (let i = 0; i < sanParents.length; i++) {
    for (let j = 0; j < youParents.length; j++) {
      if (sanParents[i] === youParents[j]) {
        return i + j;
      }
    }
  }
};

const getAllParents = (orbitMap, leaf) => {
  let curParent = orbitMap[leaf].parent;
  const parents = [];

  while (curParent !== 'COM') {
    parents.push(curParent);
    curParent = orbitMap[curParent].parent;
  }

  return parents;
};

module.exports = { solve };
