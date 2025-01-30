const arr = [45, 34, 87, 89, 13, 24, 11, 56];
console.log(findSecondLargestSmallest(arr));

function findSecondLargestSmallest(arr) {
    if(arr.length === 0) {
        return 0;
    }
    const sortedArr = arr.sort();
    const secondSmallest = sortedArr[1];
    const secondLargest = sortedArr[arr.length - 2];
    return {secondSmallest , secondLargest};
}
