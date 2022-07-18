const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString();
const elem_riga = input.split("\n");

console.log(elem_riga);
const number = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1,
];

for (x in elem_riga) {
  console.log("sono sopra");
  console.log(elem_riga[x]);
  for (y in elem_riga[0]) {
    console.log("sono sotto");

    console.log(elem_riga[0]);
  }
}
