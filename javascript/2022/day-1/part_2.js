const fs = require("fs");
const file = fs.readFileSync("input.txt", { encoding: "utf-8" });
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
  return calories;
};

const gang_of_three = (elves_calories) => {
  let top_calories = [];
  for (let i = 0; i < elves_calories.length; i++) {
    for (let j = 0; j < elves_calories.length - i - 1; j++) {
      if (elves_calories[j + 1] < elves_calories[j]) {
        [elves_calories[j + 1], elves_calories[j]] = [
          elves_calories[j],
          elves_calories[j + 1],
        ];
      }
    }
  }
  top_calories = [
    elves_calories[elves_calories.length - 1],
    elves_calories[elves_calories.length - 2],
    elves_calories[elves_calories.length - 3],
  ];
  return top_calories;
};

const start = (input) => {
  const elves_calories = retrive_elves_calories(input);
  const top_three = gang_of_three(elves_calories);
  const result = top_three.reduce((prev, curr) => prev + curr);
  return result;
};

const result = start(input);
console.log("PART 2 RESULT => ", result);
