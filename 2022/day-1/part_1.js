const fs = require("fs");
const file = fs.readFileSync("input.txt", { encoding: "utf-8" });
const input = file.split("\n");

// part one
let max = 0;

// creare una funzione che recupera tutte le somme di calorie trasportati dagli elfi
const retrive_elves_calories = (input) => {
  let sum = 0;
  let elves = [];
  let i = 0;
  for (const el of input) {
    i++;
    sum += +el;
    if (el === "" || i === input.length) {
      elves.push(sum);
      sum = 0;
    }
  }
  return elves;
};

const start = (input) => {
  const calories = retrive_elves_calories(input);
  for (let i = 0; i < calories.length; i++) {
    if (calories[i] > max) {
      max = [calories[i]];
    }
    continue;
  }
  return max;
};

const result = start(input);
console.log("PART 1 RESULT => ", ...result);
