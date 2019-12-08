const fs = require('fs');

const [day, part, test] = process.argv.slice(2);

const inputFile = fs.readFileSync(`${__dirname}/${day}/input.txt`, { encoding: 'utf8' });
const input = inputFile.split(/\r?\n/);

if (test) {
  const { test } = require(`./${day}/part${part}.test.js`);
  test();

  process.exit(0);
}

const { solve } = require(`./${day}/part${part}.js`);

console.log(solve(input));
