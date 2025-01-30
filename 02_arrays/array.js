//prefered way
const arr = [1, 2, 3, 4, 5, 6];
const fruits = ["apple", "banana", "coconut"];
//not prefered way
const arr1 = new Array(1, 2, 3, 4, 5, 6);
//length of array
console.log(arr.length);
//adding elements
arr.push(7); //adds to the end
arr.unshift(0);//adds to the beginning
console.log(arr);
//deleting elements
arr.pop();//removes from the end
arr.shift();//removes from the beginning
console.log(arr);
//iterating array
fruits.forEach((fruits, i)=> console.log(fruits+ "is in: "+ i + " index"));
//finding index
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("pinaapple")); // it will print -1
//checking if it is in the array or not
console.log(fruits.includes("apple"));
//removing spesific elements
fruits.splice(1, 2); //from index 1 remove 2 elements
console.log(fruits);
const sliced = fruits.slice(1, 2); //from index 1 to 2
console.log(sliced);
//sorting reversing
const arr2 = [5, 2, 7, 1, 9, 4];
console.log(arr2.sort());
console.log(arr2.reverse());
// converting array to string
const names = ["Soumya", "Sourav", "Sourabh"];
console.log(names.join(", "));
const str = "Soumya Sourav Sourabh";
console.log(str.split(" "));
// map filter reduce
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num=> num*2);
console.log(doubled);
const even = numbers.filter(num=> num%2 === 0);
console.log(even);
//reduce
const sum = numbers.reduce((accumulator, currentValue, index, arr)=> accumulator + currentValue, 0); //it returns a final sum of numbers array
console.log(sum);
