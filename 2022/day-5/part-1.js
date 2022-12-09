const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n")
  .map((el) => el.replace(/[\[\]']+/g, ""))
  .map((el) => el.replace(/\d+/g, ""))
  .map((el) => el.replace(/[a-z]/g, ""));

const divide_space = (input) => {
  let counter = 0;
  const to_return = [];
  let tmp = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === " ") {
        counter++;
      }
      if (counter === 4 && input[i][j] !== " ") {
        tmp.push(" ");
      }
      if (input[i][j] !== " ") {
        tmp.push(input[i][j]);
      } else if (counter === 8 && input[i][j - 4] !== " ") {
        tmp.push(" ");
      }
    }
    to_return.push(tmp);
    tmp = [];
    counter = 0;
  }

  return to_return;
};

const fix_raw = (raw) => {
  for (const container of raw) {
    for (const el of container) {
      console.log(el);
    }
  }
};

const raw = divide_space(input);
console.log(raw);

// prima di arrivare a questo bisogna elkiminare tutti i restanti elementi che non ci servono
const formatted_input = fix_raw(raw);

// [
//   [ ' ', 'D', ' ' ],
//   [ 'N', 'C' ],
//   [ 'Z', 'M', 'P' ],
//   [ '1', ' ', '2', '3' ],
//   [],
//   [
//     'm', 'o', 'v', 'e',
//     '1', 'f', 'r', 'o',
//     'm', '2', ' ', 't',
//     ' ', 'o', '1'
//   ],
//   [
//     'm', 'o', 'v', 'e',
//     '3', 'f', 'r', 'o',
//     'm', '1', ' ', 't',
//     ' ', 'o', '3'
//   ],
//   [
//     'm', 'o', 'v', 'e',
//     '2', 'f', 'r', 'o',
//     'm', '2', ' ', 't',
//     ' ', 'o', '1'
//   ],
//   [
//     'm', 'o', 'v', 'e',
//     '1', 'f', 'r', 'o',
//     'm', '1', ' ', 't',
//     ' ', 'o', '2'
//   ]
// ]
