const { strictEqual } = require("assert");
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();
const elem_riga = input.split("\n");
let elem = Object.values(elem_riga);

console.log(elem);
let count = 0;
let zero = 0;
let uno = 0;
let tmp = [];
let epsilon = [];
let gamma = [];

for (let j = 0; j < elem[0].length; j++) {
  for (let i = 0; i < elem.length; i++) {
    tmp.push(+elem[i].charAt(j));

    count = tmp.filter((x) => x === 0).length;
    zero = count;
    uno = elem.length - zero;
  }
  if (zero > uno) {
    gamma.push(0);
    epsilon.push(1);
  } else {
    gamma.push(1);
    epsilon.push(0);
  }

  tmp = [];
}

const decimal_gamma = gamma.join("");
const decimal_epsilon = epsilon.join("");
console.log(
  "Final Result => ",
  parseInt(decimal_gamma, 2) * parseInt(decimal_epsilon, 2)
);
