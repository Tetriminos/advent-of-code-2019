const assert = require('assert');
const { solve } = require('./part1');

const test = () => {
  assert.strictEqual(solve([
    'COM)B',
    'B)C',
    'C)D',
    'D)E',
    'E)F',
    'B)G',
    'G)H',
    'D)I',
    'E)J',
    'J)K',
    'K)L'
  ]), 42);
};

module.exports = { test };
