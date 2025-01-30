const arr = [3, 6, 5, 1, 9, 2];
console.log(findTheLargestNum(arr));

function findTheLargestNum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.sort()[arr.length - 1];
}
