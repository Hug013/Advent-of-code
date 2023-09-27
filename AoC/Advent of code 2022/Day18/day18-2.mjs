import * as fs from "fs";
const input = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .map((w) => w.split(",").map((l) => parseInt(l)));
const len = input.length;
console.log(input);

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

let compte2 = 0;
for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 20; j++) {
    for (let k = 0; k < 20; k++) {
      if (!isIn([i, j, k])) {
        if (
          isIn([i, j, k + 1]) &&
          isIn([i, j, k - 1]) &&
          isIn([i, j + 1, k]) &&
          isIn([i, j - 1, k]) &&
          isIn([i + 1, j, k]) &&
          isIn([i - 1, j, k])
        ) {
          compte2++;
        }
      }
    }
  }
}
function isIn(list) {
  for (let i = 0; i < len; i++) {
    if (
      input[i][0] === list[0] &&
      input[i][1] === list[1] &&
      input[i][2] === list[2]
    ) {
      return true;
    }
  }
  return false;
}
console.log(compte - 1234 - 6 * compte2);
//compte2 est le nombre de bulle d'air de taille 1x1x1
