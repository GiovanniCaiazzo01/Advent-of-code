const { upper, lower } = require("./utils");
const input = require("fs")
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((el) => {
    let split_limit = el.length / 2;
    let arr = [];
    arr.push(el.substring(0, split_limit));
    arr.push(el.substring(split_limit, split_limit * 2));
    return { ...arr };
  })
  .map((el) => {
    const first = el[0].split("");
    const second = el[1].split("");
    const to_return = [];
    for (const left of first) {
      for (const right of second) {
        if (left === right) {
          to_return.push(left);
        }
      }
    }
    return { ...to_return };
  })
  .map((el) => el[0]);
let sum = 0;
for (const el of input) {
  el in lower ? (sum += lower[el]) : null;
  el in upper ? (sum += upper[el]) : null;
}
console.log(sum);
