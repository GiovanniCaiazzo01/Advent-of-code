const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString();
const elem_riga = input.split("\n");

console.log(elem_riga);

const oxygen_generator_rating = (elem_riga) => {
  const tmp = [];
  const len = elem_riga[0].length;
  for (let i = 0; i < len; i++) {
    for (let j of elem_riga) {
      console.log(j.charAt(i));
    }
  }
};
oxygen_generator_rating(elem_riga);
// const c02_scrubber_rating = [];
// let tmp = [];
