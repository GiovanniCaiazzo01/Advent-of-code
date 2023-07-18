const input = require("fs")
  .readFileSync("demo.txt", { encoding: "utf-8" })
  .split("\n");

const LIMIT = 100000;
const folders = {};
const makeDir = (dirToMake) => {
  folders[dirToMake] = {
    files: [],
    currentDir,
    previusDir,
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
  return folders[dirToFill].files.push(el);
};

let currentDir = "";
let previusDir = "";
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
      console.log(sizeResult.size);
      finalResult += sizeResult.size;
    }
  }
  return finalResult;
};

console.log(folders);
console.log(dirSizeresult());
