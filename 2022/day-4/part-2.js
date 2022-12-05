const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("," || "\n")
  .join(",")
  .split("\n")
  .join("," || "\n")
  .split(",")
  .map((el) => el.split("-"));
let arr = [];
let count = 0;
let sum = 0;
const check = (left, right) => {
  // controllo  se sono uguali  ad x

  if (
    (+left[0] <= +right[0] && +left[1] >= +right[1]) ||
    (+right[0] <= +left[0] && +right[1] >= +left[1])
  ) {
    sum += 1;
  }
};
for (const el of input) {
  arr.push(el);
  count++;
  if (count === 2) {
    check(arr[0], arr[1]);
    arr = [];
    count = 0;
  }
}

console.log(sum);
