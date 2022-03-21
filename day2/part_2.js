const fs = require("fs");
let input = fs.readFileSync("./demo.txt").toString();
const elem_riga = input.split("\n");

let horizontal = 0;
let depth = 0;
let sum = 0;
let aim = 0;

for (let i = 0; i < elem_riga.length; i++) {
  if (elem_riga[i].includes("forward")) {
    horizontal += +elem_riga[i].match(/(\d+)/)[1] + aim;
    depth = +elem_riga[i].match(/(\d+)/)[1] * aim;
  }
  if (elem_riga[i].includes("down")) {
    depth += +elem_riga[i].match(/(\d+)/)[1];
    aim += +elem_riga[i].match(/(\d+)/)[1];
  }
  if (elem_riga[i].includes("up")) {
    depth -= +elem_riga[i].match(/(\d+)/)[1];
    aim -= +elem_riga[i].match(/(\d+)/)[1];
  }
}

sum = horizontal * depth;
console.log(sum);
