import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n");
let input2 = [];
input.forEach((element) => {
  input2.push(element.split(","));
});
let data = [];
input2.forEach((element) => {
  element.forEach((element2) => data.push(element2.split("-")));
});
const taille = data.length;

let res = 0;
for (let i = 0; i < taille - 1; i = i + 2) {
  let debut1 = parseInt(data[i][0]);
  let debut2 = parseInt(data[i + 1][0]);
  let fin1 = parseInt(data[i][1]);
  let fin2 = parseInt(data[i + 1][1]);
  if (debut1 <= debut2) {
    if (fin1 >= fin2) {
      res++;
      console.log("");
    }
  }
  if (!(debut1 === debut2 && fin1 === fin2)) {
    if (debut1 >= debut2) {
      if (fin1 <= fin2) {
        res++;
        console.log("");
      }
    }
  }
}
console.log(res);
