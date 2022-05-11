const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString();
const elem_riga = input.split("\n");

let uno = [];
let zero = [];
let tmp = [];
let c = [];

const posizione = (j, i) => {
  if (j.charAt([i]).includes(1)) return uno.push(j);
  if (j.charAt([i]).includes(0)) return zero.push(j);
};

const oxygen_generator_rating = (elem_riga) => {
  for (let i = 0; i < elem_riga[0].length; i++) {
    for (j of elem_riga) {
      posizione(j, i);
    }
    uno.length > zero.length
      ? console.log(`ARRAY DI UNO \n${uno}`)
      : console.log(`ARRAY DI ZERO \n ${zero}`);
    zero = [];
    uno = [];
  }
};
oxygen_generator_rating(elem_riga);
// const c02_scrubber_rating = [];
// let tmp = [];
