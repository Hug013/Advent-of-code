import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n").slice(0, -1);
const input2 = fs.readFileSync("input2.txt", "utf-8").split("\n");
let carte = Array(41);
for (let i = 0; i < 41; i++) {
  carte[i] = new Array(161).fill(0);
}
for (let i = 0; i < 41; i++) {
  for (let j = 0; j < 161; j++) {
    let a = [[], Infinity];
    carte[i][j] = a;
  }
}
for (let i = 0; i < 41; i++) {
  for (let j = 0; j < 161; j++) {
    if (
      j < 160 &&
      (Math.abs(input[i].charCodeAt(j) - input[i].charCodeAt(j + 1)) <= 1 ||
        input[i].charCodeAt(j) > input[i].charCodeAt(j + 1))
    ) {
      carte[i][j][0].push([i, j + 1]);
    }
    if (
      j > 0 &&
      (Math.abs(input[i].charCodeAt(j) - input[i].charCodeAt(j - 1)) <= 1 ||
        input[i].charCodeAt(j) > input[i].charCodeAt(j - 1))
    ) {
      carte[i][j][0].push([i, j - 1]);
    }
    if (
      i < 40 &&
      (Math.abs(input[i].charCodeAt(j) - input[i + 1].charCodeAt(j)) <= 1 ||
        input[i].charCodeAt(j) > input[i + 1].charCodeAt(j))
    ) {
      carte[i][j][0].push([i + 1, j]);
    }
    if (
      i > 0 &&
      (Math.abs(input[i].charCodeAt(j) - input[i - 1].charCodeAt(j)) <= 1 ||
        input[i].charCodeAt(j) > input[i - 1].charCodeAt(j))
    ) {
      carte[i][j][0].push([i - 1, j]);
    }
  }
}

//Je rajoute les voisins de E en tant que 'z'
carte[20][139] = [
  [
    [21, 139],
    [20, 140],
  ],
  Infinity,
];
carte[21][139][0].push([20, 139]);
carte[20][140][0].push([20, 139]);
//Je rajoute les voisins de S en tant que 'a'
carte[20][0] = [
  [
    [21, 0],
    [19, 0],
    [20, 1],
  ],
  Infinity,
];
carte[21][0][0].push([20, 0]);
carte[19][0][0].push([20, 0]);
carte[20][1][0].push([20, 0]);

function parcours(point) {
  for (let i = 0; i < point[0].length; i++) {
    if (point[1] + 1 < carte[point[0][i][0]][point[0][i][1]][1]) {
      carte[point[0][i][0]][point[0][i][1]][1] = point[1] + 1;
      parcours(carte[point[0][i][0]][point[0][i][1]]);
    }
  }
}
let min = Infinity;
for (let i = 0; i < 39; i++) {
  let S = [
    [
      [i, 0],
      [i + 2, 0],
      [i + 1, 1],
    ],
    0,
  ];
  parcours(S);
  if (carte[20][139][1] < min) {
    min = carte[20][139][1];
  }
}
console.log(min);
