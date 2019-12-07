const assert = require('assert');
const { solve } = require('./part2');

const test = () => {
  assert.strictEqual(solve(['14']), 2);
  assert.strictEqual(solve(['1969']), 966);
  assert.strictEqual(solve(['100756']), 50346);
};

module.exports = { test };
