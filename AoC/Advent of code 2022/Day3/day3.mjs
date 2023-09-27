import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n");
let lettre = "Z";
let verification = 0;
let score = 0;
console.log(input.length);
for (
  let elementIndex = 0;
  elementIndex < input.length - 2;
  elementIndex = elementIndex + 3
) {
  console.log(elementIndex);
  let element1 = input[elementIndex];
  let element2 = input[elementIndex + 1];
  let element3 = input[elementIndex + 2];
  let taille1 = element1.length;
  let taille2 = element2.length;
  let taille3 = element3.length;
  for (let n = 0; n < taille1; n++) {
    lettre = element1.charAt(n);
    console.log(lettre);
    if (element2.includes(lettre)) {
      if (element3.includes(lettre)) {
        console.log(lettre);
        if (lettre === lettre.toLowerCase()) {
          score = score + lettre.charCodeAt() - 96;
        } else {
          score = score + lettre.charCodeAt() - 38;
        }
        verification = 1;
        break;
      }
    }
  }
}
console.log(score);
