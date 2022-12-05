const input = require("fs")
  .readFileSync("input.txt", { encoding: "utf-8" })
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
  const left_limit = +left[1];
  const right_limit = +right[1];
  let left_min = Math.min(...left);
  let right_min = Math.min(...right);
  const left_to_compare = [];
  const right_to_compare = [];
  for (let i = left_min; i <= left_limit; i++) {
    left_to_compare.push(i);
  }
  for (let i = right_min; i <= right_limit; i++) {
    right_to_compare.push(i);
  }
  for (let l of left_to_compare) {
    for (let r of right_to_compare) {
      if (left_to_compare.includes(r)) {
        return sum++;
      }
    }
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
