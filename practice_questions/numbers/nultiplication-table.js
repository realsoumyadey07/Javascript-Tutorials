class Solution {
     getTble(n){
          let tbl = [];
          for(let i=1;i<=10;i++){
               tbl.push(i*n);
          }
          return tbl;
     }
}

const n = 9;
const solution = new Solution();
const tbl = solution.getTble(n);
console.log(tbl);