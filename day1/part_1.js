const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
let elem_riga = input.split("\n");

let contatore = 0;

for (let i = 1; i < elem_riga.length; i++) {
  if (+elem_riga[i] > +elem_riga[i - 1]) {
    contatore++;
    console.log(
      "Incremento ",
      contatore,
      ' MATCH "',
      elem_riga[i],
      '"',
      ' VS "',
      elem_riga[i - 1],
      '"'
    );
  }
}
console.log("FINAL NUMBER: ", contatore);
