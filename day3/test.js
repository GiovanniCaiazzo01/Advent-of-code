const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString().split("\n");
let array = [];

const find_number = (y, index) => {
  if (y[index] == "1") {
    len_uno++;
    array.push(y);
  }
  len_zero++;
  array.push(y);
};

// TODO: PRATICAMENTE FINITO DAJEEEE

const oxygen_generator_rating = (index) => {
  for (const x of input[0]) {
    for (const y of input) {
      find_number(y, index);
    }
    index++;
    len_uno > len_zero
      ? array.filter((el) => el == "0" && el.pop())
      : array.filter((el) => el == "1" && el.pop());
  }
};

oxygen_generator_rating((index = 0), (len_uno = 0), (len_zero = 0));
