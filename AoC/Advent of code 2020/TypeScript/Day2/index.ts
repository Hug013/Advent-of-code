import * as fs from "fs";
console.log("Hello world !");
const input = fs.readFileSync("Day2/input.txt", "utf-8").trim().split("\n");
type Id = number;
type todelete = string;
const taille: Id = input.length;
var min: Id = 0;
var max: Id = 0;
var lettre: todelete = "a";
var res: Id = 0;
var occurence: Id = 0;
var mdp: todelete = "a";
var test: Id = NaN;
var increment: Id = 0;
input.forEach((item) => {
  if (Number.isInteger(parseInt(item[1]))) {
    min = parseInt(item[0]) * 10 + parseInt(item[1]);
    increment = increment + 1;
  } else {
    min = parseInt(item[0]);
  }
  if (Number.isInteger(parseInt(item[3 + increment]))) {
    max = parseInt(item[2 + increment]) * 10 + parseInt(item[3 + increment]);
    increment = increment + 1;
  } else {
    max = parseInt(item[2 + increment]);
  }
  lettre = item[4 + increment];
  mdp = item.substring(7 + increment, item.length);
  if (mdp[min - 1] == lettre) {
    occurence = occurence + 1;
  }
  if (mdp[max - 1] == lettre) {
    occurence = occurence + 1;
  }
  if (occurence == 1) {
    res = res + 1;
  }
  increment = 0;
  occurence = 0;
});
console.log(res);
