function rearrangeArray(arr) {
    const sortedArr = arr.sort();
    let firstHalf = sortedArr.slice(0, Math.floor(sortedArr.length / 2));
    let secondHalf = sortedArr.slice(Math.floor(sortedArr.length / 2), sortedArr.length).reverse();
    return [...firstHalf, ...secondHalf];
}
const arr = [8, 7, 1, 6, 5, 9];
//[1, 2, 3, 4, 5, 6]
console.log(rearrangeArray(arr));
