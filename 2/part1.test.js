const assert = require('assert');
const { solve } = require('./part1');

const test = () => {
  assert.strictEqual(solve(['1,0,0,0,99']), 2);
  assert.strictEqual(solve(['2,3,0,3,99']), 2);
  assert.strictEqual(solve(['2,4,4,5,99,0']), 2);
  assert.strictEqual(solve(['1,1,1,4,99,5,6,0,99']), 30);
  assert.strictEqual(solve(['1,9,10,3,2,3,11,0,99,30,40,50']), 3500);
};

module.exports = { test };
