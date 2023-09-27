import * as fs from "fs";

// préparation de la data

const input = fs.readFileSync("input.txt", "utf-8").split("\n");
const taille = input.length;

let ligne1 = [];
let ligne2 = [];
let ligne3 = [];
let ligne4 = [];
let ligne5 = [];
let ligne6 = [];
let ligne7 = [];
let ligne8 = [];
let ligne9 = [];
// Les lignes sont des objets mutables en javascript, si je push la meme dans res, toutes les lignes vont être modifiées en meme temps.
let res = [];
let data = [];

res.push(ligne1);
res.push(ligne2);
res.push(ligne3);
res.push(ligne4);
res.push(ligne5);
res.push(ligne6);
res.push(ligne7);
res.push(ligne8);
res.push(ligne9);

for (let i = 0; i < 8; i++) {
  for (let j = 1; j < 34; j = j + 4) {
    if (!(input[i][j] === " ")) {
      res[(j - 1) / 4].push(input[i][j]);
    }
  }
}

for (let i = 10; i < taille; i++) {
  data.push(input[i]);
}

let datafinal = [];

data.forEach((element) => {
  datafinal.push(element.split(" "));
});
let taille2 = datafinal.length;

// Résolution

for (let i = 0; i < taille2 - 1; i++) {
  let nombre = parseInt(datafinal[i][1]);
  let debut = parseInt(datafinal[i][3] - 1);
  let fin = parseInt(datafinal[i][5] - 1);
  for (let j = 0; j < nombre; j++) {
    res[fin].unshift(res[debut][nombre - 1 - j]);
    res[debut].splice(nombre - 1 - j, 1);
  }
  console.log(res);
}
console.log(res);
