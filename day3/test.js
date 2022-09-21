const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString().split("\n");

let array = [];
let uno = [];
let zero = [];
let index = 0;
// capire perchè vince sempre 0 dopo la prima iterazione
let oxygen_generator_rating = () => {
  for (const x of input[0]) {
    for (const y of input) {
      if (array.length < 1) {
        y[index] == "1" ? uno.push(y) : zero.push(y);
      } else if (array.length > 1) {
        array[index] == "1" ? uno.push(y) : zero.push(y);
      }
    }

    console.log(
      `interazione numero ${index} il vincitore di questa iterazione è ${
        uno.length > zero.length
          ? console.log("E' uno", uno)
          : console.log("E' zero", zero)
      }`
    );
    index++;
    array = [];

    uno.length > zero.length ? array.push(...uno) : array.push(...zero);
    uno.length > zero.length ? console.log("vince 1") : console.log("vince 0");

    uno = [];
    zero = [];
  }
};
oxygen_generator_rating();
