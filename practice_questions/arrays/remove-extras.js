function removeExtras(arr) {
    return [...new Set(arr)];
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = removeExtras(arr);
console.log(newArr);