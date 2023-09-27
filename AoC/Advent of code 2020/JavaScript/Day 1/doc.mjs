import * as fs from 'fs'
const p1 = { x: 5, y: 12, z: 13 };
console.log("hello world");
console.log("hello world");
const input = fs.readFileSync('day1.txt', 'utf-8').trim().split('\n').map(Number);
const res = 0;
input.map((v,_) => {;
    for (let pas = 0; pas < input.length; pas++) {
        for (let pas2 = 0; pas2 < input.length; pas2++) {
            if (v != input[pas]) {
                if (v != input[pas2]) {
                    if ((v + input[pas]+input[pas2]) == 2020) {
                        console.log(v*input[pas]*input[pas2]);        
                    }
                }   
            }
        }
    }
})
    //input.map((v2,_) => {
        
    //})
      //  if (v=! vv) {    
        //    if ((v + vv) == 2020) {
          //      console.log(v*vv);
       // }
        //}    
    //})  
//})