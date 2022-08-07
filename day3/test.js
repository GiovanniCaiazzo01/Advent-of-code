const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString().split("\n");

let array = [];
let uno = [];
let zero = [];
let left = 0;
let right = 1;

const most_common = (index, left, right, uno, zero) => {
  for (x in input[0]) {
    for (y in input) {
      array.push(input[y]);
    }
    uno.length = 0;
    zero.length = 0;

    array.filter((e) => {
      // const element  = e.substring(left, right) ==="1"
    });

    console.log(uno);
    console.log(zero);

    console.log("////", index);
    left++;
    right++;
    index++;
  }
};

const ocaz = most_common(array, (index = 0), left, right, uno, zero);
