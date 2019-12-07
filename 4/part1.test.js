const assert = require('assert');
const { solve, potentialPassword } = require('./part1');

const test = () => {
  assert.strictEqual(solve(['111111-111111']), 1);
  assert.strictEqual(solve(['223450-223450']), 0);
  assert.strictEqual(solve(['123789-123789']), 0);
};

module.exports = { test };
