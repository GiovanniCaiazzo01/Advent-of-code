const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();
const elem_riga = input.split("\n");

const most_common = (filtro_vincente, index) => {
  for (let i of filtro_vincente) {
    index++;
    const filtro_uno = filtro_vincente.filter((e) => e[index] == 1);
    const filtro_due = filtro_vincente.filter((e) => e[index] == 0);
    filtro_uno.length > filtro_due.length
      ? (filtro_vincente = filtro_uno)
      : (filtro_vincente = filtro_due);
    if (filtro_uno.length === filtro_due.length) {
      return filtro_uno;
    }
  }
};

const most_uncommon = (filtro_vincente, index) => {
  for (let i of filtro_vincente) {
    index++;

    const filtro_uno = filtro_vincente.filter((e) => e[index] == 1);
    const filtro_due = filtro_vincente.filter((e) => e[index] == 0);

    filtro_uno.length < filtro_due.length
      ? (filtro_vincente = filtro_uno)
      : (filtro_vincente = filtro_due);

    if (filtro_uno.length === filtro_due.length) {
      return filtro_due;
    }
  }
};

const xygen_generator_rating = (elem_riga, index) => {
  const filtro_uno = elem_riga.filter((e) => e[index] == 1);
  const filtro_due = elem_riga.filter((e) => e[index] == 0);
  return filtro_uno.length > filtro_due.length
    ? most_common(filtro_uno, index)
    : most_common(filtro_due, index);
};

const co2_scrubber_rating = (elem_riga, index) => {
  const filtro_uno = elem_riga.filter((e) => e[index] == 1);
  const filtro_due = elem_riga.filter((e) => e[index] == 0);
  return filtro_uno.length < filtro_due.length
    ? most_uncommon(filtro_uno, index)
    : most_uncommon(filtro_due, index);
};

const oxgen_gen = xygen_generator_rating(elem_riga, (index = 0));
const co2 = co2_scrubber_rating(elem_riga, (index = 0));
console.log(parseInt(oxgen_gen, 2) * parseInt(co2, 2));
