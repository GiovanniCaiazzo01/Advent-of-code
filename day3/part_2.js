const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

let index = 0,
  second_index = 0;
let array = [],
  uno = [],
  zero = [];

let co2_index = 0,
  co2_second_index = 0;

let co2_array = [],
  co2_uno = [],
  co2_zero = [];

// TODO: CAPIRE PERCHE IL NEGATIVO CACCIA FUORI UN NUMERO CHE NON DOVREBBE'
let oxygen_generator_rating = () => {
  for (const x of input[0]) {
    for (const y of input) {
      if (index < 1) {
        y[index] == "1" ? uno.push(y) : zero.push(y);
      } else if (index >= 1 && second_index < array[0].length) {
        array[0][second_index].substring(index, index + 1) == "1"
          ? uno.push(array[0][second_index])
          : zero.push(array[0][second_index]);
        // console.log("ARRAY DI INDEX = ", index);
      }
      second_index++;
    }

    second_index = 0;
    index++;
    array = [];

    uno.length > zero.length || uno.length === zero.length
      ? array.push(uno)
      : array.push(zero);

    uno = [];
    zero = [];
  }
  return array;
};

const co2_scrubber_rating = () => {
  for (const x of input[0]) {
    for (const y of input) {
      if (co2_index < 1) {
        y[co2_index] == "0" ? co2_zero.push(y) : co2_uno.push(y);
      } else if (co2_index >= 1 && co2_second_index < co2_array[0].length) {
        co2_array[0][co2_second_index].substring(co2_index, co2_index + 1) ==
        "0"
          ? co2_zero.push(co2_array[0][co2_second_index])
          : co2_uno.push(co2_array[0][co2_second_index]);
      }
      co2_second_index++;
    }

    co2_second_index = 0;
    co2_index++;
    co2_array = [];

    co2_zero.length < co2_uno.length || co2_zero.length === co2_uno.length
      ? co2_array.push(co2_zero)
      : co2_array.push(co2_uno);
    if (co2_array[0].length === 1) return co2_array;

    co2_uno = [];
    co2_zero = [];
  }
};

const ogr = oxygen_generator_rating();
const co2 = co2_scrubber_rating();

const ogrDecimal = parseInt(ogr, 2);
const co2Decimal = parseInt(co2, 2);

console.log(
  `oxygen generator rating => ${ogr}(${ogrDecimal})\n CO2 scrubber rating => ${co2}(${co2Decimal})\n FINAL RESULT => ${
    ogrDecimal * co2Decimal
  } `
);
