import * as fs from "fs";

// préparation de la data

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

const data = input[0].split("");

console.log(data);

let ele1 = null;
let ele2 = null;
let ele3 = null;
let ele4 = null;

let verif = 0;

data.forEach((ele, ind) => {
  ele1 = ele2;
  ele2 = ele3;
  ele3 = ele4;
  ele4 = ele;
  if (!(ele1 === ele2)) {
    if (!(ele3 === ele2)) {
      if (!(ele3 === ele4)) {
        if (!(ele2 === ele4)) {
          if (!(ele1 === ele4)) {
            if (!(ele3 === ele1)) {
              if (verif === 0) {
                console.log(ind);
                console.log(ele1);
                console.log(ele2);
                console.log(ele3);
                console.log(ele4);
                verif = 1;
              }
            }
          }
        }
      }
    }
  }
});
//Il faut prendre ind + 1
