const assert = require('assert');
const { solve } = require('./part2');

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
    'K)L',
    'K)YOU',
    'I)SAN'
  ]), 4);

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
    'K)L',
    'K)YOU',
    'I)SAN',
    'F)Z',
    'F)X',
    'Z)M',
    'Z)N'
  ]), 4);
};

module.exports = { test };
