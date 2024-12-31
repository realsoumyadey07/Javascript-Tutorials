// Javascript object methods
const myObj = {};
const myObj2 = {
     name: "Soumya dey",
     age: 22,
     nationality: "Indian"
}
// assing properties of the object to a new object
Object.assign(myObj, myObj2);
// creates an object from an existing object
const myObj3 = Object.create(myObj2);
myObj3.name = "Ishan Dey";

console.log(myObj);