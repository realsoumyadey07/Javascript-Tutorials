function rotateArrayByIndex(arr, k) {
    const splicedArr = arr.splice(0, k);
    return [...arr, ...splicedArr];
}
const arr = [1, 2, 3, 4, 5, 6];
const k = 2;
console.log(rotateArrayByIndex(arr, k));
