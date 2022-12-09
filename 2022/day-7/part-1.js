const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n")
  .map((el) => {
    return { el };
  });

console.log(input);
