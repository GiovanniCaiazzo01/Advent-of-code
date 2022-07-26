const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString().split("\n");

const uno = [];
const zero = [];
let tmp = [];

let destra = 1;
let sinistra = 0;

for (let i = 0; i < input[0].length; i++) {
  for (let j = 0; j < input.length; j++) {
    const data = input[j].substring(sinistra, destra);
    tmp.push(data);
  }
  sinistra++;
  destra++;
  console.log("//////////////////////////////////////");
}
