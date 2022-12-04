const { upper, lower } = require("./utils");
const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n")
  .map((el) => {
    const arr = [];
    arr.push(el);

    return { ...arr };
  });

console.log(input[1]);
