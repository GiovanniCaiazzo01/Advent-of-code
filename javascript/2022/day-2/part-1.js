const input = require("fs")
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .join(" ")
  .split(" ");

const value = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};

const makeObject = (input) => {
  let arr = [];
  let obj = {};
  let i = 0;

  for (const el of input) {
    i++;
    obj[el] = el in value ? value[el] : null;
    if (i >= 2) {
      arr.push(obj);
      obj = {};
      i = 0;
    }
  }
  return arr;
};

const new_input = makeObject(input);

let sum = 0;
for (const el of new_input) {
  const take = Object.keys(el).reduce((prev, curr) => {
    if (
      (prev === "A" && curr === "Z") ||
      (prev === "B" && curr === "X") ||
      (prev === "C" && curr === "Y")
    ) {
      return value[curr] + 0;
    } else if (
      (prev === "A" && curr === "Y") ||
      (prev === "B" && curr === "Z") ||
      (prev === "C" && curr === "X")
    ) {
      return value[curr] + 6;
    } else if (
      (prev === "A" && curr === "X") ||
      (prev === "B" && curr === "Y") ||
      (prev === "C" && curr === "Z")
    ) {
      return value[curr] + 3;
    }
  });
  sum += take;
}
console.log(sum);
// 8933
