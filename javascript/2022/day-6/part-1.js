const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n");

const checkForMarker = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
};

let arr = [];
let cont = 0;
let window = 7;
let result;
for (const subrutine of input) {
  for (const el of subrutine) {
    arr.push(el);
    if (arr.length === window) {
      result = checkForMarker(arr);
      arr.shift(0);
      cont++;
      if (result === true) {
        console.log(cont + window - 1);
        return;
      }
    }
  }
}
