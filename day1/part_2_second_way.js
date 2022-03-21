const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
let elem_riga = input.split("\n");
elem_riga = elem_riga.map(Number);

let n = 0;
const gruppo_uno = [];
const gruppo_due = [];

for (let i = 0; i < elem_riga.length; i++) {
  gruppo_uno.push(elem_riga[i]);
  gruppo_due.push(elem_riga[i]);
  if (gruppo_uno.length === 4) {
    gruppo_uno.pop();
    gruppo_due.shift();
    const somma_uno = gruppo_uno.reduce((acc, cur) => acc + cur);
    const somma_due = gruppo_due.reduce((acc, cur) => acc + cur);

    if (somma_due > somma_uno) {
      console.log(
        gruppo_due.reduce((acc, cur) => acc + cur),
        "VS ",
        gruppo_uno.reduce((acc, cur) => acc + cur),
        "gruppo uno array",
        gruppo_uno,
        "gruppo due array",
        gruppo_due
      );
      n++;
    }
    gruppo_uno.shift();
    gruppo_uno.push(elem_riga[i]);
  }
}

console.log(n);
