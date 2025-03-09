function findNonRepeatingArr(arr) {
    let freq = {};
    arr.map(element=> {
        if(freq[element]) {
            freq[element]++;
        }else {
            freq[element] = 1;
        }
    });
    return Object.keys(freq).filter(key => freq[key] === 1).map(Number);
}
const arr = [1, 2, 4, 4, 3, 3, 5, 5];
let result = findNonRepeatingArr(arr);
console.log(result);
