const fs = require("fs");
const input = fs.readFileSync("./demo.txt").toString();
const elem_riga = input.split("\n");

const number = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1,
];

const checkForBingo = (element_to_send) => {
  const have_number = [];
  if (element_to_send === "") {
    return;
  }

  let counter = 0;
  for (const n of number) {
    have_number.push(n);
    console.log(have_number);
    for (const single_number of have_number) {
      if (have_number[counter] === n) {
      }
    }
  }
};

for (const el of elem_riga) {
  checkForBingo(el);
}
