const fs = require("fs");
const { setFlagsFromString } = require("v8");
const input = fs.readFileSync("./demo.txt").toString();
const elem_riga = input.split("\n");

const uno = [];
const zero = [];
let tmp = [];

let sinistra = 0;
let destra = 1;

const filtroStonks = (uno, zero, index) => {
  if (uno.lenght > zero.lenght) {
    return uno.filter((f) => {
      f.substring(sinistra, destra) == 1
        ? Promise.resolve((uno = [])).then((e) => e.push(f))
        : Promise.resolve((zero = [])).then((e) => e.push(f));
    });
  }
};

const oxygen_generator_rating = (elem_riga, index) => {
  for (elemX of elem_riga[index++]) {
    for (elemY of elem_riga) {
      tmp.push(elemY);
    }

    console.log("AAAAAAAAAAA");
    tmp.filter((f) =>
      f.substring(sinistra, destra) == 1 ? uno.push(f) : zero.push(f)
    );

    filtroStonks(uno, zero, index);
    console.log(pisello);
    console.log(uno);
    console.log(zero);
    sinistra++;
    destra++;
  }
};

console.log(uno);
const co2_scrubber_rating = (elem_riga) => {};

const ogr = oxygen_generator_rating(elem_riga, (index = 0));
const co2 = co2_scrubber_rating(elem_riga);
