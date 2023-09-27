import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n");
console.log(input);
let top1 = 0;
let top2 = 0;
let top3 = 0;
let somme = 0;
input.map((ele, ind) => {
  if (isNaN(parseInt(ele))) {
    if (somme > top3) {
      if (somme > top2) {
        if (somme > top1) {
          top3 = top2;
          top2 = top1;
          top1 = somme;
        } else {
          top3 = top2;
          top2 = somme;
        }
      } else {
        top3 = somme;
      }
    }
    somme = 0;
  } else {
    somme = somme + parseInt(ele);
  }
  console.log(somme);
});
console.log(top1 + top2 + top3);
