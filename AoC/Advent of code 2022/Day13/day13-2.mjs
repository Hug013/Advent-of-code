import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");
let input2 = [];
input.map((ele) => {
  if (!(ele === "")) {
    input2.push(ele);
  }
});
let data = input2.map(JSON.parse);
data.push([[2]]);
data.push([[6]]);

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

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (verif(left, right)) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}
let res = 1;
const data2 = mergeSort(data);
data2.forEach((ele, ind) => {
  if (typeof ele === "object" && ele.length === 1) {
    if (typeof ele[0] === "object" && ele[0].length === 1) {
      if (ele[0][0] === 2 || ele[0][0] === 6) {
        res = res * (ind + 1);
      }
    }
  }
});

fs.writeFile("./test.txt", data2.join("\n"), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
console.log(res);
