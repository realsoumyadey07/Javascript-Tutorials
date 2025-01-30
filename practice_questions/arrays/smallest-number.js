const arr = [3, 2, 5, 1, 6, 7];
console.log(findTheSmallestNum(arr));

function findTheSmallestNum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.sort()[0];
}