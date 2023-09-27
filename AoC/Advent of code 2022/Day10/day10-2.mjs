import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n");
//const input = fs.readFileSync("input2.txt", "utf-8").split("\n");
const data = input.slice(0, -1);
let position = 2;
let nbCycle = 1;

let stringToWrite = [];
for (let i = 0; i < 6; i++) {
  stringToWrite.push(new Array(40).fill("."));
}
class instruction {
  constructor(time, add) {
    this.time = time;
    this.add = add;
  }
}
let instruction_new;
for (let k = 0; k < data.length; k++) {
  if (data[k].charAt(0) === "n") {
    instruction_new = new instruction(1, 0);
  } else {
    instruction_new = new instruction(2, parseInt(data[k].slice(5)));
  }
  while (instruction_new.time > 0) {
    if (nbCycle % 40 <= position + 1) {
      if (nbCycle % 40 >= position - 1) {
        stringToWrite[Math.trunc(nbCycle / 40)][(nbCycle - 1) % 40] = "#";
      }
    }
    nbCycle++;
    instruction_new.time--;
  }
  position = position + instruction_new.add;
}

let toprint = "";
for (let j = 0; j < 6; j++) {
  for (let i = 0; i < 40; i++) {
    toprint += stringToWrite[j][i];
  }
  toprint += "\n";
}
fs.writeFile("./test.txt", toprint.slice(0), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
