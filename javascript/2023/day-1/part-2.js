const input = require("fs")
  .readFileSync("./demo-pt-2.txt", { encoding: "utf-8" })
  .split("\n");

const words = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

let composedString = "";
let tmp = [];

const checkIsNumber = (number) => {
  return !isNaN(number);
};

const regexWords = words.map((word) => word.split("").join("\\d*")).join("|");
const regex = new RegExp(`(${regexWords})`, "gi");

for (let i = 0; i < input.length; i++) {
  const currentString = input[i];
  for (let j = 0; j < input.length + 1; j++) {
    const currentLetter = input[i][j];
    const isNumber = checkIsNumber(parseInt(currentLetter, 10));

    if (isNumber) {
      tmp.push(currentLetter);
    }
    const substring = currentString.substring(j, j + 5);
    const isStringNumber = substring.match(regex);
    if (isStringNumber) {
      tmp.push(isStringNumber[0]);
    }
    console.log(substring);
  }
  console.log(tmp);
  tmp = [];
}
