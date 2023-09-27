import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n");
let compteur = [0, 0, 0, 0, 0, 0, 0, 0];
class Monkey {
  constructor(objects, operation, nombre, test, verifT, verifF) {
    this.objects = objects;
    this.operation = operation;
    this.nombre = nombre;
    this.test = test;
    this.verifT = verifT;
    this.verifF = verifF;
  }
}
let monkeys = [];
for (let i = 0; i < 8; i++) {
  let objects = input[7 * i + 1]
    .slice(18)
    .split(", ")
    .map((w) => parseInt(w));
  let operation = input[7 * i + 2].charAt(23);
  let nombre = input[7 * i + 2].slice(25);
  let test = parseInt(input[7 * i + 3].slice(21));
  let verifT = parseInt(input[7 * i + 4].slice(29));
  let verifF = parseInt(input[7 * i + 5].slice(30));
  monkeys.push(new Monkey(objects, operation, nombre, test, verifT, verifF));
}
for (let i = 0; i < 10000; i++) {
  for (let j = 0; j < 8; j++) {
    let taille = monkeys[j].objects.length;
    for (let k = 0; k < taille; k++) {
      if (monkeys[j].operation === "+") {
        monkeys[j].objects[0] =
          monkeys[j].objects[0] + parseInt(monkeys[j].nombre);
      } else {
        if (monkeys[j].nombre === "old") {
          monkeys[j].objects[0] = monkeys[j].objects[0] ** 2;
        } else {
          monkeys[j].objects[0] =
            monkeys[j].objects[0] * parseInt(monkeys[j].nombre);
        }
      }
      if (monkeys[j].objects[0] % monkeys[j].test === 0) {
        monkeys[monkeys[j].verifT].objects.push(
          monkeys[j].objects[0] % 9699690
        );
      } else {
        monkeys[monkeys[j].verifF].objects.push(
          monkeys[j].objects[0] % 9699690
        );
      }
      monkeys[j].objects.shift();
      compteur[j]++;
    }
  }
}
console.log(compteur[0] * compteur[6]);
