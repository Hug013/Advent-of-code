import * as fs from "fs";
const input = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .slice(0, -1)
  .map((w) => w.split(",").map((l) => parseInt(l)));
const len = input.length;

function verifLeft(cube) {
  for (let i = 0; i < len; i++) {
    if (cube[1] === input[i][1] && cube[2] === input[i][2]) {
      if (input[i][0] - cube[0] === 1) {
        return true;
      }
    }
  }
  return false;
}
function verifRight(cube) {
  for (let i = 0; i < len; i++) {
    if (cube[1] === input[i][1] && cube[2] === input[i][2]) {
      if (cube[0] - input[i][0] === 1) {
        return true;
      }
    }
  }
  return false;
}
function verifUp(cube) {
  for (let i = 0; i < len; i++) {
    if (cube[0] === input[i][0] && cube[2] === input[i][2]) {
      if (cube[1] - input[i][1] === 1) {
        return true;
      }
    }
  }
  return false;
}
function verifDown(cube) {
  for (let i = 0; i < len; i++) {
    if (cube[0] === input[i][0] && cube[2] === input[i][2]) {
      if (input[i][1] - cube[1] === 1) {
        return true;
      }
    }
  }
  return false;
}
function verifFront(cube) {
  for (let i = 0; i < len; i++) {
    if (cube[0] === input[i][0] && cube[1] === input[i][1]) {
      if (input[i][2] - cube[2] === 1) {
        return true;
      }
    }
  }
  return false;
}
function verifBack(cube) {
  for (let i = 0; i < len; i++) {
    if (cube[0] === input[i][0] && cube[1] === input[i][1]) {
      if (cube[2] - input[i][2] === 1) {
        return true;
      }
    }
  }
  return false;
}
let compte = 0;
for (let i = 0; i < len; i++) {
  compte += 6;
  if (verifLeft(input[i])) {
    compte -= 1;
  }
  if (verifRight(input[i])) {
    compte -= 1;
  }
  if (verifUp(input[i])) {
    compte -= 1;
  }
  if (verifDown(input[i])) {
    compte -= 1;
  }
  if (verifFront(input[i])) {
    compte -= 1;
  }
  if (verifBack(input[i])) {
    compte -= 1;
  }
}
console.log(compte);
