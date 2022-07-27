const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString().split("\n");

const uno = [];
const zero = [];
let tmp = [];
let left = 0;
let right = 1;

const filter_element = (array) => {};

const oxygen_generator_rating = () => {
  for (x in input[0]) {
    for (y in input) {
      const data = input[y].substring(left, right);
      tmp.push(data);
    }
    tmp.filter((f) => (f == "1" ? uno.push(f) : zero.push(f)));
    uno.length > zero.length ? filter_element(uno) : filter_element(zero);

    console.log("//////////////////////////////////////");
    left++;
    right++;
  }
};

const most_common = oxygen_generator_rating(input);
