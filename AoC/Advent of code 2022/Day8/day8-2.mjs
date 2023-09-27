import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n");
const data = input.slice(0, -1);
let upper = 0;
let under = 0;
let left = 0;
let right = 0;
let highest = 0;
const len = 99;
for (let i = 1; i < len - 1; i++) {
  for (let j = 1; j < len - 1; j++) {
    //up
    for (let k = i - 1; k > -1; k--) {
      upper++;
      if (data[k].charAt(j) >= data[i].charAt(j)) {
        break;
      }
    }
    //down
    for (let k = i + 1; k < len; k++) {
      under++;
      if (data[k].charAt(j) >= data[i].charAt(j)) {
        break;
      }
    }
    //left
    for (let k = j - 1; k > -1; k--) {
      left++;
      if (data[i].charAt(k) >= data[i].charAt(j)) {
        break;
      }
    }
    //right
    for (let k = j + 1; k < len; k++) {
      right++;
      if (data[i].charAt(k) >= data[i].charAt(j)) {
        break;
      }
    }
    if (left * right * upper * under > highest) {
      highest = left * right * upper * under;
    }
    left = 0;
    right = 0;
    upper = 0;
    under = 0;
  }
}
console.log(highest);
