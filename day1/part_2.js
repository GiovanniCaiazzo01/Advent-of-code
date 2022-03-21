const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
let elem_riga = input.split("\n");
elem_riga = elem_riga.map(Number);

let contatore = 0;

for (let i = 3; i < elem_riga.length; i++) {
  const somma_uno = elem_riga[i - 1] + elem_riga[i - 2] + elem_riga[i - 3];
  const somma_due = elem_riga[i] + elem_riga[i - 1] + elem_riga[i - 2];
  if (somma_due > somma_uno) {
    contatore++;
  }
}

console.log(contatore);
