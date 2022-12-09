const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n");

const obj = {
  comand: [],
  dir: {},
};

const retrive_command = (input) => {
  for (const el of input) {
    if (el.includes("$") && !el.includes("ls")) {
      obj.comand.push(el.replace("$", "").trim());
    }
  }
};
const retrive_single_dir = () => {
  for (const el of obj.comand) {
    obj.dir[el.replace(`${"cd" || "ls"}`, "").trim()] = "";
  }
};
retrive_command(input);
retrive_single_dir();

for (const el of obj.comand) {
  const to_stamp = el.substring(0, 1);
  log;
}

console.log(obj);
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
