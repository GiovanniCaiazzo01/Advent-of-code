const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n");

const dit_three_structure = {};

const format_element = (element) => {
  if (element.includes("$ cd")) {
    return element.replace("$ cd", "").trim();
  }
};

const riempi_dir = (index, input, element) => {
  const value = [];
  for (let i = index; i < input.length; i++) {
    if (input[i]?.includes("$ cd")) {
      break;
    }
    if (element in dit_three_structure) {
      if (input[i].includes("dir")) {
        const dir = input[i].substring(4, 5).trim();
        value.push(
          (dit_three_structure[dir] = {
            [dir]: {},
          })
        );
      } else {
        const file = input[i].replace(/[^0-9]+/g, "");
        if (+file < 100000) {
          value.push(file);
        }
      }
    }
  }
  return (dit_three_structure[element] = value);
};

let formatted_element;
for (let i = 0; i < input.length; i++) {
  const current_el = input[i];
  const prev_is_ls = input[i - 1]?.includes("$ ls") ? input[i - 1] : null;
  if (current_el.includes("cd")) {
    formatted_element = format_element(current_el);
    if (!dit_three_structure[formatted_element]) {
      dit_three_structure[formatted_element] = "";
    }
  }
  if (prev_is_ls) {
    const get_index = input.indexOf(current_el);
    riempi_dir(get_index, input, formatted_element);
  }
}

let cont = 0;
for (const dir in dit_three_structure) {
  cont = 0;
  let prev = dit_three_structure[dir];
  for (const el in dit_three_structure) {
    let curr = el;
    if (prev[cont] === undefined) continue;
    if (prev[cont][el] === undefined) continue;

    if (curr in prev[cont]) {
      prev[cont][el] = dit_three_structure[curr];
      delete dit_three_structure[curr];
    }
    cont++;
  }
}

// adesso devi semplicemente iterare lungi l'oggetto è sommare tutti i numeri
// { '/': [ { a: [Array] }, { d: [] } ], e: [ '584' ], '..': '' }
[
  "$ cd /",
  "$ ls",
  "dir a",
  "14848514 b.txt",
  "8504156 c.dat",
  "dir d",

  "$ cd a",
  "$ ls",
  "dir e",
  "29116 f",
  "2557 g",
  "62596 h.lst",

  "$ cd e",
  "$ ls",
  "584 i",
  "$ cd ..",
  "$ cd ..",

  "$ cd d",
  "$ ls",
  "4060174 j",
  "8033020 d.log",
  "5626152 d.ext",
  "7214296 k",
];

// const retrive_command = (input) => {
//   for (const el of input) {
//     if (el.includes("$") && !el.includes("ls")) {
//       obj.comand.push(el.replace("$", "").trim());
//     }
//   }
// };
// const retrive_single_dir = () => {
//   for (const el of obj.comand) {
//     obj.dir[el.replace(`${"cd" || "ls"}`, "").trim()] = "";
//   }
// };
// retrive_command(input);
// retrive_single_dir();

// for (const el of obj.comand) {
//   const dir = el.substring(3, 4);
//   console.log(dir);
//   if(el !== "."){
//     obj.dir_three[dir] =
//   }
// }
