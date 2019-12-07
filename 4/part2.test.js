const assert = require('assert');
const { solve } = require('./part2');

const test = () => {
  assert.strictEqual(solve(['112233-112233']), 1);
  assert.strictEqual(solve(['123444-123444']), 0);
  assert.strictEqual(solve(['1234445-1234445']), 0);
  assert.strictEqual(solve(['12344455-12344455']), 1);
  assert.strictEqual(solve(['12344455666-12344455666']), 1);
  assert.strictEqual(solve(['123444555-123444555']), 0);
  assert.strictEqual(solve(['111122-111122']), 1);
};

module.exports = { test };
