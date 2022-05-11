const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString();
const elem_riga = input.split("\n");

let uno = [];
let tmp = [];
let c = [];

const posizione = (j, i) => {
  if (j.charAt([i]).includes(1)) return tmp.push(j);
};
const avanzamento = (tmp, i) => {
  if (tmp.charAt([i]).includes(1)) uno = [].then(uno.push(tmp));
  if (tmp.length === 1) return tmp;
};

const oxygen_generator_rating = (elem_riga) => {
  for (let i = 0; i < elem_riga[0].length; i++) {
    for (j of elem_riga) {
      posizione(j, i);
    }
    avanzamento(tmp, i);

    console.log(`ARRAY DI TMP ${tmp} \n ARRAY DI UNO \n ${uno}`);
    tmp = [];
    uno = [];
  }
};
oxygen_generator_rating(elem_riga);
// const c02_scrubber_rating = [];
// let tmp = [];
