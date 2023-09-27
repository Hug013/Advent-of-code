import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n");
const data = input[0].split("");

let list = [];

function verif(list) {
  if (list.length === 1) {
    return true;
  }
  if (list.slice(1, list.length).includes(list[0])) {
    return false;
  } else {
    return verif(list.slice(1, list.length));
  }
}
data.forEach((ele, ind) => {
  if (list.length < 14) {
    list.push(ele);
  } else {
    if (verif(list) === true) {
      console.log(ind);
      console.log(list);
    }
    list.push(ele);
    list.shift();
  }
});
