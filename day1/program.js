import { syncReadFile } from '../utils/syncReadFile.js';

function program() {
  const input = syncReadFile('input.txt');

  let x = 50;
  let zeroCounter = 0;

  for (const line of input) {
    const [direction, ...rest] = line;
    const steps = rest.join('');
    const clicks = Number(steps);
    const mod = clicks % 100;
    const r = Math.floor(clicks / 100);
    const holder = x
    for (let i = 0; i < r; i++) {
        zeroCounter++;
    }

    if (direction === 'R') {
        x = x + mod
    } else {
        x = x - mod
    }

    if (x < 0) {
        x = 100 - Math.abs(x)
        if (holder > 0 && x !== 0) zeroCounter++
    } else if (x > 99) {
        x = x - 100
        if (holder < 100 && x !== 0) zeroCounter++
    }

    if (x === 0) {
        zeroCounter++
    }
  }
  console.log(zeroCounter);
}
program();