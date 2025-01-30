function calculateMean(arr) {
    if(arr.length ===0) {
        return 0;
    }
    return arr[((arr.length + 1)/2)-1];
}
const arr = [2,4,1,3,5];
console.log(calculateMean(arr));
