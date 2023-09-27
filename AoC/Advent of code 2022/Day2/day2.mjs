import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

let sum = 0;

input.forEach((ele, num) => {
  if (ele.charAt(0) === "A") {
    if (ele.charAt(2) === "X") {
      sum = sum + 3;
    } else if (ele.charAt(2) === "Y") {
      sum = sum + 4;
    } else if (ele.charAt(2) === "Z") {
      sum = sum + 8;
    }
  } else if (ele.charAt(0) === "B") {
    if (ele.charAt(2) === "X") {
      sum = sum + 1;
    } else if (ele.charAt(2) === "Y") {
      sum = sum + 5;
    } else if (ele.charAt(2) === "Z") {
      sum = sum + 9;
    }
  }
  if (ele.charAt(0) === "C") {
    if (ele.charAt(2) === "X") {
      sum = sum + 2;
    } else if (ele.charAt(2) === "Y") {
      sum = sum + 6;
    } else if (ele.charAt(2) === "Z") {
      sum = sum + 7;
    }
  }
});
console.log(sum);
