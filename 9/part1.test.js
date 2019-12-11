const assert = require('assert');
const { solve } = require('./part1');
const { compute } = require('./intcodeComputer');

const test = () => {
  assert.deepEqual(solve(['109,-1,4,1,99']), [-1]);
  assert.deepEqual(solve(['109,-1,104,1,99']), [1]);
  assert.deepEqual(solve(['109,-1,204,1,99']), [109]);
  assert.deepEqual(solve(['109,1,203,2,204,2,99']), [1]);
  assert.deepEqual(solve(['109,1,3,3,204,2,99']), [1]);
  assert.deepEqual(solve(['109,1,209,-1,204,-106,99']), [204]);
  assert.deepEqual(solve(['109,1,9,2,204,-6,99']), [204]);
  assert.deepEqual(solve(['109,1,109,9,204,-6,99']), [204]);
  assert.deepEqual(solve(['109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99']), [109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99]);
  assert.deepEqual(solve(['1102,34915192,34915192,7,4,7,99,0']), [1219070632396864]);
  assert.deepEqual(solve(['104,1125899906842624,99']), [1125899906842624]);
};

module.exports = { test };
