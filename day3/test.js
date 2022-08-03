const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString().split("\n");

let array = [];
let uno = [];
let zero = [];
let left = 0;
let right = 0;

const afes = (array, left, right, uno, zero) => {
  array.filter((e) =>
    e.contains(e.substring(left, right) == "1" ? uno.push(e) : zero.push(e))
  );

  /*
   * TO DO:
    1- controllare se la lunghezza di uno è maggiure di zero
    2- rileggere il codice 
   */
  // uno.length > zero.length ? (array = array[uno]) : (array = array[zero]);
  // zero = [];
  // uno = [];
};

const most_common = (index, left, right, uno, zero) => {
  for (x in input[0]) {
    for (y in input) {
      array.push(input[y]);
    }
    afes(array, left, right, uno, zero);
    console.log("////", index);
    index++;
  }
};

const ocaz = most_common(array, (index = 0), left, right, uno, zero);
