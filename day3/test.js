const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString().split("\n");

let array = [];
let uno = [];
let zero = [];

// capire perchè vince sempre 0 dopo la prima iterazione
let oxygen_generator_rating = (index, second_index) => {
  for (const x of input[0]) {
    for (const y of input) {
      if (index < 1) {
        y[index] == "1" ? uno.push(y) : zero.push(y);
      } else if (index >= 1) {
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

    uno.length > zero.length ? array.push(uno) : array.push(zero);
    console.log(`array VINCENTE ${array}`);
    uno = [];
    zero = [];
  }
};
oxygen_generator_rating((index = 0), (second_index = 0));
