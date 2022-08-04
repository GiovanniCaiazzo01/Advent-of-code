const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString().split("\n");

let array = [];
let uno = [];
let zero = [];
let left = 0;
let right = 0;

const afes = (array, left, right, uno, zero) => {
  uno.length = 0;
  zero.length = 0;
  array.filter((e) =>
    e.toString().substring(left, right) == "1" ? uno.push(e) : zero.push(e)
  );
  array.length = 0;
  if (uno.length > zero.length) {
    return array.push(uno);
  }
  return array.push(zero);
};

const most_common = (index, left, right, uno, zero) => {
  for (x in input[0]) {
    for (y in input) {
      array.push(input[y]);
    }
    const coccos = afes(array, left, right, uno, zero);
    console.log("////", index);
    console.log("array di UNO", uno);
    console.log("array di zero", zero);
    index++;
  }
};

const ocaz = most_common(array, (index = 0), left, right, uno, zero);

/**
 * RILEGGERE IL CODICE, SONO SULLA GIUSTA VIA
 */
