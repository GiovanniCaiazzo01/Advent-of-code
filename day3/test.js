const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString().split("\n");

const uno = [];
const zero = [];
let tmp = [];
let left = 0;
let right = 1;

const retrive_filter_input = (array) => {};

const oxygen_generator_rating = (index) => {
  for (x in input[0]) {
    for (y in input) {
      retrive_filter_input(input[index]);
      index++;
    }
    index = 0;
    console.log("//////////////////////////////////////");
    left++;
    right++;
  }
};

const most_common = oxygen_generator_rating((index = 0));
