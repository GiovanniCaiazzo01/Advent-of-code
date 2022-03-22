const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
const elem_riga = input.split("\n");

let horizontal = 0;
let sum = 0;
let aim = 0;
let depth = 0;
let depth_saver = 0;

// USO QUESTO PER RICAVARMI IL PRIMO NUMERO CHE ESCE IN UNA STRINGA
//elem_riga[i].match(/(\d+)/)[1]

for (let i = 0; i < elem_riga.length; i++) {
  if (+elem_riga[i].includes("forward") && aim === 0) {
    horizontal = +elem_riga[i].match(/(\d+)/)[1];
  }

  if (+elem_riga[i].includes("forward") && aim >= 1) {
    horizontal += +elem_riga[i].match(/(\d+)/)[1];
    depth = +elem_riga[i].match(/(\d+)/)[1] * aim;
    depth_saver += depth;
  }
  if (+elem_riga[i].includes("down")) {
    aim += +elem_riga[i].match(/(\d+)/)[1];
  }
  if (+elem_riga[i].includes("up")) {
    aim -= +elem_riga[i].match(/(\d+)/)[1];
  }
}
console.log(depth_saver * horizontal); //2044620088
