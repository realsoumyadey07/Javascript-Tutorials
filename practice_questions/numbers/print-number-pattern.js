class Solution {
     printPat(n){
          let k = n;
          let res = [];
          while(k>0){
               for(let i=n;i>0;i--){
                    let j = k;
                    while(j>0){
                         res.push(i);
                         j--;
                    }
               }
               res.push(-1);
               k--;
          }
          return res;
     }
}

const n = 3;
const solution = new Solution();
const res = solution.printPat(n);
console.log(res);
