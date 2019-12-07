const assert = require('assert');
const { solve } = require('./part1');

const test = () => {
  assert.strictEqual(solve(['12']), 2);
  assert.strictEqual(solve(['14']), 2);
};

module.exports = { test };
