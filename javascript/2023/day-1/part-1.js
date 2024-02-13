const input = require("fs")
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n");

const arr = [];
let tmp_arr = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (j === "\n") continue;
    const currentNumber = input[i][j];
    const isNumber = parseInt(currentNumber, 10);
    if (!isNaN(isNumber)) {
      tmp_arr.push(currentNumber);
    }
  }
  arr.push(tmp_arr);
  tmp_arr = [];
}

let first_number = 0;
let last_number = 0;
let merged_string = 0;

for (let i = 0; i < arr.length; i++) {
  first_number = arr[i][0];
  last_number = arr[i][arr[i].length - 1];
  merged_string = first_number + last_number;

  const parsedSum = +merged_string;
  result += parsedSum;
}

console.log(result); // 56465
