let i = 0;
let tmp = [];
let arr = [];
const { upper, lower } = require("./utils");
const input = require("fs")
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((el) => {
    i++;
    tmp.push(el);
    if (i === 3) {
      arr.push({ ...tmp });
      tmp = [];
      i = 0;
    }
    return arr;
  });
const ocaz = arr
  .map((el) => {
    const first = el[0].split("\n");
    const second = el[1].split("\n");
    const third = el[2].split("\n");
    const to_return = [];
    for (const left of first[0]) {
      for (const midle of second[0]) {
        for (const right of third[0]) {
          if (left === midle && left === right) {
            to_return.push(left);
          }
        }
      }
    }
    return { ...to_return };
  })
  .map((el) => el[0]);
let sum = 0;
for (const el of ocaz) {
  el in lower ? (sum += lower[el]) : null;
  el in upper ? (sum += upper[el]) : null;
}
console.log(sum);
// for (const left of input) {
//   for (const midle of input) {
//     for (const right of input) {
//       if (left === midle && left === right) {
//         arr.push(left);
//       }
//     }
//   }
// }
