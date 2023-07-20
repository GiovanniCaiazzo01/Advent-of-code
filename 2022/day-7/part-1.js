const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n");

const LIMIT = 100000;
const folders = {};

let currentDir = "";
let previusDir = "";

const makeDir = (dirToMake) => {
  folders[dirToMake] = {
    files: [],
    currentDir,
    previusDir,
    subdir: [],
    parentDir: "",
    action: [],
    value: 0,
  };
};

const countDirsize = (files, currentDir) => {
  let filesSize = 0;
  for (const el of files) {
    if (/\d/.test(el)) {
      const currentNumber = +el.split(" ")[0];
      filesSize += currentNumber;
    }
  }

  return { dir: currentDir, size: filesSize };
};

const fillDir = (dirToFill, el) => {
  const isAction = checkForAction(el);
  if (isAction) {
    return folders[dirToFill].action.push(el);
  }
  el.includes("dir") && folders[currentDir].subdir.push(el.substring(4).trim());

  return folders[dirToFill].files.push(el);
};

const checkForAction = (current_element) => {
  return current_element.includes("$");
};

const detectTypeOfAction = (current_element) => {
  if (current_element.includes("cd") && !current_element.includes("..")) {
    previusDir = currentDir;
    currentDir = current_element.substring(4).trim();

    return ["make", current_element.substring(4).trim()];
  }

  if (current_element.includes("cd ..")) return ["back"];

  if (current_element.includes("ls")) return ["list"];
};

const countDir = () => {
  for (const el of input) {
    const isAction = checkForAction(el);
    const typeOfAction = isAction && detectTypeOfAction(el);
    if (typeOfAction[0] === "make") {
      makeDir(typeOfAction[1]);
      continue;
    } else if (typeOfAction[0] === "list") {
      fillDir(currentDir, el);
      continue;
    } else if (typeOfAction[0] === "back") {
      fillDir(currentDir, el);
    }
    fillDir(currentDir, el);
  }
};

countDir();

const dirSizeresult = () => {
  let finalResult = 0;
  for (const dir of Object.values(folders)) {
    const sizeResult = countDirsize(dir.files, dir.currentDir);
    if (sizeResult.size <= LIMIT) {
      finalResult += sizeResult.size;
    }
  }
  return finalResult;
};

for (const dir of Object.values(folders)) {
  for (const subdir of dir.subdir) {
    folders[subdir].parentDir = dir.currentDir;
  }
}

console.log(folders);
// console.log(folders);
// console.log(dirSizeresult());
