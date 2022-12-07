const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n")
  .map((el, i) => ({ [i]: el.replace(/[\[\]']+/g, "").trim() }));
console.log(input);
