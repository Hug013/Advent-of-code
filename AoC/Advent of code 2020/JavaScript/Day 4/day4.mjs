import * as fs from 'fs';
const data = fs.readFileSync('input.txt').toString('utf-8');
const data2 = data.split(' ');
const data3 = data2.map((element) => element.split('\n'));
let compteurCritere = 0;
let res = 0;
let cst = 0;

function verif(mot) {
    if (mot.slice(0, 3) === 'byr') {
        if (parseInt(mot.slice(4, mot.length)) < 2003) {
            if (parseInt(mot.slice(4, mot.length)) > 1919) {
                compteurCritere = compteurCritere + 1;
            }
        }
    }
    if (mot.slice(0, 3) === 'iyr') {
        if (parseInt(mot.slice(4, mot.length)) < 2021) {
            if (parseInt(mot.slice(4, mot.length)) > 2009) {
                compteurCritere = compteurCritere + 1;
            }
        }
    }
    if (mot.slice(0, 3) === 'eyr') {
        if (parseInt(mot.slice(4, mot.length)) < 2031) {
            if (parseInt(mot.slice(4, mot.length)) > 2019) {
                compteurCritere = compteurCritere + 1;
            }
        }
    }
    if (mot.slice(0, 3) === 'hgt') {
        if (mot.slice(mot.length - 1) === 'n') {
            if (mot.slice(mot.length - 4, mot.length - 2) < 77) {
                if (mot.slice(mot.length - 4, mot.length - 2) > 58) {
                    compteurCritere = compteurCritere + 1;
                }
            }
        }
        if (mot.slice(mot.length - 1) === 'm') {
            if (mot.slice(mot.length - 5, mot.length - 2) < 194) {
                if (mot.slice(mot.length - 5, mot.length - 2) > 149) {
                    compteurCritere = compteurCritere + 1;
                    cst = cst + 1;
                }
            }
        }
    }
    if (mot.slice(0, 3) === 'hcl') {
        if (mot.charAt(4) === '#') {
            compteurCritere = compteurCritere + 1;
        }
    }
    if (mot.slice(0, 3) === 'ecl') {
        console.log(mot.slice(4, 7));
        if (mot.slice(4, 7) === 'amb') {
            compteurCritere = compteurCritere + 1;
        } else if (mot.slice(4, 7) === 'blu') {
            compteurCritere = compteurCritere + 1;
        } else if (mot.slice(4, 7) === 'brn') {
            compteurCritere = compteurCritere + 1;
        } else if (mot.slice(4, 7) === 'gry') {
            compteurCritere = compteurCritere + 1;
        } else if (mot.slice(4, 7) === 'grn') {
            compteurCritere = compteurCritere + 1;
        } else if (mot.slice(4, 7) === 'hzl') {
            compteurCritere = compteurCritere + 1;
        } else if (mot.slice(4, 7) === 'oth') {
            compteurCritere = compteurCritere + 1;
        }
    }

    if (mot.slice(0, 3) === 'pid') {
        if (mot.length === 13) {
            compteurCritere = compteurCritere + 1;
        }
    }
}

data3.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
        if (element[i] === '') {
            if (compteurCritere == 7) {
                res = res + 1;
            }
            compteurCritere = 0;
        }
        if (!(element[i][0] === 'c')) {
            if (!(element[i] === '')) {
                verif(element[i]);
            }
        }
    }
});

console.log(res);
console.log(cst);
