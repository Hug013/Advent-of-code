import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n").slice(0, -1);
const len = input.length;
let data = [];
let heigth = 1;
for (let i = 0; i < len; i++) {
  if (input[i].slice(0, 4) === "$ cd") {
    if (input[i].slice(-1) === ".") {
      heigth--;
    } else {
      heigth++;
    }
  }
  let a = [input[i], heigth, i];
  data.push(a);
}
class Directory {
  constructor(head, tail, files, name, index, branch, stock) {
    this.head = head;
    this.tail = tail;
    this.files = files;
    this.name = name;
    this.index = index;
    this.branch = branch;
    this.stock = stock;
  }
}

class File {
  constructor(data, name) {
    this.name = name;
    this.data = data;
  }
}

function findNext(directory) {
  let i = directory.index;
  while (i < len) {
    if (input[i] === "$ cd " + directory.name) {
      if (data[i][1] === directory.branch + 1) {
        return i;
      }
    }
    i++;
  }
}

function constructSonsTail(directory) {
  let files = [];
  if (is_last(directory)) {
    let i = directory.index;
    while (i < len && !input[i].charAt(0) === "$") {
      files.push(input[i]);
      i++;
    }
    directory.files = files;
  }
  let tail = [];
  let i = findNext(directory) + 2;
  while (i < len && !(input[i].charAt(0) === "$")) {
    if (input[i].charAt(0) === "d") {
      //construction du sous fichier
      let name = input[i].split(" ")[1];
      let newDir = new Directory(directory, [], [], name, i, data[i][1]);
      constructSonsTail(newDir);
      tail.push(newDir);
    } else {
      let file = new File(
        parseInt(input[i].split(" ")[0]),
        input[i].split(" ")[1]
      );
      files.push(file);
    }
    i++;
  }
  directory.tail = tail;
  directory.files = files;
  return directory;
}

function is_last(directory) {
  let index = directory.index + 2;
  while (!(data[index][0].charAt(0) === "$")) {
    if (data[index][0].charAt(0) === "d") {
      return false;
    }
    index++;
  }
  return true;
}

function stockage(directory) {
  let res = 0;
  for (let i = 0; i < directory.files.length; i++) {
    res += directory.files[i].data;
  }
  if (directory.tail.length === 0) {
    directory.stock = res;
  } else {
    for (let i = 0; i < directory.tail.length; i++) {
      let a = stockage(directory.tail[i]).stock;
      res += a;
    }
    directory.stock = res;
  }
  return directory;
}

function minimumList(L) {
  let min = L[0];
  for (let i = 0; i < L.length; i++) {
    if (L[i] < min) {
      min = L[i];
    }
  }
  return min;
}
function minToDelete(directory) {
  let interet = 30000000;
  let interettail = [];
  if (directory.stock < 30000000) {
    if (directory.stock > 9192532) {
      interet = directory.stock;
    }
  }
  for (let i = 0; i < directory.tail.length; i++) {
    interettail.push(minToDelete(directory.tail[i]));
  }
  interettail.push(30000000);
  return Math.min(interet, minimumList(interettail));
}
let a = new Directory("", [], [], "/", 0, 1);
let aa = constructSonsTail(a);
let aaa = stockage(aa);
//console.log(Math.min(5, minimumList([4, 30000000])));
console.log(minToDelete(aaa));
//console.log(30000000 - (70000000 - aaa.stock));
