import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n");
const data = input.slice(0, -1);
const taille = data.length;

let nbCycle = 1;
let X = 1;
let res = 0;

class instruction {
  constructor(time, add) {
    this.time = time;
    this.add = add;
  }
}
for (let k = 0; k < data.length; k++) {
  let instruction_new;
  if (data[k].charAt(0) === "n") {
    instruction_new = new instruction(1, 0);
  } else {
    instruction_new = new instruction(2, parseInt(data[k].slice(5)));
  }
  while (instruction_new.time > 0) {
    if (nbCycle % 40 === 20) {
      res = res + nbCycle * X;
    }
    nbCycle++;
    instruction_new.time--;
  }
  X = X + instruction_new.add;
}
console.log(res);
console.log(nbCycle);
