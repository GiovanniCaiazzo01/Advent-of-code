const fs = require("fs");
const file = fs.readFileSync("input.txt", { encoding: "utf-8" });
const input = file.split("\n");
let sum = 0;
let elves = [];
let i = 0;
let max = 0;

for (const el of input) {
  i++;
  sum += +el;
  if (el === "" || i === input.length) {
    elves.push(sum);
    sum = 0;
  }
}

for (let i = 0; i < elves.length; i++) {
  if (elves[i] > max) {
    max = [elves[i]];
  }
  continue;
}

console.log(elves);
console.log(...max);
