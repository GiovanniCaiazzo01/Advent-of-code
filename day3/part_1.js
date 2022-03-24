const { strictEqual } = require("assert");
const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString();
const elem_riga = input.split("\n");
let elem = Object.values(elem_riga);

console.log(elem);
let count = 0;
let zero = 0;
let uno = 0;
let tmp = [];
let epsilon = [];
let gamma = [];

//  tmp.push(+elem[i].charAt());
for (let j = 0; j < 5; j++) {
  for (let i = 0; i < elem.length; i++) {
    tmp.push(+elem[i].charAt(j));

    count = tmp.filter((x) => x === 0).length;
    zero = count;
    count = tmp.filter((x) => x === 1).length;
    uno = count;
  }

  if (zero > uno) {
    gamma.push(0);
  } else {
    gamma.push(1);
  }
  tmp = [];
}

for (let j = 0; j < 5; j++) {
  for (let i = 0; i < elem.length; i++) {
    tmp.push(+elem[i].charAt(j));

    count = tmp.filter((x) => x === 1).length;
    zero = count;
    count = tmp.filter((x) => x === 0).length;
    uno = count;
  }

  if (zero > uno) {
    epsilon.push(0);
  } else {
    epsilon.push(1);
  }
  tmp = [];
}
console.log("gamma", gamma);
console.log("epsylon", epsilon);
