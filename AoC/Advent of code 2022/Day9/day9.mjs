import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n");
const data2 = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];
const data3 = ["U 5", "R 1", "D 5", "R 1", "U 5", "R 1", "D 5"];
const data = input.slice(0, 2000);
let compteur = 0;
let xqueue = 300;
let yqueue = 300;
let xhead = 300;
let yhead = 300;
let verif = [];
let res = 0;
for (let i = 0; i < 600; i++) {
  let line = Array(600).fill(0);
  verif.push(line);
}
verif[yqueue][xqueue] = 1;

data.forEach((element) => {
  if (element.charAt(0) == "R") {
    for (let i = 0; i < element.slice(2); i++) {
      right();
    }
  }
  if (element.charAt(0) == "L") {
    for (let i = 0; i < element.slice(2); i++) {
      left();
    }
  }
  if (element.charAt(0) == "U") {
    for (let i = 0; i < element.slice(2); i++) {
      up();
    }
  }
  if (element.charAt(0) == "D") {
    for (let i = 0; i < element.slice(2); i++) {
      down();
    }
  }
});

function right() {
  xhead++;
  if (Math.abs(xhead - xqueue) === 2) {
    if (Math.abs(yhead - yqueue) === 1) {
      yqueue = yhead;
    }
    res++;
    xqueue++;
    if (verif[yqueue][xqueue] === 0) {
      verif[yqueue][xqueue] = 1;
    }
  }
}
function left() {
  xhead--;
  if (Math.abs(xqueue - xhead) === 2) {
    if (Math.abs(yhead - yqueue) === 1) {
      yqueue = yhead;
    }
    res++;
    xqueue--;
    if (verif[yqueue][xqueue] === 0) {
      verif[yqueue][xqueue] = 1;
    }
  }
}
function up() {
  yhead--;
  if (Math.abs(yqueue - yhead) === 2) {
    if (Math.abs(xhead - xqueue) === 1) {
      xqueue = xhead;
    }
    res++;
    yqueue--;
    if (verif[yqueue][xqueue] === 0) {
      verif[yqueue][xqueue] = 1;
    }
  }
}
function down() {
  yhead++;
  if (Math.abs(yhead - yqueue) === 2) {
    if (Math.abs(xhead - xqueue) === 1) {
      xqueue = xhead;
    }
    yqueue++;
    res++;
    if (verif[yqueue][xqueue] === 0) {
      verif[yqueue][xqueue] = 1;
    }
  }
}

for (let i = 0; i < 600; i++) {
  for (let j = 0; j < 600; j++) {
    if (verif[i][j] === 1) {
      compteur++;
    }
  }
}
console.log(compteur);
console.log(res);
