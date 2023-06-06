// const input = require("fs")
//   .readFileSync("demo.txt", { encoding: "utf-8" })
//   .split("\n")
//   .map((el) => el.replace(/[\[\]']+/g, ""))
//   .map((el) => el.replace(/\d+/g, ""))
//   .map((el) => el.replace(/[a-z]/g, ""));

const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n");

let pre = 0;
let next = 1;
let spaces = 0;
const new_map = [];

for (let i = 0; i < input.length; i++) {
  pre = 0;
  next = 1;
  for (let j = 0; j < input.length; j++) {
    if (!new_map[i]) new_map[i] = [];
    if (spaces === 4) {
      new_map[i].push(" ");
    }
    if (input[i].substring(pre, next) === " ") {
      spaces++;
      pre++;
      next++;
    }
    if (input[i].substring(pre, next) === "[") {
      spaces = 0;
      new_map[i].push(input[i].substring(pre + 1, next + 1));
    }
  }
}

console.log(new_map);
// [
//   "    [D]    ",
//   "[N] [C]    ",
//   "[Z] [M] [P]",
//   " 1   2   3 ",
//   "",
//   "move 1 from 2 to 1",
//   "move 3 from 1 to 3",
//   "move 2 from 2 to 1",
//   "move 1 from 1 to 2",
// ]
