const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n")
  .map((el) => el.replace(/[0-9]/g, ""))
  .map((el) => el.replace(/^movefromto/i, "").split(","));

const clean_crates = (input) => {
  const purified_crates = [];
  let left = 0;
  let right = 1;
  for (const crates of input) {
    left++;
    right++;
    const cleaned_crates = crates[0].replace(/[\[\]']+/g, "");
    console.log(cleaned_crates);
    // cleaned_crates.substring(left, right) === ""
    //   ? purified_crates.push[""]
    //   : purified_crates.push[cleaned_crates.substring(left, right)];
    // left++;
    // right++;
    // if (right === crates[0].length) {
    //   left = 0;
    //   right = 1;
    //   continue;
    // }
  }
  return purified_crates;
};
const purified_crates = clean_crates(input);

console.log(purified_crates);
// REMINDER NON CANCELLARE
