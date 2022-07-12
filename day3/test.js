const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString();
const elem_riga = input.split("\n");

const uno = [];
const zero = [];
const oxygen_generator_rating = (elem_riga, index, index_due) => {
  for (elemX of elem_riga[index++]) {
    for (elemY of elem_riga[index_due++]) {
      console.log(elemY);
      // elemY.filter((e) => (e == "1" ? uno.push(e) : zero.push(e)));
    }
  }
};

console.log(uno);
const co2_scrubber_rating = (elem_riga) => {};

const ogr = oxygen_generator_rating(elem_riga, (index = 0), (index_due = 0));
const co2 = co2_scrubber_rating(elem_riga);
