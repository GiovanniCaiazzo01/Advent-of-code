const fs = require("fs");
const file = fs.readFileSync("demo.txt", { encoding: "utf-8" });
const input = file.split("\n");

const retrive_elves_calories = (input) => {
  let sum = 0;
  let i = 0;

  const calories = [];
  for (let el of input) {
    i++;
    sum += +el;
    if (el === "" || i === input.length) {
      calories.push(sum);
      sum = 0;
    }
  }
  console.log(calories);
};

const gang_of_three = (elves_calories) => {
  const ordered_calories = [];
};

const start = (input) => {
  const elves_calories = retrive_elves_calories(input);
  const top_three = gang_of_three(elves_calories);
};

const result = start(input);
// console.log(result);
