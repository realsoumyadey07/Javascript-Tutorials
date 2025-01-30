function findRepeatingNumbers(arr){
    let freq = {};
    let res;
    arr.map(element=> {
        if(freq[element]) {
            freq[element]++;
        }else {
            freq[element] = 1;
        }
    });
    res = Array.from(Object.keys(freq)).filter(key=>freq[key]>1);
    return res.map(Number);
}
const arr = [1,1,2,3,4,4,5,2];
console.log(findRepeatingNumbers(arr));

