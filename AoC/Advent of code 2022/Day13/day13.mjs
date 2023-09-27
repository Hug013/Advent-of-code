import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");
let input2 = [];
input.map((ele) => {
  if (!(ele === "")) {
    input2.push(ele);
  }
});
const data = input2.map(JSON.parse);
let res = 0;
function verif(left, right) {
  if (typeof left === typeof right) {
    if (typeof left === "number") {
      if (left === right) {
        return null;
      } else if (left < right) {
        return true;
      } else {
        return false;
      }
    } else {
      return compareList(left, right);
    }
  } else if (typeof left === "number") {
    let instant = [];
    instant.push(left);
    return verif(instant, right);
  } else {
    let instant = [];
    instant.push(right);
    return verif(left, instant);
  }
}

function compareList(left, right) {
  if (left.length === right.length && left.length === 0) {
    return true;
  } else if (left.length === right.length) {
    let compteur = 0;
    while (
      compteur < left.length &&
      verif(left[compteur], right[compteur]) === null
    ) {
      compteur++;
    }
    if (compteur === left.length) {
      return null;
    } else {
      return verif(left[compteur], right[compteur]);
    }
  } else if (left.length < right.length) {
    let compteur = 0;
    while (
      compteur < left.length &&
      verif(left[compteur], right[compteur]) === null
    ) {
      compteur++;
    }
    if (compteur === left.length) {
      return true;
    } else {
      return verif(left[compteur], right[compteur]);
    }
  } else {
    let compteur = 0;
    while (
      compteur < right.length &&
      verif(left[compteur], right[compteur]) === null
    ) {
      compteur++;
    }
    if (compteur === right.length) {
      return false;
    } else {
      return verif(left[compteur], right[compteur]);
    }
  }
}

for (let i = 0; i < data.length; i = i + 2) {
  if (verif(data[i], data[i + 1])) {
    res += i / 2 + 1;
  }
}
console.log(res);
