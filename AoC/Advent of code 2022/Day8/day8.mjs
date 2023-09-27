import * as fs from "fs";
//Préparation de la donnée

const input = fs.readFileSync("input.txt", "utf-8").split("\n");
const data = input.slice(0, -1);
let upper = Array(99).fill(0);
let under = Array(99).fill(0);
let left = Array(99).fill(0);
let right = Array(99).fill(0);

let res = 0;

let validation = [];
for (let i = 0; i < 99; i++) {
  let ligne = Array(99).fill(0);
  validation.push(ligne);
}
for (let i = 0; i < 99; i++) {
  validation[0][i] = 1;
  validation[98][i] = 1;
}
for (let i = 1; i < 99; i++) {
  validation[i][0] = 1;
  validation[i][98] = 1;
}

for (let i = 0; i < 98; i++) {
  for (let j = 1; j < 98; j++) {
    if (data[i].charAt(j) > upper[j]) {
      validation[i][j] = 1;
      upper[j] = data[i].charAt(j);
    }
  }
}

for (let i = 98; i > 0; i--) {
  for (let j = 1; j < 98; j++) {
    if (data[i].charAt(j) > under[j]) {
      if (i > 96) {
      }
      validation[i][j] = 1;
      under[j] = data[i].charAt(j);
    }
  }
}
for (let i = 0; i < 98; i++) {
  for (let j = 1; j < 99; j++) {
    if (data[j].charAt(i) > left[j]) {
      validation[j][i] = 1;
      left[j] = data[j].charAt(i);
    }
  }
}

for (let i = 98; i > 0; i--) {
  for (let j = 1; j < 99; j++) {
    if (data[j].charAt(i) > right[j]) {
      validation[j][i] = 1;
      right[j] = data[j].charAt(i);
    }
  }
}

console.log(validation);

for (let i = 0; i < 99; i++) {
  for (let j = 0; j < 99; j++) {
    if (validation[i][j] === 1) {
      res++;
    }
  }
}

console.log(res);
