import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n");
const data = input.slice(0, 2000);
const data2 = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];
const data3 = ["R 5", "U 8", "L 8", "D 3", "R 17", "D 10", "L 25", "U 20"];
let res = 0;
class Point {
  constructor(abs, ord) {
    this.abs = abs;
    this.ord = ord;
  }
}
function point_(x, y) {
  let point = new Point(x, y);
  return point;
}
let chaine = [];
for (let i = 0; i < 10; i++) {
  chaine.push(point_(300, 300));
}

let verif = [];
for (let i = 0; i < 600; i++) {
  let line = Array(600).fill(0);
  verif.push(line);
}
verif[300][300] = 1;

data.forEach((element) => {
  for (let i = 0; i < element.slice(2); i++) {
    if (element.charAt(0) == "R") {
      chaine[0].abs++;
    }
    if (element.charAt(0) == "L") {
      chaine[0].abs--;
    }
    if (element.charAt(0) == "U") {
      chaine[0].ord--;
    }
    if (element.charAt(0) == "D") {
      chaine[0].ord++;
    }
    for (let k = 0; k < 9; k++) {
      move(chaine[k + 1], chaine[k]);
    }
    if (verif[chaine[9].ord][chaine[9].abs] === 0) {
      verif[chaine[9].ord][chaine[9].abs] = 1;
    }
  }
});
for (let i = 0; i < 600; i++) {
  for (let j = 0; j < 600; j++) {
    if (verif[i][j] === 1) {
      res++;
    }
  }
}
console.log(res);

function move(bougeur, reference) {
  if (reference.abs - bougeur.abs === 2) {
    if (reference.ord - bougeur.ord <= -1) {
      bougeur.abs++;
      bougeur.ord--;
    } else if (reference.ord - bougeur.ord === 0) {
      bougeur.abs++;
    } else if (reference.ord - bougeur.ord >= 1) {
      bougeur.abs++;
      bougeur.ord++;
    }
  } else if (reference.abs - bougeur.abs === -2) {
    if (reference.ord - bougeur.ord <= -1) {
      bougeur.abs--;
      bougeur.ord--;
    } else if (reference.ord - bougeur.ord === 0) {
      bougeur.abs--;
    } else if (reference.ord - bougeur.ord >= 1) {
      bougeur.abs--;
      bougeur.ord++;
    }
  } else if (reference.ord - bougeur.ord === 2) {
    if (reference.abs - bougeur.abs === 0) {
      bougeur.ord++;
    } else if (reference.abs - bougeur.abs === 1) {
      bougeur.ord++;
      bougeur.abs++;
    } else if (reference.abs - bougeur.abs === -1) {
      bougeur.ord++;
      bougeur.abs--;
    }
  } else if (reference.ord - bougeur.ord === -2) {
    if (reference.abs - bougeur.abs === 0) {
      bougeur.ord--;
    } else if (reference.abs - bougeur.abs === 1) {
      bougeur.ord--;
      bougeur.abs++;
    } else if (reference.abs - bougeur.abs === -1) {
      bougeur.ord--;
      bougeur.abs--;
    }
  }
}
console.log(chaine);
