function calculateTheAverage(arr) {
    return arr.reduce((acc, curr)=> acc + curr, 0) / arr.length;
}
const arr = [1,2,3,4,5];
console.log(calculateTheAverage(arr));
