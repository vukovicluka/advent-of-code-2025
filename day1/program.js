import { syncReadFile } from '../utils/syncReadFile.js';

function program() {
  const input = syncReadFile('input.txt');

  let x = 50;
  let zeroCounter = 0;

  for (const line of input) {
    const [direction, ...rest] = line;
    const steps = rest.join('');
    const clicks = Number(steps);
    const mod = clicks % 100
    if (direction === 'R') {
        x = x + mod
    } else {
        x = x - mod
    }

    if (x < 0) {
        x = 100 - Math.abs(x)
    } else if (x > 99) {
        x = x - 100
    }

    if (x === 0) {
        zeroCounter++
    }
  }
  console.log(zeroCounter);
}
program();