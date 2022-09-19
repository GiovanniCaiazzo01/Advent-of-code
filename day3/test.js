const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString().split("\n");

const find_number = (y, index, uno, zero) => {
  y[index] == "1" ? uno.push(y) : zero.push(y);
};

// TODO: PRATICAMENTE FINITO DAJEEEE

const ossigeno = () => {
  for (const x of input[0]) {
    for (const y of input) {
      find_number(y, index, uno, zero);
    }
    index++;
    if (uno.length > zero.length) {
      for (const e of uno) {
        if (e[index] == "1") {
          uno = [];
          zero = [];
          uno.push(e);
        }
        zero.push[e];
      }
    }
  }
};

ossigeno((uno = []), (zero = []), (index = 0));
