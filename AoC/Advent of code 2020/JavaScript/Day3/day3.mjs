import * as fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
var index = 0;
var res1 = 0;
var res2 = 0;
var res3 = 0;
var res4 = 0;
var res5 = 0;
var ligne = 0;
var taille = input[0].length;
const input2 = input.slice(0, 5);

input.forEach((element) => {
    if (!(ligne === 0)) {
        index = (index + 1) % taille;
        if (element[index] == '#') {
            res1 = res1 + 1;
        }
    } else {
        ligne = ligne + 1;
    }
});
ligne = 0;
index = 0;
input.forEach((element) => {
    if (!(ligne === 0)) {
        index = (index + 3) % taille;
        if (element[index] == '#') {
            res2 = res2 + 1;
        }
    } else {
        ligne = ligne + 1;
    }
});
ligne = 0;
index = 0;
input.forEach((element) => {
    if (!(ligne === 0)) {
        index = (index + 5) % taille;
        if (element[index] == '#') {
            res3 = res3 + 1;
        }
    } else {
        ligne = ligne + 1;
    }
});
ligne = 0;
index = 0;
input.forEach((element) => {
    if (!(ligne === 0)) {
        index = (index + 7) % taille;
        if (element[index] == '#') {
            res4 = res4 + 1;
        }
    } else {
        ligne = ligne + 1;
    }
});
ligne = 0;
index = 0;
input.forEach((element) => {
    if (!(ligne === 0)) {
        if (ligne % 2 == 0) {
            index = (index + 1) % taille;
            if (element[index] == '#') {
                res5 = res5 + 1;
            }
        }
        ligne = ligne + 1;
    } else {
        ligne = ligne + 1;
    }
});
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res1 * res2 * res3 * res4 * res5);
