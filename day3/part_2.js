const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString();
const elem_riga = input.split("\n");

let uno = [];
let zero = [];
let tmp = [];
let c = [];

const posizione = (j, i) => {
  j.charAt([i]) == 1 ? uno.push(j) : zero.push(j);
};

const ocaz = (array, i) => {
  if (array[i].charAt([i]) == 1) {
    tmp.push(array);
    array = [];
    // e poi cosa facciamo ?
  }
  if (array[i].charAt([i]) == 0) {
    zero = [];
    zero.push(array);
  }
};

const oxygen_generator_rating = (elem_riga) => {
  for (let i = 0; i < elem_riga[0].length; i++) {
    for (j of elem_riga) {
      posizione(j, i);
    }
    uno.length > zero.length ? ocaz(uno, i) : ocaz(zero, i);
    zero = [];
    uno = [];
  }
};
oxygen_generator_rating(elem_riga);
// const c02_scrubber_rating = [];
// let tmp = [];
