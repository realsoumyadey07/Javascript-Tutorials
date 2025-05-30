//Set
const set = new Set();
//adding set
set.add(1);
set.add(2);
set.add(3);
//has the value
console.log(set.has(1));
//size of set
console.log(set.size);
//converting into array
const arr = Array.from(set);
//iterating set
set.forEach(value=> {
    console.log(value);
});
for(let i of set) {
    console.log(i);
}

const fruits = new Set(["coconut", "apple", "banana"]);
//deleting a value
fruits.delete("apple");
//printing them
fruits.forEach(i=> {
    console.log(i);
})

// Map
const myMap = new Map([["name", "soumya"], ["age", 23]])
console.log(myMap);
myMap.set("national", "Indian");
console.log(myMap.get("name"));

