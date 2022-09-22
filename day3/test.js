const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString().split("\n");

let array = [];
let uno = [];
let zero = [];

// TODO: CAPIRE PERCHE IL NEGATIVO NON FUNZIONA'
let oxygen_generator_rating = (index, second_index) => {
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
    index < 1 &&
      console.log(`array UNO: => [${uno}]    array ZERO: => [${zero}]`);

    index >= 1 &&
      console.log(`array UNO: => [${uno}]    array ZERO: => [${zero}]`);

    index++;
    array = [];

    uno.length > zero.length || uno.length === zero.length
      ? array.push(uno)
      : array.push(zero);

    console.log(`array VINCENTE ${array}`);
    uno = [];
    zero = [];
  }
  return +array;
};

const co2_scrubber_rating = (index, second_index, array, uno, zero) => {
  for (const x of input[0]) {
    for (const y of input) {
      if (index < 1) {
        y[index] == "0" ? zero.push(y) : uno.push(y);
      } else if (index >= 1 && second_index < array[0].length) {
        array[0][second_index].substring(index, index + 1) == "0"
          ? zero.push(array[0][second_index])
          : uno.push(array[0][second_index]);
        // console.log("ARRAY DI INDEX = ", index);
      }
      second_index++;
    }

    second_index = 0;
    index < 1 &&
      console.log(`array UNO: => [${uno}]    array ZERO: => [${zero}]`);

    index >= 1 &&
      console.log(`array UNO: => [${uno}]    array ZERO: => [${zero}]`);

    index++;
    array = [];

    zero.length > uno.length || zero.length === uno.length
      ? array.push(zero)
      : array.push(uno);

    console.log(`array VINCENTE ${array}`);
    uno = [];
    zero = [];
  }
  return +array;
};

const ogr = oxygen_generator_rating(
  (index = 0),
  (second_index = 0),
  (array = []),
  (uno = []),
  (zero = [])
);
const co2 = oxygen_generator_rating(
  (index = 0),
  (second_index = 0),
  (array = []),
  (uno = []),
  (zero = [])
);

console.log(ogr, co2);
