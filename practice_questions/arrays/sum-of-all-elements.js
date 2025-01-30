function calculateSumOfAllElement(arr) {
    return arr.reduce((acc, curr)=> acc + curr, 0);
}
const arr = [4, 2, 6, 1, 7, 3, 8];
console.log(calculateSumOfAllElement(arr));
