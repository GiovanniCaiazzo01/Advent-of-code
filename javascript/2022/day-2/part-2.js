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

// y draw
// x lose
// z win

const new_input = makeObject(input);
let sum = 0;
for (const el of new_input) {
  const take = Object.keys(el).reduce((prev, curr) => {
    if (curr === "Y") {
      if (prev === "A") return value[prev] + 3;
      else if (prev === "B") return value[prev] + 3;
      else if (prev === "C") return value[prev] + 3;
    } else if (curr === "X") {
      if (prev === "A") return value.Z + 0;
      else if (prev === "B") return value.X + 0;
      else if (prev === "C") return value.Y + 0;
    } else if (curr === "Z") {
      if (prev === "A") return value.Y + 6;
      else if (prev === "B") return value.Z + 6;
      else if (prev === "C") return value.X + 6;
    }
  });
  sum += take;
}
console.log(sum);
// 11998
