// const input = require("fs")
//   .readFileSync("demo.txt", { encoding: "utf-8" })
//   .split("\n")
//   .map((el) => el.replace(/[\[\]']+/g, ""))
//   .map((el) => el.replace(/\d+/g, ""))
//   .map((el) => el.replace(/[a-z]/g, ""));

const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n");

const ARR2D = [];
const make_array = (string) => {
  let spaces = 0;
  const arr_to_push = [];
  for (const el of string) {
    el === " " && spaces++;
    if (spaces === 3) {
      arr_to_push.push(" ");
      spaces = 0;
    }
    if (arr_to_push.length === 3) return arr_to_push;
    if (/^[a-zA-Z]+$/.test(el)) arr_to_push.push(el);
  }
};

for (const el of input) {
  if (el === "") input.splice(input.indexOf(el), 1);
}

console.log(input);

for (const el of input) {
  const arr = make_array(el);
  console.log(arr);
  ARR2D.push(arr);
}

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
